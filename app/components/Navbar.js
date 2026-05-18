import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">📦 RouteTracker</h1>
      <div className="flex gap-6">
        <Link href="/" className="text-blue-200 hover:text-white">Dashboard</Link>
        <Link href="/pakete" className="text-blue-200 hover:text-white">Pakete</Link>
        <Link href="/routen" className="text-blue-200 hover:text-white">Routen</Link>
      </div>
    </nav>
  );
}