import { AgeGroup, AreaType } from '../../../types';
import { fotoProvisional } from '../../helpers';

export const tramo0a3: AgeGroup = {
  id: "tramo-0-3",
  label: "1er tramo (0 - 3 meses)",
  areas: {
    [AreaType.GROSS_MOTOR]: {
      title: "Motricidad Gruesa",
      subSections: [
        {
          id: "fortalecimiento-cuello",
          title: "Fortalecimiento de cuello y espalda",
          content: [
            {
              title: "Fortalecimiento de cuello y espalda",
              items: [
                { text: "Utilizamos tres dedos para sujetar el cuello del bebé y hacer una especie de abdominales: lo inclinamos desde tumbado hacia sentado.", imageSrc: "/images/cuello-pull-to-sit.jpg" },
                { text: "Entre 2-3 meses: boca abajo, ponemos objetos de colores delante para que levante y gire levemente la cabecita.", imageSrc: "/images/cuello-tummy-toys.jpg" },
                { text: "Boca abajo sobre superficie dura apoyando los antebrazos; acariciar su espalda bajando del cuello a la cadera. NO en sentido contrario.", imageSrc: "/images/cuello-espalda.jpg" }
              ]
            }
          ]
        },
        {
          id: "tono-muscular",
          title: "Tono muscular",
          content: [
            {
              title: "Con sumo cuidado movilizamos al bebé",
              items: [
                { text: "Extendemos brazos arriba.", imageSrc: "/images/tono-brazos-arriba.jpg" },
                { text: "Brazos cruzados sobre el pecho.", imageSrc: "/images/tono-brazos-cruzados.jpg" },
                { text: "Un brazo arriba, otro abajo.", imageSrc: "/images/tono-brazo-alt.jpg" },
                { text: "Extendemos piernas, se las flexionamos suavemente por la rodilla: primero una pierna, luego otra, las dos a la vez.", imageSrc: "/images/tono-piernas.jpg" },
                { text: "Brazo y pierna cruzada.", imageSrc: fotoProvisional("baby-cross-pattern") }
              ]
            }
          ]
        }
      ]
    },
    [AreaType.FINE_MOTOR]: {
      title: "Motricidad Fina",
      subSections: [
        {
          id: "estimulacion-tactil",
          title: "Estimulación táctil y manipulación",
          content: [
            {
              title: "Actividades",
              items: [
                { text: "Con objetos de diferentes texturas se los pasamos suavemente por las manos y por los pies, por todo su cuerpo.", imageSrc: fotoProvisional("baby-texture-play") },
                { text: "Ofrécele juguetes para que los sujete; permítele que se los lleve a la boca si están limpios.", imageSrc: fotoProvisional("baby-holds-toy") },
                { text: "Si no es capaz de coger un objeto, ayúdale poniendo sus dedos alrededor del mismo.", imageSrc: fotoProvisional("baby-grasp-finger") },
                { text: "Extiende sus puños; se acostumbrará a una mayor sensación que reciben sus palmas.", imageSrc: fotoProvisional("baby-open-fist") },
                { text: "Estira suavemente cada dedo de la mano.", imageSrc: fotoProvisional("baby-finger-stretch") },
                { text: "Recorre su cuerpo con una toalla pequeña o paño suave: manos, piernas, pies.", imageSrc: fotoProvisional("baby-soft-cloth") },
                { text: "Coge su mano y llévasela a su boca para que la chupe.", imageSrc: fotoProvisional("baby-hand-mouth") },
                { text: "Pasar su mano sobre la cara y pelo.", imageSrc: fotoProvisional("baby-hand-face") },
                { text: "Descubrir sus manos: llevar las manos a la altura de los ojos y unírselas.", imageSrc: fotoProvisional("baby-discover-hands") }
              ]
            }
          ]
        }
      ]
    },
    [AreaType.LANGUAGE]: {
      title: "Lenguaje",
      subSections: [
        {
          id: "lenguaje-estimulacion",
          title: "Estimulación del lenguaje",
          content: [
            {
              title: "Interacción y voz",
              items: [
                { text: "Interactuar frecuentemente con el bebé: hablarle, cantarle, arrullarle. Es muy bueno que escuche nuestra voz.", imageSrc: fotoProvisional("baby-talk-sing") },
                { text: "Responder con entusiasmo a los sonidos y sonrisas del bebé.", imageSrc: fotoProvisional("baby-smile-respond") },
                { text: "Comienza a reconocer sonidos. Es recomendable hablarle con voz suave.", imageSrc: fotoProvisional("baby-soft-voice") },
              ]
            },
            {
              title: "Comunicación a través del llanto",
              items: [
                { text: "«Nheh» o «leh» — Reflejo de búsqueda: tengo hambre.", imageSrc: fotoProvisional("baby-cry-hungry") },
                { text: "«Owh» — Estoy cansado, tengo sueño.", imageSrc: fotoProvisional("baby-yawn-tired") },
                { text: "«Ehe» o «el», sonido intermitente — Estoy incómodo y necesito eruptar.", imageSrc: fotoProvisional("baby-burp") },
                { text: "«Eairh», sonido gutural «arrrr» y las piernas se doblan al estómago — Tengo gases o cólicos, me duele la barriga.", imageSrc: fotoProvisional("baby-gas-colic") },
                { text: "«Ay, ay, puaj» y ojos cerrados — Sonido de fatiga.", imageSrc: fotoProvisional("baby-fatigue") },
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
          id: "vinculo-afectivo",
          title: "Vínculo afectivo",
          content: [
            {
              title: "Actividades",
              items: [
                { text: "Sonríele y háblale mientras lo atiendes.", imageSrc: fotoProvisional("parent-smile-baby") },
                { text: "Distingue su llanto. Apóyalo contra tu pecho.", imageSrc: fotoProvisional("parent-baby-chest") },
                { text: "Usa tono de voz dulce, acarícialo.", imageSrc: fotoProvisional("parent-baby-voice") },
                { text: "Dale mucho cariño, besos y abrazos.", imageSrc: fotoProvisional("parent-hug-baby") }
              ]
            }
          ]
        }
      ]
    },
    [AreaType.PERCEPTION]: {
      title: "Percepción y Cognición",
      subSections: [
        {
          id: "estimulacion-visual",
          title: "Estimulación visual",
          content: [
            {
              title: "Estimulación visual",
              items: [
                { text: "Mírale a la cara, atrae su mirada.", imageSrc: fotoProvisional("mother-baby-gaze") },
                { text: "Usamos objetos de colores con contrastes como blanco, negro, rojo — cintas, tarjetas. Las llevamos de derecha a izquierda delante de la cara del bebé, de arriba abajo.", imageSrc: fotoProvisional("baby-contrast-cards") }
              ]
            }
          ]
        },
        {
          id: "estimulacion-auditiva",
          title: "Estimulación auditiva",
          content: [
            {
              title: "Estimulación auditiva",
              items: [
                { text: "Utilizamos objetos sonoros y también con nuestra voz. El bebé se inclinará ligeramente hacia el lado del sonido.", imageSrc: fotoProvisional("baby-sound-object") },
                { text: "Háblale para que empiece a fijar la mirada.", imageSrc: fotoProvisional("parent-talk-newborn") },
                { text: "Ponle música suave y de baja intensidad; estimula la sensibilidad auditiva y cerebral.", imageSrc: fotoProvisional("baby-listen-music") },
                { text: "Dale un sonajero y agítalo para que intente imitar el movimiento. Cuida que no se golpee.", imageSrc: fotoProvisional("baby-rattle-play") },
                { text: "Háblale, llámale por su nombre.", imageSrc: fotoProvisional("baby-name-call") }
              ]
            }
          ]
        }
      ]
    },
  }
};
