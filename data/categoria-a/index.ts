import { Category, CategoryId } from '../../types';
import { AREAS_DESARROLLO_0_3 } from '../shared';
import { edad0a1 } from './0-1';
import { edad1a2 } from './1-2';
import { edad2a3 } from './2-3';

export const categoriaA: Category = {
  id: CategoryId.A,
  title: "Estimulación temprana (0 - 3 años)",
  colorClass: "bg-orange-500",
  bgClass: "bg-orange-50",
  textClass: "text-orange-600",
  areaConfigs: AREAS_DESARROLLO_0_3,
  ageGroups: [edad0a1, edad1a2, edad2a3],
};
