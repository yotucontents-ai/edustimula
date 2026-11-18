import { AgeGroup, IntroItem } from '../../../types';
import { tramo12a18 } from './tramo-12-18';
import { tramo18a24 } from './tramo-18-24';

export const edad1a2: AgeGroup = {
  id: "1-2",
  label: "1 – 2 años",
  introText: [
    { icon: "Fingerprint", color: "bg-orange-100", text: "Fomenta la autonomía permitiendo que intente señalar los objetos." },
    { icon: "Star",        color: "bg-yellow-100", text: "Celebra cada acierto con entusiasmo." },
    { icon: "MessageCircle", color: "bg-sky-100",  text: "Nombra los objetos en voz alta para reforzar el vocabulario cotidiano." },
  ] as IntroItem[],
  subGroups: [tramo12a18, tramo18a24],
};
