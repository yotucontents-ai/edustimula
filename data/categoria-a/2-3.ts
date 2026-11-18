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
        },
        {
          id: "salto",
          title: "Salto",
          content: [
            {
              title: "Salto",
              items: [
                { text: "Colocarlo de pie encima de una cama o colchoneta, cogiéndole de las manos, animarle a saltar. Para ello debe doblar ligeramente las rodillas, al tiempo que se le da ligeramente impulso y se le dice “salta”.", imageSrc: fotoProvisional("child-jumping-on-mattress") },
                { text: "De pie en el suelo, se le coge de las manos y se le da la misma orden y procedimiento. Retirando poco a poco el apoyo y que el niño salte solo con los dos pies juntos.", imageSrc: fotoProvisional("child-jumping-on-floor") },
                { text: "Colocarlo sobre un escalón. Cogerle de las manos que doble ligeramente las rodillas y se le dice “salta”, a la vez que se le da impulso para la ejecución del movimiento. Poco a poco se retira la ayuda hasta que el niño salte solo a pies juntillas.", imageSrc: fotoProvisional("child-jumping-from-step") }
              ]
            }
          ]
        },
        {
          id: "triciclo-pedalear",
          title: "Manejar triciclo. Pedalear",
          content: [
            {
              title: "Manejar triciclo. Pedalear",
              items: [
                { text: "Enseñar al niño a subirse y bajarse del triciclo. Hacer que se siente, atarle los pies a los pedales con cintas y enseñarle a pedalear. Reforzar sus intentos.", imageSrc: fotoProvisional("child-tricycle-feet-tied") },
                { text: "Cuando sepa llevar el triciclo con los dos pies atados a los pedales, desatarle uno y animarle a seguir pedaleando.", imageSrc: fotoProvisional("child-tricycle-one-foot-free") },
                { text: "Desatarle también el otro pie para que pedalee normalmente.", imageSrc: fotoProvisional("child-tricycle-pedaling-free") }
              ]
            }
          ]
        },
        {
          id: "sostenerse-un-pie",
          title: "Intentar sostenerse sobre un solo pie",
          content: [
            {
              title: "Intentar sostenerse sobre un solo pie",
              items: [
                { text: "Ponerlo delante de un espejo grande, cogerle de la mano y decirle “levanta el pie”, al tiempo que lo hace el adulto. Reforzar la imitación. Intentar que sea capaz de estar en esta posición al menos 3”. Luego se le puede acercar una silla para que se agarre a ella.", imageSrc: fotoProvisional("child-one-foot-mirror") },
                { text: "Cuando el niño sea capaz de hacerlo con el apoyo de una mano, intentar que lo haga sin ninguna ayuda solo, ante el modelo del adulto, sin espejo.", imageSrc: fotoProvisional("child-one-foot-alone") }
              ]
            }
          ]
        },
        {
          id: "jugar-en-cuclillas",
          title: "Jugar en cuclillas",
          content: [
            {
              title: "Jugar en cuclillas",
              items: [
                { text: "Poner al niño en cuclillas en el suelo, agarrado de ambas manos. Reforzar a mantener esta posición.", imageSrc: fotoProvisional("child-squatting-holding-hands") },
                { text: "Estando el niño en cuclillas, soltarle una mano y ofrecerle un juguete para que lo coja con esa mano.", imageSrc: fotoProvisional("child-squatting-reaching-toy") },
                { text: "Soltarle las manos para que se mantenga en esa posición sin ayuda.", imageSrc: fotoProvisional("child-squatting-no-help") }
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
