import { X } from "lucide-react";

interface VehicleAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VehicleAccessModal({ isOpen, onClose }: VehicleAccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center md:items-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-sm mx-4 mt-12 md:mb-4 bg-white rounded-xl shadow-2xl animate-in slide-in-from-top md:slide-in-from-bottom duration-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-xl p-4 border-b border-gray-200 flex items-start justify-between z-10">
          <h2
            className="text-[28px] font-bold leading-tight tracking-[-0.02em]"
            style={{ fontFamily: 'Merriweather, serif', color: '#212530' }}
          >
            Acceso en carro
          </h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 -mt-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="p-4 overflow-y-auto">
          <div className="space-y-4">

            <div className="space-y-3 text-xs tracking-[-0.02em] text-left"
              style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}>
              <p>
                El edificio cuenta con estacionamiento de visitas fuera del edificio. Tendrás que estacionar primeramente en el estacionamiento de visitas para acceder al departamento.
              </p>
              <p>
                Una vez en el departamento podrás encontrar el control de acceso vehicular, éste control abre el portón de acceso de los carros.
              </p>
              <p>
                Una vez con el control puedes acceder al estacionamiento - el lugar designado es el A9 - el primer espacio a la derecha una vez que entras al estacionamiento:
              </p>
            </div>

            <div className="border-t border-gray-200 my-4" />

            <div className="rounded-lg overflow-hidden w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e6b85d030c74f6387398b4b4e289006%2Fca862888e89c43caabe9d80f8aa4e519?format=webp&width=800&height=1200"
                alt="Parking space A9"
                className="w-full object-cover"
                style={{ height: '300px' }}
              />
            </div>

            <div className="border-t border-gray-200 my-4" />

            <div className="space-y-3 text-xs tracking-[-0.02em] text-left"
              style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}>
              <p>
                Cuando salgas por favor asegurarte de dejar el control de acceso en el departamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
