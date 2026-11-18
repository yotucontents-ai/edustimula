import React from 'react';
import { Info } from 'lucide-react';
import { IntroItem } from '../types';
import { IconMap } from '../icons';

export const IntroPanel: React.FC<{ items: (string | IntroItem)[]; title: string }> = ({ items, title }) => (
  <div className="mb-4">
    <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
      <Info size={15} className="text-yellow-500" /> {title}
    </h3>
    <div className="grid grid-cols-1 gap-2">
      {items.map((item, i) => {
        const isRich = typeof item !== 'string';
        const text = isRich ? item.text : item;
        const iconName = isRich ? item.icon : null;
        const colorClass = isRich && item.color ? item.color : 'bg-yellow-50';
        const Icon = iconName ? IconMap[iconName] : null;
        return (
          <div key={i} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
            {Icon ? (
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center`}>
                <Icon size={26} className="text-slate-600" strokeWidth={1.5} />
              </div>
            ) : (
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-yellow-400 ml-1.5" />
            )}
            <span className="text-sm text-slate-700 leading-snug">{text}</span>
          </div>
        );
      })}
    </div>
  </div>
);
