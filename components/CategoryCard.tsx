import React from 'react';
import { Baby, School, GraduationCap, HeartHandshake } from 'lucide-react';
import { Category, CategoryId } from '../types';

export const CategoryCard: React.FC<{ category: Category; onClick: () => void }> = ({ category, onClick }) => {
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
        {(() => {
          const parenIdx = category.title.indexOf('(');
          if (parenIdx === -1) return <h2 className="text-lg font-bold">{category.title}</h2>;
          return (
            <>
              <h2 className="text-lg font-bold leading-tight">{category.title.slice(0, parenIdx).trim()}</h2>
              <p className="text-sm font-semibold opacity-90 mt-0.5">{category.title.slice(parenIdx)}</p>
            </>
          );
        })()}
      </div>
    </button>
  );
};
