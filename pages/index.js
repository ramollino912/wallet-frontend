// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-400 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full relative border border-black">
        {/* Encabezado */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white border border-black rounded-full flex items-center justify-center text-xl font-bold">S</div>
            <img src="/wallet-icon.png" alt="Logo billetera" className="w-10 h-10" />
            <div>
              <p className="text-lg font-medium">Disponible</p>
              <p className="text-4xl font-bold">$1000</p>
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <a href="#" className="text-sky-600 font-medium">Ir a movimiento</a>
            <img src="/bell-icon.png" alt="Notificaciones" className="w-6 h-6" />
            <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-lg">?</div>
          </div>
        </div>

        {/* Botones */}
        <div className="grid grid-cols-3 gap-4 text-center mt-4">
          <Boton icono="/ingresar.png" texto="Ingresar" />
          <Boton icono="/transferir.png" texto="Trasferir" onClick={() => router.push("/transferir")} />
          <Boton icono="/sube.png" texto="Cargar sube" />
          <Boton icono="/impuestos.png" texto="Pagar impuestos" />
          <Boton icono="/celular.png" texto="Cargar celular" />
        </div>
      </div>
    </main>
  );
}

function Boton({ icono, texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-gradient-to-b from-sky-200 to-sky-300 rounded-full w-24 h-24 mx-auto shadow-md hover:scale-105 transition"
    >
      <img src={icono} alt={texto} className="w-10 h-10 mb-2" />
      <span className="text-xs font-semibold text-sky-900">{texto}</span>
    </button>
  );
}
