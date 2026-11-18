import { AreaType, Category, CategoryId } from '../types';
import { AREAS_DESARROLLO_0_3 } from './shared';

export const categoriaD: Category = {
  id: CategoryId.D,
  title: "Atención a la diversidad",
  colorClass: "bg-green-600",
  bgClass: "bg-green-50",
  textClass: "text-green-600",
  areaConfigs: AREAS_DESARROLLO_0_3,
  ageGroups: [
    { id: "sindrome-down",  label: "Síndrome Down",  introText: [], areas: {} },
    { id: "dislexia",       label: "Dislexia",       introText: [], areas: {} },
    { id: "tda",            label: "TDA",            introText: [], areas: {} },
    { id: "tea",            label: "TEA",            introText: [], areas: {} },
    { id: "lenguaje-oral",  label: "Lenguaje oral",  introText: [], areas: {} },
  ]
};
