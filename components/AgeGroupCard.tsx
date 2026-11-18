import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { AgeGroup } from '../types';

export const AgeGroupCard: React.FC<{ ageGroup: AgeGroup; colorClass: string; onClick: () => void }> = ({ ageGroup, colorClass, onClick }) => (
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
