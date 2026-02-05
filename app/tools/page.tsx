"use client";
import { useState } from "react";

export default function Tools() {
  const [total, setTotal] = useState("");
  const [attended, setAttended] = useState("");

  const percentage =
    total && attended
      ? ((Number(attended) / Number(total)) * 100).toFixed(2)
      : "--";

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Student Tools</h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">
          Attendance Calculator
        </h3>

        <input
          type="number"
          placeholder="Total Classes"
          className="border p-2 w-full mb-2"
          onChange={(e) => setTotal(e.target.value)}
        />

        <input
          type="number"
          placeholder="Attended Classes"
          className="border p-2 w-full mb-2"
          onChange={(e) => setAttended(e.target.value)}
        />

        <p className="font-semibold">
          Attendance: {percentage}%
        </p>
      </div>
    </div>
  );
}
