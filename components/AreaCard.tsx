import { Activity, Hand, MessageCircle, Users, Brain, BookOpen, Headphones, Search, Hash, Compass } from 'lucide-react';
import { AreaConfig, AreaType } from '../types';

const AREA_ICONS: Record<AreaType, any> = {
  [AreaType.GROSS_MOTOR]:         Activity,
  [AreaType.FINE_MOTOR]:          Hand,
  [AreaType.LANGUAGE]:            MessageCircle,
  [AreaType.SOCIAL]:              Users,
  [AreaType.PERCEPTION]:          Brain,
  [AreaType.BASIC_CONCEPTS]:      BookOpen,
  [AreaType.ORAL_LANGUAGE]:       Headphones,
  [AreaType.VERBAL_REASONING]:    MessageCircle,
  [AreaType.LOGICAL_REASONING]:   Search,
  [AreaType.NUMERICAL_REASONING]: Hash,
  [AreaType.SPATIAL_TEMPORAL]:    Compass,
};

export const AreaCard = ({ config, onClick }: { config: AreaConfig; onClick: () => void }) => {
  const Icon = AREA_ICONS[config.type] || Activity;
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-2xl shadow-md text-white ${config.colorBase} flex flex-col items-center justify-center gap-3 aspect-square hover:opacity-90 transition-opacity`}
    >
      <Icon size={36} />
      <span className="font-bold text-center text-sm leading-tight">{config.title}</span>
    </button>
  );
};
