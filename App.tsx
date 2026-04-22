
import React, { useState, useEffect } from 'react';
import { APP_DATA } from './data';
import { Category, AgeGroup, AreaType, CategoryId, SubSection, InteractiveGame, AreaConfig } from './types';
import {
  ChevronLeft,
  Baby,
  School,
  GraduationCap,
  HeartHandshake,
  Activity,
  Hand,
  MessageCircle,
  Users,
  GlassWater,
  Disc,
  Utensils,
  Circle,
  CheckCircle,
  XCircle,
  Info,
  Volume2,
  X,
  PlayCircle,
  BookOpen,
  ChevronRight,
  FolderOpen,
  Bed,
  Cat,
  Dog,
  Car,
  Home,
  Sun,
  Moon,
  Cloud,
  Star,
  Smile,
  Apple,
  Banana,
  Shirt,
  Footprints,
  Book,
  Pencil,
  Bath,
  Scissors,
  Bike,
  Bus,
  Milk,
  Wind,
  Heart,
  Eye,
  Ear,
  User,
  LayoutGrid,
  Layers,
  TrainFront,
  Search,
  Headphones,
  Gamepad2,
  Brain,
  Hash,
  Compass
} from 'lucide-react';

// --- Icon Mapping ---
// Fixed: Changed Record<string, React.ElementType> to Record<string, any> to prevent Lucide icon typing conflicts during dynamic assignment
const IconMap: Record<string, any> = {
  GlassWater,
  Disc,
  Utensils,
  Circle,
  Baby,
  School,
  GraduationCap,
  HeartHandshake,
  Bed,
  Cat,
  Dog,
  Car,
  Home,
  Sun,
  Moon,
  Cloud,
  Star,
  Smile,
  Apple,
  Banana,
  Shirt,
  Footprints,
  Book,
  Pencil,
  Bath,
  Scissors,
  Bike,
  Bus,
  Milk,
  Wind,
  Heart,
  Eye,
  Ear,
  User,
  LayoutGrid,
  Layers,
  TrainFront,
  Search,
  Headphones,
  Gamepad2,
  FolderOpen
};

// --- Audio Helper ---
const playTextToSpeech = (text: string) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
};

// --- Components ---

const Header = ({ 
  title, 
  subtitle, 
  onBack, 
  bgColorClass = "bg-white", 
  textColorClass = "text-slate-800",
  rightElement
}: { 
  title: string; 
  subtitle?: string; 
  onBack?: () => void; 
  bgColorClass?: string; 
  textColorClass?: string;
  rightElement?: React.ReactNode;
}) => (
  <header className={`sticky top-0 z-10 p-4 shadow-sm flex items-center gap-4 ${bgColorClass} transition-colors duration-300`}>
    {onBack && (
      <button 
        onClick={onBack} 
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-current transition-all flex-shrink-0"
        aria-label="Volver"
      >
        <ChevronLeft size={24} />
      </button>
    )}
    <div className="flex-1 min-w-0">
      <h1 className={`text-xl font-bold ${textColorClass} truncate`}>{title}</h1>
      {subtitle && <p className={`text-sm opacity-90 ${textColorClass} truncate`}>{subtitle}</p>}
    </div>
    {rightElement}
  </header>
);

const CategoryCard: React.FC<{ category: Category; onClick: () => void }> = ({ category, onClick }) => {
  let Icon: any = Baby;
  if (category.id === CategoryId.B) Icon = School;
  if (category.id === CategoryId.C) Icon = GraduationCap;
  if (category.id === CategoryId.D) Icon = HeartHandshake;

  return (
    <button 
      onClick={onClick}
      className={`w-full text-left p-6 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl ${category.colorClass} text-white flex flex-col items-center justify-center gap-4 h-48`}
    >
      <Icon size={48} strokeWidth={1.5} />
      <div className="text-center">
        <span className="block text-3xl font-bold opacity-30 mb-1">{category.id}</span>
        <h2 className="text-xl font-bold">{category.title}</h2>
      </div>
    </button>
  );
};

