import { AgeGroup, IntroItem } from '../../../types';
import { tramo0a3 } from './tramo-0-3';
import { tramo3a6 } from './tramo-3-6';
import { tramo6a9 } from './tramo-6-9';
import { tramo9a12 } from './tramo-9-12';

export const edad0a1: AgeGroup = {
  id: "0-1",
  label: "0 – 1 año",
  introText: [
    { icon: "Music",      color: "bg-orange-100",  text: "Háblale y cántale mientras le haces los ejercicios." },
    { icon: "BedSingle",  color: "bg-blue-100",    text: "Nunca lo despiertes ni lo fuerces." },
    { icon: "Clock",      color: "bg-amber-100",   text: "Espera 20 minutos después de comer." },
    { icon: "Home",       color: "bg-green-100",   text: "Trabaja en un lugar seguro y tranquilo." },
    { icon: "RefreshCw",  color: "bg-violet-100",  text: "Repite los ejercicios dos veces por semana." },
    { icon: "Hand",       color: "bg-rose-100",    text: "No usar guantes; que tenga el contacto con la piel." },
    { icon: "MonitorOff", color: "bg-slate-100",   text: "No usar tablets ni pantallas." },
  ] as IntroItem[],
  subGroups: [tramo0a3, tramo3a6, tramo6a9, tramo9a12],
};
