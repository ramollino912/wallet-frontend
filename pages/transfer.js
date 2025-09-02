// pages/transfer.js
import { useState } from 'react';

export default function TransferPage() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleTransfer = async () => {
    setMensaje('');
    setError('');

    try {
      const token = localStorage.getItem('token'); // ⚡ en el futuro vendrá del login

      const res = await fetch('https://wallet-simulator.onrender.com/api/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || '1234'}`, // ⚠️ cambiá esto cuando tengas login real
        },
        body: JSON.stringify({
          to: parseInt(to),      // id del receptor
          amount: parseFloat(amount), // monto
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje(`✅ Transferencia exitosa: $${amount} enviada a ID ${to}`);
        setTo('');
        setAmount('');
      } else {
        setError(data.error || 'Error al transferir');
      }
    } catch (err) {
      console.error(err);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-300 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center">Transferir Dinero</h1>

        <div className="mb-3">
          <label className="block font-semibold mb-1">ID del receptor</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Monto a transferir</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={handleTransfer}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Enviar
        </button>

        {mensaje && <p className="text-green-600 mt-3">{mensaje}</p>}
        {error && <p className="text-red-600 mt-3">{error}</p>}
      </div>
    </main>
  );
}
