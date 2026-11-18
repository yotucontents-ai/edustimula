import React, { useState } from 'react';
import { BookOpen, FolderOpen, PlayCircle, ChevronRight } from 'lucide-react';
import { SubSection } from '../types';
import { IconMap } from '../icons';
import { Header } from './Header';
import { FullScreenGame } from './FullScreenGame';
import { TextDetailView } from './TextDetailView';
import { ContentBlocks } from './ContentBlocks';

export const ContentViewer = ({ areaTitle, subSections, colorTextClass, onHome }: { areaTitle: string; subSections: SubSection[]; colorTextClass: string; onHome?: () => void }) => {
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
          onHome={onHome}
          bgColorClass="bg-white"
          textColorClass={colorTextClass}
        />
        <main className="flex-1 p-6 max-w-md mx-auto w-full">
           <ContentViewer
             areaTitle={activeSubSection.title}
             subSections={activeSubSection.subSections}
             colorTextClass={colorTextClass}
             onHome={onHome}
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
        onHome={onHome}
        colorClass={colorTextClass}
      />
    );
  }

  // Single content-only subsection → render inline, no button needed
  if (subSections.length === 1 && !subSections[0].game && !subSections[0].subSections) {
    const single = subSections[0];
    return (
      <div className="space-y-4">
        <ContentBlocks content={single.content} colorClass={colorTextClass} />
      </div>
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
