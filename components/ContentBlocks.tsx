import React from 'react';
import { ContentItem } from '../types';

// Tarjetas de contenido (título + lista de textos con imagen opcional).
export const ContentBlocks: React.FC<{ content?: ContentItem[]; colorClass: string }> = ({ content, colorClass }) => (
  <>
    {content?.map((item, idx) => (
       <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
         <h4 className={`font-bold text-lg mb-4 ${colorClass}`}>{item.title}</h4>
         <ul className="space-y-4">
           {item.items.map((li, i) => {
             const hasImage = typeof li !== 'string';
             const text = hasImage ? li.text : li;
             const src = hasImage ? li.imageSrc : null;
             return (
               <li key={i} className={`text-slate-700 ${hasImage ? 'rounded-xl overflow-hidden border border-slate-100 shadow-sm' : 'flex items-start gap-3'}`}>
                 {hasImage ? (
                   <>
                     <img
                       src={src!}
                       alt={text}
                       className="w-full h-44 object-cover"
                       loading="lazy"
                       onError={e => {
                         const li = (e.currentTarget as HTMLImageElement).closest('li');
                         if (li) {
                           li.className = 'text-slate-700 flex items-start gap-3';
                           li.innerHTML = `<div class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colorClass.replace('text-', 'bg-')}"></div><span class="leading-relaxed">${text}</span>`;
                         }
                       }}
                     />
                     <p className="px-3 py-2 text-sm leading-relaxed">{text}</p>
                   </>
                 ) : (
                   <>
                     <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colorClass.replace('text-', 'bg-')}`} />
                     <span className="leading-relaxed">{text}</span>
                   </>
                 )}
               </li>
             );
           })}
         </ul>
       </div>
     ))}
  </>
);
