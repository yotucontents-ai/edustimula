import { CategoryId, Category, AreaType, IntroItem } from './types';

export const APP_DATA: Category[] = [
  {
    id: CategoryId.A,
    title: "Estimulación temprana (0 - 3 años)",
    colorClass: "bg-orange-500",
    bgClass: "bg-orange-50",
    textClass: "text-orange-600",
    areaConfigs: [
      { type: AreaType.GROSS_MOTOR,  title: "Motricidad Gruesa",        colorBase: "bg-orange-500" },
      { type: AreaType.FINE_MOTOR,   title: "Motricidad Fina",          colorBase: "bg-rose-500" },
      { type: AreaType.LANGUAGE,     title: "Lenguaje",                 colorBase: "bg-sky-500" },
      { type: AreaType.SOCIAL,       title: "Área Social",              colorBase: "bg-emerald-500" },
      { type: AreaType.PERCEPTION,   title: "Percepción y Cognición",   colorBase: "bg-violet-500" },
    ],
    ageGroups: [
      {
        id: "0-1",
        label: "0 – 1 año",
        introText: [
          { icon: "Music",      color: "bg-orange-100",  text: "Háblale y cántale mientras le haces los ejercicios." },
          { icon: "BedSingle",  color: "bg-blue-100",    text: "Nunca lo despiertes ni lo fuerces." },
          { icon: "Clock",      color: "bg-amber-100",   text: "Espera 20 minutos después de comer." },
          { icon: "Home",       color: "bg-green-100",   text: "Trabaja en un lugar seguro y tranquilo." },
          { icon: "RefreshCw",  color: "bg-violet-100",  text: "Repite los ejercicios dos veces por semana." },
          { icon: "Hand",       color: "bg-rose-100",    text: "No usar guantes; que tenga el contacto con la piel." },
          { icon: "MonitorOff", color: "bg-slate-100",   text: "No usar tablets ni pantallas." },
        ] as IntroItem[],
        subGroups: [
          {
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
                          { text: "Brazo y pierna cruzada.", imageSrc: "https://picsum.photos/seed/baby-cross-pattern/600/400" }
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
                          { text: "Con objetos de diferentes texturas se los pasamos suavemente por las manos y por los pies, por todo su cuerpo.", imageSrc: "https://picsum.photos/seed/baby-texture-play/600/400" },
                          { text: "Ofrécele juguetes para que los sujete; permítele que se los lleve a la boca si están limpios.", imageSrc: "https://picsum.photos/seed/baby-holds-toy/600/400" },
                          { text: "Si no es capaz de coger un objeto, ayúdale poniendo sus dedos alrededor del mismo.", imageSrc: "https://picsum.photos/seed/baby-grasp-finger/600/400" },
                          { text: "Extiende sus puños; se acostumbrará a una mayor sensación que reciben sus palmas.", imageSrc: "https://picsum.photos/seed/baby-open-fist/600/400" },
                          { text: "Estira suavemente cada dedo de la mano.", imageSrc: "https://picsum.photos/seed/baby-finger-stretch/600/400" },
                          { text: "Recorre su cuerpo con una toalla pequeña o paño suave: manos, piernas, pies.", imageSrc: "https://picsum.photos/seed/baby-soft-cloth/600/400" },
                          { text: "Coge su mano y llévasela a su boca para que la chupe.", imageSrc: "https://picsum.photos/seed/baby-hand-mouth/600/400" },
                          { text: "Pasar su mano sobre la cara y pelo.", imageSrc: "https://picsum.photos/seed/baby-hand-face/600/400" },
                          { text: "Descubrir sus manos: llevar las manos a la altura de los ojos y unírselas.", imageSrc: "https://picsum.photos/seed/baby-discover-hands/600/400" }
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
                          { text: "Interactuar frecuentemente con el bebé: hablarle, cantarle, arrullarle. Es muy bueno que escuche nuestra voz.", imageSrc: "https://picsum.photos/seed/baby-talk-sing/600/400" },
                          { text: "Responder con entusiasmo a los sonidos y sonrisas del bebé.", imageSrc: "https://picsum.photos/seed/baby-smile-respond/600/400" },
                          { text: "Comienza a reconocer sonidos. Es recomendable hablarle con voz suave.", imageSrc: "https://picsum.photos/seed/baby-soft-voice/600/400" },
                        ]
                      },
                      {
                        title: "Comunicación a través del llanto",
                        items: [
                          { text: "«Nheh» o «leh» — Reflejo de búsqueda: tengo hambre.", imageSrc: "https://picsum.photos/seed/baby-cry-hungry/600/400" },
                          { text: "«Owh» — Estoy cansado, tengo sueño.", imageSrc: "https://picsum.photos/seed/baby-yawn-tired/600/400" },
                          { text: "«Ehe» o «el», sonido intermitente — Estoy incómodo y necesito eruptar.", imageSrc: "https://picsum.photos/seed/baby-burp/600/400" },
                          { text: "«Eairh», sonido gutural «arrrr» y las piernas se doblan al estómago — Tengo gases o cólicos, me duele la barriga.", imageSrc: "https://picsum.photos/seed/baby-gas-colic/600/400" },
                          { text: "«Ay, ay, puaj» y ojos cerrados — Sonido de fatiga.", imageSrc: "https://picsum.photos/seed/baby-fatigue/600/400" },
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
                          { text: "Sonríele y háblale mientras lo atiendes.", imageSrc: "https://picsum.photos/seed/parent-smile-baby/600/400" },
                          { text: "Distingue su llanto. Apóyalo contra tu pecho.", imageSrc: "https://picsum.photos/seed/parent-baby-chest/600/400" },
                          { text: "Usa tono de voz dulce, acarícialo.", imageSrc: "https://picsum.photos/seed/parent-baby-voice/600/400" },
                          { text: "Dale mucho cariño, besos y abrazos.", imageSrc: "https://picsum.photos/seed/parent-hug-baby/600/400" }
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
                          { text: "Mírale a la cara, atrae su mirada.", imageSrc: "https://picsum.photos/seed/mother-baby-gaze/600/400" },
                          { text: "Usamos objetos de colores con contrastes como blanco, negro, rojo — cintas, tarjetas. Las llevamos de derecha a izquierda delante de la cara del bebé, de arriba abajo.", imageSrc: "https://picsum.photos/seed/baby-contrast-cards/600/400" }
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
                          { text: "Utilizamos objetos sonoros y también con nuestra voz. El bebé se inclinará ligeramente hacia el lado del sonido.", imageSrc: "https://picsum.photos/seed/baby-sound-object/600/400" },
                          { text: "Háblale para que empiece a fijar la mirada.", imageSrc: "https://picsum.photos/seed/parent-talk-newborn/600/400" },
                          { text: "Ponle música suave y de baja intensidad; estimula la sensibilidad auditiva y cerebral.", imageSrc: "https://picsum.photos/seed/baby-listen-music/600/400" },
                          { text: "Dale un sonajero y agítalo para que intente imitar el movimiento. Cuida que no se golpee.", imageSrc: "https://picsum.photos/seed/baby-rattle-play/600/400" },
                          { text: "Háblale, llámale por su nombre.", imageSrc: "https://picsum.photos/seed/baby-name-call/600/400" }
                        ]
                      }
                    ]
                  }
                ]
              },
            }
          },
          {
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
                          { text: "Dejarlo sentado en su silla inclinado todo el tiempo que resista sin cansarse; progresivamente ir pasándolo a posición más vertical del respaldo. Sentarlo sobre almohadones duros en distintos lugares de la casa.", imageSrc: "https://picsum.photos/seed/seated-baby-chair/600/400" },
                          { text: "Ponerlo sentado en una superficie dura con las piernas en forma de uve.", imageSrc: "https://picsum.photos/seed/seated-baby-uve/600/400" },
                          { text: "Cogerlo verticalmente, su espalda contra nuestro pecho, sujetando con una mano sus rodillas y la otra su abdomen: inclinarlo hacia adelante.", imageSrc: "https://picsum.photos/seed/baby-upright-support/600/400" },
                          { text: "Apoyo sobre su cuerpo: estando descalzo, sostenerlo por las axilas, elevarlo y dejarlo caer suavemente sobre distintas superficies.", imageSrc: "https://picsum.photos/seed/baby-axila-support/600/400" }
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
                          { text: "Pasar de boca arriba a de lado, animarlo ofreciéndole algún juguete.", imageSrc: "https://picsum.photos/seed/baby-roll-side/600/400" },
                          { text: "Pasar de boca arriba a boca abajo. Coger su pierna por debajo de la rodilla, flexionarla e iniciar el volteo.", imageSrc: "https://picsum.photos/seed/baby-roll-tummy/600/400" }
                        ]
                      },
                      {
                        title: "Ejercicios dorsales",
                        items: [
                          { text: "Al niño boca abajo, con una mano por las rodillas y la otra en el pecho, inclinarlo hacia un balón grande hasta que apoye las manos e inicie un esfuerzo para enderezarse. Reforzar sus intentos.", imageSrc: "https://picsum.photos/seed/baby-ball-exercise/600/400" }
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
                          { text: "De Landau: coger al bebé por el tronco, elevarlo horizontalmente. El niño debe levantar su cabeza y flexionar las extremidades.", imageSrc: "https://picsum.photos/seed/reflex-landau/600/400" },
                          { text: "Del paracaidista: cogemos al niño por el tronco y rápidamente lo acercamos al suelo. Antes de que la cabeza llegue al suelo, el niño extiende sus brazos. Es una reacción de equilibrio que dura toda la vida.", imageSrc: "https://picsum.photos/seed/reflex-parachute/600/400" }
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
                          { text: "Masaje en cada dedo de la mano.", imageSrc: "https://picsum.photos/seed/baby-finger-massage/600/400" },
                          { text: "Movimientos de rotación de muñeca.", imageSrc: "https://picsum.photos/seed/baby-wrist-rotation/600/400" },
                          { text: "Flexión de dedos.", imageSrc: "https://picsum.photos/seed/baby-finger-flex/600/400" },
                          { text: "Extensión y flexión de los dedos del pie.", imageSrc: "https://picsum.photos/seed/baby-toe-flex/600/400" }
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
                          { text: "Cogemos las manos del bebé y se las juntamos, cantándole alguna canción como \"Palmas, palmitas\" o \"los lobitos\".", imageSrc: "https://picsum.photos/seed/baby-clapping-hands/600/400" }
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
                          { text: "Le acercamos objetos para que intente cogerlos.", imageSrc: "https://picsum.photos/seed/baby-reach-object/600/400" },
                          { text: "Ofrecerle objetos de distintos tamaños. Los grandes para que tenga que cogerlos con toda la mano, y los pequeños para que le entren en su palma y los agarre.", imageSrc: "https://picsum.photos/seed/baby-grasp-sizes/600/400" },
                          { text: "Jugar a darle juguetes y luego a quitárselos.", imageSrc: "https://picsum.photos/seed/baby-toy-exchange/600/400" },
                          { text: "Tumbado, le tapamos la cara con un pañuelo; esperamos a que se lo quite. Si no lo consigue, se lo quitamos nosotros.", imageSrc: "https://picsum.photos/seed/baby-peek-cloth/600/400" }
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
                          { text: "Al final de los 6 meses tiene una buena fonación; realiza sonidos para llamar la atención, para entretenerse o para expresar sus necesidades.", imageSrc: "https://picsum.photos/seed/baby-vocalize/600/400" },
                          { text: "Le nombramos los objetos que le damos.", imageSrc: "https://picsum.photos/seed/parent-name-objects/600/400" },
                          { text: "Le contamos cuentos mientras le tenemos en brazos. Le cantamos canciones.", imageSrc: "https://picsum.photos/seed/parent-baby-story/600/400" },
                          { text: "Jugamos a emitir sonidos un par de minutos al día.", imageSrc: "https://picsum.photos/seed/baby-sounds-play/600/400" },
                          { text: "Jugamos a emitir cadenas de vocales: oooo, aaa, iiii… Cadenas consonánticas: babababa, mamamama, papapa.", imageSrc: "https://picsum.photos/seed/baby-vowel-chains/600/400" },
                          { text: "Hacemos ruidos con los labios juntos como si tirásemos besos.", imageSrc: "https://picsum.photos/seed/parent-lip-sounds/600/400" },
                          { text: "Gritamos.", imageSrc: "https://picsum.photos/seed/baby-shout-play/600/400" }
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
                          { text: "Dejamos que el bebé emita sonidos sin interrumpirle. Al parar le mostramos nuestra satisfacción.", imageSrc: "https://picsum.photos/seed/baby-happy-sounds/600/400" }
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
                          { text: "Jugamos a poner cara de sorpresa, abrimos la boca y los ojos, levantamos las cejas.", imageSrc: "https://picsum.photos/seed/parent-surprise-face/600/400" },
                          { text: "Le sacamos la lengua y nos ponemos las manos en las orejas moviéndolas.", imageSrc: "https://picsum.photos/seed/parent-tongue-face/600/400" },
                          { text: "Ponemos cara de enfado, de tristeza, de llorar.", imageSrc: "https://picsum.photos/seed/parent-expression-face/600/400" }
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
                          { text: "Responde al sonido de su nombre.", imageSrc: "https://picsum.photos/seed/baby-name-response/600/400" },
                          { text: "Iniciación de la toma de alimentos semisólidos con cuchara.", imageSrc: "https://picsum.photos/seed/baby-spoon-food/600/400" },
                          { text: "Acostumbrarle a salir y a hablarle cuando se encuentre con personas en el parque o en la calle.", imageSrc: "https://picsum.photos/seed/baby-outdoor-social/600/400" },
                          { text: "No dejar que lo cojan bruscamente otras personas. Cuando lo hagan, nos acercamos a él y ponemos cara de satisfacción.", imageSrc: "https://picsum.photos/seed/baby-gentle-approach/600/400" },
                          { text: "No lo dejamos mucho tiempo en brazos de otras personas.", imageSrc: "https://picsum.photos/seed/baby-parent-arms/600/400" },
                          { text: "Dejar que otras personas jueguen con él. Mostrarle nuestra alegría.", imageSrc: "https://picsum.photos/seed/baby-others-play/600/400" }
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
                          { text: "Colgar objetos de colores vivos en la cuna al alcance de la vista.", imageSrc: "https://picsum.photos/seed/crib-colorful-objects/600/400" },
                          { text: "Colgar objetos de colores vivos con un hilo encima de la cabeza a unos 20 cm.", imageSrc: "https://picsum.photos/seed/baby-hanging-toy-string/600/400" },
                          { text: "Cara a cara con el bebé, a unos 50 cm, acercándonos lentamente.", imageSrc: "https://picsum.photos/seed/baby-face-to-face-50cm/600/400" },
                          { text: "En el momento de la alimentación llamarle la atención con objetos de colores.", imageSrc: "https://picsum.photos/seed/baby-feeding-colorful-toy/600/400" },
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
                          { text: "Seguir con la mirada un objeto de colores vivos colgado de un hilo: lateral, hacia adelante y hacia atrás.", imageSrc: "https://picsum.photos/seed/baby-tracking-object-directions/600/400" },
                        ]
                      },
                      {
                        title: "Lanzar bolitas ante su mirada",
                        items: [
                          { text: "Hacer rodar bolitas de distintos colores sobre la mesa ante su mirada.", imageSrc: "https://picsum.photos/seed/baby-watching-rolling-balls/600/400" },
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
                          { text: "Ponerle una pulsera con cascabeles en la muñeca.", imageSrc: "https://picsum.photos/seed/baby-wrist-jingle-bracelet/600/400" },
                          { text: "Hacer sonar sonajeros y campanillas a unos 20 cm de cada oído, fuera del campo visual.", imageSrc: "https://picsum.photos/seed/baby-rattle-ear-sound/600/400" },
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
                          { text: "Tapar y destapar juguetes inmediatamente, luego mantenerlos tapados unos segundos.", imageSrc: "https://picsum.photos/seed/baby-peek-a-boo-toy-cover/600/400" },
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
                          { text: "Paseos deteniéndonos ante niños jugando, palomas, perros u otras situaciones que llamen su atención.", imageSrc: "https://picsum.photos/seed/baby-walk-attention-stimulation/600/400" },
                        ]
                      }
                    ]
                  },
                ]
              },
            }
          },
          {
            id: "tramo-6-9",
            label: "2º tramo (6 - 9 meses)",
            areas: {
              [AreaType.GROSS_MOTOR]: {
                title: "Motricidad Gruesa",
                subSections: [
                  {
                    id: "tono-muscular-6-9",
                    title: "Tono muscular",
                    content: [
                      {
                        title: "Tono muscular",
                        items: [
                          { text: "Ejercicios de relajación y respiración, como en el trimestre anterior con el balón de playa.", imageSrc: "https://picsum.photos/seed/baby-beach-ball-relax/600/400" },
                          { text: "Palpaciones con las yemas de los dedos por todo el cuerpo, ligeros golpes, ligeros masajes.", imageSrc: "https://picsum.photos/seed/baby-fingertip-massage/600/400" },
                          { text: "Amasarle suavemente la espalda, las piernas y los brazos.", imageSrc: "https://picsum.photos/seed/baby-back-leg-massage/600/400" },
                          { text: "Masajes faciales.", imageSrc: "https://picsum.photos/seed/baby-facial-massage/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "posturas-6-9",
                    title: "Posturas: tumbado, sentado, de pie, de lado, a gatas",
                    content: [
                      {
                        title: "Si el bebé no adopta alguna de estas posturas, incitarle a que se coloque en ellas.",
                        items: [
                          { text: "Tumbado boca abajo. Desde esta postura se arrastra hacia atrás, se sienta, gira sobre sí mismo, etc.", imageSrc: "https://picsum.photos/seed/baby-tummy-crawl-spin/600/400" },
                          { text: "Tumbado boca arriba. Sobre todo, cuando algo le llama mucho la atención.", imageSrc: "https://picsum.photos/seed/baby-back-attention/600/400" },
                          { text: "Sentado. Permanece en esta posición al final del trimestre sin perder el equilibrio.", imageSrc: "https://picsum.photos/seed/baby-sitting-balance/600/400" },
                          { text: "De pie. Al final de este trimestre intentan ponerse de pie cuando tienen cerca objetos o personas que se lo permiten.", imageSrc: "https://picsum.photos/seed/baby-standing-support/600/400" },
                          { text: "Gateo. Se inicia el gateo. Con este ejercicio se ejercitan los dos hemisferios del cerebro.", imageSrc: "https://picsum.photos/seed/baby-crawling-start/600/400" },
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
                    id: "prension-6-9",
                    title: "Prensión",
                    content: [
                      {
                        title: "Si el bebé no hace estas acciones, incitarle a que las realice.",
                        items: [
                          { text: "Le gusta coger objetos y soltarlos.", imageSrc: "https://picsum.photos/seed/baby-grasp-release-object/600/400" },
                          { text: "Diferencia unos materiales de otros.", imageSrc: "https://picsum.photos/seed/baby-texture-materials/600/400" },
                          { text: "Utiliza el índice y el pulgar para coger objetos.", imageSrc: "https://picsum.photos/seed/baby-pincer-grasp-6m/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "manos-6-9",
                    title: "Manos",
                    content: [
                      {
                        title: "Si el bebé no hace estas acciones, incitarle a que las realice.",
                        items: [
                          { text: "Señala con el índice, aplaude. Da palmadas, da golpes, tira objetos lejos.", imageSrc: "https://picsum.photos/seed/baby-point-clap-throw/600/400" },
                          { text: "Le gusta manipular objetos con ambas manos.", imageSrc: "https://picsum.photos/seed/baby-both-hands-objects/600/400" },
                          { text: "Empieza a utilizar la pinza pulgar índice para coger objetos más con una mano que con otra.", imageSrc: "https://picsum.photos/seed/baby-thumb-index-dominant/600/400" },
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
                    id: "lenguaje-6-9",
                    title: "Desarrollo del lenguaje",
                    content: [
                      {
                        title: "Si el bebé no hace estas acciones, incitarle a que las realice.",
                        items: [
                          { text: "En este trimestre aparece su primera palabra, en unos niños ocurre antes, en otros más tarde.", imageSrc: "https://picsum.photos/seed/baby-first-word/600/400" },
                          { text: "A partir del 8º mes al niño le gusta mucho imitar.", imageSrc: "https://picsum.photos/seed/baby-imitation-8months/600/400" },
                          { text: "Es normal ver al niño con la lengua fuera. Es importante activar este músculo para el habla. Todo lo que hagamos juegos o sonidos enseñándoles la lengua, le gustarán mucho.", imageSrc: "https://picsum.photos/seed/baby-tongue-out-play/600/400" },
                          { text: "Empieza a comprender preguntas como ¿dónde está el chupete? ¿Dónde está mamá? ¡No toques eso!", imageSrc: "https://picsum.photos/seed/baby-understanding-questions/600/400" },
                          { text: "Utiliza el grito para mostrar su enfado.", imageSrc: "https://picsum.photos/seed/baby-cry-frustration/600/400" },
                          { text: "Emite mucha cantidad de sonidos ante personas conocidas.", imageSrc: "https://picsum.photos/seed/baby-babbling-familiar-face/600/400" },
                          { text: "Utiliza el índice para señalar, como forma primitiva de preguntar.", imageSrc: "https://picsum.photos/seed/baby-pointing-index/600/400" },
                          { text: "Le gusta que le hablen, que le canten, la música, suele bailar al oírla.", imageSrc: "https://picsum.photos/seed/baby-music-dancing/600/400" },
                          { text: "Empezar a enseñarle a decir \"adiós\".", imageSrc: "https://picsum.photos/seed/baby-waving-goodbye/600/400" },
                          { text: "Dar nombre a las cosas.", imageSrc: "https://picsum.photos/seed/baby-naming-objects/600/400" },
                          { text: "Tirar besos y soplar.", imageSrc: "https://picsum.photos/seed/baby-blowing-kisses/600/400" },
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
                    id: "apego-6-9",
                    title: "Juegos de apego",
                    content: [
                      {
                        title: "Juegos de apego",
                        items: [
                          { text: "Cosquillas con contacto corporal.", imageSrc: "https://picsum.photos/seed/baby-tickling-contact/600/400" },
                          { text: "Carcajadas sin contacto corporal.", imageSrc: "https://picsum.photos/seed/baby-laughing-no-touch/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "habitos-6-9",
                    title: "Hábitos",
                    content: [
                      {
                        title: "Hábitos",
                        items: [
                          { text: "Iniciarlo en el control de esfínteres. Al darnos cuenta de que va a hacer caca, le ponemos en el orinal. Ya se le puede ir acostumbrando poco a poco después de beber o de las comidas. Le entretenemos y cuando se dé cuenta que ha hecho caca o pis, se pondrá muy contento y lo irá pidiendo cada vez más. No regañarle.", imageSrc: "https://picsum.photos/seed/baby-potty-training/600/400" },
                          { text: "Vestirse. Poco a poco colaborará en el vestido. Le vamos diciendo: un brazo, la pierna, la cabeza.", imageSrc: "https://picsum.photos/seed/baby-getting-dressed/600/400" },
                          { text: "Lavarse. Enseñarle la esponja y explicarle: el bebé se lava las manos, los pies.", imageSrc: "https://picsum.photos/seed/baby-washing-hands-sponge/600/400" },
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
                    id: "decisiones-6-9",
                    title: "Juegos de tomar decisiones",
                    content: [
                      {
                        title: "Juegos de tomar decisiones",
                        items: [
                          { text: "Ofrecerle dos juguetes para que se decida a coger solo uno.", imageSrc: "https://picsum.photos/seed/baby-choose-two-toys/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "posicion-juguetes-6-9",
                    title: "Cambios en la posición de los juguetes",
                    content: [
                      {
                        title: "Cambios en la posición de los juguetes",
                        items: [
                          { text: "Cambiarle los juguetes del sitio dónde están habitualmente, de espaldas, medio tapados,… para que él los descubra.", imageSrc: "https://picsum.photos/seed/baby-discover-hidden-toy/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "observacion-6-9",
                    title: "Ejercicios de observación",
                    content: [
                      {
                        title: "Ejercicios de observación",
                        items: [
                          { text: "Enseñarle libros con detalles.", imageSrc: "https://picsum.photos/seed/baby-picture-book-details/600/400" },
                          { text: "Ofrecerle juguetes con muchos detalles llamativos.", imageSrc: "https://picsum.photos/seed/baby-detailed-colorful-toys/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "memoria-6-9",
                    title: "Memoria: asociación de palabra y gesto",
                    content: [
                      {
                        title: "Memoria: asociación de palabra y gesto",
                        items: [
                          { text: "Le cantamos una canción que acompañamos de palabra y gesto. Terminará por hacer el gesto sin que se lo pidamos.", imageSrc: "https://picsum.photos/seed/baby-song-word-gesture/600/400" },
                          { text: "Decir adiós, lo repetirá de forma automática.", imageSrc: "https://picsum.photos/seed/baby-bye-bye-automatic/600/400" },
                        ]
                      }
                    ]
                  }
                ]
              },
            }
          },
          {
            id: "tramo-9-12",
            label: "3er tramo (9 meses - 1 año)",
            areas: {
              [AreaType.GROSS_MOTOR]: {
                title: "Motricidad Gruesa",
                subSections: [
                  {
                    id: "posturas-9-12",
                    title: "Posturas preferidas",
                    content: [
                      {
                        title: "Sentado. Mantiene bien el equilibrio y disfruta mirando lo que hay.",
                        items: [
                          { text: "Le sentamos sobre un rodillo grande y le sujetamos por muslos y rodillas. Suavemente deslizamos el rodillo adelante y atrás para que el niño haga esfuerzo por enderezarse y permanezca sentado.", imageSrc: "https://picsum.photos/seed/baby-roller-sitting-balance/600/400" },
                          { text: "Sentamos al niño delante nuestra y jugamos a pasarle la pelota. La distancia entre el adulto y el niño debe ser pequeña para facilitarle que nos la devuelva.", imageSrc: "https://picsum.photos/seed/baby-sitting-ball-pass/600/400" },
                          { text: "Sentarle en el suelo y ponerle juguetes para que los coja y juegue con ellos. Así sentado sin apoyo, va liberando los brazos. Reforzar sus intentos.", imageSrc: "https://picsum.photos/seed/baby-sitting-floor-toys/600/400" },
                          { text: "Ofrecerle una caja o cubo llena de juguetes para que los saque.", imageSrc: "https://picsum.photos/seed/baby-box-toys-emptying/600/400" },
                          { text: "Darle juegos de encajes sencillos. Le resultará fácil sacarlos, le ayudamos a ponerlos.", imageSrc: "https://picsum.photos/seed/baby-shape-sorter-simple/600/400" },
                          { text: "Reflejo de apoyo lateral. Estando el niño sentado sobre una superficie dura, lo empujamos repentinamente hacia uno y otro lado, para que apoye la mano correspondiente y así se protegerá ante una caída hacia los lados.", imageSrc: "https://picsum.photos/seed/baby-lateral-support-reflex/600/400" },
                        ]
                      },
                      {
                        title: "Pasar de tumbado boca arriba / tumbado boca abajo y viceversa",
                        items: [
                          { text: "Le damos las manos para que se incorpore, una vez sentado le volvemos a tumbar.", imageSrc: "https://picsum.photos/seed/baby-sit-up-hands/600/400" },
                          { text: "Aprovechamos al cambiarlo, le cogemos los pies y se los acercamos a la boca. También en esta postura le cruzamos los brazos y se los abrimos.", imageSrc: "https://picsum.photos/seed/baby-diaper-feet-mouth/600/400" },
                        ]
                      },
                      {
                        title: "Tumbado boca abajo",
                        items: [
                          { text: "Le ofrecemos juguetes para que se arrastren. Le enseñamos algún juguete y cuando vaya a alcanzarlo se lo alejamos para que siga intentando cogerlo.", imageSrc: "https://picsum.photos/seed/baby-tummy-reach-toy/600/400" },
                          { text: "Carretilla. Estando el niño boca abajo, levantarlo sujetándolo por los muslos y haciendo que se apoye sobre sus brazos. Incitarle a que se desplace utilizando solo sus brazos.", imageSrc: "https://picsum.photos/seed/baby-wheelbarrow-arms/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "gateo-9-12",
                    title: "Gateo",
                    content: [
                      {
                        title: "Gateo",
                        items: [
                          { text: "Le agarramos por los muslos impidiéndole que lo haga, seguramente se enojará, esperamos unos segundos y lo dejamos.", imageSrc: "https://picsum.photos/seed/baby-crawl-hold-thighs/600/400" },
                          { text: "Dejamos la habitación libre de juguetes y nos ponemos a gatear con el bebé, gateamos en línea recta, para atrás, dando vueltas, …", imageSrc: "https://picsum.photos/seed/baby-crawl-together-adult/600/400" },
                          { text: "Gatear en una habitación llena de juguetes, obstáculos, tendrá que sortearlos.", imageSrc: "https://picsum.photos/seed/baby-crawl-obstacle-course/600/400" },
                          { text: "Ponerle elementos sorpresa: al ir gateando se encuentra con un pañuelo que al tirar de él, sale su juguete preferido.", imageSrc: "https://picsum.photos/seed/baby-crawl-surprise-scarf/600/400" },
                          { text: "Colgar de la pared algún juguete pequeño que no tenga peso, se pondrá de pie para cogerlo. Cuando domine la postura de pie, se lo vamos elevando para que tenga que esforzarse en cogerlo.", imageSrc: "https://picsum.photos/seed/baby-stand-reach-wall-toy/600/400" },
                          { text: "Colgar de la pared paneles con muñecos, cintas, pelotas de distinto tamaño, pero que pueda tocar, morder, chupar, tirar. Cambiar los paneles cuando ya los tenga aburridos.", imageSrc: "https://picsum.photos/seed/baby-wall-panel-toys/600/400" },
                          { text: "Cuando gatee sin dificultad, le ponemos cojines de diferentes tamaños, animándolo a subir y seguir desplazándose.", imageSrc: "https://picsum.photos/seed/baby-crawl-over-cushions/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "de-pie-9-12",
                    title: "De pie / Apoyo sobre su cuerpo",
                    content: [
                      {
                        title: "De pie / Apoyo sobre su cuerpo",
                        items: [
                          { text: "Jugar con él cogiéndole por las caderas de pie. Hablarle, reír, cantarle, balancearle.", imageSrc: "https://picsum.photos/seed/baby-standing-hips-support/600/400" },
                          { text: "Primeros pasos con ayuda: Cuando está de pie agarrado con las dos manos, ofrecerle un juguete para que lo coja y suelte una mano. Sin forzarle, le cogemos de las manos y le ayudamos a andar. No forzarlo, hay niños que dan pasos y otros todavía no.", imageSrc: "https://picsum.photos/seed/baby-first-steps-hands/600/400" },
                          { text: "Coger objetos del suelo: Estando el niño de pie agarrado a un mueble, colocar juguetes en el suelo para que se agache a cogerlos. Empezar con juguetes altos e ir disminuyendo la altura.", imageSrc: "https://picsum.photos/seed/baby-stand-squat-pick-toy/600/400" },
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
                    id: "golpeteo-9-12",
                    title: "Golpeteo de objetos: coordinación de ambas manos",
                    content: [
                      {
                        title: "Golpeteo de objetos, para la coordinación de ambas manos",
                        items: [
                          { text: "Vertical, de arriba abajo. Horizontal, golpeando un objeto contra otro.", imageSrc: "https://picsum.photos/seed/baby-bang-objects-hands/600/400" },
                          { text: "Coger 2 objetos a la vez con ambas manos. Cuando el niño tenga un objeto ofrecerle otro, intentando que sostenga los dos.", imageSrc: "https://picsum.photos/seed/baby-hold-two-objects/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "pinza-9-12",
                    title: "Pinza digital",
                    content: [
                      {
                        title: "Pinza digital",
                        items: [
                          { text: "Ofrecerle canicas, botones, bolitas,… para que los coja con el dedo índice y pulgar.", imageSrc: "https://picsum.photos/seed/baby-pincer-marbles-buttons/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "indice-9-12",
                    title: "Señalar con el dedo índice",
                    content: [
                      {
                        title: "Señalar con el dedo índice",
                        items: [
                          { text: "Tocar el piano con ese dedo.", imageSrc: "https://picsum.photos/seed/baby-index-finger-piano/600/400" },
                          { text: "Tocar interruptores.", imageSrc: "https://picsum.photos/seed/baby-index-light-switch/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "sacar-meter-9-12",
                    title: "Sacar y meter objetos",
                    content: [
                      {
                        title: "Sacar y meter objetos",
                        items: [
                          { text: "Sacar objetos de un recipiente ancho.", imageSrc: "https://picsum.photos/seed/baby-take-out-container/600/400" },
                          { text: "Sacar y meter anillas grandes en un eje.", imageSrc: "https://picsum.photos/seed/baby-stacking-rings/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "otros-9-12",
                    title: "Otros ejercicios",
                    content: [
                      {
                        title: "Otros ejercicios",
                        items: [
                          { text: "Seguimos tocando palmas. Unos lo realizan, otros no.", imageSrc: "https://picsum.photos/seed/baby-clapping-hands/600/400" },
                          { text: "Untarle los dedos con sustancias ricas para que los chupe o se los mire.", imageSrc: "https://picsum.photos/seed/baby-finger-licking-food/600/400" },
                          { text: "Abrir y cerrar los dedos de la mano de forma espontánea. Cuando le digamos \"adiós\", ya puede realizar movimientos con los 4 dedos.", imageSrc: "https://picsum.photos/seed/baby-open-close-fingers/600/400" },
                          { text: "Le ayudaremos a palparse el cuerpo con las manos: la cara, la barriga, las piernas, …", imageSrc: "https://picsum.photos/seed/baby-touch-own-body/600/400" },
                          { text: "Dejamos que con el índice nos toque la boca, los ojos, …", imageSrc: "https://picsum.photos/seed/baby-index-touch-face/600/400" },
                          { text: "Con lapiceros de colores gordos y no tóxicos, dejar que los toque. Más tarde realizamos rayas en papel grande para que nos imite.", imageSrc: "https://picsum.photos/seed/baby-chunky-crayons-paper/600/400" },
                          { text: "Darles trapos y hacer gesto de limpiar el suelo, mesa, cama con movimientos circulares y horizontales para que el niño nos imite.", imageSrc: "https://picsum.photos/seed/baby-wipe-cloth-imitate/600/400" },
                          { text: "Enseñarle a amasar: hundir los dedos en pasta espesa de agua y harina, o con plastilina blanda.", imageSrc: "https://picsum.photos/seed/baby-dough-fingers-knead/600/400" },
                          { text: "Hacer agujeros grandes en una cartulina y después agujeros pequeños para que meta por ahí los dedos.", imageSrc: "https://picsum.photos/seed/baby-finger-holes-cardboard/600/400" },
                          { text: "Darle hojas de papel para que rompa, revistas viejas.", imageSrc: "https://picsum.photos/seed/baby-tearing-paper/600/400" },
                          { text: "Darle cuentos para que pase las hojas con el dedo índice.", imageSrc: "https://picsum.photos/seed/baby-turn-book-pages/600/400" },
                          { text: "Darle encajes de diferente dificultad: cajas que se metan unas dentro de otras, muñecas rusas, …", imageSrc: "https://picsum.photos/seed/baby-nesting-boxes-matryoshka/600/400" },
                          { text: "Le proporcionamos un rastrillo de juguete, le enseñamos el movimiento de arrastre y dejamos que juegue con él.", imageSrc: "https://picsum.photos/seed/baby-toy-rake-dragging/600/400" },
                          { text: "Tira de la cadena del wáter.", imageSrc: "https://picsum.photos/seed/baby-toilet-flush-chain/600/400" },
                          { text: "Encender y apagar las luces.", imageSrc: "https://picsum.photos/seed/baby-light-switch-on-off/600/400" },
                          { text: "Tapar y destapar tarteras.", imageSrc: "https://picsum.photos/seed/baby-container-lid-open/600/400" },
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
                    id: "expresiones-9-12",
                    title: "Imitar expresiones faciales nuestras",
                    content: [
                      {
                        title: "Imitar expresiones faciales nuestras",
                        items: [
                          { text: "Abrir y cerrar la boca.", imageSrc: "https://picsum.photos/seed/baby-open-close-mouth/600/400" },
                          { text: "Sacar y meter la lengua.", imageSrc: "https://picsum.photos/seed/baby-stick-out-tongue/600/400" },
                          { text: "Hacer sonidos guturales: ja ja je je, dentales y labiales tatata, papap, bababa, dadada, mamama.", imageSrc: "https://picsum.photos/seed/baby-babbling-gutural/600/400" },
                          { text: "Acariciarle las mejillas, soplárselas, tocárselas con algodón, plumas, con sus muñecos, con una cuchara de metal,…", imageSrc: "https://picsum.photos/seed/baby-cheek-touch-feather/600/400" },
                          { text: "Delante de un espejo, le cogemos su mano y le decimos: \"pelo\" se la llevamos al pelo, luego en la boca, la nariz, orejas.", imageSrc: "https://picsum.photos/seed/baby-mirror-body-parts/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "silencio-sonido-9-12",
                    title: "Jugar alternando silencio y sonido",
                    content: [
                      {
                        title: "Jugar alternando silencio y sonido",
                        items: [
                          { text: "Combinar voz y no voz: le decimos \"dame la pelota\" y se lo repetimos sin hacer sonido (sólo con muecas de la boca).", imageSrc: "https://picsum.photos/seed/baby-voice-silence-mouth/600/400" },
                          { text: "Ponemos música y la apagamos, la volvemos a poner. Lo mismo con nuestra voz.", imageSrc: "https://picsum.photos/seed/baby-music-on-off/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "lenguaje-comprensivo-9-12",
                    title: "Lenguaje comprensivo",
                    content: [
                      {
                        title: "Comprender una prohibición",
                        items: [
                          { text: "\"NO\". Cuando el niño se acerque a algo que no queramos que toque, le decimos: NO. El niño se tiene que detener y mirarnos. Al cabo de unos segundos intentará volver a tocarlo, le apartamos enseñándole otro objeto. Repetimos la negación cada vez que realice una acción que no debe.", imageSrc: "https://picsum.photos/seed/baby-understand-no-prohibition/600/400" },
                        ]
                      },
                      {
                        title: "Responder adecuadamente cuando se le llama por su nombre",
                        items: [
                          { text: "Cuando le llamemos debe mirarnos. Entonces debemos ofrecerle algún juguete, darle comida o salir de paseo.", imageSrc: "https://picsum.photos/seed/baby-respond-name-look/600/400" },
                        ]
                      },
                      {
                        title: "Imitar ruidos",
                        items: [
                          { text: "Por ejemplo, darle un coche y enseñarle a imitar su sonido: BRUM, BRUM, BRUM.", imageSrc: "https://picsum.photos/seed/baby-toy-car-brum/600/400" },
                          { text: "Imitar sonidos de animales.", imageSrc: "https://picsum.photos/seed/baby-animal-sounds-imitate/600/400" },
                        ]
                      },
                      {
                        title: "Jugamos con tarjetas, libros, juguetes: imitar sonidos",
                        items: [
                          { text: "Le enseñamos imágenes de animales, niños, partes de la cara, juguetes y le vamos diciendo el nombre: \"gato\", \"tren\", \"pelota\", \"cara\", \"nariz\".", imageSrc: "https://picsum.photos/seed/baby-flashcards-animals-names/600/400" },
                          { text: "Ponemos encima de la mesa tres juguetes, nos sentamos con el niño. Decimos el nombre de uno de los juguetes mientras lo señalamos, esperamos y repetimos su nombre. Hay niños que intentan imitar sonidos, otros todavía no.", imageSrc: "https://picsum.photos/seed/baby-table-three-toys-name/600/400" },
                          { text: "Juegos con la punta de la lengua emitiendo sonidos.", imageSrc: "https://picsum.photos/seed/baby-tongue-tip-sounds/600/400" },
                          { text: "Imitamos sonidos que el niño produzca.", imageSrc: "https://picsum.photos/seed/baby-adult-imitates-sounds/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "lenguaje-atencion-9-12",
                    title: "Lenguaje y atención",
                    content: [
                      {
                        title: "Lenguaje y atención",
                        items: [
                          { text: "Jugamos con él a contarle cuentos. Nos sentamos con él con uno de sus cuentos, lo abrimos esperando que él nos ayude y le contamos lo que vemos.", imageSrc: "https://picsum.photos/seed/baby-storytime-together/600/400" },
                          { text: "Cogemos sus manos o sus brazos y le contamos lo que vemos: \"mira este dedito es el más pequeño...\"", imageSrc: "https://picsum.photos/seed/baby-finger-rhyme-hand/600/400" },
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
                    id: "escondite-9-12",
                    title: "Participar en juegos de escondite",
                    content: [
                      {
                        title: "Participar en juegos de escondite",
                        items: [
                          { text: "Jugar a esconderse con un pañuelo, trapo,…nos tapamos la cara y nos destapamos. Se lo hacemos a él.", imageSrc: "https://picsum.photos/seed/baby-peek-a-boo-cloth/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "pelota-cooperativa-9-12",
                    title: "Juego cooperativo con pelota",
                    content: [
                      {
                        title: "Juego cooperativo con pelota",
                        items: [
                          { text: "Nos sentamos frente al niño y le tiramos una pelota, esperamos a que él haga lo mismo.", imageSrc: "https://picsum.photos/seed/baby-ball-roll-back/600/400" },
                          { text: "Le ofrecemos sus juguetes, cuando los coja, esperamos que él nos ofrezca alguno, si no lo hace, le decimos: ¿me lo das? Mientras se lo quitamos suavemente.", imageSrc: "https://picsum.photos/seed/baby-give-toy-sharing/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "esfinteres-9-12",
                    title: "Control de esfínteres",
                    content: [
                      {
                        title: "Control de esfínteres",
                        items: [
                          { text: "Cuando le saquemos el pañal se lo acercamos un poco y le decimos: \"caca\", \"pis\" y lo tiramos.", imageSrc: "https://picsum.photos/seed/baby-diaper-change-word/600/400" },
                          { text: "Le ponemos en el orinal a las horas que creamos más adecuadas, al menos una vez al día.", imageSrc: "https://picsum.photos/seed/baby-potty-daily-routine/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "colaborar-9-12",
                    title: "Colaborar en comidas y en el baño",
                    content: [
                      {
                        title: "Colaborar en comidas y en el baño",
                        items: [
                          { text: "El niño debe colaborar cuando se le viste, facilitando la entrada de la prenda. Ya debe empezar a quitarse ropa fácil: gorro, guante, calcetín, zapato,...", imageSrc: "https://picsum.photos/seed/baby-dressing-cooperate/600/400" },
                          { text: "No tienen que lavarse, sí darse cuenta de lo que se está haciendo e intentar en algún momento imitarlo: lavar la cara con su manita, lavarse las dos manos,…", imageSrc: "https://picsum.photos/seed/baby-wash-face-imitate/600/400" },
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
                    id: "observacion-9-12",
                    title: "Ejercicios de observación",
                    content: [
                      {
                        title: "Ejercicios de observación",
                        items: [
                          { text: "Con un pañuelo tapamos objetos, ya sea en su habitación, baño, comedor…y los destapamos. Esperamos a que lo haga él.", imageSrc: "https://picsum.photos/seed/baby-cloth-cover-object/600/400" },
                          { text: "Jugamos a esconder objetos y que el niño los encuentre. Le enseñamos un juguete, cuando lo vaya a coger, lo escondemos en nuestra mano, tiene que intentar abrirla.", imageSrc: "https://picsum.photos/seed/baby-find-hidden-toy-hand/600/400" },
                          { text: "Le cogemos en brazos y miramos por la ventana sin hablar. Al cabo de un rato le explicamos lo que vemos.", imageSrc: "https://picsum.photos/seed/baby-window-watching-arms/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "eleccion-9-12",
                    title: "Juegos de elección",
                    content: [
                      {
                        title: "Juegos de elección",
                        items: [
                          { text: "Darle varias láminas o tarjetas para que las mire, esperamos a que coja una y retiramos las otras. Cuando termine volvemos a hacer lo mismo.", imageSrc: "https://picsum.photos/seed/baby-choose-flashcard/600/400" },
                          { text: "Ofrecerle dos juguetes, cuando se incline por uno, escondemos el otro y jugamos con el niño. Después volvemos a ofrecerle los dos. A veces se inclinan siempre por el mismo.", imageSrc: "https://picsum.photos/seed/baby-choose-favorite-toy/600/400" },
                          { text: "Cuando le queramos dar un trozo de pan, galleta... le ofrecemos dos trozos, esperamos que elija uno. El otro no se lo damos.", imageSrc: "https://picsum.photos/seed/baby-choose-food-piece/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "memoria-9-12",
                    title: "Juegos de memoria",
                    content: [
                      {
                        title: "Juegos de memoria",
                        items: [
                          { text: "Le enseñamos un juego, cuando lo domine, nos olvidamos del juego uno o dos días. Lo repetimos después de ese tiempo y observamos si el bebé lo recuerda.", imageSrc: "https://picsum.photos/seed/baby-memory-game-recall/600/400" },
                          { text: "Enseñarle el timbre de la casa y esperar que al regresar de la calle busque el mismo lugar.", imageSrc: "https://picsum.photos/seed/baby-doorbell-location/600/400" },
                          { text: "Guardar algunos juguetes siempre en un sitio determinado. Al cabo de días se los cambiamos de lugar sin advertírselo. Observamos si nos pide ayuda o se asombra.", imageSrc: "https://picsum.photos/seed/baby-toy-storage-place/600/400" },
                        ]
                      }
                    ]
                  }
                ]
              },
            }
          }
        ]
      },
      {
        id: "1-2",
        label: "1 – 2 años",
        introText: [
          { icon: "Fingerprint", color: "bg-orange-100", text: "Fomenta la autonomía permitiendo que intente señalar los objetos." },
          { icon: "Star",        color: "bg-yellow-100", text: "Celebra cada acierto con entusiasmo." },
          { icon: "MessageCircle", color: "bg-sky-100",  text: "Nombra los objetos en voz alta para reforzar el vocabulario cotidiano." },
        ] as IntroItem[],
        subGroups: [
          {
            id: "tramo-12-18",
            label: "1er tramo (12 - 18 meses)",
            areas: {
              [AreaType.GROSS_MOTOR]: {
                title: "Motricidad Gruesa",
                subSections: [
                  {
                    id: "posturas-12-18",
                    title: "Posturas dominantes",
                    content: [
                      {
                        title: "Sentado",
                        items: [
                          { text: "Su equilibrio es bueno, es capaz de reaccionar a movimientos que le hacen perder el equilibrio con otros movimientos compensatorios.", imageSrc: "https://picsum.photos/seed/toddler-sitting-balance-react/600/400" },
                          { text: "Sentamos al niño en un taburete, de forma que los pies no toquen el suelo, le invitamos a bajar ofreciéndole las manos. A medida que domine el ejercicio vamos retirándole nuestras manos.", imageSrc: "https://picsum.photos/seed/toddler-stool-feet-up/600/400" },
                          { text: "Nos sentamos con el niño en el suelo y jugamos a tirarnos la pelota.", imageSrc: "https://picsum.photos/seed/toddler-floor-ball-pass/600/400" },
                        ]
                      },
                      {
                        title: "A gatas. Siempre que sea un juego.",
                        items: [
                          { text: "Jugamos a subir escaleras gateando.", imageSrc: "https://picsum.photos/seed/toddler-crawl-stairs/600/400" },
                          { text: "Ponemos obstáculos en el suelo y nos ponemos a gatear sorteándolos.", imageSrc: "https://picsum.photos/seed/toddler-crawl-obstacles/600/400" },
                        ]
                      },
                      {
                        title: "De pie",
                        items: [
                          { text: "Debe desplazarse sin dificultad. Y desde esta posición juega, anda, sube, baja, cambia de posición, …", imageSrc: "https://picsum.photos/seed/toddler-standing-moving/600/400" },
                          { text: "Camina solo o con ayuda de forma todavía insegura.", imageSrc: "https://picsum.photos/seed/toddler-first-walk-unsteady/600/400" },
                          { text: "Se agacha y coge juguetes que se le caen o que encuentra sin perder el equilibrio.", imageSrc: "https://picsum.photos/seed/toddler-squat-pick-up/600/400" },
                          { text: "Andar hacia atrás.", imageSrc: "https://picsum.photos/seed/toddler-walk-backwards/600/400" },
                          { text: "Le ofrecemos juguetes con hilos o cuerdas para que pueda arrastrarlos.", imageSrc: "https://picsum.photos/seed/toddler-pull-toy-string/600/400" },
                          { text: "Hacer pequeñas carreras, a ver quién llega primero a la puerta... le cogemos de la mano y corremos.", imageSrc: "https://picsum.photos/seed/toddler-running-race-hand/600/400" },
                          { text: "Le damos las manos y jugamos a subir y a bajar.", imageSrc: "https://picsum.photos/seed/toddler-up-down-hands/600/400" },
                          { text: "Jugamos a tirarnos la pelota de pie.", imageSrc: "https://picsum.photos/seed/toddler-standing-ball-throw/600/400" },
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
                    id: "prension-12-18",
                    title: "Prensión",
                    content: [
                      {
                        title: "Prensión",
                        items: [
                          { text: "Coger fideos gordos y guardarlos en una caja.", imageSrc: "https://picsum.photos/seed/toddler-thick-pasta-box/600/400" },
                          { text: "Coger fideos finos.", imageSrc: "https://picsum.photos/seed/toddler-thin-pasta-pick/600/400" },
                          { text: "Sacar y meter cubos de una caja.", imageSrc: "https://picsum.photos/seed/toddler-blocks-in-out-box/600/400" },
                          { text: "Jugar a lanzar objetos.", imageSrc: "https://picsum.photos/seed/toddler-throwing-objects/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "manos-12-18",
                    title: "Manos",
                    content: [
                      {
                        title: "Manos",
                        items: [
                          { text: "Encajar aros en un palo. Primero le ofrecemos aros grandes y luego más pequeños.", imageSrc: "https://picsum.photos/seed/toddler-ring-stacking-peg/600/400" },
                          { text: "Le dejamos ceras gruesas y papel y le enseñamos a garabatear, una vez al día.", imageSrc: "https://picsum.photos/seed/toddler-chunky-crayons-scribble/600/400" },
                          { text: "En una cartulina hacemos 5 agujeros para poner los dedos. Introducimos por allí los dedos y se lo enseñamos. Retiramos nuestra mano y después le introducimos sus dedos.", imageSrc: "https://picsum.photos/seed/toddler-cardboard-finger-holes/600/400" },
                          { text: "Manipulación y palpación de distintos materiales con diferente textura y dureza: frutas, verduras, telas...", imageSrc: "https://picsum.photos/seed/toddler-texture-exploration/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "dedos-12-18",
                    title: "Dedos",
                    content: [
                      {
                        title: "Dedos",
                        items: [
                          { text: "Cogemos plastilina blanda y con el índice hacemos agujeros. Le enseñamos para que él haga lo mismo.", imageSrc: "https://picsum.photos/seed/toddler-playdough-index-holes/600/400" },
                          { text: "Con una esponjita con color, que pinte en una cartulina.", imageSrc: "https://picsum.photos/seed/toddler-sponge-paint-cardboard/600/400" },
                          { text: "Le pintamos sus dedos, de un solo color, de varios colores, …", imageSrc: "https://picsum.photos/seed/toddler-finger-paint-colors/600/400" },
                          { text: "Le atamos hilos de lana en sus dedos a modo de anillo para que se los saque.", imageSrc: "https://picsum.photos/seed/toddler-wool-finger-rings/600/400" },
                          { text: "Le ofrecemos nuestra mano cerrada en forma de puño y vamos abriendo los dedos uno a uno. La volvemos a cerrar y le pedimos al niño que nos abra los dedos uno a uno.", imageSrc: "https://picsum.photos/seed/toddler-open-fingers-one-by-one/600/400" },
                          { text: "Señalar imágenes con el dedo índice.", imageSrc: "https://picsum.photos/seed/toddler-point-picture-book/600/400" },
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
                id: "group-objects",
                title: "1. Buscar objetos cotidianos",
                icon: "Search",
                subSections: [
                  {
                    id: "level-2-options",
                    title: "Nivel 1 (2 opciones)",
                    subSections: [
                      { id: "g2-1", title: "¿Dónde está el agua?", game: { type: 'select-image', question: "¿Dónde está el agua?", correctAnswer: "water", successMessage: "¡Muy bien! Eso es el agua.", options: [{ id: "water", label: "Agua", emoji: "💧" }, { id: "spoon", label: "Cuchara", emoji: "🥄" }] } },
                      { id: "g2-2", title: "¿Donde está el plato?", game: { type: 'select-image', question: "¿Dónde está el plato?", correctAnswer: "plate", options: [{ id: "ball", label: "Pelota", emoji: "⚽" }, { id: "plate", label: "Plato", emoji: "🍽️" }] } },
                      { id: "g2-3", title: "¿Donde está la cuna?", game: { type: 'select-image', question: "¿Dónde está la cuna?", correctAnswer: "crib", options: [{ id: "crib", label: "Cuna", emoji: "🛏️" }, { id: "car", label: "Coche", emoji: "🚗" }] } },
                      { id: "g2-4", title: "¿Donde está la pelota?", game: { type: 'select-image', question: "¿Dónde está la pelota?", correctAnswer: "ball", options: [{ id: "diaper", label: "Pañal", emoji: "🍼" }, { id: "ball", label: "Pelota", emoji: "⚽" }] } },
                      { id: "g2-5", title: "¿Donde está la cuchara?", game: { type: 'select-image', question: "¿Dónde está la cuchara?", correctAnswer: "spoon", options: [{ id: "spoon", label: "Cuchara", emoji: "🥄" }, { id: "shoe", label: "Zapato", emoji: "👟" }] } },
                      { id: "g2-6", title: "¿Donde está el pañal?", game: { type: 'select-image', question: "¿Dónde está el pañal?", correctAnswer: "diaper", options: [{ id: "book", label: "Libro", emoji: "📖" }, { id: "diaper", label: "Pañal", emoji: "🍼" }] } }
                    ]
                  },
                  {
                    id: "level-3-options",
                    title: "Nivel 2 (3 opciones)",
                    subSections: [
                      { id: "g3-1", title: "¿Dónde está el agua?", game: { type: 'select-image', question: "¿Dónde está el agua?", correctAnswer: "water", options: [{ id: "water", label: "Agua", emoji: "💧" }, { id: "plate", label: "Plato", emoji: "🍽️" }, { id: "ball", label: "Pelota", emoji: "⚽" }] } },
                      { id: "g3-2", title: "¿Dónde está el biberón?", game: { type: 'select-image', question: "¿Dónde está el biberón?", correctAnswer: "milk", options: [{ id: "crib", label: "Cuna", emoji: "🛏️" }, { id: "milk", label: "Biberón", emoji: "🍼" }, { id: "spoon", label: "Cuchara", emoji: "🥄" }] } },
                      { id: "g3-3", title: "¿Dónde está el zapato?", game: { type: 'select-image', question: "¿Dónde está el zapato?", correctAnswer: "shoe", options: [{ id: "shirt", label: "Camiseta", emoji: "👕" }, { id: "shoe", label: "Zapato", emoji: "👟" }, { id: "apple", label: "Manzana", emoji: "🍎" }] } },
                      { id: "g3-4", title: "¿Dónde está la casa?", game: { type: 'select-image', question: "¿Dónde está la casa?", correctAnswer: "home", options: [{ id: "car", label: "Coche", emoji: "🚗" }, { id: "home", label: "Casa", emoji: "🏠" }, { id: "tree", label: "Árbol", emoji: "🌳" }] } },
                      { id: "g3-5", title: "¿Dónde está el sol?", game: { type: 'select-image', question: "¿Dónde está el sol?", correctAnswer: "sun", options: [{ id: "sun", label: "Sol", emoji: "☀️" }, { id: "moon", label: "Luna", emoji: "🌙" }, { id: "star", label: "Estrella", emoji: "⭐" }] } },
                      { id: "g3-6", title: "¿Dónde está el gato?", game: { type: 'select-image', question: "¿Dónde está el gato?", correctAnswer: "cat", options: [{ id: "dog", label: "Perro", emoji: "🐶" }, { id: "cat", label: "Gato", emoji: "🐱" }, { id: "bird", label: "Pájaro", emoji: "🐦" }] } }
                    ]
                  },
                  {
                    id: "level-4-options",
                    title: "Nivel 3 (4 opciones)",
                    subSections: [
                      { id: "g4-1", title: "¿Dónde está la cuchara?", game: { type: 'select-image', question: "¿Dónde está la cuchara?", correctAnswer: "spoon", options: [{ id: "water", label: "Agua", emoji: "💧" }, { id: "plate", label: "Plato", emoji: "🍽️" }, { id: "spoon", label: "Cuchara", emoji: "🥄" }, { id: "diaper", label: "Pañal", emoji: "🍼" }] } },
                      { id: "g4-2", title: "¿Dónde está la cuna?", game: { type: 'select-image', question: "¿Dónde está la cuna?", correctAnswer: "crib", options: [{ id: "crib", label: "Cuna", emoji: "🛏️" }, { id: "ball", label: "Pelota", emoji: "⚽" }, { id: "house", label: "Casa", emoji: "🏠" }, { id: "car", label: "Coche", emoji: "🚗" }] } },
                      { id: "g4-3", title: "¿Dónde está el plátano?", game: { type: 'select-image', question: "¿Dónde está el plátano?", correctAnswer: "banana", options: [{ id: "apple", label: "Manzana", emoji: "🍎" }, { id: "banana", label: "Plátano", emoji: "🍌" }, { id: "bread", label: "Pan", emoji: "🍞" }, { id: "milk", label: "Leche", emoji: "🥛" }] } },
                      { id: "g4-4", title: "¿Dónde está el libro?", game: { type: 'select-image', question: "¿Dónde está el libro?", correctAnswer: "book", options: [{ id: "pencil", label: "Lápiz", emoji: "✏️" }, { id: "book", label: "Libro", emoji: "📖" }, { id: "toy", label: "Juguete", emoji: "🧸" }, { id: "box", label: "Caja", emoji: "📦" }] } },
                      { id: "g4-5", title: "¿Dónde está la bici?", game: { type: 'select-image', question: "¿Dónde está la bici?", correctAnswer: "bike", options: [{ id: "bus", label: "Autobús", emoji: "🚌" }, { id: "bike", label: "Bici", emoji: "🚲" }, { id: "car", label: "Coche", emoji: "🚗" }, { id: "boat", label: "Barco", emoji: "⛵" }] } },
                      { id: "g4-6", title: "¿Dónde está la flor?", game: { type: 'select-image', question: "¿Dónde está la flor?", correctAnswer: "flower", options: [{ id: "tree", label: "Árbol", emoji: "🌳" }, { id: "flower", label: "Flor", emoji: "🌸" }, { id: "leaf", label: "Hoja", emoji: "🍃" }, { id: "grass", label: "Césped", emoji: "🌿" }] } }
                    ]
                  }
                ]
              },
              {
                id: "imitar-movimientos",
                title: "2. Imitar movimientos lengua y labios",
                icon: "Wind",
                subSections: [
                  { id: "mov-1", title: "Sopla", game: { type: 'select-image', question: "¡Sopla!", successMessage: "¡Genial! Sopla otra vez.", correctAnswer: "sopla", options: [{ id: "sopla", label: "Sopla", emoji: "💨" }] } },
                  { id: "mov-2", title: "Muaa (Beso)", game: { type: 'select-image', question: "¡Muaa!", successMessage: "¡Qué beso más rico!", correctAnswer: "beso", options: [{ id: "beso", label: "Beso", emoji: "😘" }] } },
                  { id: "mov-3", title: "Lengua afuera", game: { type: 'select-image', question: "Saca la lengua: ¡Aaaa!", successMessage: "¡Muy bien!", correctAnswer: "fuera", options: [{ id: "fuera", label: "Lengua afuera", emoji: "😛" }] } },
                  { id: "mov-4", title: "Lengua a los lados", game: { type: 'select-image', question: "Mueve la lengua de lado a lado", successMessage: "¡Como un reloj!", correctAnswer: "lados", options: [{ id: "lados", label: "A los lados", emoji: "😝" }] } }
                ]
              },
              {
                id: "partes-cara",
                title: "3. Señalar las partes de su CARA",
                icon: "Smile",
                subSections: [
                  {
                    id: "cara-propia",
                    title: "En su propia cara",
                    subSections: [
                      { id: "cp-1", title: "Cabeza", game: { type: 'select-image', question: "Tócate la CABEZA", correctAnswer: "ok", options: [{ id: "ok", label: "CABEZA", emoji: "🧒" }] } },
                      { id: "cp-2", title: "Nariz", game: { type: 'select-image', question: "Tócate la NARIZ", correctAnswer: "ok", options: [{ id: "ok", label: "NARIZ", emoji: "👃" }] } },
                      { id: "cp-3", title: "Boca", game: { type: 'select-image', question: "Tócate la BOCA", correctAnswer: "ok", options: [{ id: "ok", label: "BOCA", emoji: "👄" }] } },
                      { id: "cp-4", title: "Pelo", game: { type: 'select-image', question: "Tócate el PELO", correctAnswer: "ok", options: [{ id: "ok", label: "PELO", emoji: "💇" }] } },
                      { id: "cp-5", title: "Orejas", game: { type: 'select-image', question: "Tócate las OREJAS", correctAnswer: "ok", options: [{ id: "ok", label: "OREJAS", emoji: "👂" }] } },
                      { id: "cp-6", title: "Ojos", game: { type: 'select-image', question: "Tócate los OJOS", correctAnswer: "ok", options: [{ id: "ok", label: "OJOS", emoji: "👀" }] } }
                    ]
                  },
                  {
                    id: "cara-papás",
                    title: "En mamá o papá",
                    subSections: [
                      { id: "cpp-1", title: "Cabeza", game: { type: 'select-image', question: "Señala la CABEZA en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "CABEZA", emoji: "🧒" }] } },
                      { id: "cpp-2", title: "Nariz", game: { type: 'select-image', question: "Señala la NARIZ en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "NARIZ", emoji: "👃" }] } },
                      { id: "cpp-3", title: "Boca", game: { type: 'select-image', question: "Señala la BOCA en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "BOCA", emoji: "👄" }] } },
                      { id: "cpp-4", title: "Pelo", game: { type: 'select-image', question: "Señala el PELO en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "PELO", emoji: "💇" }] } },
                      { id: "cpp-5", title: "Orejas", game: { type: 'select-image', question: "Señala las OREJAS en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "OREJAS", emoji: "👂" }] } },
                      { id: "cpp-6", title: "Ojos", game: { type: 'select-image', question: "Señala los OJOS en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "OJOS", emoji: "👀" }] } }
                    ]
                  },
                  {
                    id: "cara-dibujo",
                    title: "En un dibujo de niño",
                    subSections: [
                      { id: "cd-1", title: "¿Dónde está la BOCA?", game: { type: 'select-image', question: "BOCA", successMessage: "¡Bien!", correctAnswer: "boca", options: [{ id: "boca", label: "Boca", emoji: "👄" }, { id: "ojos", label: "Ojos", emoji: "👀" }, { id: "nariz", label: "Nariz", emoji: "👃" }] } },
                      { id: "cd-2", title: "¿Dónde está la NARIZ?", game: { type: 'select-image', question: "NARIZ", successMessage: "¡Bien!", correctAnswer: "nariz", options: [{ id: "orejas", label: "Orejas", emoji: "👂" }, { id: "nariz", label: "Nariz", emoji: "👃" }, { id: "pelo", label: "Pelo", emoji: "💇" }] } },
                      { id: "cd-3", title: "¿Donde están los OJOS?", game: { type: 'select-image', question: "OJOS", successMessage: "¡Bien!", correctAnswer: "ojos", options: [{ id: "ojos", label: "Ojos", emoji: "👀" }, { id: "boca", label: "Boca", emoji: "👄" }, { id: "cabeza", label: "Cabeza", emoji: "🧒" }] } }
                    ]
                  }
                ]
              },
              {
                id: "partes-cuerpo",
                title: "4. Señalar las partes de su CUERPO",
                icon: "User",
                subSections: [
                  {
                    id: "cuerpo-propio",
                    title: "En su propio cuerpo",
                    subSections: [
                      { id: "body-1", title: "Mano", game: { type: 'select-image', question: "Tócate la MANO", correctAnswer: "ok", options: [{ id: "ok", label: "MANO", emoji: "✋" }] } },
                      { id: "body-2", title: "Pie", game: { type: 'select-image', question: "Tócate el PIE", correctAnswer: "ok", options: [{ id: "ok", label: "PIE", emoji: "🦶" }] } },
                      { id: "body-3", title: "Barriga", game: { type: 'select-image', question: "Tócate la BARRIGA", correctAnswer: "ok", options: [{ id: "ok", label: "BARRIGA", emoji: "🫃" }] } }
                    ]
                  },
                  {
                    id: "cuerpo-dibujo",
                    title: "Sobre un dibujo",
                    subSections: [
                      { id: "bd-1", title: "¿Donde está la MANO?", game: { type: 'select-image', question: "MANO", correctAnswer: "mano", options: [{ id: "mano", label: "Mano", emoji: "✋" }, { id: "pie", label: "Pie", emoji: "🦶" }] } },
                      { id: "bd-2", title: "¿Donde está el PIE?", game: { type: 'select-image', question: "PIE", correctAnswer: "pie", options: [{ id: "mano", label: "Mano", emoji: "✋" }, { id: "pie", label: "Pie", emoji: "🦶" }] } }
                    ]
                  }
                ]
              },
              {
                id: "uno-muchos",
                title: "5. Diferenciación UNO-MUCHOS",
                icon: "Layers",
                subSections: [
                  { id: "um-1", title: "Pelotas", game: { type: 'select-image', question: "¿Dónde hay MUCHAS pelotas?", correctAnswer: "muchos", options: [{ id: "uno", label: "Una ⚽", emoji: "⚽" }, { id: "muchos", label: "Muchas ⚽⚽⚽", emoji: "⚽⚽⚽" }] } },
                  { id: "um-2", title: "Manzanas", game: { type: 'select-image', question: "¿Dónde hay UNA manzana?", correctAnswer: "uno", options: [{ id: "uno", label: "Una 🍎", emoji: "🍎" }, { id: "muchos", label: "Muchas 🍎🍎🍎", emoji: "🍎🍎🍎" }] } },
                  { id: "um-3", title: "Flores", game: { type: 'select-image', question: "¿Dónde hay MUCHAS flores?", correctAnswer: "muchos", options: [{ id: "uno", label: "Una 🌸", emoji: "🌸" }, { id: "muchos", label: "Muchas 🌸🌸🌸", emoji: "🌸🌸🌸" }] } },
                  { id: "um-4", title: "Estrellas", game: { type: 'select-image', question: "¿Dónde hay UNA estrella?", correctAnswer: "uno", options: [{ id: "uno", label: "Una ⭐", emoji: "⭐" }, { id: "muchos", label: "Muchas ⭐⭐⭐", emoji: "⭐⭐⭐" }] } },
                  { id: "um-5", title: "Coches", game: { type: 'select-image', question: "¿Dónde hay MUCHOS coches?", correctAnswer: "muchos", options: [{ id: "uno", label: "Uno 🚗", emoji: "🚗" }, { id: "muchos", label: "Muchos 🚗🚗🚗", emoji: "🚗🚗🚗" }] } }
                ]
              },
              {
                id: "donde-tren",
                title: "6. ¿Dónde está el tren?",
                icon: "TrainFront",
                subSections: [
                  { id: "tren-1", title: "Juego del tren", game: { type: 'select-image', question: "¿Dónde está el tren?", successMessage: "¡Chucu-chucu! ¡Ahí está!", correctAnswer: "tren", options: [{ id: "tren", label: "Tren", emoji: "🚂" }, { id: "bus", label: "Bus", emoji: "🚌" }] } },
                  { id: "tren-vida-real", title: "Variación vida real", content: [{ title: "Actividad para padres", items: ["Escoge un objeto de la habitación.", "Pregúntale: ¿Dónde está el/la [objeto]?", "Fomenta que el niño lo busque o lo señale con el dedo."] }] }
                ]
              },
              {
                id: "ejercicios-lengua-labios-12-18",
                title: "Ejercicios de lengua y de labios",
                content: [
                  {
                    title: "Ejercicios de lengua y de labios",
                    items: [
                      { text: "Hacemos ruido con la lengua, para que la mueva.", imageSrc: "https://picsum.photos/seed/toddler-tongue-noise/600/400" },
                      { text: "Hacer chasquidos.", imageSrc: "https://picsum.photos/seed/toddler-tongue-click/600/400" },
                      { text: "Abrir y cerrar los labios.", imageSrc: "https://picsum.photos/seed/toddler-lips-open-close/600/400" },
                      { text: "Sacar la lengua y meterla sin ruido y con ruido.", imageSrc: "https://picsum.photos/seed/toddler-tongue-in-out-sound/600/400" },
                      { text: "Dar besos solo con los labios o tirándolos con la mano.", imageSrc: "https://picsum.photos/seed/toddler-kiss-lips-blowing/600/400" },
                      { text: "Soplar para: Apagar cerillas, velas, volar algodones encima de una mesa, bolitas de papel...", imageSrc: "https://picsum.photos/seed/toddler-blow-candle-cotton/600/400" },
                      { text: "Soplarle su cara y que él nos sople la nuestra.", imageSrc: "https://picsum.photos/seed/toddler-blow-face-adult/600/400" },
                    ]
                  }
                ]
              },
              {
                id: "señalar-objetos-12-18",
                title: "Señalar objetos",
                content: [
                  {
                    title: "Señalar objetos",
                    items: [
                      { text: "Colocamos delante del niño objetos que conozca bien, le decimos el nombre señalándolo. Después repetimos el ejercicio sin señalarlo, esperamos que él lo haga.", imageSrc: "https://picsum.photos/seed/toddler-objects-point-name/600/400" },
                      { text: "Repetimos con otros juguetes.", imageSrc: "https://picsum.photos/seed/toddler-more-toys-name/600/400" },
                    ]
                  }
                ]
              },
              {
                id: "libros-tarjetas-12-18",
                title: "Libros, tarjetas, láminas",
                content: [
                  {
                    title: "Libros, tarjetas, láminas",
                    items: [
                      { text: "Cogemos un libro con imágenes grandes o pequeñas, esperamos que mire una y le decimos el nombre.", imageSrc: "https://picsum.photos/seed/toddler-picture-book-name/600/400" },
                      { text: "Le enseñamos fotos suyas, decimos su nombre.", imageSrc: "https://picsum.photos/seed/toddler-own-photo-name/600/400" },
                      { text: "Fotos de papá, de mamá, decimos su nombre, …", imageSrc: "https://picsum.photos/seed/toddler-parents-photos/600/400" },
                      { text: "Aprovechamos la hora de la comida para decirle el nombre de lo que va a utilizar: plato, vaso, cuchara. Lo mismo con la ropa de vestir.", imageSrc: "https://picsum.photos/seed/toddler-mealtime-naming/600/400" },
                    ]
                  }
                ]
              },
              {
                id: "cantar-12-18",
                title: "Cantar",
                content: [
                  {
                    title: "Cantar",
                    items: [
                      { text: "Cantarle una canción sencilla varias veces para que el niño a su manera intente seguir un trozo a su manera.", imageSrc: "https://picsum.photos/seed/toddler-sing-simple-song/600/400" },
                      { text: "Elegimos una palabra de un estribillo sencillo, para que él la termine. Por ejemplo: \"palmas, Palmi...\"", imageSrc: "https://picsum.photos/seed/toddler-finish-song-word/600/400" },
                    ]
                  }
                ]
              },
              {
                id: "contar-cuentos-12-18",
                title: "Contar cuentos",
                content: [
                  {
                    title: "Contar cuentos",
                    items: [
                      { text: "Inventar cuentos cortos para que el niño pueda ir participando gestualmente o con alguna palabra que ya conoce.", imageSrc: "https://picsum.photos/seed/toddler-short-story-gesture/600/400" },
                    ]
                  }
                ]
              },
              {
                id: "comprende-cuerpo-12-18",
                title: "Comprende información sobre su cuerpo",
                content: [
                  {
                    title: "Comprende información sobre su cuerpo",
                    items: [
                      { text: "¿Dónde están los ojos? ¿Dónde está la boca?,...el adulto le enseñará si aún no lo conoce, posteriormente el niño debe señalarlos cuando el adulto le pregunta.", imageSrc: "https://picsum.photos/seed/toddler-body-parts-where/600/400" },
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
                    id: "habitos-vestir-12-18",
                    title: "Hábitos: Vestirse y desvestirse",
                    content: [
                      {
                        title: "Vestirse y desvestirse",
                        items: [
                          { text: "Empezamos a ayudarle a sacarse prendas sencillas como calcetines, zapatos. Le enseñamos los calcetines, se los ponemos y le tiramos un poco de la punta para que se los saque.", imageSrc: "https://picsum.photos/seed/toddler-pull-off-socks/600/400" },
                          { text: "Para poner jersey o camisa, le enseñamos el agujero de la misma, para que estire los brazos y los meta allí.", imageSrc: "https://picsum.photos/seed/toddler-put-on-shirt/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "habitos-lavarse-12-18",
                    title: "Hábitos: Lavarse",
                    content: [
                      {
                        title: "Lavarse",
                        items: [
                          { text: "Las manos. Abrimos el grifo, ponemos sus manos bajo el agua, le enjabonamos y enjuagamos. Dejamos que el niño colabore y se las secamos con la toalla.", imageSrc: "https://picsum.photos/seed/toddler-handwash-soap-tap/600/400" },
                          { text: "La cara. Le mojamos las manos y se las llevamos a la cara. Le enseñamos la toalla y cómo secarse.", imageSrc: "https://picsum.photos/seed/toddler-face-wash-towel/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "esfinteres-12-18",
                    title: "Control de esfínteres",
                    content: [
                      {
                        title: "Control de esfínteres",
                        items: [
                          { text: "Continuamos poniéndole en el orinal y en el wáter. Tanto si hace como si no, nos mostramos contentos de que esté sentado un rato. No hay necesidad de reñirle ni dejarle solo.", imageSrc: "https://picsum.photos/seed/toddler-potty-toilet-routine/600/400" },
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
                    id: "observacion-12-18",
                    title: "Ejercicios de observación",
                    content: [
                      {
                        title: "Sin intervención del adulto",
                        items: [
                          { text: "Le ponemos delante de una ventana y le dejamos que mire sin decirle nada, unos minutos.", imageSrc: "https://picsum.photos/seed/toddler-window-watching-alone/600/400" },
                          { text: "Le enseñamos un libro atractivo y dejamos que lo observe sin decirle nada.", imageSrc: "https://picsum.photos/seed/toddler-book-explore-alone/600/400" },
                        ]
                      },
                      {
                        title: "Con intervención del adulto",
                        items: [
                          { text: "Los ejercicios anteriores, pero diciéndole al niño lo que hacemos o llamándole la atención sobre algo determinado.", imageSrc: "https://picsum.photos/seed/toddler-adult-point-window/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "memoria-12-18",
                    title: "Ejercicios de memoria",
                    content: [
                      {
                        title: "Ejercicios de memoria",
                        items: [
                          { text: "Le enseñamos una lámina y le decimos: ¿Dónde está...? Pasamos página, le enseñamos otra cosa y volvemos a la primera página a preguntar lo mismo.", imageSrc: "https://picsum.photos/seed/toddler-flashcard-memory-where/600/400" },
                          { text: "Guardamos un juguete suyo en una caja o cajón antes de irse a dormir, al día siguiente le preguntamos \"¿dónde está?\".", imageSrc: "https://picsum.photos/seed/toddler-hidden-toy-next-day/600/400" },
                          { text: "Le enseñamos un perro (por ejemplo) y luego lo mezclamos con otros animales. Le pedimos que lo busque.", imageSrc: "https://picsum.photos/seed/toddler-find-animal-mixed/600/400" },
                          { text: "Darle objetos para manipular o arrastrar y enseñarle cómo. Esperar y volvérselo a dar.", imageSrc: "https://picsum.photos/seed/toddler-object-manipulate-recall/600/400" },
                          { text: "Buscar dibujos.", imageSrc: "https://picsum.photos/seed/toddler-find-drawing/600/400" },
                          { text: "Clasificar colores, formas y tamaños. Dame los rojos, dame los redondos, dame los pequeños,...", imageSrc: "https://picsum.photos/seed/toddler-sort-colors-shapes/600/400" },
                        ]
                      }
                    ]
                  }
                ]
              },
            }
          },
          {
            id: "tramo-18-24",
            label: "2º tramo (18 - 24 meses)",
            areas: {
              [AreaType.GROSS_MOTOR]: {
                title: "Motricidad Gruesa",
                subSections: [
                  {
                    id: "posturas-18-24",
                    title: "Posturas",
                    content: [
                      {
                        title: "De pie",
                        items: [
                          { text: "Saltando obstáculos pequeños: cuerda de saltar, un taco pequeño.", imageSrc: "https://picsum.photos/seed/toddler-jump-obstacle-rope/600/400" },
                          { text: "Andar por caminos estrechos marcados en el suelo.", imageSrc: "https://picsum.photos/seed/toddler-walk-narrow-path/600/400" },
                          { text: "Transportar de un lado a otro, objetos en las dos manos.", imageSrc: "https://picsum.photos/seed/toddler-carry-both-hands/600/400" },
                          { text: "Le llenamos las manos de juguetes pequeños, cubos, y jugamos a trasladarlos sin que se le caigan.", imageSrc: "https://picsum.photos/seed/toddler-carry-blocks-no-drop/600/400" },
                          { text: "Subir y bajar escaleras. Primero a gatas, luego con apoyo, primero un pie y luego el otro y empezar a bajarlas de espaldas.", imageSrc: "https://picsum.photos/seed/toddler-stairs-up-down/600/400" },
                          { text: "Empieza a saltar desde alturas pequeñas.", imageSrc: "https://picsum.photos/seed/toddler-jump-small-height/600/400" },
                          { text: "Chutar un balón. Esto le ayudará a mantener mejor el equilibrio en un solo pie.", imageSrc: "https://picsum.photos/seed/toddler-kick-ball-balance/600/400" },
                          { text: "Jugar a perseguirlo corriendo.", imageSrc: "https://picsum.photos/seed/toddler-chase-running-play/600/400" },
                        ]
                      },
                      {
                        title: "En cuclillas",
                        items: [
                          { text: "Andando de la mano, le tiramos un juguete al suelo y le ayudamos a que se agache sin soltarle para recogerlo.", imageSrc: "https://picsum.photos/seed/toddler-squat-pick-walking/600/400" },
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
                    id: "prension-18-24",
                    title: "Prensión",
                    content: [
                      {
                        title: "Prensión",
                        items: [
                          { text: "Coger hilos de distinto grosor y que los meta en una caja.", imageSrc: "https://picsum.photos/seed/toddler-threads-box-thickness/600/400" },
                          { text: "Pinchar palillos en plastilina blanda.", imageSrc: "https://picsum.photos/seed/toddler-toothpick-playdough/600/400" },
                          { text: "Desenroscar tapones de rosca en botellas. Desenroscar tornillos grandes.", imageSrc: "https://picsum.photos/seed/toddler-unscrew-bottle-cap/600/400" },
                          { text: "Romper o rasgar papeles de revistas con las manos.", imageSrc: "https://picsum.photos/seed/toddler-tear-magazine-paper/600/400" },
                          { text: "Hacer torres con cubos, tacos, cajas.", imageSrc: "https://picsum.photos/seed/toddler-block-tower-build/600/400" },
                          { text: "Abrir las manos para que nos las choque. Que él las ponga y le chocamos nosotros.", imageSrc: "https://picsum.photos/seed/toddler-high-five-hands/600/400" },
                          { text: "Tiramos el balón con las dos manos: sentado o de pie.", imageSrc: "https://picsum.photos/seed/toddler-throw-ball-both-hands/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "manos-18-24",
                    title: "Manos",
                    content: [
                      {
                        title: "Manos",
                        items: [
                          { text: "Jugamos a dar palmadas. Ponemos una música con canción cortita, al final aplaudimos.", imageSrc: "https://picsum.photos/seed/toddler-clap-music-end/600/400" },
                          { text: "Le enseñamos a abrir y cerrar los grifos.", imageSrc: "https://picsum.photos/seed/toddler-open-close-tap/600/400" },
                          { text: "Introducir en botellas de cuello estrecho lentejas, guisantes, judías,...", imageSrc: "https://picsum.photos/seed/toddler-drop-lentils-bottle/600/400" },
                          { text: "Deshacer lazos.", imageSrc: "https://picsum.photos/seed/toddler-untie-bow-knot/600/400" },
                          { text: "Le acariciamos uno a uno los dedos mientras le cantamos alguna canción relacionada.", imageSrc: "https://picsum.photos/seed/toddler-finger-song-caress/600/400" },
                          { text: "Le hacemos cosquillas en la palma de la mano.", imageSrc: "https://picsum.photos/seed/toddler-palm-tickle/600/400" },
                          { text: "Quitar y poner gomets, cintas adhesivas, cello,...", imageSrc: "https://picsum.photos/seed/toddler-sticker-tape-peel/600/400" },
                          { text: "Desenvolver caramelos o pequeños paquetitos.", imageSrc: "https://picsum.photos/seed/toddler-unwrap-candy/600/400" },
                          { text: "Garabatear libremente con colores.", imageSrc: "https://picsum.photos/seed/toddler-free-scribble-crayons/600/400" },
                          { text: "Ensartar aros en una cuerda.", imageSrc: "https://picsum.photos/seed/toddler-thread-rings-string/600/400" },
                          { text: "Le enseñamos a subir y bajar cremalleras.", imageSrc: "https://picsum.photos/seed/toddler-zip-unzip/600/400" },
                          { text: "Jugamos a verter agua, arena, juguetes de un cubo a otro.", imageSrc: "https://picsum.photos/seed/toddler-pour-water-buckets/600/400" },
                          { text: "Pasar las páginas de un cuento.", imageSrc: "https://picsum.photos/seed/toddler-turn-pages-book/600/400" },
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
                    id: "ejercicios-oido-18-24",
                    title: "Ejercicios de oído",
                    content: [
                      {
                        title: "Ejercicios de oído",
                        items: [
                          { text: "Hablarle con distintas tonalidades, desde posiciones distintas.", imageSrc: "https://picsum.photos/seed/toddler-tones-voice-positions/600/400" },
                          { text: "Le sentamos en una silla y le llamamos desde el lado derecho, izquierdo, por detrás. Esperamos que se gire y nos escondemos.", imageSrc: "https://picsum.photos/seed/toddler-turn-sound-direction/600/400" },
                          { text: "Tocamos distintos instrumentos y se los ofrecemos para que los toque.", imageSrc: "https://picsum.photos/seed/toddler-instruments-play/600/400" },
                          { text: "Jugamos a dar palmadas fuertes y flojas.", imageSrc: "https://picsum.photos/seed/toddler-loud-soft-clap/600/400" },
                          { text: "Jugamos a dar patadas fuertes u flojas, sentados en el suelo.", imageSrc: "https://picsum.photos/seed/toddler-loud-soft-kick-floor/600/400" },
                          { text: "Le susurramos en el oído derecho, luego en el izquierdo. Buscamos sonidos escondidos para que se guíe por el sonido.", imageSrc: "https://picsum.photos/seed/toddler-whisper-ear-find-sound/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "ejercicios-labios-18-24",
                    title: "Ejercicios de labios",
                    content: [
                      {
                        title: "Ejercicios de labios",
                        items: [
                          { text: "Hacer pequeños círculos alrededor de las comisuras de los labios.", imageSrc: "https://picsum.photos/seed/toddler-lip-corner-circles/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "ejercicios-lengua-18-24",
                    title: "Ejercicios de lengua",
                    content: [
                      {
                        title: "Ejercicios de lengua",
                        items: [
                          { text: "Sacar y meter la lengua despacio. Lo hacemos primero nosotros para que él intente hacer lo mismo.", imageSrc: "https://picsum.photos/seed/toddler-tongue-slow-in-out/600/400" },
                          { text: "Tocar con la lengua el labio inferior y el superior.", imageSrc: "https://picsum.photos/seed/toddler-tongue-touch-lips/600/400" },
                          { text: "Sacar y meter la lengua rápido haciendo ruido.", imageSrc: "https://picsum.photos/seed/toddler-tongue-fast-noise/600/400" },
                          { text: "Jugamos a lamer sustancias esparcidas en platos, para imitar como comen o beben animales.", imageSrc: "https://picsum.photos/seed/toddler-lick-plate-animal/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "soplar-18-24",
                    title: "Soplar",
                    content: [
                      {
                        title: "Soplar",
                        items: [
                          { text: "Soplamos por soplar: pelotitas de algodón, bolas grandes de algodón, hojas secas.", imageSrc: "https://picsum.photos/seed/toddler-blow-cotton-leaves/600/400" },
                          { text: "Jugamos a hacer burbujas con una pajita.", imageSrc: "https://picsum.photos/seed/toddler-straw-bubbles/600/400" },
                          { text: "Podemos soplar a apagar velitas.", imageSrc: "https://picsum.photos/seed/toddler-blow-candles/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "expresion-verbal-18-24",
                    title: "Expresión verbal",
                    content: [
                      {
                        title: "Expresión verbal",
                        items: [
                          { text: "Jugamos a nombrar juguetes: señalamos uno y preguntamos ¿Qué es esto? Si no responde se lo decimos, esperamos y seguimos con otros juguetes.", imageSrc: "https://picsum.photos/seed/toddler-name-toys-what-is/600/400" },
                          { text: "Jugar a terminar palabras. Elegimos palabras sencillas y le enseñamos a que las termine.", imageSrc: "https://picsum.photos/seed/toddler-finish-words-game/600/400" },
                          { text: "Le enseñamos a decir sí y no.", imageSrc: "https://picsum.photos/seed/toddler-yes-no-gestures/600/400" },
                          { text: "Le enseñamos a decir su nombre.", imageSrc: "https://picsum.photos/seed/toddler-say-own-name/600/400" },
                          { text: "Saludos: Decimos \"adiós\" con la mano cuando alguien se va. Cuando alguien llegue decimos \"hola\".", imageSrc: "https://picsum.photos/seed/toddler-hello-goodbye-wave/600/400" },
                          { text: "Contamos cuentos.", imageSrc: "https://picsum.photos/seed/toddler-storytime-lap/600/400" },
                          { text: "Nombramos las acciones del día: levantarse, desayunar, comer, merendar, cenar.", imageSrc: "https://picsum.photos/seed/toddler-daily-routine-name/600/400" },
                          { text: "Frases cortas con dos palabras sin nexos para expresar lo que necesita.", imageSrc: "https://picsum.photos/seed/toddler-two-word-phrases/600/400" },
                          { text: "Aparece la primera pregunta ¿qué es? Se interesa por todo lo que le rodea.", imageSrc: "https://picsum.photos/seed/toddler-what-is-curious/600/400" },
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
                    id: "habitos-18-24",
                    title: "Hábitos",
                    content: [
                      {
                        title: "Hábitos",
                        items: [
                          { text: "Potenciar el encuentro con otros niños (guardería, parque, familiares) dando juguetes a todos e iniciando algún juego: pelota, cochecitos, hacer torres.", imageSrc: "https://picsum.photos/seed/toddler-play-other-children/600/400" },
                          { text: "Le enseñamos a recoger los juguetes, con ayuda.", imageSrc: "https://picsum.photos/seed/toddler-tidy-up-toys/600/400" },
                          { text: "Cuando alguien le ofrezca algo, le decimos que diga \"gracias\".", imageSrc: "https://picsum.photos/seed/toddler-say-thank-you/600/400" },
                          { text: "Le enseñamos que hay cosas que se pueden hacer y otras que no, sin reñirle, advirtiéndole cuando toque cosas peligrosas.", imageSrc: "https://picsum.photos/seed/toddler-no-dangerous-things/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "control-esfinteres",
                    title: "Control de esfínteres",
                    content: [
                      {
                        title: "Control de esfínteres",
                        items: [
                          { text: "Cuando tenga pis o caca, le pedimos que nos ayude a cambiarle, busque el pañal y las toallitas. Le enseñamos el pañal sucio y lo tiramos.", imageSrc: "https://picsum.photos/seed/toddler-diaper-change-help/600/400" },
                          { text: "Podemos alternar pañal y no pañal para que se dé cuenta cuando se moja que es incómodo.", imageSrc: "https://picsum.photos/seed/toddler-no-diaper-awareness/600/400" },
                          { text: "Lo acostumbramos a sentarse en el orinal y que vaya pidiendo pis y caca.", imageSrc: "https://picsum.photos/seed/toddler-potty-ask-habit/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "vestirse-desvestirse",
                    title: "Vestirse y desvestirse",
                    content: [
                      {
                        title: "Vestirse y desvestirse",
                        items: [
                          { text: "Le ayudamos a buscar en una prenda la parte delantera y la de atrás, el derecho y el revés.", imageSrc: "https://picsum.photos/seed/toddler-front-back-clothes/600/400" },
                          { text: "Le enseñamos a quitarse la ropa empezando con prendas sencillas: calcetines, pantalón, abrigo. Sacamos un poco la prenda para facilitarle la labor.", imageSrc: "https://picsum.photos/seed/toddler-undress-simple-clothes/600/400" },
                          { text: "Jugamos a bajar pantalones y faldas.", imageSrc: "https://picsum.photos/seed/toddler-pull-down-pants/600/400" },
                          { text: "Con el abrigo o chaqueta puesto, le ayudamos a subir y bajar la cremallera.", imageSrc: "https://picsum.photos/seed/toddler-zip-jacket/600/400" },
                          { text: "Jugamos a vestir y desvestir a los muñecos.", imageSrc: "https://picsum.photos/seed/toddler-dress-undress-doll/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "lavarse-18-24",
                    title: "Lavarse",
                    content: [
                      {
                        title: "Lavarse",
                        items: [
                          { text: "Le enseñamos a cepillarse los dientes después de las comidas, le permitimos que lo haga con el dedo o con un cepillo para niños.", imageSrc: "https://picsum.photos/seed/toddler-brush-teeth-after-meal/600/400" },
                          { text: "Le enseñamos a lavarse después de las comidas.", imageSrc: "https://picsum.photos/seed/toddler-wash-after-meal/600/400" },
                          { text: "Le enseñamos como le cortamos las uñas y para qué.", imageSrc: "https://picsum.photos/seed/toddler-nail-cutting-explain/600/400" },
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
                    id: "obs-18-24",
                    title: "Ejercicios de observación",
                    content: [
                      {
                        title: "Ejercicios de observación",
                        items: [
                          { text: "A través de libros con imágenes, tarjetas.", imageSrc: "https://picsum.photos/seed/toddler-image-books-cards/600/400" },
                          { text: "En la casa, paseamos observando y diciendo el nombre de las cosas. Por la ventana, observamos lo que vemos y lo comentamos.", imageSrc: "https://picsum.photos/seed/toddler-home-walk-point-name/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "atencion-18-24",
                    title: "Ejercicios de atención",
                    content: [
                      {
                        title: "Ejercicios de atención",
                        items: [
                          { text: "Damos dos palmadas encima de la mesa. Al levantar las manos, él debe dar también dos palmadas. Lo mismo con patadas.", imageSrc: "https://picsum.photos/seed/toddler-table-clap-mirror/600/400" },
                          { text: "Le contamos un cuento, le decimos que esté atento y le pedimos que señale los personajes conforme van saliendo.", imageSrc: "https://picsum.photos/seed/toddler-story-point-characters/600/400" },
                          { text: "Le damos instrucciones cortas para que las realice. Por ejemplo: trae los cubos de la mesa.", imageSrc: "https://picsum.photos/seed/toddler-short-instruction-fetch/600/400" },
                        ]
                      }
                    ]
                  },
                  {
                    id: "memoria-18-24",
                    title: "Ejercicios de memoria",
                    content: [
                      {
                        title: "Construir torres",
                        items: [
                          { text: "La hacemos primero nosotros, la tiramos y le pedimos que la haga luego.", imageSrc: "https://picsum.photos/seed/toddler-tower-build-knock/600/400" },
                        ]
                      },
                      {
                        title: "Comparaciones",
                        items: [
                          { text: "Grande/pequeño. Con juguetes o láminas, le pedimos que señale o traiga el grande o el pequeño.", imageSrc: "https://picsum.photos/seed/toddler-big-small-compare/600/400" },
                          { text: "Pesado/ligero. Por ejemplo, con un papel y una bolsa con cosas que pesen.", imageSrc: "https://picsum.photos/seed/toddler-heavy-light-compare/600/400" },
                          { text: "Lleno/vacío. Con una caja vacía y otra con juguetes, un vaso vacío y otro con líquido.", imageSrc: "https://picsum.photos/seed/toddler-full-empty-compare/600/400" },
                          { text: "Largo/corto. Con hilos largos y cortos, líneas largas y cortas, calcetines largos y cortos.", imageSrc: "https://picsum.photos/seed/toddler-long-short-compare/600/400" },
                        ]
                      },
                      {
                        title: "Colores",
                        items: [
                          { text: "Ponemos encima los que sean del mismo color. No tiene que saber el nombre. Ej.: juntamos papeles, juguetes o ropa del mismo color.", imageSrc: "https://picsum.photos/seed/toddler-sort-same-color/600/400" },
                        ]
                      },
                      {
                        title: "Rompecabezas sencillos",
                        items: [
                          { text: "Tableros con 3 piezas de animales.", imageSrc: "https://picsum.photos/seed/toddler-3piece-animal-puzzle/600/400" },
                          { text: "Partimos las figuras básicas de círculo, triángulo y cuadrado en dos mitades, las desmontamos y le pedimos que las monte.", imageSrc: "https://picsum.photos/seed/toddler-shape-halves-puzzle/600/400" },
                          { text: "Partimos una hoja de papel delante de él en dos, le enseñamos como se juntan y vuelve a ser una.", imageSrc: "https://picsum.photos/seed/toddler-paper-tear-join/600/400" },
                          { text: "Con una naranja, mandarina, manzana, plátano, ...", imageSrc: "https://picsum.photos/seed/toddler-fruit-halves-pieces/600/400" },
                        ]
                      },
                      {
                        title: "Concepto de tiempo: Día / Noche",
                        items: [
                          { text: "Aprovechamos la luz solar para explicarle que es de día y a la hora de acostarse que es de noche.", imageSrc: "https://picsum.photos/seed/toddler-day-night-sunlight/600/400" },
                          { text: "Le enseñamos dibujos con estrellas y luna (noche) y dibujos con sol (día).", imageSrc: "https://picsum.photos/seed/toddler-day-night-drawings/600/400" },
                        ]
                      },
                      {
                        title: "Jugamos a contar: Uno",
                        items: [
                          { text: "Le decimos que nos traiga un juguete, enseñándole a la vez 1 dedo.", imageSrc: "https://picsum.photos/seed/toddler-count-one-finger/600/400" },
                          { text: "Le enseñamos objetos de uno en uno, mientras decimos \"uno\".", imageSrc: "https://picsum.photos/seed/toddler-one-object-at-a-time/600/400" },
                        ]
                      },
                      {
                        title: "Juegos simbólicos",
                        items: [
                          { text: "Con una caja, hacemos como que es un coche, conducimos, pitamos...", imageSrc: "https://picsum.photos/seed/toddler-box-pretend-car/600/400" },
                        ]
                      }
                    ]
                  }
                ]
              },
            }
          }
        ]
      },
      {
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
                      { text: "Muéstrale una cara feliz y otra triste.", imageSrc: "https://picsum.photos/seed/child-happy-sad-face/600/400" },
                      { text: "Pídele que imite la cara que pones tú.", imageSrc: "https://picsum.photos/seed/child-imitate-expression/600/400" },
                      { text: "Nombra la emoción: 'Estoy alegre', 'Estoy enfadado'.", imageSrc: "https://picsum.photos/seed/child-emotions-naming/600/400" },
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
      }
    ]
  },
  {
    id: CategoryId.B,
    title: "Infantil (3 - 6 años)",
    colorClass: "bg-pink-600",
    bgClass: "bg-pink-50",
    textClass: "text-pink-600",
    areaConfigs: [
      { type: AreaType.BASIC_CONCEPTS, title: "Conceptos Básicos",      colorBase: "bg-teal-500" },
      { type: AreaType.ORAL_LANGUAGE,  title: "Lenguaje Oral",          colorBase: "bg-sky-500" },
      { type: AreaType.SOCIAL,         title: "Área Social",            colorBase: "bg-emerald-500" },
      { type: AreaType.PERCEPTION,     title: "Percepción y Cognición", colorBase: "bg-violet-500" },
    ],
    ageGroups: [
      {
        id: "3-4",
        label: "3 – 4 años",
        introText: [],
        areas: {
          [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
          [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
          [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
          [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
        }
      },
      {
        id: "4-5",
        label: "4 – 5 años",
        introText: [],
        areas: {
          [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
          [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
          [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
          [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
        }
      },
      {
        id: "5-6",
        label: "5 – 6 años",
        introText: [],
        areas: {
          [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
          [AreaType.ORAL_LANGUAGE]:  { title: "Lenguaje Oral",          subSections: [] },
          [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
          [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
        }
      }
    ]
  },
  {
    id: CategoryId.C,
    title: "Primaria (6 - 12 años)",
    colorClass: "bg-blue-600",
    bgClass: "bg-blue-50",
    textClass: "text-blue-600",
    areaConfigs: [
      { type: AreaType.VERBAL_REASONING,    title: "Razonamiento Verbal",              colorBase: "bg-indigo-500" },
      { type: AreaType.LOGICAL_REASONING,   title: "Razonamiento Lógico",             colorBase: "bg-violet-500" },
      { type: AreaType.NUMERICAL_REASONING, title: "Razonamiento Numérico",           colorBase: "bg-cyan-500" },
      { type: AreaType.SPATIAL_TEMPORAL,    title: "Estructuración Espacio-Temporal", colorBase: "bg-amber-500" },
    ],
    ageGroups: [
      {
        id: "6-8",
        label: "6 – 8 años",
        introText: [],
        areas: {
          [AreaType.VERBAL_REASONING]:    { title: "Razonamiento Verbal",              subSections: [] },
          [AreaType.LOGICAL_REASONING]:   { title: "Razonamiento Lógico",             subSections: [] },
          [AreaType.NUMERICAL_REASONING]: { title: "Razonamiento Numérico",           subSections: [] },
          [AreaType.SPATIAL_TEMPORAL]:    { title: "Estructuración Espacio-Temporal", subSections: [] },
        }
      },
      {
        id: "8-10",
        label: "8 – 10 años",
        introText: [],
        areas: {
          [AreaType.VERBAL_REASONING]:    { title: "Razonamiento Verbal",              subSections: [] },
          [AreaType.LOGICAL_REASONING]:   { title: "Razonamiento Lógico",             subSections: [] },
          [AreaType.NUMERICAL_REASONING]: { title: "Razonamiento Numérico",           subSections: [] },
          [AreaType.SPATIAL_TEMPORAL]:    { title: "Estructuración Espacio-Temporal", subSections: [] },
        }
      },
      {
        id: "10-12",
        label: "10 – 12 años",
        introText: [],
        areas: {
          [AreaType.VERBAL_REASONING]:    { title: "Razonamiento Verbal",              subSections: [] },
          [AreaType.LOGICAL_REASONING]:   { title: "Razonamiento Lógico",             subSections: [] },
          [AreaType.NUMERICAL_REASONING]: { title: "Razonamiento Numérico",           subSections: [] },
          [AreaType.SPATIAL_TEMPORAL]:    { title: "Estructuración Espacio-Temporal", subSections: [] },
        }
      }
    ]
  },
  {
    id: CategoryId.D,
    title: "Atención a la diversidad",
    colorClass: "bg-green-600",
    bgClass: "bg-green-50",
    textClass: "text-green-600",
    areaConfigs: [
      { type: AreaType.GROSS_MOTOR,  title: "Motricidad Gruesa",        colorBase: "bg-orange-500" },
      { type: AreaType.FINE_MOTOR,   title: "Motricidad Fina",          colorBase: "bg-rose-500" },
      { type: AreaType.LANGUAGE,     title: "Lenguaje",                 colorBase: "bg-sky-500" },
      { type: AreaType.SOCIAL,       title: "Área Social",              colorBase: "bg-emerald-500" },
      { type: AreaType.PERCEPTION,   title: "Percepción y Cognición",   colorBase: "bg-violet-500" },
    ],
    ageGroups: [
      { id: "sindrome-down",  label: "Síndrome Down",  introText: [], areas: {} },
      { id: "dislexia",       label: "Dislexia",       introText: [], areas: {} },
      { id: "tda",            label: "TDA",            introText: [], areas: {} },
      { id: "tea",            label: "TEA",            introText: [], areas: {} },
      { id: "lenguaje-oral",  label: "Lenguaje oral",  introText: [], areas: {} },
    ]
  }
];
