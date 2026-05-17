"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

const pakete = [
  { id: "1234", empfaenger: "Max Mustermann", status: "Zugestellt" },
  { id: "1235", empfaenger: "Anna Schmidt", status: "Unterwegs" },
  { id: "1236", empfaenger: "Tom Weber", status: "Ausstehend" },
  { id: "1237", empfaenger: "Lisa Müller", status: "Zugestellt" },
  { id: "1238", empfaenger: "Karl Fischer", status: "Unterwegs" },
];

const statusFarbe = {
  Zugestellt: "bg-green-100 text-green-700",
  Unterwegs: "bg-yellow-100 text-yellow-700",
  Ausstehend: "bg-red-100 text-red-700",
};

const statusEmoji = {
  Zugestellt: "✅",
  Unterwegs: "🚚",
  Ausstehend: "⏳",
};

export default function Home() {
  const [filter, setFilter] = useState("Alle");

  const gefiltertePakete = filter === "Alle"
    ? pakete
    : pakete.filter(p => p.status === filter);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <Stats pakete={pakete} />
        <div className="flex gap-3 mb-6">
          {["Alle", "Zugestellt", "Unterwegs", "Ausstehend"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 shadow"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gefiltertePakete.map((paket) => (
            <div key={paket.id} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-800">
                Paket #{paket.id}
              </h2>
              <p className="text-gray-500 mt-1">
                Empfänger: {paket.empfaenger}
              </p>
              <span className={`mt-3 inline-block px-3 py-1 rounded-full text-sm font-medium ${statusFarbe[paket.status]}`}>
                {statusEmoji[paket.status]} {paket.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}