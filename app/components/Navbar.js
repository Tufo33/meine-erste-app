export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex items-center justify-between">
    <h1 className="text-xl font-bold">📦 RouteTracker</h1>
      <div className="flex gap-6">
        <a href="/" className="text-blue-200">Dashboard</a>
        <a href="/" className="text-blue-200">Pakete</a>
        <a href="/" className="text-blue-200">Routen</a>
      </div>
    </nav>
  );
}