import React, { useState, useEffect } from 'react';
import { X, Volume2, Circle, CheckCircle } from 'lucide-react';
import { InteractiveGame } from '../types';
import { IconMap } from '../icons';
import { playTextToSpeech } from '../utils/speech';

export const FullScreenGame: React.FC<{ 
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
                  <img src={opt.imageSrc} alt={opt.label} className="w-full h-32 object-contain" />
                ) : opt.emoji ? (
                  <span style={{ fontSize: game.options.length <= 2 ? '80px' : '56px' }} role="img" aria-label={opt.label} className="leading-none select-none">{opt.emoji}</span>
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
