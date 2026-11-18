import { AreaType, Category, CategoryId } from '../types';

export const categoriaC: Category = {
  id: CategoryId.C,
  title: "Primaria (6 - 12 años)",
  colorClass: "bg-blue-600",
  bgClass: "bg-blue-50",
  textClass: "text-blue-600",
  areaConfigs: [
    { type: AreaType.VERBAL_REASONING,    title: "Razonamiento Verbal",              colorBase: "bg-indigo-500" },
    { type: AreaType.LOGICAL_REASONING,   title: "Razonamiento Lógico",             colorBase: "bg-violet-500" },
    { type: AreaType.NUMERICAL_REASONING, title: "Razonamiento Numérico",           colorBase: "bg-cyan-500" },
    { type: AreaType.SPATIAL_TEMPORAL,    title: "Estructuración Espacio-Temporal", colorBase: "bg-amber-500" },
  ],
  ageGroups: [
    {
      id: "6-8",
      label: "6 – 8 años",
      introText: [],
      areas: {
        [AreaType.VERBAL_REASONING]:    { title: "Razonamiento Verbal",              subSections: [] },
        [AreaType.LOGICAL_REASONING]:   { title: "Razonamiento Lógico",             subSections: [] },
        [AreaType.NUMERICAL_REASONING]: { title: "Razonamiento Numérico",           subSections: [] },
        [AreaType.SPATIAL_TEMPORAL]:    { title: "Estructuración Espacio-Temporal", subSections: [] },
      }
    },
    {
      id: "8-10",
      label: "8 – 10 años",
      introText: [],
      areas: {
        [AreaType.VERBAL_REASONING]:    { title: "Razonamiento Verbal",              subSections: [] },
        [AreaType.LOGICAL_REASONING]:   { title: "Razonamiento Lógico",             subSections: [] },
        [AreaType.NUMERICAL_REASONING]: { title: "Razonamiento Numérico",           subSections: [] },
        [AreaType.SPATIAL_TEMPORAL]:    { title: "Estructuración Espacio-Temporal", subSections: [] },
      }
    },
    {
      id: "10-12",
      label: "10 – 12 años",
      introText: [],
      areas: {
        [AreaType.VERBAL_REASONING]:    { title: "Razonamiento Verbal",              subSections: [] },
        [AreaType.LOGICAL_REASONING]:   { title: "Razonamiento Lógico",             subSections: [] },
        [AreaType.NUMERICAL_REASONING]: { title: "Razonamiento Numérico",           subSections: [] },
        [AreaType.SPATIAL_TEMPORAL]:    { title: "Estructuración Espacio-Temporal", subSections: [] },
      }
    }
  ]
};
