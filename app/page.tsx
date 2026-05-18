"use client";

import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Link from "next/link";

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

export default function Home() {
  const letzteAktivitaeten = pakete.slice(-3).reverse();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">

        {/* Begrüßung */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Guten Morgen, Briefträger! 👋</h2>
          <p className="text-gray-500 mt-1">Hier ist deine Übersicht für heute.</p>
        </div>

        {/* Stats */}
        <Stats pakete={pakete} />

        {/* Letzte Aktivitäten */}
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Letzte Aktivitäten</h3>
            <Link href="/pakete" className="text-blue-600 text-sm hover:underline">
              Alle anzeigen →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {letzteAktivitaeten.map((paket) => (
              <div key={paket.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-800">Paket #{paket.id}</p>
                  <p className="text-sm text-gray-500">{paket.empfaenger}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{paket.zeit}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusFarbe[paket.status]}`}>
                    {statusEmoji[paket.status]} {paket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schnellzugriff */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/pakete">
            <div className="bg-blue-600 text-white rounded-xl shadow p-6 hover:bg-blue-700 cursor-pointer">
              <p className="text-2xl mb-2">📦</p>
              <h3 className="text-lg font-bold">Alle Pakete</h3>
              <p className="text-blue-200 text-sm mt-1">Liste anzeigen und filtern</p>
            </div>
          </Link>
          <Link href="/routen">
            <div className="bg-white rounded-xl shadow p-6 hover:bg-gray-50 cursor-pointer">
              <p className="text-2xl mb-2">🗺️</p>
              <h3 className="text-lg font-bold text-gray-800">Routen</h3>
              <p className="text-gray-500 text-sm mt-1">Tagesroute einsehen</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}