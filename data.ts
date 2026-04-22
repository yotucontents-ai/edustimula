import { CategoryId, Category, AreaType } from './types';

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
          "Háblale y cántale mientras le haces los ejercicios.",
          "Nunca lo despiertes ni lo fuerces.",
          "Espera 20 minutos después de comer.",
          "Trabaja en un lugar seguro y tranquilo.",
          "Repite los ejercicios dos veces por semana.",
          "No usar guantes, que tenga el contacto con la piel.",
          "No usar tablets, pantallas."
        ],
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
                          "a) Utilizamos tres dedos para sujetar el cuello del bebé y hacer una especie de abdominales acostado, sentado.",
                          "b) Entre 2-3 meses: dado la vuelta hacia abajo, podemos poner objetos de colores delante para que levante levemente la cabecita, para que intente levantar y girar la cabeza.",
                          "c) Colocar al bebé en una superficie dura apoyando los antebrazos, acariciar su espalda o pasar los dedos por encima de su columna vertebral, bajando del cuello a la cadera, pero NO en sentido contrario."
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
                          "a) Extendemos brazos arriba.",
                          "b) Brazos cruzados sobre el pecho.",
                          "c) Un brazo arriba, otro abajo.",
                          "d) Extendemos piernas, se las flexionamos suavemente por la rodilla: primero una pierna, luego otra, las dos a la vez.",
                          "e) Brazo y pierna cruzada."
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
                          "Con objetos de diferentes texturas se los pasamos suavemente por las manos y por los pies, por todo su cuerpo.",
                          "Ofrécele juguetes para que los sujete; permítele que se los lleve a la boca si están limpios.",
                          "Si no es capaz de coger un objeto, ayúdale poniendo sus dedos alrededor del mismo.",
                          "Extiende sus puños; se acostumbrará a una mayor sensación que reciben sus palmas.",
                          "Estira suavemente cada dedo de la mano.",
                          "Recorre su cuerpo con una toalla pequeña o paño suave: manos, piernas, pies.",
                          "Coge su mano y llévasela a su boca para que la chupe.",
                          "Pasar su mano sobre la cara y pelo.",
                          "Descubrir sus manos: llevar las manos a la altura de los ojos y unírselas."
                        ]
                      }
                    ]
                  }
                ]
              },
              [AreaType.LANGUAGE]:    { title: "Lenguaje",                 subSections: [] },
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
                          "Sonríele y háblale mientras lo atiendes.",
                          "Distingue su llanto. Apóyalo contra tu pecho.",
                          "Usa tono de voz dulce, acarícialo.",
                          "Dale mucho cariño, besos y abrazos."
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
                          "Mírale a la cara, atrae su mirada.",
                          "Usamos objetos de colores con contrastes como blanco, negro, rojo, al mismo tiempo — por ejemplo cintas, tarjetas. Las llevamos de derecha a izquierda delante de la cara del bebé, de arriba abajo."
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
                          "Utilizamos objetos sonoros y también con nuestra voz. El bebé se inclinará ligeramente hacia el lado del sonido.",
                          "Háblale para que empiece a fijar la mirada.",
                          "Ponle música suave y de baja intensidad; estimula la sensibilidad auditiva y cerebral.",
                          "Dale un sonajero y agítalo para que intente imitar el movimiento. Cuida que no se golpee.",
                          "Háblale, llámale por su nombre."
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
                          "a) Dejarlo sentado en su silla inclinado todo el tiempo que resista sin cansarse; progresivamente ir pasándolo a posición más vertical del respaldo. Sentarlo sobre almohadones duros en distintos lugares de la casa.",
                          "b) Ponerlo sentado en una superficie dura con las piernas en forma de uve.",
                          "c) Cogerlo verticalmente, su espalda contra nuestro pecho, sujetando con una mano sus rodillas y la otra su abdomen: inclinarlo hacia adelante.",
                          "d) Apoyo sobre su cuerpo: estando descalzo, sostenerlo por las axilas, elevarlo y dejarlo caer suavemente sobre distintas superficies."
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
                          "Pasar de boca arriba a de lado, animarlo ofreciéndole algún juguete.",
                          "Pasar de boca arriba a boca abajo. Coger su pierna por debajo de la rodilla, flexionarla e iniciar el volteo."
                        ]
                      },
                      {
                        title: "Ejercicios dorsales",
                        items: [
                          "Al niño boca abajo, con una mano por las rodillas y la otra en el pecho, inclinarlo hacia un balón grande hasta que apoye las manos e inicie un esfuerzo para enderezarse. Reforzar sus intentos."
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
                          "De Landau: coger al bebé por el tronco, elevarlo horizontalmente. El niño debe levantar su cabeza y flexionar las extremidades.",
                          "Del paracaidista: cogemos al niño por el tronco y rápidamente lo acercamos al suelo. Observaremos que antes de que la cabeza llegue al suelo, el niño extiende sus brazos. Es una reacción de equilibrio que dura toda la vida."
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
                          "a) Masaje en cada dedo de la mano.",
                          "b) Movimientos de rotación de muñeca.",
                          "c) Flexión de dedos.",
                          "d) Extensión y flexión de los dedos del pie."
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
                          "Cogemos las manos del bebé y se las juntamos, cantándole alguna canción como \"Palmas, palmitas\" o \"los lobitos\"."
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
                          "Le acercamos objetos para que intente cogerlos.",
                          "Ofrecerle objetos de distintos tamaños. Los grandes para que tenga que cogerlos con toda la mano, y los pequeños para que le entren en su palma y los agarre.",
                          "Jugar a darle juguetes y luego a quitárselos.",
                          "Tumbado, le tapamos la cara con un pañuelo; esperamos a que se lo quite. Si no lo consigue, se lo quitamos nosotros."
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
                          "Al final de los 6 meses tiene una buena fonación; realiza sonidos para llamar la atención, para entretenerse o para expresar sus necesidades. Ejercicios del adulto hacia el niño.",
                          "Le nombramos los objetos que le damos.",
                          "Le contamos cuentos mientras le tenemos en brazos. Le cantamos canciones.",
                          "Jugamos a emitir sonidos un par de minutos al día.",
                          "Jugamos a emitir cadenas de vocales: oooo, aaa, iiii... Cadenas consonánticas: babababa, mamamama, papapa.",
                          "Hacemos ruidos con los labios juntos como si tirásemos besos.",
                          "Gritamos."
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
                          "Dejamos que el bebé emita sonidos sin interrumpirle. Al parar le mostramos nuestra satisfacción."
                        ]
                      }
                    ]
                  }
                ]
              },
              [AreaType.SOCIAL]:      { title: "Área Social",              subSections: [] },
              [AreaType.PERCEPTION]:  { title: "Percepción y Cognición",   subSections: [] },
            }
          },
          {
            id: "tramo-6-9",
            label: "3er tramo (6 - 9 meses)",
            areas: {
              [AreaType.GROSS_MOTOR]: { title: "Motricidad Gruesa",        subSections: [] },
              [AreaType.FINE_MOTOR]:  { title: "Motricidad Fina",          subSections: [] },
              [AreaType.LANGUAGE]:    { title: "Lenguaje",                 subSections: [] },
              [AreaType.SOCIAL]:      { title: "Área Social",              subSections: [] },
              [AreaType.PERCEPTION]:  { title: "Percepción y Cognición",   subSections: [] },
            }
          },
          {
            id: "tramo-9-12",
            label: "4º tramo (9 meses - 1 año)",
            areas: {
              [AreaType.GROSS_MOTOR]: { title: "Motricidad Gruesa",        subSections: [] },
              [AreaType.FINE_MOTOR]:  { title: "Motricidad Fina",          subSections: [] },
              [AreaType.LANGUAGE]:    { title: "Lenguaje",                 subSections: [] },
              [AreaType.SOCIAL]:      { title: "Área Social",              subSections: [] },
              [AreaType.PERCEPTION]:  { title: "Percepción y Cognición",   subSections: [] },
            }
          }
        ]
      },
      {
        id: "1-2",
        label: "1 – 2 años",
        introText: [
          "Fomenta la autonomía permitiendo que intente señalar los objetos.",
          "Celebra cada acierto con entusiasmo.",
          "Nombra los objetos en voz alta para reforzar el vocabulario cotidiano."
        ],
        areas: {
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
                      { id: "g2-1", title: "¿Dónde está el agua?", game: { type: 'select-image', question: "¿Dónde está el agua?", correctAnswer: "water", successMessage: "¡Muy bien! Eso es el agua.", options: [{ id: "water", label: "Agua", icon: "GlassWater" }, { id: "spoon", label: "Cuchara", icon: "Utensils" }] } },
                      { id: "g2-2", title: "¿Donde está el plato?", game: { type: 'select-image', question: "¿Dónde está el plato?", correctAnswer: "plate", options: [{ id: "ball", label: "Pelota", icon: "Circle" }, { id: "plate", label: "Plato", icon: "Disc" }] } },
                      { id: "g2-3", title: "¿Donde está la cuna?", game: { type: 'select-image', question: "¿Dónde está la cuna?", correctAnswer: "crib", options: [{ id: "crib", label: "Cuna", icon: "Bed" }, { id: "car", label: "Coche", icon: "Car" }] } },
                      { id: "g2-4", title: "¿Donde está la pelota?", game: { type: 'select-image', question: "¿Dónde está la pelota?", correctAnswer: "ball", options: [{ id: "diaper", label: "Pañal", icon: "Baby" }, { id: "ball", label: "Pelota", icon: "Circle" }] } },
                      { id: "g2-5", title: "¿Donde está la cuchara?", game: { type: 'select-image', question: "¿Dónde está la cuchara?", correctAnswer: "spoon", options: [{ id: "spoon", label: "Cuchara", icon: "Utensils" }, { id: "shoe", label: "Zapato", icon: "Footprints" }] } },
                      { id: "g2-6", title: "¿Donde está el pañal?", game: { type: 'select-image', question: "¿Dónde está el pañal?", correctAnswer: "diaper", options: [{ id: "book", label: "Libro", icon: "Book" }, { id: "diaper", label: "Pañal", icon: "Baby" }] } }
                    ]
                  },
                  {
                    id: "level-3-options",
                    title: "Nivel 2 (3 opciones)",
                    subSections: [
                      { id: "g3-1", title: "¿Dónde está el agua?", game: { type: 'select-image', question: "¿Dónde está el agua?", correctAnswer: "water", options: [{ id: "water", label: "Agua", icon: "GlassWater" }, { id: "plate", label: "Plato", icon: "Disc" }, { id: "ball", label: "Pelota", icon: "Circle" }] } },
                      { id: "g3-2", title: "¿Dónde está el biberón?", game: { type: 'select-image', question: "¿Dónde está el biberón?", correctAnswer: "milk", options: [{ id: "crib", label: "Cuna", icon: "Bed" }, { id: "milk", label: "Biberón", icon: "Milk" }, { id: "spoon", label: "Cuchara", icon: "Utensils" }] } },
                      { id: "g3-3", title: "¿Dónde está el zapato?", game: { type: 'select-image', question: "¿Dónde está el zapato?", correctAnswer: "shoe", options: [{ id: "shirt", label: "Camiseta", icon: "Shirt" }, { id: "shoe", label: "Zapato", icon: "Footprints" }, { id: "apple", label: "Manzana", icon: "Apple" }] } },
                      { id: "g3-4", title: "¿Dónde está la casa?", game: { type: 'select-image', question: "¿Dónde está la casa?", correctAnswer: "home", options: [{ id: "car", label: "Coche", icon: "Car" }, { id: "home", label: "Casa", icon: "Home" }, { id: "tree", label: "Árbol", icon: "Cloud" }] } },
                      { id: "g3-5", title: "¿Dónde está el sol?", game: { type: 'select-image', question: "¿Dónde está el sol?", correctAnswer: "sun", options: [{ id: "sun", label: "Sol", icon: "Sun" }, { id: "moon", label: "Luna", icon: "Moon" }, { id: "star", label: "Estrella", icon: "Star" }] } },
                      { id: "g3-6", title: "¿Dónde está el gato?", game: { type: 'select-image', question: "¿Dónde está el gato?", correctAnswer: "cat", options: [{ id: "dog", label: "Perro", icon: "Dog" }, { id: "cat", label: "Gato", icon: "Cat" }, { id: "bird", label: "Pájaro", icon: "Activity" }] } }
                    ]
                  },
                  {
                    id: "level-4-options",
                    title: "Nivel 3 (4 opciones)",
                    subSections: [
                      { id: "g4-1", title: "¿Dónde está la cuchara?", game: { type: 'select-image', question: "¿Dónde está la cuchara?", correctAnswer: "spoon", options: [{ id: "water", label: "Agua", icon: "GlassWater" }, { id: "plate", label: "Plato", icon: "Disc" }, { id: "spoon", label: "Cuchara", icon: "Utensils" }, { id: "diaper", label: "Pañal", icon: "Baby" }] } },
                      { id: "g4-2", title: "¿Dónde está la cuna?", game: { type: 'select-image', question: "¿Dónde está la cuna?", correctAnswer: "crib", options: [{ id: "crib", label: "Cuna", icon: "Bed" }, { id: "ball", label: "Pelota", icon: "Circle" }, { id: "house", label: "Casa", icon: "Home" }, { id: "car", label: "Coche", icon: "Car" }] } },
                      { id: "g4-3", title: "¿Dónde está el plátano?", game: { type: 'select-image', question: "¿Dónde está el plátano?", correctAnswer: "banana", options: [{ id: "apple", label: "Manzana", icon: "Apple" }, { id: "banana", label: "Plátano", icon: "Banana" }, { id: "bread", label: "Pan", icon: "Utensils" }, { id: "milk", label: "Leche", icon: "Milk" }] } },
                      { id: "g4-4", title: "¿Dónde está el libro?", game: { type: 'select-image', question: "¿Dónde está el libro?", correctAnswer: "book", options: [{ id: "pencil", label: "Lápiz", icon: "Pencil" }, { id: "book", label: "Libro", icon: "Book" }, { id: "toy", label: "Juguete", icon: "Star" }, { id: "box", label: "Caja", icon: "Circle" }] } },
                      { id: "g4-5", title: "¿Dónde está la bici?", game: { type: 'select-image', question: "¿Dónde está la bici?", correctAnswer: "bike", options: [{ id: "bus", label: "Autobús", icon: "Bus" }, { id: "bike", label: "Bici", icon: "Bike" }, { id: "car", label: "Coche", icon: "Car" }, { id: "boat", label: "Barco", icon: "Activity" }] } },
                      { id: "g4-6", title: "¿Dónde está la flor?", game: { type: 'select-image', question: "¿Dónde está la flor?", correctAnswer: "flower", options: [{ id: "tree", label: "Árbol", icon: "Cloud" }, { id: "flower", label: "Flor", icon: "Smile" }, { id: "leaf", label: "Hoja", icon: "Activity" }, { id: "grass", label: "Césped", icon: "Activity" }] } }
                    ]
                  }
                ]
              },
              {
                id: "imitar-movimientos",
                title: "2. Imitar movimientos lengua y labios",
                icon: "Wind",
                subSections: [
                  { id: "mov-1", title: "Sopla", game: { type: 'select-image', question: "¡Sopla!", successMessage: "¡Genial! Sopla otra vez.", correctAnswer: "sopla", options: [{ id: "sopla", label: "Sopla", icon: "Wind" }] } },
                  { id: "mov-2", title: "Muaa (Beso)", game: { type: 'select-image', question: "¡Muaa!", successMessage: "¡Qué beso más rico!", correctAnswer: "beso", options: [{ id: "beso", label: "Beso", icon: "Heart" }] } },
                  { id: "mov-3", title: "Lengua afuera", game: { type: 'select-image', question: "Saca la lengua: ¡Aaaa!", successMessage: "¡Muy bien!", correctAnswer: "fuera", options: [{ id: "fuera", label: "Lengua afuera", icon: "Smile" }] } },
                  { id: "mov-4", title: "Lengua a los lados", game: { type: 'select-image', question: "Mueve la lengua de lado a lado", successMessage: "¡Como un reloj!", correctAnswer: "lados", options: [{ id: "lados", label: "A los lados", icon: "Activity" }] } }
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
                      { id: "cp-1", title: "Cabeza", game: { type: 'select-image', question: "Tócate la CABEZA", correctAnswer: "ok", options: [{ id: "ok", label: "CABEZA", icon: "User" }] } },
                      { id: "cp-2", title: "Nariz", game: { type: 'select-image', question: "Tócate la NARIZ", correctAnswer: "ok", options: [{ id: "ok", label: "NARIZ", icon: "Circle" }] } },
                      { id: "cp-3", title: "Boca", game: { type: 'select-image', question: "Tócate la BOCA", correctAnswer: "ok", options: [{ id: "ok", label: "BOCA", icon: "Smile" }] } },
                      { id: "cp-4", title: "Pelo", game: { type: 'select-image', question: "Tócate el PELO", correctAnswer: "ok", options: [{ id: "ok", label: "PELO", icon: "Activity" }] } },
                      { id: "cp-5", title: "Orejas", game: { type: 'select-image', question: "Tócate las OREJAS", correctAnswer: "ok", options: [{ id: "ok", label: "OREJAS", icon: "Ear" }] } },
                      { id: "cp-6", title: "Ojos", game: { type: 'select-image', question: "Tócate los OJOS", correctAnswer: "ok", options: [{ id: "ok", label: "OJOS", icon: "Eye" }] } }
                    ]
                  },
                  {
                    id: "cara-papás",
                    title: "En mamá o papá",
                    subSections: [
                      { id: "cpp-1", title: "Cabeza", game: { type: 'select-image', question: "Señala la CABEZA en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "CABEZA", icon: "User" }] } },
                      { id: "cpp-2", title: "Nariz", game: { type: 'select-image', question: "Señala la NARIZ en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "NARIZ", icon: "Circle" }] } },
                      { id: "cpp-3", title: "Boca", game: { type: 'select-image', question: "Señala la BOCA en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "BOCA", icon: "Smile" }] } },
                      { id: "cpp-4", title: "Pelo", game: { type: 'select-image', question: "Señala el PELO en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "PELO", icon: "Activity" }] } },
                      { id: "cpp-5", title: "Orejas", game: { type: 'select-image', question: "Señala las OREJAS en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "OREJAS", icon: "Ear" }] } },
                      { id: "cpp-6", title: "Ojos", game: { type: 'select-image', question: "Señala los OJOS en papá/mamá", correctAnswer: "ok", options: [{ id: "ok", label: "OJOS", icon: "Eye" }] } }
                    ]
                  },
                  {
                    id: "cara-dibujo",
                    title: "En un dibujo de niño",
                    subSections: [
                      { id: "cd-1", title: "¿Dónde está la BOCA?", game: { type: 'select-image', question: "BOCA", successMessage: "¡Bien!", correctAnswer: "boca", options: [{ id: "boca", label: "Boca", icon: "Smile" }, { id: "ojos", label: "Ojos", icon: "Eye" }, { id: "nariz", label: "Nariz", icon: "Circle" }] } },
                      { id: "cd-2", title: "¿Dónde está la NARIZ?", game: { type: 'select-image', question: "NARIZ", successMessage: "¡Bien!", correctAnswer: "nariz", options: [{ id: "orejas", label: "Orejas", icon: "Ear" }, { id: "nariz", label: "Nariz", icon: "Circle" }, { id: "pelo", label: "Pelo", icon: "Activity" }] } },
                      { id: "cd-3", title: "¿Donde están los OJOS?", game: { type: 'select-image', question: "OJOS", successMessage: "¡Bien!", correctAnswer: "ojos", options: [{ id: "ojos", label: "Ojos", icon: "Eye" }, { id: "boca", label: "Boca", icon: "Smile" }, { id: "cabeza", label: "Cabeza", icon: "User" }] } }
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
                      { id: "body-1", title: "Mano", game: { type: 'select-image', question: "Tócate la MANO", correctAnswer: "ok", options: [{ id: "ok", label: "MANO", icon: "Hand" }] } },
                      { id: "body-2", title: "Pie", game: { type: 'select-image', question: "Tócate el PIE", correctAnswer: "ok", options: [{ id: "ok", label: "PIE", icon: "Footprints" }] } },
                      { id: "body-3", title: "Barriga", game: { type: 'select-image', question: "Tócate la BARRIGA", correctAnswer: "ok", options: [{ id: "ok", label: "BARRIGA", icon: "Circle" }] } }
                    ]
                  },
                  {
                    id: "cuerpo-dibujo",
                    title: "Sobre un dibujo",
                    subSections: [
                      { id: "bd-1", title: "¿Donde está la MANO?", game: { type: 'select-image', question: "MANO", correctAnswer: "mano", options: [{ id: "mano", label: "Mano", icon: "Hand" }, { id: "pie", label: "Pie", icon: "Footprints" }] } },
                      { id: "bd-2", title: "¿Donde está el PIE?", game: { type: 'select-image', question: "PIE", correctAnswer: "pie", options: [{ id: "mano", label: "Mano", icon: "Hand" }, { id: "pie", label: "Pie", icon: "Footprints" }] } }
                    ]
                  }
                ]
              },
              {
                id: "uno-muchos",
                title: "5. Diferenciación UNO-MUCHOS",
                icon: "Layers",
                subSections: [
                  { id: "um-1", title: "Pelotas", game: { type: 'select-image', question: "¿Dónde hay MUCHAS pelotas?", correctAnswer: "muchos", options: [{ id: "uno", label: "Una", icon: "Circle" }, { id: "muchos", label: "Muchas", icon: "LayoutGrid" }] } },
                  { id: "um-2", title: "Manzanas", game: { type: 'select-image', question: "¿Dónde hay UNA manzana?", correctAnswer: "uno", options: [{ id: "uno", label: "Una", icon: "Apple" }, { id: "muchos", label: "Muchas", icon: "Layers" }] } },
                  { id: "um-3", title: "Flores", game: { type: 'select-image', question: "¿Dónde hay MUCHAS flores?", correctAnswer: "muchos", options: [{ id: "uno", label: "Una", icon: "Smile" }, { id: "muchos", label: "Muchas", icon: "LayoutGrid" }] } },
                  { id: "um-4", title: "Estrellas", game: { type: 'select-image', question: "¿Dónde hay UNA estrella?", correctAnswer: "uno", options: [{ id: "uno", label: "Una", icon: "Star" }, { id: "muchos", label: "Muchas", icon: "Layers" }] } },
                  { id: "um-5", title: "Coches", game: { type: 'select-image', question: "¿Dónde hay MUCHOS coches?", correctAnswer: "muchos", options: [{ id: "uno", label: "Uno", icon: "Car" }, { id: "muchos", label: "Muchos", icon: "LayoutGrid" }] } }
                ]
              },
              {
                id: "donde-tren",
                title: "6. ¿Dónde está el tren?",
                icon: "TrainFront",
                subSections: [
                  { id: "tren-1", title: "Juego del tren", game: { type: 'select-image', question: "¿Dónde está el tren?", successMessage: "¡Chucu-chucu! ¡Ahí está!", correctAnswer: "tren", options: [{ id: "tren", label: "Tren", icon: "TrainFront" }, { id: "bus", label: "Bus", icon: "Bus" }] } },
                  { id: "tren-vida-real", title: "Variación vida real", content: [{ title: "Actividad para padres", items: ["Escoge un objeto de la habitación.", "Pregúntale: ¿Dónde está el/la [objeto]?", "Fomenta que el niño lo busque o lo señale con el dedo."] }] }
                ]
              }
            ]
          },
          [AreaType.PERCEPTION]: {
            title: "Percepción y Cognición",
            subSections: []
          }
        }
      },
      {
        id: "2-3",
        label: "2 – 3 años",
        introText: [
          "A esta edad el niño ya puede realizar frases sencillas.",
          "Fomenta el juego simbólico (hacer como que come, como que duerme).",
          "Trabaja la coordinación motora con juegos de saltar o trepar."
        ],
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
                      "Muéstrale una cara feliz y otra triste.",
                      "Pídele que imite la cara que pones tú.",
                      "Nombra la emoción: 'Estoy alegre', 'Estoy enfadado'."
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
