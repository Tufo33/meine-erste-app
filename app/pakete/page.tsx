"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

type Status = "Zugestellt" | "Unterwegs" | "Ausstehend";

const pakete = [
    { id: 1240, empfaenger: "Hans Becker", status: "Ausstehend" as Status, zeit: "13:30" },
  { id: 1234, empfaenger: "Max Mustermann", status: "Zugestellt" as Status, zeit: "08:15" },
  { id: 1235, empfaenger: "Anna Schmidt", status: "Unterwegs" as Status, zeit: "09:30" },
  { id: 1230, empfaenger: "Tom Weber", status: "Ausstehend" as Status, zeit: "10:00" },
  { id: 1232, empfaenger: "Lisa Müller", status: "Zugestellt" as Status, zeit: "11:20" },
  { id: 1238, empfaenger: "Karl Fischer", status: "Unterwegs" as Status, zeit: "12:45" },
];

const statusFarbe: Record<Status, string> = {
  Zugestellt: "bg-green-100 text-green-700",
  Unterwegs: "bg-yellow-100 text-yellow-700",
  Ausstehend: "bg-red-100 text-red-700",
};

const statusEmoji: Record<Status, string> = {
  Zugestellt: "✅",
  Unterwegs: "🚚",
  Ausstehend: "⏳",
};

export default function PaketePage() {
  const [filter, setFilter] = useState("Alle");
  const [sortiert, setSortiert] = useState(false);
  const [sortiertNachId, setSortiertNachId] = useState(false);

  const angezeigtePackete = (
    filter === "Alle" ? pakete : pakete.filter((p) => p.status === filter)
  )
    .slice()
    .sort((a, b) => {
      if (sortiertNachId) return a.id - b.id;
      if (sortiert) return a.status.localeCompare(b.status);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Alle Pakete</h2>
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
          <button
            onClick={() => setSortiert(!sortiert)}
            className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 shadow"
          >
            {sortiert ? "🔼 Sortiert" : "Sortieren"}
          </button>
          <button
            onClick={() => setSortiertNachId(!sortiertNachId)}
            className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 shadow"
          >
            {sortiertNachId ? "🔼 SortiertID" : "SortierenID"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {angezeigtePackete.map((paket) => (
            <div key={paket.id} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-800">Paket #{paket.id}</h2>
              <p className="text-gray-500 mt-1">Empfänger: {paket.empfaenger}</p>
              <p className="text-gray-400 text-sm mt-1">🕐 {paket.zeit}</p>
              <span className={`mt-3 inline-block px-3 py-1 rounded-full text-sm font-medium ${statusFarbe[paket.status]}`}>
                {statusEmoji[paket.status]} {paket.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}