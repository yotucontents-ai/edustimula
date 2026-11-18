import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Info } from 'lucide-react';
import { APP_DATA } from './data';
import { Category, AgeGroup, AreaType } from './types';
import { Header } from './components/Header';
import { IntroPanel } from './components/IntroPanel';
import { CategoryCard } from './components/CategoryCard';
import { AgeGroupCard } from './components/AgeGroupCard';
import { AreaCard } from './components/AreaCard';
import { ContentViewer } from './components/ContentViewer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | null>(null);
  const [selectedSubGroup, setSelectedSubGroup] = useState<AgeGroup | null>(null);
  const [selectedAreaType, setSelectedAreaType] = useState<AreaType | null>(null);

  // Refs so event listeners always see latest state
  const navRef = useRef({ selectedCategory, selectedAgeGroup, selectedSubGroup, selectedAreaType });
  useEffect(() => {
    navRef.current = { selectedCategory, selectedAgeGroup, selectedSubGroup, selectedAreaType };
  });

  const goBack = useCallback(() => {
    const s = navRef.current;
    if (s.selectedAreaType) { setSelectedAreaType(null); return; }
    if (s.selectedSubGroup) { setSelectedSubGroup(null); return; }
    if (s.selectedAgeGroup) { setSelectedAgeGroup(null); return; }
    if (s.selectedCategory) { setSelectedCategory(null); return; }
  }, []);

  const goHome = useCallback(() => {
    setSelectedAreaType(null);
    setSelectedSubGroup(null);
    setSelectedAgeGroup(null);
    setSelectedCategory(null);
  }, []);

  // Hardware back button: intercept popstate so it navigates within the app
  useEffect(() => {
    history.replaceState({ idx: 0 }, '');
    history.pushState({ idx: 1 }, '');

    const handlePopState = (e: PopStateEvent) => {
      if (e.state?.idx === 0) {
        const isAtHome = !navRef.current.selectedCategory;
        if (!isAtHome) {
          goBack();
          history.pushState({ idx: 1 }, '');
        }
        // At home → let the browser navigate back naturally
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [goBack]);

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-bold text-center text-slate-800">EduStimula</h1>
          <p className="text-center text-slate-500 text-sm">Seleccione una etapa educativa</p>
        </header>
        <main className="p-4 pt-3 max-w-md mx-auto w-full grid grid-cols-2 gap-4">
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
          onHome={goHome}
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

  // Tramo selection screen (shown when age group has sub-groups)
  if (selectedAgeGroup.subGroups?.length && !selectedSubGroup) {
    const hasIntro = selectedAgeGroup.introText && selectedAgeGroup.introText.length > 0;
    return (
      <div className={`min-h-screen ${selectedCategory.bgClass} flex flex-col`}>
        <Header
          title={selectedAgeGroup.label}
          subtitle="Selecciona el tramo"
          onBack={() => setSelectedAgeGroup(null)}
          onHome={goHome}
          bgColorClass={selectedCategory.colorClass}
          textColorClass="text-white"
        />
        <main className="flex-1 p-6 max-w-md mx-auto w-full space-y-4">
          {hasIntro && selectedAgeGroup.introText && (
            <IntroPanel items={selectedAgeGroup.introText} title="Antes de iniciar las actividades" />
          )}
          {selectedAgeGroup.subGroups!.map((sub) => (
            <AgeGroupCard
              key={sub.id}
              ageGroup={sub}
              colorClass={selectedCategory.colorClass}
              onClick={() => setSelectedSubGroup(sub)}
            />
          ))}
        </main>
      </div>
    );
  }

  if (!selectedAreaType) {
    const activeGroup = selectedSubGroup || selectedAgeGroup;
    const hasIntro = !selectedSubGroup && activeGroup.introText && activeGroup.introText.length > 0;
    return (
      <div className={`min-h-screen ${selectedCategory.bgClass} flex flex-col`}>
        <Header
          title={activeGroup.label}
          subtitle="Selecciona el área de desarrollo"
          onBack={() => selectedSubGroup ? setSelectedSubGroup(null) : setSelectedAgeGroup(null)}
          onHome={goHome}
          bgColorClass={selectedCategory.colorClass}
          textColorClass="text-white"
        />
        <main className="flex-1 p-6 max-w-md mx-auto w-full">
          {hasIntro && activeGroup.introText && (
            <IntroPanel items={activeGroup.introText} title="Recomendaciones" />
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

  const activeGroup = selectedSubGroup || selectedAgeGroup;
  const areaData = activeGroup.areas?.[selectedAreaType];
  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col`}>
      <Header
        title={areaData?.title || 'Área'}
        subtitle={activeGroup.label}
        onBack={() => setSelectedAreaType(null)}
        onHome={goHome}
        bgColorClass="bg-white"
        textColorClass={selectedCategory.textClass}
      />
      <main className="flex-1 p-6 max-w-md mx-auto w-full">
        {areaData ? (
          <ContentViewer
            areaTitle={areaData.title}
            subSections={areaData.subSections}
            colorTextClass={selectedCategory.textClass}
            onHome={goHome}
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
