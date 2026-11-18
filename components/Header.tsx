import React from 'react';
import { ChevronLeft, Home } from 'lucide-react';

export const Header = ({
  title,
  subtitle,
  onBack,
  onHome,
  bgColorClass = "bg-white",
  textColorClass = "text-slate-800",
  rightElement
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  onHome?: () => void;
  bgColorClass?: string;
  textColorClass?: string;
  rightElement?: React.ReactNode;
}) => (
  <header className={`sticky top-0 z-10 p-4 shadow-sm flex items-center gap-4 ${bgColorClass} transition-colors duration-300`}>
    {onBack && (
      <button
        onClick={onBack}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-current transition-all flex-shrink-0"
        aria-label="Volver"
      >
        <ChevronLeft size={24} />
      </button>
    )}
    <div className="flex-1 min-w-0">
      <h1 className={`text-xl font-bold ${textColorClass} truncate`}>{title}</h1>
      {subtitle && <p className={`text-sm opacity-90 ${textColorClass} truncate`}>{subtitle}</p>}
    </div>
    {onHome && (
      <button
        onClick={onHome}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-current transition-all flex-shrink-0"
        aria-label="Inicio"
      >
        <Home size={22} />
      </button>
    )}
    {rightElement}
  </header>
);
