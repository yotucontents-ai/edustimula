import { AreaConfig, AreaType } from '../types';

// Áreas de desarrollo de 0 a 3 años (también se usan en Atención a la diversidad).
export const AREAS_DESARROLLO_0_3: AreaConfig[] = [
{ type: AreaType.GROSS_MOTOR,  title: "Motricidad Gruesa",        colorBase: "bg-orange-500" },
{ type: AreaType.FINE_MOTOR,   title: "Motricidad Fina",          colorBase: "bg-rose-500" },
{ type: AreaType.LANGUAGE,     title: "Lenguaje",                 colorBase: "bg-sky-500" },
{ type: AreaType.SOCIAL,       title: "Área Social",              colorBase: "bg-emerald-500" },
{ type: AreaType.PERCEPTION,   title: "Percepción y Cognición",   colorBase: "bg-violet-500" },
];
