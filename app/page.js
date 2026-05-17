"use client";

const pakete = [
  { id: "1234", empfaenger: "Max Mustermann", status: "Zugestellt" },
  { id: "1235", empfaenger: "Anna Schmidt", status: "Unterwegs" },
  { id: "1236", empfaenger: "Tom Weber", status: "Ausstehend" },
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
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        📦 Meine Pakete
      </h1>
      <div className="flex flex-col gap-4">
        {pakete.map((paket) => (
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
  )
}