const AgeGroupCard: React.FC<{ ageGroup: AgeGroup; colorClass: string; onClick: () => void }> = ({ ageGroup, colorClass, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border-l-8 border-transparent hover:border-l-8 flex items-center justify-between group"
    style={{ borderColor: 'transparent' }} 
  >
    <span className="text-lg font-semibold text-slate-700">{ageGroup.label}</span>
    <div className={`p-2 rounded-full ${colorClass.replace('bg-', 'bg-opacity-20 text-')}`}>
       <ChevronLeft className="rotate-180" size={24} />
    </div>
  </button>
);

const AREA_ICONS: Record<AreaType, any> = {
  [AreaType.GROSS_MOTOR]:         Activity,
  [AreaType.FINE_MOTOR]:          Hand,
  [AreaType.LANGUAGE]:            MessageCircle,
  [AreaType.SOCIAL]:              Users,
  [AreaType.PERCEPTION]:          Brain,
  [AreaType.BASIC_CONCEPTS]:      BookOpen,
  [AreaType.ORAL_LANGUAGE]:       Headphones,
  [AreaType.VERBAL_REASONING]:    MessageCircle,
  [AreaType.LOGICAL_REASONING]:   Search,
  [AreaType.NUMERICAL_REASONING]: Hash,
  [AreaType.SPATIAL_TEMPORAL]:    Compass,
};

const AreaCard = ({ config, onClick }: { config: AreaConfig; onClick: () => void }) => {
  const Icon = AREA_ICONS[config.type] || Activity;
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-2xl shadow-md text-white ${config.colorBase} flex flex-col items-center justify-center gap-3 aspect-square hover:opacity-90 transition-opacity`}
    >
      <Icon size={36} />
      <span className="font-bold text-center text-sm leading-tight">{config.title}</span>
    </button>
  );
};

const TextDetailView: React.FC<{
  subSection: SubSection;
  onClose: () => void;
  colorClass: string;
}> = ({ subSection, onClose, colorClass }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
      <Header 
        title={subSection.title} 
        onBack={onClose}
        bgColorClass="bg-white"
        textColorClass={colorClass}
      />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-4">
           {subSection.content?.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className={`font-bold text-lg mb-4 ${colorClass}`}>{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((li, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colorClass.replace('text-', 'bg-')}`}></div>
                      <span className="leading-relaxed">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const FullScreenGame: React.FC<{ 
  game: InteractiveGame; 
  onClose: () => void;
  onContinue: () => void;
  colorClass: string;
}> = ({ 
  game, 
  onClose,
  onContinue,
  colorClass
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    playTextToSpeech(game.question);
    setSelectedOption(null);
    setIsCorrect(null);
  }, [game.question]);

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
    if (optionId === game.correctAnswer) {
      setIsCorrect(true);
      playTextToSpeech(game.successMessage || "¡Muy bien!");
    } else {
      setIsCorrect(false);
      playTextToSpeech("Nooo, inténtalo de nuevo.");
    }
  };

  const handleReplayAudio = () => {
    playTextToSpeech(game.question);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
      <div className={`p-4 shadow-sm flex items-center justify-between bg-white`}>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
        >
          <X size={24} />
        </button>
        <span className="font-bold text-slate-800">Jugando</span>
        <div className="w-10" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-lg mx-auto w-full overflow-y-auto">
        
        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100 w-full mb-8 text-center relative mt-4">
          <button 
            onClick={handleReplayAudio}
            className="absolute -top-4 -right-2 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-transform hover:scale-110"
            aria-label="Repetir audio"
          >
            <Volume2 size={24} />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">{game.question}</h2>
        </div>

        <div className={`grid ${game.options.length > 2 ? 'grid-cols-2' : 'grid-cols-1 w-full'} gap-6 mb-8 w-full`}>
          {game.options.map((opt) => {
            // Fixed: Explicitly typed Icon as any to prevent Lucide icon assignment issues from IconMap
            const Icon: any = IconMap[opt.icon || 'Circle'] || Circle;
            const isSelected = selectedOption === opt.id;
            
            let cardClass = "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md";
            let iconClass = "text-slate-600";

            if (isSelected) {
              if (isCorrect && opt.id === game.correctAnswer) {
                cardClass = "bg-green-100 border-green-500 ring-4 ring-green-500 shadow-xl scale-105";
                iconClass = "text-green-600";
              } else if (!isCorrect && opt.id === selectedOption) {
                cardClass = "bg-red-50 border-red-400 opacity-75";
                iconClass = "text-red-500";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => !isCorrect && handleOptionClick(opt.id)}
                disabled={isCorrect === true}
                className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all duration-300 min-h-[160px] ${cardClass}`}
              >
                {opt.imageSrc ? (
                  <img 
                    src={opt.imageSrc} 
                    alt={opt.label} 
                    className="w-full h-32 object-contain" 
                  />
                ) : (
                  <Icon size={game.options.length <= 2 ? 80 : 48} className={iconClass} strokeWidth={1.5} />
                )}
                <span className={`text-lg font-bold uppercase tracking-wider ${iconClass}`}>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {isCorrect === true && (
          <div className="text-center animate-bounce mb-8">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold text-xl mb-6 bg-green-50 px-6 py-3 rounded-full">
              <CheckCircle size={28} />
              {game.successMessage || "¡Correcto!"}
            </div>
            <br />
            <button 
              onClick={onContinue} 
              className={`bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-600 transition-all hover:scale-105`}
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const ContentViewer = ({ areaTitle, subSections, colorTextClass }: { areaTitle: string; subSections: SubSection[]; colorTextClass: string }) => {
  const [activeSubSection, setActiveSubSection] = useState<SubSection | null>(null);

  const handleNext = () => {
    if (!activeSubSection) return;
    const currentIndex = subSections.findIndex(sub => sub.id === activeSubSection.id);
    if (currentIndex >= 0 && currentIndex < subSections.length - 1) {
      setActiveSubSection(subSections[currentIndex + 1]);
    } else {
      setActiveSubSection(null);
    }
  };

  if (activeSubSection?.subSections) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
        <Header 
          title={activeSubSection.title}
          subtitle={areaTitle} 
          onBack={() => setActiveSubSection(null)}
          bgColorClass="bg-white"
          textColorClass={colorTextClass}
        />
        <main className="flex-1 p-6 max-w-md mx-auto w-full">
           <ContentViewer 
             areaTitle={activeSubSection.title}
             subSections={activeSubSection.subSections}
             colorTextClass={colorTextClass}
           />
        </main>
      </div>
    );
  }

  if (activeSubSection?.game) {
    return (
      <FullScreenGame 
        key={activeSubSection.id} 
        game={activeSubSection.game} 
        onClose={() => setActiveSubSection(null)} 
        onContinue={handleNext}
        colorClass={colorTextClass}
      />
    );
  }

  if (activeSubSection && !activeSubSection.game && !activeSubSection.subSections) {
    return (
      <TextDetailView 
        subSection={activeSubSection}
        onClose={() => setActiveSubSection(null)}
        colorClass={colorTextClass}
      />
    );
  }

  return (
    <div className="space-y-4">
      {subSections.map((sub) => {
        const isGroup = !!sub.subSections;
        const hasGame = !!sub.game;
        
        // Icon logic: custom icon from data or default based on type
        // Fixed: Explicitly typed IconComponent as any to avoid typing mismatch when assigning from IconMap or Lucide components
        let IconComponent: any = BookOpen;
        let iconBgClass = 'bg-slate-100 text-slate-600';

        if (sub.icon && IconMap[sub.icon]) {
          IconComponent = IconMap[sub.icon];
          iconBgClass = isGroup ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600';
        } else if (isGroup) {
          IconComponent = FolderOpen;
          iconBgClass = 'bg-blue-100 text-blue-600';
        } else if (hasGame) {
          IconComponent = PlayCircle;
          iconBgClass = 'bg-yellow-100 text-yellow-600';
        }
        
        return (
          <button 
            key={sub.id} 
            onClick={() => setActiveSubSection(sub)}
            className="w-full bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 group border border-transparent hover:border-slate-200"
          >
            <div className={`p-3 rounded-full ${iconBgClass}`}>
              <IconComponent size={24} />
            </div>
            <span className="flex-1 text-left font-bold text-slate-700 text-lg group-hover:text-slate-900">
              {sub.title}
            </span>
            <ChevronRight className="text-slate-300 group-hover:text-slate-500" />
          </button>
        );
      })}
    </div>
  );
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | null>(null);
  const [selectedAreaType, setSelectedAreaType] = useState<AreaType | null>(null);

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-bold text-center text-slate-800">EduStimula</h1>
          <p className="text-center text-slate-500 text-sm">Seleccione una etapa educativa</p>
        </header>
        <main className="flex-1 p-6 max-w-md mx-auto w-full grid grid-cols-1 gap-4 content-center">
          {APP_DATA.map((cat) => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              onClick={() => setSelectedCategory(cat)} 
            />
          ))}
        </main>
      </div>
    );
  }

  if (!selectedAgeGroup) {
    return (
      <div className={`min-h-screen ${selectedCategory.bgClass} flex flex-col`}>
        <Header 
          title={selectedCategory.title} 
          subtitle="Selecciona la edad"
          onBack={() => setSelectedCategory(null)}
          bgColorClass={selectedCategory.colorClass}
          textColorClass="text-white"
        />
        <main className="flex-1 p-6 max-w-md mx-auto w-full space-y-4">
          {selectedCategory.ageGroups.length > 0 ? (
            selectedCategory.ageGroups.map((age) => (
              <AgeGroupCard 
                key={age.id} 
                ageGroup={age} 
                colorClass={selectedCategory.colorClass}
                onClick={() => setSelectedAgeGroup(age)} 
              />
            ))
          ) : (
             <div className="text-center p-10 text-slate-500">
               <Info className="mx-auto mb-2" />
               Contenido en desarrollo para esta categoría.
             </div>
          )}
        </main>
      </div>
    );
  }

  if (!selectedAreaType) {
    const hasIntro = selectedAgeGroup.introText && selectedAgeGroup.introText.length > 0;
    return (
      <div className={`min-h-screen ${selectedCategory.bgClass} flex flex-col`}>
        <Header
          title={selectedAgeGroup.label}
          subtitle="Selecciona el área de desarrollo"
          onBack={() => setSelectedAgeGroup(null)}
          bgColorClass={selectedCategory.colorClass}
          textColorClass="text-white"
        />
        <main className="flex-1 p-6 max-w-md mx-auto w-full">
          {hasIntro && (
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 border-l-4 border-yellow-400">
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Info size={18} className="text-yellow-500"/> Recomendaciones
              </h3>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                {selectedAgeGroup.introText?.slice(0, 3).map((txt, i) => (
                  <li key={i}>{txt}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            {selectedCategory.areaConfigs.map((cfg) => (
              <AreaCard
                key={cfg.type}
                config={cfg}
                onClick={() => setSelectedAreaType(cfg.type)}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }

  const areaData = selectedAgeGroup.areas?.[selectedAreaType];
  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col`}>
      <Header 
        title={areaData?.title || 'Área'} 
        subtitle={selectedAgeGroup.label}
        onBack={() => setSelectedAreaType(null)}
        bgColorClass="bg-white"
        textColorClass={selectedCategory.textClass}
      />
      <main className="flex-1 p-6 max-w-md mx-auto w-full">
        {areaData ? (
          <ContentViewer 
            areaTitle={areaData.title} 
            subSections={areaData.subSections}
            colorTextClass={selectedCategory.textClass}
          />
        ) : (
          <div className="text-center p-10 text-slate-400">
            <Info className="mx-auto mb-2" />
            No hay contenido disponible para esta sección aún.
          </div>
        )}
      </main>
    </div>
  );
}
