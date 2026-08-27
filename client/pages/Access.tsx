import { useState } from "react";
import { Link } from "react-router-dom";
import GradientBackground from "@/components/GradientBackground";
import VehicleAccessModal from "@/components/VehicleAccessModal";

type TabType = "main-gate" | "apartment";

export default function Access() {
  const [activeTab, setActiveTab] = useState<TabType>("main-gate");
  const [isVehicleAccessModalOpen, setIsVehicleAccessModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Gradient Background with reduced opacity */}
      <div className="opacity-30">
        <GradientBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-7 pt-6 pb-4">
          <Link
            to="/"
            className="inline-block text-base font-normal italic tracking-[0.06em] underline decoration-from-font"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            back
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 px-4 md:px-14 py-4">
          <button
            onClick={() => setActiveTab("main-gate")}
            className={`text-lg md:text-2xl font-light tracking-[0.06em] transition-all whitespace-nowrap pb-1 ${
              activeTab === "main-gate"
                ? "border-b-[3px] border-black text-black"
                : "border-b-[3px] border-transparent text-gray-400 hover:text-gray-600"
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            edificio
          </button>
          <button
            onClick={() => setActiveTab("apartment")}
            className={`text-lg md:text-2xl font-light tracking-[0.06em] transition-all whitespace-nowrap pb-1 ${
              activeTab === "apartment"
                ? "border-b-[3px] border-black text-black"
                : "border-b-[3px] border-transparent text-gray-400 hover:text-gray-600"
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            departamento
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-4 md:px-8 pb-24 overflow-y-auto w-full flex justify-center">
          {activeTab === "main-gate" ? (
            <MainGateContent
              onVehicleAccessClick={() => setIsVehicleAccessModalOpen(true)}
            />
          ) : (
            <ApartmentContent />
          )}
        </div>

        {/* Home Indicator */}
        <div className="fixed bottom-3 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <div className="w-32 h-1 bg-black rounded-full opacity-30" />
        </div>
      </div>

      {/* Vehicle Access Modal */}
      <VehicleAccessModal
        isOpen={isVehicleAccessModalOpen}
        onClose={() => setIsVehicleAccessModalOpen(false)}
      />
    </div>
  );
}

function MainGateContent({ onVehicleAccessClick }: { onVehicleAccessClick: () => void }) {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-3">
        <h2
          className="text-lg font-normal tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Merriweather, serif', color: '#212530' }}
        >
          ¿Cómo acceder al edificio?
        </h2>
        <button
          onClick={onVehicleAccessClick}
          className="block text-base font-normal italic tracking-[0.06em] underline decoration-from-font cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Merriweather, serif', color: '#212530', background: 'none', border: 'none', padding: 0, margin: 0 }}
        >
          parking
        </button>
        <p
          className="text-xl font-light tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          <span>
            <span>
              <span>Código</span>
              <span>
                <strong>: </strong>
                <span>
                  <strong>
            <u>1126</u>
          </strong>
                </span>
              </span>
            </span>
          </span>
        </p>
      </div>

      <div className="space-y-6">
        {/* Video */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden w-full max-w-xs">
            <video
              src="https://cdn.builder.io/o/assets%2F4e6b85d030c74f6387398b4b4e289006%2Faed09d53dda34ecda8052779d50cb92a?alt=media&token=35b20b38-3108-4dab-bb5c-acb8e83809dc&apiKey=4e6b85d030c74f6387398b4b4e289006"
              loop
              muted
              controls
              className="w-full h-auto max-h-56 object-cover bg-black"
            />
          </div>
        </div>

        {/* Instructions */}
        <div
          className="text-xs font-normal leading-[125.5%] tracking-[-0.02em] text-left space-y-3"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          <p>
            Encuentra el control de acceso e introduce el código. La puerta debería abrirse automáticamente con el código 1126.
          </p>
          <p>
            En caso inusual que el acceso electrónico no esté funcionando, hay una caja con clave manual que tiene una llave guardada. La clave de la caja es 4233.
          </p>
          <p>
            Si es necesario usar la llave, favor de dejarla nuevamente en la caja y cerrarla.
          </p>
        </div>
      </div>
    </div>
  );
}

function ApartmentContent() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-3">
        <h2
          className="text-lg font-normal tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Merriweather, serif', color: '#212530' }}
        >
          ¿Cómo acceder al departamento 9A?
        </h2>
        <p
          className="text-xl font-light tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Código:{" "}
          <strong>
            <u>2908</u>
          </strong>
        </p>
      </div>

      <div className="space-y-6">
        {/* Video */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden w-full max-w-xs">
            <video
              src="https://cdn.builder.io/o/assets%2F4e6b85d030c74f6387398b4b4e289006%2F978fa66f33824aa1af31113989b0e6f8?alt=media&token=a15d6393-0ede-4c9c-8f1c-e1e83451556f&apiKey=4e6b85d030c74f6387398b4b4e289006"
              loop
              muted
              controls
              className="w-full h-auto max-h-56 object-cover bg-black"
            />
          </div>
        </div>

        {/* Instructions */}
        <div
          className="text-xs font-normal leading-[125.5%] tracking-[-0.02em] text-left space-y-3"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          <p>
            Encuentra el departamento 9A en el 3er piso piso. Una vez que subas las escaleras son los departamentos de la izquierda (fila más cercana a la calle)
          </p>
          <p>
            Es el 3er departamento que tiene una cerradura Yale / Nest para el control de acceso.
          </p>
          <p>
            Da un toque en el logo de Yale para activar el teclado, ingresa el código y presiona la "palomita" en la esquina inferior derecha para abrir la puerta ✔️
          </p>
          <p>
            La puerta se cerrará automáticamente después de 10 segundos. Puedes cerrarla manualmente si fuese necesario.
          </p>
        </div>
      </div>
    </div>
  );
}
