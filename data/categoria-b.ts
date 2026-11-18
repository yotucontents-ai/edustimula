import { AreaType, Category, CategoryId } from '../types';

export const categoriaB: Category = {
  id: CategoryId.B,
  title: "Infantil (3 - 6 años)",
  colorClass: "bg-pink-600",
  bgClass: "bg-pink-50",
  textClass: "text-pink-600",
  areaConfigs: [
    { type: AreaType.BASIC_CONCEPTS, title: "Conceptos Básicos",      colorBase: "bg-teal-500" },
    { type: AreaType.ORAL_LANGUAGE,  title: "Lenguaje Oral",          colorBase: "bg-sky-500" },
    { type: AreaType.SOCIAL,         title: "Área Social",            colorBase: "bg-emerald-500" },
    { type: AreaType.PERCEPTION,     title: "Percepción y Cognición", colorBase: "bg-violet-500" },
  ],
  ageGroups: [
    {
      id: "3-4",
      label: "3 – 4 años",
      introText: [],
      areas: {
        [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
        [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
        [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
        [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
      }
    },
    {
      id: "4-5",
      label: "4 – 5 años",
      introText: [],
      areas: {
        [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
        [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
        [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
        [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
      }
    },
    {
      id: "5-6",
      label: "5 – 6 años",
      introText: [],
      areas: {
        [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
        [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
        [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
        [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
      }
    }
  ]
};
