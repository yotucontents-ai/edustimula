import { AreaType, Category, CategoryId } from '../../types';
import { edad3a4 } from './3-4';
import { edad4a5 } from './4-5';
import { edad5a6 } from './5-6';

export const categoriaB: Category = {
  id: CategoryId.B,
  title: "Infantil (3 - 6 años)",
  colorClass: "bg-pink-600",
  bgClass: "bg-pink-50",
  textClass: "text-pink-600",
  areaConfigs: [
    { type: AreaType.GROSS_MOTOR,   title: "Motricidad Gruesa",      colorBase: "bg-orange-500" },
    { type: AreaType.FINE_MOTOR,    title: "Motricidad Fina",        colorBase: "bg-rose-500" },
    { type: AreaType.ORAL_LANGUAGE, title: "Lenguaje Oral",          colorBase: "bg-sky-500" },
    { type: AreaType.SOCIAL,        title: "Área Social",            colorBase: "bg-emerald-500" },
    { type: AreaType.PERCEPTION,    title: "Percepción y Cognición", colorBase: "bg-violet-500" },
  ],
  ageGroups: [edad3a4, edad4a5, edad5a6],
};
