export default function Stats({ pakete }) {
    const gesamt = pakete.length;
    const zugestellt = pakete.filter(p => p.status === "Zugestellt").length;
    const unterwegs = pakete.filter(p => p.status === "Unterwegs").length;
    const ausstehend = pakete.filter(p => p.status === "Ausstehend").length;
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-3xl font-bold text-gray-800">{gesamt}</p>
          <p className="text-gray-500 text-sm">📦 Gesamt</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-3xl font-bold text-green-600">{zugestellt}</p>
          <p className="text-gray-500 text-sm">✅ Zugestellt</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-3xl font-bold text-yellow-600">{unterwegs}</p>
          <p className="text-gray-500 text-sm">🚚 Unterwegs</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-3xl font-bold text-red-600">{ausstehend}</p>
          <p className="text-gray-500 text-sm">⏳ Ausstehend</p>
        </div>
      </div>
    )
  }