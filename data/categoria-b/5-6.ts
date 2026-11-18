import { AgeGroup, AreaType } from '../../types';

export const edad5a6: AgeGroup = {
  id: "5-6",
  label: "5 – 6 años",
  introText: [],
  areas: {
    [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
    [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
    [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
    [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
  }
};
