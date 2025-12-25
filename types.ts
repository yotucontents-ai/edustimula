
export enum CategoryId {
  A = 'A', // Estimulación temprana (0-3)
  B = 'B', // Infantil (3-6)
  C = 'C', // Primaria (6-12)
  D = 'D', // Diversidad
}

export enum AreaType {
  GROSS_MOTOR = 'gross_motor',
  FINE_MOTOR = 'fine_motor',
  LANGUAGE = 'language',
  SOCIAL = 'social',
}

export interface ContentItem {
  title: string;
  items: string[];
}

export interface InteractiveGame {
  type: 'select-image' | 'binary-choice';
  question: string;
  correctAnswer: string;
  options: { id: string; label: string; icon?: string; imageSrc?: string }[];
  successMessage?: string;
}

export interface SubSection {
  id: string;
  title: string;
  icon?: string; // Icono opcional para el menú
  content?: ContentItem[];
  game?: InteractiveGame;
  subSections?: SubSection[];
}

export interface AgeGroup {
  id: string;
  label: string;
  introText?: string[]; // General tips like "Antes de iniciar..."
  areas?: {
    [key in AreaType]?: {
      title: string;
      subSections: SubSection[];
    };
  };
}

export interface Category {
  id: CategoryId;
  title: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  ageGroups: AgeGroup[];
  conditions?: string[]; // For Category D
}
