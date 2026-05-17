"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Paket #1234
        </h2>
        <p className="text-gray-500 mb-4">
          Empfänger: Max Mustermann
        </p>
        <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
        🚚 Unterwegs
        </div>
      </div>
    </div>
  )
}