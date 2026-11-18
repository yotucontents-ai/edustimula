import { AgeGroup, AreaType } from '../../../types';
import { fotoProvisional } from '../../helpers';

export const tramo3a6: AgeGroup = {
  id: "tramo-3-6",
  label: "2º tramo (3 - 6 meses)",
  areas: {
    [AreaType.GROSS_MOTOR]: {
      title: "Motricidad Gruesa",
      subSections: [
        {
          id: "sentado-ayuda",
          title: "Mantenerse sentado con ayuda",
          content: [
            {
              title: "Mantenerse sentado, con ayuda y apoyo",
              items: [
                { text: "Dejarlo sentado en su silla inclinado todo el tiempo que resista sin cansarse; progresivamente ir pasándolo a posición más vertical del respaldo. Sentarlo sobre almohadones duros en distintos lugares de la casa.", imageSrc: fotoProvisional("seated-baby-chair") },
                { text: "Ponerlo sentado en una superficie dura con las piernas en forma de uve.", imageSrc: fotoProvisional("seated-baby-uve") },
                { text: "Cogerlo verticalmente, su espalda contra nuestro pecho, sujetando con una mano sus rodillas y la otra su abdomen: inclinarlo hacia adelante.", imageSrc: fotoProvisional("baby-upright-support") },
                { text: "Apoyo sobre su cuerpo: estando descalzo, sostenerlo por las axilas, elevarlo y dejarlo caer suavemente sobre distintas superficies.", imageSrc: fotoProvisional("baby-axila-support") }
              ]
            }
          ]
        },
        {
          id: "volteos-dorsales",
          title: "Volteos y ejercicios dorsales",
          content: [
            {
              title: "Volteos",
              items: [
                { text: "Pasar de boca arriba a de lado, animarlo ofreciéndole algún juguete.", imageSrc: fotoProvisional("baby-roll-side") },
                { text: "Pasar de boca arriba a boca abajo. Coger su pierna por debajo de la rodilla, flexionarla e iniciar el volteo.", imageSrc: fotoProvisional("baby-roll-tummy") }
              ]
            },
            {
              title: "Ejercicios dorsales",
              items: [
                { text: "Al niño boca abajo, con una mano por las rodillas y la otra en el pecho, inclinarlo hacia un balón grande hasta que apoye las manos e inicie un esfuerzo para enderezarse. Reforzar sus intentos.", imageSrc: fotoProvisional("baby-ball-exercise") }
              ]
            }
          ]
        },
        {
          id: "reflejos",
          title: "Reflejos",
          content: [
            {
              title: "Reflejos",
              items: [
                { text: "De Landau: coger al bebé por el tronco, elevarlo horizontalmente. El niño debe levantar su cabeza y flexionar las extremidades.", imageSrc: fotoProvisional("reflex-landau") },
                { text: "Del paracaidista: cogemos al niño por el tronco y rápidamente lo acercamos al suelo. Antes de que la cabeza llegue al suelo, el niño extiende sus brazos. Es una reacción de equilibrio que dura toda la vida.", imageSrc: fotoProvisional("reflex-parachute") }
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
          id: "ejercicios-manos-dedos",
          title: "Ejercicios de manos y dedos",
          content: [
            {
              title: "Ejercicios de manos y dedos",
              items: [
                { text: "Masaje en cada dedo de la mano.", imageSrc: fotoProvisional("baby-finger-massage") },
                { text: "Movimientos de rotación de muñeca.", imageSrc: fotoProvisional("baby-wrist-rotation") },
                { text: "Flexión de dedos.", imageSrc: fotoProvisional("baby-finger-flex") },
                { text: "Extensión y flexión de los dedos del pie.", imageSrc: fotoProvisional("baby-toe-flex") }
              ]
            }
          ]
        },
        {
          id: "coordinacion-mano-cabeza",
          title: "Coordinación mano-cabeza",
          content: [
            {
              title: "Coordinación mano-cabeza",
              items: [
                { text: "Cogemos las manos del bebé y se las juntamos, cantándole alguna canción como \"Palmas, palmitas\" o \"los lobitos\".", imageSrc: fotoProvisional("baby-clapping-hands") }
              ]
            }
          ]
        },
        {
          id: "presion-voluntaria",
          title: "Prensión voluntaria",
          content: [
            {
              title: "Coger objetos que se le ofrecen",
              items: [
                { text: "Le acercamos objetos para que intente cogerlos.", imageSrc: fotoProvisional("baby-reach-object") },
                { text: "Ofrecerle objetos de distintos tamaños. Los grandes para que tenga que cogerlos con toda la mano, y los pequeños para que le entren en su palma y los agarre.", imageSrc: fotoProvisional("baby-grasp-sizes") },
                { text: "Jugar a darle juguetes y luego a quitárselos.", imageSrc: fotoProvisional("baby-toy-exchange") },
                { text: "Tumbado, le tapamos la cara con un pañuelo; esperamos a que se lo quite. Si no lo consigue, se lo quitamos nosotros.", imageSrc: fotoProvisional("baby-peek-cloth") }
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
          id: "emision-sonidos",
          title: "Emisión de sonidos",
          content: [
            {
              title: "Al final de los 6 meses",
              items: [
                { text: "Al final de los 6 meses tiene una buena fonación; realiza sonidos para llamar la atención, para entretenerse o para expresar sus necesidades.", imageSrc: fotoProvisional("baby-vocalize") },
                { text: "Le nombramos los objetos que le damos.", imageSrc: fotoProvisional("parent-name-objects") },
                { text: "Le contamos cuentos mientras le tenemos en brazos. Le cantamos canciones.", imageSrc: fotoProvisional("parent-baby-story") },
                { text: "Jugamos a emitir sonidos un par de minutos al día.", imageSrc: fotoProvisional("baby-sounds-play") },
                { text: "Jugamos a emitir cadenas de vocales: oooo, aaa, iiii… Cadenas consonánticas: babababa, mamamama, papapa.", imageSrc: fotoProvisional("baby-vowel-chains") },
                { text: "Hacemos ruidos con los labios juntos como si tirásemos besos.", imageSrc: fotoProvisional("parent-lip-sounds") },
                { text: "Gritamos.", imageSrc: fotoProvisional("baby-shout-play") }
              ]
            }
          ]
        },
        {
          id: "risas-gritos",
          title: "Risas y gritos de alegría",
          content: [
            {
              title: "Risas y gritos de alegría",
              items: [
                { text: "Dejamos que el bebé emita sonidos sin interrumpirle. Al parar le mostramos nuestra satisfacción.", imageSrc: fotoProvisional("baby-happy-sounds") }
              ]
            }
          ]
        },
        {
          id: "lenguaje-gestual",
          title: "Lenguaje gestual",
          content: [
            {
              title: "Lenguaje gestual",
              items: [
                { text: "Jugamos a poner cara de sorpresa, abrimos la boca y los ojos, levantamos las cejas.", imageSrc: fotoProvisional("parent-surprise-face") },
                { text: "Le sacamos la lengua y nos ponemos las manos en las orejas moviéndolas.", imageSrc: fotoProvisional("parent-tongue-face") },
                { text: "Ponemos cara de enfado, de tristeza, de llorar.", imageSrc: fotoProvisional("parent-expression-face") }
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
          id: "socializacion-3-6",
          title: "Socialización",
          content: [
            {
              title: "Actividades sociales",
              items: [
                { text: "Responde al sonido de su nombre.", imageSrc: fotoProvisional("baby-name-response") },
                { text: "Iniciación de la toma de alimentos semisólidos con cuchara.", imageSrc: fotoProvisional("baby-spoon-food") },
                { text: "Acostumbrarle a salir y a hablarle cuando se encuentre con personas en el parque o en la calle.", imageSrc: fotoProvisional("baby-outdoor-social") },
                { text: "No dejar que lo cojan bruscamente otras personas. Cuando lo hagan, nos acercamos a él y ponemos cara de satisfacción.", imageSrc: fotoProvisional("baby-gentle-approach") },
                { text: "No lo dejamos mucho tiempo en brazos de otras personas.", imageSrc: fotoProvisional("baby-parent-arms") },
                { text: "Dejar que otras personas jueguen con él. Mostrarle nuestra alegría.", imageSrc: fotoProvisional("baby-others-play") }
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
          id: "fijacion-visual-3-6",
          title: "Fijación visual",
          content: [
            {
              title: "Fijación visual",
              items: [
                { text: "Colgar objetos de colores vivos en la cuna al alcance de la vista.", imageSrc: fotoProvisional("crib-colorful-objects") },
                { text: "Colgar objetos de colores vivos con un hilo encima de la cabeza a unos 20 cm.", imageSrc: fotoProvisional("baby-hanging-toy-string") },
                { text: "Cara a cara con el bebé, a unos 50 cm, acercándonos lentamente.", imageSrc: fotoProvisional("baby-face-to-face-50cm") },
                { text: "En el momento de la alimentación llamarle la atención con objetos de colores.", imageSrc: fotoProvisional("baby-feeding-colorful-toy") },
              ]
            }
          ]
        },
        {
          id: "seguimiento-visual-3-6",
          title: "Seguimiento visual de los objetos",
          content: [
            {
              title: "Direcciones de un objeto",
              items: [
                { text: "Seguir con la mirada un objeto de colores vivos colgado de un hilo: lateral, hacia adelante y hacia atrás.", imageSrc: fotoProvisional("baby-tracking-object-directions") },
              ]
            },
            {
              title: "Lanzar bolitas ante su mirada",
              items: [
                { text: "Hacer rodar bolitas de distintos colores sobre la mesa ante su mirada.", imageSrc: fotoProvisional("baby-watching-rolling-balls") },
              ]
            }
          ]
        },
        {
          id: "localizacion-sonidos-3-6",
          title: "Localización de sonidos",
          content: [
            {
              title: "Localización de sonidos",
              items: [
                { text: "Ponerle una pulsera con cascabeles en la muñeca.", imageSrc: fotoProvisional("baby-wrist-jingle-bracelet") },
                { text: "Hacer sonar sonajeros y campanillas a unos 20 cm de cada oído, fuera del campo visual.", imageSrc: fotoProvisional("baby-rattle-ear-sound") },
              ]
            }
          ]
        },
        {
          id: "juego-esconderse-3-6",
          title: "Juego de esconderse",
          content: [
            {
              title: "Juego de esconderse",
              items: [
                { text: "Tapar y destapar juguetes inmediatamente, luego mantenerlos tapados unos segundos.", imageSrc: fotoProvisional("baby-peek-a-boo-toy-cover") },
              ]
            }
          ]
        },
        {
          id: "ejercicios-atencion-3-6",
          title: "Ejercicios de atención",
          content: [
            {
              title: "Ejercicios de atención",
              items: [
                { text: "Paseos deteniéndonos ante niños jugando, palomas, perros u otras situaciones que llamen su atención.", imageSrc: fotoProvisional("baby-walk-attention-stimulation") },
              ]
            }
          ]
        },
      ]
    },
  }
};
