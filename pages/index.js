import { useEffect, useState } from 'react';

export default function Home() {
  const [saldo, setSaldo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Hacemos fetch al backend con token de autenticación
    fetch('https://wallet-simulator.onrender.com/api/balance', {
      headers: {
        'Authorization': 'Bearer 1234' // ⬅️ REEMPLAZÁ ESTO SI TENÉS OTRO TOKEN
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con el servidor');
        return res.json();
      })
      .then((data) => setSaldo(data.balance))
      .catch((err) => {
        console.error(err);
        setError('No se pudo cargar el saldo');
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-400 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full relative border border-black">
        <h1 className="text-2xl font-bold mb-4">Bienvenido a tu Billetera</h1>

        <div className="mb-4">
          <p className="text-lg">Saldo disponible:</p>
          {saldo !== null ? (
            <p className="text-4xl font-bold text-green-600">${saldo}</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-gray-500">Cargando...</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Boton icono="/ingresar.png" texto="Ingresar" />
          <Boton icono="/transferir.png" texto="Transferir" />
          <Boton icono="/sube.png" texto="Cargar SUBE" />
        </div>
      </div>
    </main>
  );
}

function Boton({ icono, texto }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-sky-200 to-sky-300 rounded-full w-24 h-24 mx-auto shadow-md hover:scale-105 transition">
      <img src={icono} alt={texto} className="w-10 h-10 mb-1" />
      <span className="text-xs font-semibold text-sky-900">{texto}</span>
    </div>
  );
}
