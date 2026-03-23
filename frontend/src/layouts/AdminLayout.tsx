import { Outlet, Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

export function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
        <div className="p-4 bg-gray-950 font-bold text-lg tracking-wider border-b border-gray-800">
          U-Report Admin
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to={PATHS.ADMIN.DASHBOARD} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Dashboard</Link>
          <Link to={PATHS.ADMIN.ARTICLES} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Articles</Link>
          <Link to={PATHS.ADMIN.EVENTS} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Événements</Link>
          <Link to={PATHS.ADMIN.INSCRIPTIONS} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Inscriptions</Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link to={PATHS.PUBLIC.HOME} className="block w-full text-center px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">Retour au site</Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Tableau de bord</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Admin connecté</span>
            <button className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 transition">Déconnexion</button>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
