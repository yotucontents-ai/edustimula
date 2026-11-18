import React from 'react';
import { SubSection } from '../types';
import { Header } from './Header';
import { ContentBlocks } from './ContentBlocks';

export const TextDetailView: React.FC<{
  subSection: SubSection;
  onClose: () => void;
  onHome?: () => void;
  colorClass: string;
}> = ({ subSection, onClose, onHome, colorClass }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
      <Header
        title={subSection.title}
        onBack={onClose}
        onHome={onHome}
        bgColorClass="bg-white"
        textColorClass={colorClass}
      />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-4">
          <ContentBlocks content={subSection.content} colorClass={colorClass} />
        </div>
      </div>
    </div>
  );
};
