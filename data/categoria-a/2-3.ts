import { AgeGroup, AreaType, IntroItem } from '../../types';
import { fotoProvisional } from '../helpers';

export const edad2a3: AgeGroup = {
  id: "2-3",
  label: "2 – 3 años",
  introText: [
    { icon: "MessageSquare", color: "bg-orange-100", text: "A esta edad el niño ya puede realizar frases sencillas." },
    { icon: "Gamepad2",      color: "bg-purple-100", text: "Fomenta el juego simbólico (hacer como que come, como que duerme)." },
    { icon: "Activity",      color: "bg-green-100",  text: "Trabaja la coordinación motora con juegos de saltar o trepar." },
  ] as IntroItem[],
  areas: {
    [AreaType.SOCIAL]: {
      title: "Área Social",
      subSections: [
        {
          id: "emotions",
          title: "Identificar emociones",
          content: [
            {
              title: "Juego de caras",
              items: [
                { text: "Muéstrale una cara feliz y otra triste.", imageSrc: fotoProvisional("child-happy-sad-face") },
                { text: "Pídele que imite la cara que pones tú.", imageSrc: fotoProvisional("child-imitate-expression") },
                { text: "Nombra la emoción: 'Estoy alegre', 'Estoy enfadado'.", imageSrc: fotoProvisional("child-emotions-naming") },
              ]
            }
          ]
        }
      ]
    },
    [AreaType.PERCEPTION]: {
      title: "Percepción y Cognición",
      subSections: []
    }
  }
};
