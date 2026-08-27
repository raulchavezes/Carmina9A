import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Wifi } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import WiFiModal from "@/components/WiFiModal";

export default function Index() {
  const [isWiFiModalOpen, setIsWiFiModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            left: '-10%',
            top: '10%',
            background: 'linear-gradient(180deg, #FF9F39 0%, rgba(178, 178, 245, 0.52) 100%)',
            filter: 'blur(100px)',
            opacity: 0.9
          }}
        />
        <div
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            right: '-15%',
            top: '15%',
            background: 'linear-gradient(135deg, rgba(156, 57, 255, 0.6) 0%, rgba(34, 34, 108, 0.52) 100%)',
            filter: 'blur(100px)',
            opacity: 0.9
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-7 py-12 min-h-screen">
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-md pt-32 pb-16">
          <div className="space-y-2">
            <h1
              className="text-[32px] font-normal leading-normal"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Hello Floren
            </h1>
            <p
              className="text-2xl font-light tracking-[0.06em] leading-normal"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              welcome home
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-md space-y-8 pb-16">
          {/* WiFi Icon */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsWiFiModalOpen(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="View WiFi details"
            >
              <Wifi className="w-8 h-8 text-black" />
            </button>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 px-16 flex-wrap">
            <MapPin className="w-6 h-6 text-black flex-shrink-0" />
            <a
              href="https://maps.google.com/?q=Carmina+Selva+Viva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-normal text-center tracking-[0.06em] underline decoration-from-font whitespace-nowrap"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Carmina Selva Viva
            </a>
          </div>

          {/* Apartment Info */}
          <div className="text-center space-y-1">
            <p
              className="text-xl font-light tracking-[0.06em]"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Departamento 9A
            </p>
            <Link
              to="/access"
              className="block text-base font-normal italic tracking-[0.06em] underline decoration-from-font"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              <p>¿cómo entrar?</p>
            </Link>
          </div>
        </div>

        {/* Home Indicator (iOS style) */}
        <div className="fixed bottom-3 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <div className="w-32 h-1 bg-black rounded-full opacity-30" />
        </div>
      </div>

      {/* WiFi Modal */}
      <WiFiModal 
        isOpen={isWiFiModalOpen} 
        onClose={() => setIsWiFiModalOpen(false)} 
      />
    </div>
  );
}
