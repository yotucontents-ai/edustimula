
export enum CategoryId {
  A = 'A', // Estimulación temprana (0-3)
  B = 'B', // Infantil (3-6)
  C = 'C', // Primaria (6-12)
  D = 'D', // Atención a la diversidad
}

export enum AreaType {
  // Categoría A
  GROSS_MOTOR = 'gross_motor',
  FINE_MOTOR = 'fine_motor',
  LANGUAGE = 'language',
  SOCIAL = 'social',
  PERCEPTION = 'perception',
  // Categoría B
  BASIC_CONCEPTS = 'basic_concepts',
  ORAL_LANGUAGE = 'oral_language',
  // Categoría C
  VERBAL_REASONING = 'verbal_reasoning',
  LOGICAL_REASONING = 'logical_reasoning',
  NUMERICAL_REASONING = 'numerical_reasoning',
  SPATIAL_TEMPORAL = 'spatial_temporal',
}

export interface AreaConfig {
  type: AreaType;
  title: string;
  colorBase: string;
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
  icon?: string;
  content?: ContentItem[];
  game?: InteractiveGame;
  subSections?: SubSection[];
}

export interface AgeGroup {
  id: string;
  label: string;
  introText?: string[];
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
  areaConfigs: AreaConfig[];
  ageGroups: AgeGroup[];
}
