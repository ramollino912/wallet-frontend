import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [saldo, setSaldo] = useState(null);
  const [error, setError] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('https://wallet-simulator.onrender.com/api/balance', {
      headers: { Authorization: `Bearer 1234` } // Reemplazá con tu token real
    })
      .then(res => {
        if (!res.ok) throw new Error('Error de conexión');
        return res.json();
      })
      .then(data => setSaldo(data.balance))
      .catch(() => setError('No se pudo cargar saldo'));
  }, []);

  const actions = [
<<<<<<< Updated upstream
    { label: 'Transferir', icon: '/icons/transferir.png', action: () => router.push('/transfer') },
    { label: 'Ingresar', icon: '/icons/ingresar.png' },
    { label: 'Cargar SUBE', icon: '/icons/sube.png', badge: 'SUBE' },
    { label: 'Movimientos', icon: '/icons/movimientos.png' },
    { label: 'Pagar impuestos', icon: '/icons/impuestos.png' },
    { label: 'Recargar datos', icon: '/icons/recarga.png' },
  ];

  const menu = [
    { label: 'Inicio', icon: '/icons/home.png' },
    { label: 'Transferir', icon: '/icons/transferir.png', action: () => router.push('/transfer') },
    { label: 'Ingresar', icon: '/icons/ingresar.png' },
    { label: 'Cargar SUBE', icon: '/icons/sube.png' },
    { label: 'Notificaciones', icon: '/icons/notificaciones.png' },
    { label: 'Perfil', icon: '/icons/perfil.png' },
=======
    { label: 'Transferir', icon: '/icons/transferir.svg', action: () => router.push('/transferir') },
    { label: 'Ingresar', icon: '/icons/ingresar.svg' },
    { label: 'Cargar SUBE', icon: '/icons/sube.svg', badge: 'SUBE' },
    { label: 'Movimientos', icon: '/icons/movimientos.svg' },
    { label: 'Pagar impuestos', icon: '/icons/impuestos.svg' },
    { label: 'Recargar datos', icon: '/icons/recarga.svg' },
  ];

  const menu = [
    { label: 'Inicio', icon: '/icons/home.svg' },
    { label: 'Transferir', icon: '/icons/transferir.svg', action: () => router.push('/transferir') },
    { label: 'Ingresar', icon: '/icons/ingresar.svg' },
    // ...
>>>>>>> Stashed changes
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r p-4">
        <nav className="space-y-2">
          {menu.map((item, i) => (
            <button
              key={i}
              onClick={item.action}
<<<<<<< Updated upstream
              className="flex items-center p-2 hover:bg-gray-100 rounded w-full text-left"
=======
              className="flex items-center p-2 hover:bg-gray-100 rounded"
>>>>>>> Stashed changes
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar for mobile */}
        <header className="bg-white p-4 lg:hidden flex items-center justify-between shadow">
          <button onClick={() => setMobileOpen(true)}>☰</button>
          <div className="flex space-x-3">
<<<<<<< Updated upstream
            <img src="/icons/notificaciones.png" alt="Notificaciones" className="w-5 h-5" />
            <img src="/icons/perfil.png" alt="Perfil" className="w-5 h-5" />
=======
            <img src="/icons/notificaciones.svg" alt="Notificaciones" className="w-5 h-5" />
            <img src="/icons/perfil.svg" alt="Perfil" className="w-5 h-5" />
>>>>>>> Stashed changes
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Dinero disponible</h1>
          <div className="bg-white p-6 rounded-lg shadow mb-8 flex justify-between items-center">
            <p className="text-4xl font-bold">
              {saldo !== null
                ? `$${saldo}`
                : error
                ? error
                : 'Cargando...'}
            </p>
<<<<<<< Updated upstream
            <img src="/icons/movimientos.png" alt="Grafico" className="w-10 h-10 opacity-40" />
=======
>>>>>>> Stashed changes
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {actions.map((act, i) => (
              <button
                key={i}
                onClick={act.action}
<<<<<<< Updated upstream
                className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition-all text-left relative"
=======
                className={`relative ${act.bgColor || 'bg-blue-200'} p-4 rounded-lg flex flex-col items-start hover:shadow-lg`}
>>>>>>> Stashed changes
              >
                <img src={act.icon} alt={act.label} className="w-8 h-8 mb-2" />
                <span className="font-semibold">{act.label}</span>
                {act.badge && (
<<<<<<< Updated upstream
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
=======
                  <span className="absolute top-2 right-2 bg-white p-1 text-xs rounded">
>>>>>>> Stashed changes
                    {act.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
