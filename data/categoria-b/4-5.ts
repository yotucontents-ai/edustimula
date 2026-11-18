import { AgeGroup, AreaType } from '../../types';

export const edad4a5: AgeGroup = {
  id: "4-5",
  label: "4 – 5 años",
  introText: [],
  areas: {
    [AreaType.GROSS_MOTOR]:    { title: "Motricidad Gruesa",      subSections: [] },
    [AreaType.FINE_MOTOR]:     { title: "Motricidad Fina",        subSections: [] },
    [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
    [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
    [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
  }
};
