"use client";

import Navbar from "../components/Navbar";

type RoutenStatus = "Abgeschlossen" | "In Bearbeitung" | "Ausstehend";

const routen = [
  { id: 1, name: "Route A", strassen: ["Hauptstraße", "Bahnhofstraße", "Gartenweg"], pakete: 12, status: "Abgeschlossen" as RoutenStatus },
  { id: 2, name: "Route B", strassen: ["Lindenstraße", "Rosenweg", "Kirchgasse"], pakete: 8, status: "In Bearbeitung" as RoutenStatus },
  { id: 3, name: "Route C", strassen: ["Schulstraße", "Bergweg", "Wiesenweg"], pakete: 15, status: "Ausstehend" as RoutenStatus },
  { id: 4, name: "Route D", strassen: ["Marktplatz", "Rathausgasse", "Poststraße"], pakete: 6, status: "Ausstehend" as RoutenStatus },
];

const statusFarbe: Record<RoutenStatus, string> = {
  Abgeschlossen: "bg-green-100 text-green-700",
  "In Bearbeitung": "bg-yellow-100 text-yellow-700",
  Ausstehend: "bg-red-100 text-red-700",
};

const statusEmoji: Record<RoutenStatus, string> = {
  Abgeschlossen: "✅",
  "In Bearbeitung": "🚚",
  Ausstehend: "⏳",
};

export default function RoutenPage() {
  const gesamtPakete = routen.reduce((sum, r) => sum + r.pakete, 0);
  const abgeschlossen = routen.filter((r) => r.status === "Abgeschlossen").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">🗺️ Tagesrouten</h2>
          <p className="text-gray-500 mt-1">Übersicht aller Routen für heute.</p>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-gray-800">{routen.length}</p>
            <p className="text-gray-500 text-sm">🗺️ Routen gesamt</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{abgeschlossen}</p>
            <p className="text-gray-500 text-sm">✅ Abgeschlossen</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-red-600">{routen.length - abgeschlossen}</p>
            <p className="text-gray-500 text-sm">⏳ Ausstehend</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{gesamtPakete}</p>
            <p className="text-gray-500 text-sm">📦 Pakete gesamt</p>
          </div>
        </div>

        {/* Routen Liste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {routen.map((route) => (
            <div key={route.id} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">{route.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusFarbe[route.status]}`}>
                  {statusEmoji[route.status]} {route.status}
               </span>
              </div>
              <p className="text-gray-500 text-sm mb-3">📦 {route.pakete} Pakete</p>
              <div className="flex flex-wrap gap-2">
                {route.strassen.map((strasse) => (
                  <span key={strasse} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {strasse}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}