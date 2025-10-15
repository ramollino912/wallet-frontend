import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CargarSube() {
  const router = useRouter();
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [procesando, setProcesando] = useState(false);

  const montos = [10000, 8000, 7000, 6000, 5000, 4000];

  const handlePagar = async () => {
    setError('');
    setMensaje('');
    setProcesando(true);

    try {
      const token = localStorage.getItem('token') || '1234';

      const res = await fetch('https://wallet-simulator.onrender.com/api/recharge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: parseFloat(monto) }),
      });

      const data = await res.json();
      if (res.ok) {
        setMensaje(`✅ Cargaste $${Number(monto).toLocaleString('es-AR')} a tu SUBE`);
        setMonto('');
      } else {
        setError(data.error || 'Error al cargar SUBE');
      }
    } catch (err) {
      console.error(err);
      setError('Error al conectar con el servidor');
    }

    setProcesando(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center mb-6">
        <button onClick={() => router.push('/')} className="text-3xl">←</button>
        <h1 className="text-xl font-bold text-blue-600">Cargar SUBE</h1>
        <button className="text-blue-400 text-2xl">?</button>
      </header>

      <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img src="/sube.png" alt="SUBE" className="w-12 h-12 mr-2" />
          <span className="text-gray-700 font-semibold">6061 4557 9876 4321</span>
        </div>

        <h2 className="text-center font-bold text-lg text-gray-700 mb-4">
          ¿Cuánto querés cargar?
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {montos.map((m) => (
            <button
              key={m}
              onClick={() => setMonto(m)}
              className={`p-3 rounded-xl text-lg font-semibold border ${
                monto === m
                  ? 'bg-blue-500 text-white border-blue-600'
                  : 'bg-blue-100 text-gray-700 hover:bg-blue-200'
              }`}
            >
              ${m.toLocaleString('es-AR')}
            </button>
          ))}
        </div>

        {monto && (
          <button
            onClick={handlePagar}
            disabled={procesando}
            className={`w-full py-3 rounded-xl font-bold text-white transition ${
              procesando ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {procesando ? 'Procesando...' : 'Pagar'}
          </button>
        )}

        {mensaje && <p className="text-green-600 text-center mt-4">{mensaje}</p>}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </div>
    </main>
  );
}
