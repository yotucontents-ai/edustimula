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
    [AreaType.GROSS_MOTOR]: {
      title: "Motricidad Gruesa",
      subSections: [
        {
          id: "alternar-pies-escaleras",
          title: "Alternar los pies al subir escaleras",
          content: [
            {
              title: "Alternar los pies al subir escaleras",
              items: [
                { text: "Colocamos al niño ante una escalera. Le damos la mano y le animamos a que suba colocando un pie en cada peldaño.", imageSrc: fotoProvisional("child-stairs-holding-hand") },
                { text: "Ponerlo agarrado a la barandilla y animarlo a que suba la escalera de igual manera.", imageSrc: fotoProvisional("child-stairs-handrail") },
                { text: "Ponerlo al comienzo de la escalera y animarlo a subirla sin apoyo, colocando un pie en cada peldaño.", imageSrc: fotoProvisional("child-stairs-no-support") }
              ]
            }
          ]
        },
        {
          id: "andar-hilera-tacos",
          title: "Andar sobre una hilera de tacos",
          content: [
            {
              title: "Andar sobre una hilera de tacos de 15 cm aproximadamente de ancho",
              items: [
                { text: "Hacer una hilera de tacos de 2 m aproximadamente, animar al niño a subir y a andar por ella, colocando un pie delante del otro. Si es preciso al principio, darle ayuda física cogiéndole una mano.", imageSrc: fotoProvisional("child-walking-wooden-blocks") }
              ]
            }
          ]
        },
        {
          id: "andar-desnivel",
          title: "Andar en desnivel",
          content: [
            {
              title: "Andar en desnivel",
              items: [
                { text: "Colocar un tablero de 10 cm de alto y 1,30 cm de largo. Poner al niño con un pie en el tablero y el otro en el suelo. Animarle a andar en esa posición ayudándole cogiéndole de una mano hasta que aprenda a realizarlo sin dificultad.", imageSrc: fotoProvisional("child-walking-uneven-board-help") },
                { text: "Hacer lo mismo, pero sin ayuda.", imageSrc: fotoProvisional("child-walking-uneven-board-alone") },
                { text: "Hacer lo mismo con un tablero que mida 15 cm de alto.", imageSrc: fotoProvisional("child-walking-higher-board") }
              ]
            }
          ]
        },
        {
          id: "lanzar-atrapar-pelota",
          title: "Lanzar y atrapar una pelota con ambas manos",
          content: [
            {
              title: "Lanzar y atrapar una pelota con ambas manos",
              items: [
                { text: "Ponerse niño y adulto de pie frente a frente. Jugar a lanzarse la pelota uno al otro. Si el niño tiene dificultad en atrapar la pelota, situar a otro adulto detrás del niño para que le ayude con sus manos y atrape la pelota. Retirar la ayuda paulatinamente.", imageSrc: fotoProvisional("child-adult-throw-catch-ball") }
              ]
            }
          ]
        }
      ]
    },
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
