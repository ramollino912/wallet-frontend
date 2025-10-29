import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      const res = await fetch('https://wallet-simulator.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        setMensaje('✅ Inicio de sesión exitoso');
        setTimeout(() => router.push('/'), 1200);
      } else {
        setError(data.error || 'Credenciales incorrectas');
      }
    } catch (err) {
      console.error(err);
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 to-white px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-200 text-center">
        <div className="flex flex-col items-center mb-6">
          <img src="/icons/logo.png" alt="Wallet Simulator" className="w-20 h-20 mb-3" />
          <h1 className="text-2xl font-bold text-gray-800">Iniciar Sesión</h1>
          <p className="text-gray-500 text-sm mt-1">Accedé a tu cuenta Wallet Simulator</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@email.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 rounded-lg transition"
          >
            Iniciar sesión
          </button>

          <p
            onClick={() => router.push('/recuperar')}
            className="text-sky-600 hover:underline text-sm text-center cursor-pointer mt-3"
          >
            ¿Olvidaste tu contraseña?
          </p>
        </form>

        {mensaje && <p className="text-green-600 mt-4 font-semibold">{mensaje}</p>}
        {error && <p className="text-red-600 mt-4 font-semibold">{error}</p>}
      </div>
    </main>
  );
}
