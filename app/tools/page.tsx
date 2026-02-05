"use client";

import { useMemo, useState } from "react";

const toNumber = (value: string) => (value === "" ? undefined : Number(value));

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const maskFromPrefix = (prefix: number) => {
  const bits = "1".repeat(prefix).padEnd(32, "0");
  return bits.match(/.{1,8}/g)?.map((oct) => parseInt(oct, 2)) ?? [];
};

const ipToInt = (ip: string) => {
  const parts = ip.split(".").map((part) => Number(part));
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) {
    return undefined;
  }
  return parts.reduce((acc, part) => (acc << 8) + clamp(part, 0, 255), 0);
};

const intToIp = (value: number) =>
  [24, 16, 8, 0]
    .map((shift) => (value >> shift) & 255)
    .join(".");

export default function ToolsPage() {
  const [totalCredits, setTotalCredits] = useState("");
  const [totalPoints, setTotalPoints] = useState("");

  const [attendedClasses, setAttendedClasses] = useState("");
  const [totalClasses, setTotalClasses] = useState("");
  const [requiredAttendance, setRequiredAttendance] = useState("75");

  const [unitValue, setUnitValue] = useState("");
  const [unitType, setUnitType] = useState("cm-m");

  const [partValue, setPartValue] = useState("");
  const [wholeValue, setWholeValue] = useState("");
  const [percentValue, setPercentValue] = useState("");
  const [baseValue, setBaseValue] = useState("");

  const [binaryInput, setBinaryInput] = useState("");
  const [decimalInput, setDecimalInput] = useState("");

  const [ipAddress, setIpAddress] = useState("");
  const [prefixLength, setPrefixLength] = useState("24");

  const [currentCgpa, setCurrentCgpa] = useState("");
  const [creditsDone, setCreditsDone] = useState("");
  const [targetCgpa, setTargetCgpa] = useState("");
  const [creditsRemaining, setCreditsRemaining] = useState("");

  const cgpa = useMemo(() => {
    const credits = toNumber(totalCredits);
    const points = toNumber(totalPoints);
    if (!credits || !points || credits <= 0) return "--";
    return (points / credits).toFixed(2);
  }, [totalCredits, totalPoints]);

  const attendance = useMemo(() => {
    const attended = toNumber(attendedClasses);
    const total = toNumber(totalClasses);
    const required = toNumber(requiredAttendance);
    if (!attended || !total || !required || total <= 0) {
      return {
        percent: "--",
        message: "Enter attendance details to see your status.",
      };
    }
    const ratio = (attended / total) * 100;
    const req = required / 100;
    if (ratio >= required) {
      const maxMiss = Math.floor(attended / req - total);
      return {
        percent: ratio.toFixed(2),
        message: `You can miss ${Math.max(maxMiss, 0)} more classes and stay above ${required}%.`,
      };
    }
    const needed = Math.ceil((req * total - attended) / (1 - req));
    return {
      percent: ratio.toFixed(2),
      message: `Attend the next ${Math.max(needed, 0)} classes to reach ${required}%.`,
    };
  }, [attendedClasses, totalClasses, requiredAttendance]);

  const unitResult = useMemo(() => {
    const value = toNumber(unitValue);
    if (value === undefined) return "--";
    switch (unitType) {
      case "cm-m":
        return `${(value / 100).toFixed(3)} m`;
      case "m-cm":
        return `${(value * 100).toFixed(2)} cm`;
      case "m-km":
        return `${(value / 1000).toFixed(4)} km`;
      case "km-m":
        return `${(value * 1000).toFixed(2)} m`;
      case "c-f":
        return `${((value * 9) / 5 + 32).toFixed(2)} °F`;
      case "f-c":
        return `${(((value - 32) * 5) / 9).toFixed(2)} °C`;
      default:
        return "--";
    }
  }, [unitValue, unitType]);

  const percentageResult = useMemo(() => {
    const part = toNumber(partValue);
    const whole = toNumber(wholeValue);
    if (!part || !whole) return "--";
    return `${((part / whole) * 100).toFixed(2)}%`;
  }, [partValue, wholeValue]);

  const percentOfResult = useMemo(() => {
    const percent = toNumber(percentValue);
    const base = toNumber(baseValue);
    if (percent === undefined || base === undefined) return "--";
    return ((percent / 100) * base).toFixed(2);
  }, [percentValue, baseValue]);

  const binaryToDecimal = useMemo(() => {
    if (!binaryInput) return "--";
    if (!/^[01]+$/.test(binaryInput)) return "Invalid binary";
    return parseInt(binaryInput, 2).toString(10);
  }, [binaryInput]);

  const decimalToBinary = useMemo(() => {
    const value = toNumber(decimalInput);
    if (value === undefined) return "--";
    if (value < 0) return "Invalid decimal";
    return Math.floor(value).toString(2);
  }, [decimalInput]);

  const subnetInfo = useMemo(() => {
    const prefix = toNumber(prefixLength);
    const ipInt = ipToInt(ipAddress);
    if (prefix === undefined || prefix < 0 || prefix > 32 || ipInt === undefined) {
      return {
        mask: "--",
        network: "--",
        broadcast: "--",
        usable: "--",
      };
    }
    const maskParts = maskFromPrefix(prefix);
    const maskInt = maskParts.reduce((acc, part) => (acc << 8) + part, 0);
    const network = ipInt & maskInt;
    const broadcast = network | (~maskInt >>> 0);
    const usableHosts =
      prefix >= 31 ? 0 : Math.max(0, Math.pow(2, 32 - prefix) - 2);
    return {
      mask: maskParts.join("."),
      network: intToIp(network),
      broadcast: intToIp(broadcast),
      usable: usableHosts.toLocaleString(),
    };
  }, [ipAddress, prefixLength]);

  const requiredGpa = useMemo(() => {
    const current = toNumber(currentCgpa);
    const done = toNumber(creditsDone);
    const target = toNumber(targetCgpa);
    const remaining = toNumber(creditsRemaining);
    if (
      current === undefined ||
      done === undefined ||
      target === undefined ||
      remaining === undefined ||
      remaining <= 0
    ) {
      return "--";
    }
    const totalCredits = done + remaining;
    const required = (target * totalCredits - current * done) / remaining;
    return required.toFixed(2);
  }, [currentCgpa, creditsDone, targetCgpa, creditsRemaining]);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
          Student Tools
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Fast, accurate tools built for everyday academic calculations. Everything
          runs in your browser—no logins required.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            CGPA / SPI Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Enter total grade points and credits to get your current CGPA/SPI.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="number"
              placeholder="Total Grade Points"
              value={totalPoints}
              onChange={(event) => setTotalPoints(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
            <input
              type="number"
              placeholder="Total Credits"
              value={totalCredits}
              onChange={(event) => setTotalCredits(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
            CGPA / SPI: <span className="text-sky-500">{cgpa}</span>
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Attendance Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Track attendance and see how many classes you can safely miss.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <input
              type="number"
              placeholder="Attended"
              value={attendedClasses}
              onChange={(event) => setAttendedClasses(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="number"
              placeholder="Total"
              value={totalClasses}
              onChange={(event) => setTotalClasses(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="number"
              placeholder="Required %"
              value={requiredAttendance}
              onChange={(event) => setRequiredAttendance(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Current Attendance: <span className="text-sky-500">{attendance.percent}%</span>
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {attendance.message}
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Unit Converter
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Quick conversions for lab work and assignments.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="number"
              placeholder="Value"
              value={unitValue}
              onChange={(event) => setUnitValue(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <select
              value={unitType}
              onChange={(event) => setUnitType(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            >
              <option value="cm-m">Centimeter → Meter</option>
              <option value="m-cm">Meter → Centimeter</option>
              <option value="m-km">Meter → Kilometer</option>
              <option value="km-m">Kilometer → Meter</option>
              <option value="c-f">Celsius → Fahrenheit</option>
              <option value="f-c">Fahrenheit → Celsius</option>
            </select>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Result: <span className="text-sky-500">{unitResult}</span>
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Percentage Calculator
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Percentage of total
              </p>
              <input
                type="number"
                placeholder="Part"
                value={partValue}
                onChange={(event) => setPartValue(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <input
                type="number"
                placeholder="Whole"
                value={wholeValue}
                onChange={(event) => setWholeValue(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Result: <span className="text-sky-500">{percentageResult}</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Value of a percentage
              </p>
              <input
                type="number"
                placeholder="Percent"
                value={percentValue}
                onChange={(event) => setPercentValue(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <input
                type="number"
                placeholder="Base value"
                value={baseValue}
                onChange={(event) => setBaseValue(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Result: <span className="text-sky-500">{percentOfResult}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Binary ↔ Decimal Converter
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Binary to Decimal
              </p>
              <input
                type="text"
                placeholder="101010"
                value={binaryInput}
                onChange={(event) => setBinaryInput(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Result: <span className="font-semibold text-sky-500">{binaryToDecimal}</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Decimal to Binary
              </p>
              <input
                type="number"
                placeholder="42"
                value={decimalInput}
                onChange={(event) => setDecimalInput(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Result: <span className="font-semibold text-sky-500">{decimalToBinary}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Subnet Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Enter an IPv4 address and prefix to see the subnet details.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="text"
              placeholder="192.168.1.10"
              value={ipAddress}
              onChange={(event) => setIpAddress(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="number"
              placeholder="Prefix length"
              value={prefixLength}
              onChange={(event) => setPrefixLength(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <div className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            <p>
              Subnet Mask: <span className="font-semibold text-sky-500">{subnetInfo.mask}</span>
            </p>
            <p>
              Network Address:{" "}
              <span className="font-semibold text-sky-500">{subnetInfo.network}</span>
            </p>
            <p>
              Broadcast Address:{" "}
              <span className="font-semibold text-sky-500">{subnetInfo.broadcast}</span>
            </p>
            <p>
              Usable Hosts: <span className="font-semibold text-sky-500">{subnetInfo.usable}</span>
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            GPA Target Predictor
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Estimate the GPA needed in upcoming credits to hit your target.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="number"
              placeholder="Current CGPA"
              value={currentCgpa}
              onChange={(event) => setCurrentCgpa(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="number"
              placeholder="Credits Completed"
              value={creditsDone}
              onChange={(event) => setCreditsDone(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="number"
              placeholder="Target CGPA"
              value={targetCgpa}
              onChange={(event) => setTargetCgpa(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="number"
              placeholder="Credits Remaining"
              value={creditsRemaining}
              onChange={(event) => setCreditsRemaining(event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Required GPA: <span className="text-sky-500">{requiredGpa}</span>
          </p>
        </section>
      </div>
    </div>
  );
}
