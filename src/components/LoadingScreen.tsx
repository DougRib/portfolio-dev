import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

const LoadingScreen: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Dark Horizon Glow Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      
      {/* Loading Animation */}
      <div className="hole relative z-10">
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
        <i style={{ border: '2px solid #3b82f6' }}></i>
      </div>
      
      {/* Loading Text */}
      <div className="absolute bottom-32 text-cyan-400 text-lg font-medium">
        {t("misc.loading")}
      </div>
    </div>
  );
};

export default LoadingScreen;

