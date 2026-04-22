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
                  },
                  {
                    id: "lenguaje-gestual",
                    title: "Lenguaje gestual",
                    content: [
                      {
                        title: "Lenguaje gestual",
                        items: [
                          "Jugamos a poner cara de sorpresa, abrimos la boca y los ojos, levantamos las cejas.",
                          "Le sacamos la lengua y nos ponemos las manos en las orejas moviéndolas.",
                          "Ponemos cara de enfado, de tristeza, de llorar."
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
                          "Responde al sonido de su nombre.",
                          "Iniciación de la toma de alimentos semisólidos con cuchara.",
                          "Acostumbrarle a salir y a hablarle cuando se encuentre con personas en el parque o en la calle.",
                          "No dejar que lo cojan bruscamente otras personas. Cuando lo hagan, nos acercamos a él y ponemos cara de satisfacción.",
                          "No lo dejamos mucho tiempo en brazos de otras personas.",
                          "Dejar que otras personas jueguen con él. Mostrarle nuestra alegría."
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
                    id: "percepcion-3-6",
                    title: "Conceptos a desarrollar",
                    content: [
                      {
                        title: "Conceptos (en desarrollo)",
                        items: [
                          "Fijación visual.",
                          "Seguimiento visual de los objetos.",
                          "Localización de sonidos.",
                          "Juego de esconderse.",
                          "Ejercicios de atención."
                        ]
                      }
                    ]
                  }
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
                          "Ejercicios de relajación y respiración, como en el trimestre anterior con el balón de playa.",
                          "Palpaciones con las yemas de los dedos por todo el cuerpo, ligeros golpes, ligeros masajes.",
                          "Amasarle suavemente la espalda, las piernas y los brazos.",
                          "Masajes faciales."
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
                          "Tumbado boca abajo. Desde esta postura se arrastra hacia atrás, se sienta, gira sobre sí mismo, etc.",
                          "Tumbado boca arriba. Sobre todo, cuando algo le llama mucho la atención.",
                          "Sentado. Permanece en esta posición al final del trimestre sin perder el equilibrio.",
                          "De pie. Al final de este trimestre intentan ponerse de pie cuando tienen cerca objetos o personas que se lo permiten.",
                          "Gateo. Se inicia el gateo. Con este ejercicio se ejercitan los dos hemisferios del cerebro."
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
                          "Le gusta coger objetos y soltarlos.",
                          "Diferencia unos materiales de otros.",
                          "Utiliza el índice y el pulgar para coger objetos."
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
                          "Señala con el índice, aplaude. Da palmadas, da golpes, tira objetos lejos.",
                          "Le gusta manipular objetos con ambas manos.",
                          "Empieza a utilizar la pinza pulgar índice para coger objetos más con una mano que con otra."
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
                          "En este trimestre aparece su primera palabra, en unos niños ocurre antes, en otros más tarde.",
                          "A partir del 8º mes al niño le gusta mucho imitar.",
                          "Es normal ver al niño con la lengua fuera. Es importante activar este músculo para el habla. Todo lo que hagamos juegos o sonidos enseñándoles la lengua, le gustarán mucho.",
                          "Empieza a comprender preguntas como ¿dónde está el chupete? ¿Dónde está mamá? ¡No toques eso!",
                          "Utiliza el grito para mostrar su enfado.",
                          "Emite mucha cantidad de sonidos ante personas conocidas.",
                          "Utiliza el índice para señalar, como forma primitiva de preguntar.",
                          "Le gusta que le hablen, que le canten, la música, suele bailar al oírla.",
                          "Empezar a enseñarle a decir \"adiós\".",
                          "Dar nombre a las cosas.",
                          "Tirar besos y soplar."
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
                          "Cosquillas con contacto corporal.",
                          "Carcajadas sin contacto corporal."
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
                          "Ofrecerle dos juguetes para que se decida a coger solo uno."
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
                          "Cambiarle los juguetes del sitio dónde están habitualmente, de espaldas, medio tapados,… para que él los descubra."
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
                          "Enseñarle libros con detalles.",
                          "Ofrecerle juguetes con muchos detalles llamativos."
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
                          "Le cantamos una canción que acompañamos de palabra y gesto. Terminará por hacer el gesto sin que se lo pidamos.",
                          "Decir adiós, lo repetirá de forma automática."
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
                          "Le sentamos sobre un rodillo grande y le sujetamos por muslos y rodillas. Suavemente deslizamos el rodillo adelante y atrás para que el niño haga esfuerzo por enderezarse y permanezca sentado.",
                          "Sentamos al niño delante nuestra y jugamos a pasarle la pelota. La distancia entre el adulto y el niño debe ser pequeña para facilitarle que nos la devuelva.",
                          "Sentarle en el suelo y ponerle juguetes para que los coja y juegue con ellos. Así sentado sin apoyo, va liberando los brazos. Reforzar sus intentos.",
                          "Ofrecerle una caja o cubo llena de juguetes para que los saque.",
                          "Darle juegos de encajes sencillos. Le resultará fácil sacarlos, le ayudamos a ponerlos.",
                          "Reflejo de apoyo lateral. Estando el niño sentado sobre una superficie dura, lo empujamos repentinamente hacia uno y otro lado, para que apoye la mano correspondiente y así se protegerá ante una caída hacia los lados."
                        ]
                      },
                      {
                        title: "Pasar de tumbado boca arriba / tumbado boca abajo y viceversa",
                        items: [
                          "Le damos las manos para que se incorpore, una vez sentado le volvemos a tumbar.",
                          "Aprovechamos al cambiarlo, le cogemos los pies y se los acercamos a la boca. También en esta postura le cruzamos los brazos y se los abrimos."
                        ]
                      },
                      {
                        title: "Tumbado boca abajo",
                        items: [
                          "Le ofrecemos juguetes para que se arrastren. Le enseñamos algún juguete y cuando vaya a alcanzarlo se lo alejamos para que siga intentando cogerlo.",
                          "Carretilla. Estando el niño boca abajo, levantarlo sujetándolo por los muslos y haciendo que se apoye sobre sus brazos. Incitarle a que se desplace utilizando solo sus brazos."
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
                          "Le agarramos por los muslos impidiéndole que lo haga, seguramente se enojará, esperamos unos segundos y lo dejamos.",
                          "Dejamos la habitación libre de juguetes y nos ponemos a gatear con el bebé, gateamos en línea recta, para atrás, dando vueltas, …",
                          "Gatear en una habitación llena de juguetes, obstáculos, tendrá que sortearlos.",
                          "Ponerle elementos sorpresa: al ir gateando se encuentra con un pañuelo que al tirar de él, sale su juguete preferido.",
                          "Colgar de la pared algún juguete pequeño que no tenga peso, se pondrá de pie para cogerlo…. Cuando domine la postura de pie, se lo vamos elevando para que tenga que esforzarse en cogerlo.",
                          "Colgar de la pared paneles con muñecos, cintas, pelotas de distinto tamaño…pero que pueda tocar, morder, chupar, tirar, … Cambiar los paneles cuando ya los tenga aburridos.",
                          "Cuando gatee sin dificultad, le ponemos cojines de diferentes tamaños, animándolo a subir y seguir desplazándose."
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
                          "Jugar con él cogiéndole por las caderas de pie. Hablarle, reír, cantarle, balancearle.",
                          "Primeros pasos con ayuda: Cuando está de pie agarrado con las dos manos, ofrecerle un juguete para que lo coja y suelte una mano. Si se cae, ayudarle a ponerse de pie y ofrecerle otra vez el juguete. Sin forzarle, le cogemos de las manos y le ayudamos a andar, si se cansa, flexiona las rodillas, le dejamos para que gatee un rato. Luego lo volvemos a intentar. No forzarlo, hay niños que dan pasos y otros todavía no.",
                          "Coger objetos del suelo: Estando el niño de pie agarrado a un mueble o a diferentes alturas, colocar juguetes de su agrado en el suelo, para que se agache a cogerlo. Empezar con juguetes altos e ir disminuyendo la altura a medida que disminuyen sus dificultades."
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
                          "Vertical, de arriba abajo. Horizontal, golpeando un objeto contra otro.",
                          "Coger 2 objetos a la vez con ambas manos. Cuando el niño tenga un objeto ofrecerle otro, intentando que sostenga los dos."
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
                          "Ofrecerle canicas, botones, bolitas,… para que los coja con el dedo índice y pulgar."
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
                          "Tocar el piano con ese dedo.",
                          "Tocar interruptores."
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
                          "Sacar objetos de un recipiente ancho.",
                          "Sacar y meter anillas grandes en un eje."
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
                          "Seguimos tocando palmas. Unos lo realizan, otros no.",
                          "Untarle los dedos con sustancias ricas para que los chupe o se los mire.",
                          "Abrir y cerrar los dedos de la mano de forma espontánea. Cuando le digamos \"adiós\", ya puede realizar movimientos con los 4 dedos.",
                          "Le ayudaremos a palparse el cuerpo con las manos: la cara, la barriga, las piernas, …",
                          "Dejamos que con el índice nos toque la boca, los ojos, …",
                          "Con lapiceros de colores gordos y no tóxicos, dejar que los toque sin insinuarle para qué sirven. Más tarde cogemos hojas grandes de papel o cartulinas, nos ponemos a su lado y realizamos una raya, otra y otra, … hasta que él nos quiera imitar. No se trata de escribir, más bien de plasmar un movimiento, que normalmente le gusta.",
                          "Darles trapos y le decimos \"mira\", mientras nosotros hacemos gesto de limpiar el suelo, mesa, cama, … con movimientos circulares y horizontales. La intención es que el niño nos imite.",
                          "Enseñarle a amasar: Le hundimos los dedos en una pasta espesa hecha con agua y harina, con plastilina blanda.",
                          "Hacer agujeros grandes en una cartulina y después agujeros pequeños para que meta por ahí los dedos.",
                          "Darle hojas de papel para que rompa, revistas viejas...",
                          "Darle cuentos para que pase las hojas con el dedo índice.",
                          "Darle encajes de diferente dificultad: cajas que se metan unas dentro de otras, muñecas rusas, …",
                          "Le proporcionamos un rastrillo de juguete, le enseñamos el movimiento de arrastre y dejamos que juegue con él.",
                          "Tira de la cadena del wáter.",
                          "Encender y apagar las luces.",
                          "Tapar y destapar tarteras."
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
                          "Abrir y cerrar la boca.",
                          "Sacar y meter la lengua.",
                          "Hacer sonidos guturales: ja ja je je, dentales y labiales tatata, papap, bababa, dadada, mamama.",
                          "Acariciarle las mejillas, soplárselas, tocárselas con algodón, plumas, con sus muñecos, con una cuchara de metal,…",
                          "Delante de un espejo, le cogemos su mano y le decimos: \"pelo\" se la llevamos al pelo, luego en la boca, la nariz, orejas."
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
                          "Combinar voz y no voz: le decimos \"dame la pelota\" y se lo repetimos sin hacer sonido (sólo con muecas de la boca).",
                          "Ponemos música y la apagamos, la volvemos a poner. Lo mismo con nuestra voz."
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
                          "\"NO\". Cuando el niño se acerque a algo que no queramos que toque, le decimos: NO. El niño se tiene que detener y mirarnos. Al cabo de unos segundos intentará volver a tocarlo, le apartamos enseñándole otro objeto. Repetimos la negación cada vez que realice una acción que no debe."
                        ]
                      },
                      {
                        title: "Responder adecuadamente cuando se le llama por su nombre",
                        items: [
                          "Cuando le llamemos debe mirarnos. Entonces debemos ofrecerle algún juguete, darle comida o salir de paseo."
                        ]
                      },
                      {
                        title: "Imitar ruidos",
                        items: [
                          "Por ejemplo, darle un coche y enseñarle a imitar su sonido: BRUM, BRUM, BRUM.",
                          "Imitar sonidos de animales."
                        ]
                      },
                      {
                        title: "Jugamos con tarjetas, libros, juguetes: imitar sonidos",
                        items: [
                          "Le enseñamos imágenes de animales, niños, partes de la cara, juguetes y le vamos diciendo el nombre: \"gato\", \"tren\", \"pelota\", \"cara\", \"nariz\".",
                          "Ponemos encima de la mesa tres juguetes, nos sentamos con el niño. Decimos el nombre de uno de los juguetes mientras lo señalamos, esperamos y repetimos su nombre, volvemos a esperar. Hay niños que intentan imitar sonidos, otros todavía no.",
                          "Juegos con la punta de la lengua emitiendo sonidos.",
                          "Imitamos sonidos que el niño produzca."
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
                          "Jugamos con él a contarle cuentos. Nos sentamos con él con uno de sus cuentos, lo abrimos esperando que él nos ayude y le contamos lo que vemos.",
                          "Cogemos sus manos o sus brazos y le contamos lo que vemos: \"mira este dedito es el más pequeño...\""
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
                          "Jugar a esconderse con un pañuelo, trapo,…nos tapamos la cara y nos destapamos. Se lo hacemos a él."
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
                          "Nos sentamos frente al niño y le tiramos una pelota, esperamos a que él haga lo mismo.",
                          "Le ofrecemos sus juguetes, cuando los coja, esperamos que él nos ofrezca alguno, si no lo hace, le decimos: ¿me lo das? Mientras se lo quitamos suavemente."
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
                          "Cuando le saquemos el pañal se lo acercamos un poco y le decimos: \"caca\", \"pis\" y lo tiramos.",
                          "Le ponemos en el orinal a las horas que creamos más adecuadas, al menos una vez al día."
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
                          "El niño debe colaborar cuando se le viste, facilitando la entrada de la prenda. Ya debe empezar a quitarse ropa fácil: gorro, guante, calcetín, zapato,...",
                          "No tienen que lavarse, sí darse cuenta de lo que se está haciendo e intentar en algún momento imitarlo: lavar la cara con su manita, lavarse las dos manos,…"
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
                          "Con un pañuelo tapamos objetos, ya sea en su habitación, baño, comedor…y los destapamos. Esperamos a que lo haga él.",
                          "Jugamos a esconder objetos y que el niño los encuentre. Le enseñamos un juguete, cuando lo vaya a coger, lo escondemos en nuestra mano, tiene que intentar abrirla. Un juguete más grande lo escondemos en distintos sitios, siempre que vea dónde... debe de tratar de cogerlo.",
                          "Le cogemos en brazos y miramos por la ventana sin hablar. Al cabo de un rato le explicamos lo que vemos."
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
                          "Darle varias láminas o tarjetas para que las mire, esperamos a que coja una y retiramos las otras. Cuando termine volvemos a hacer lo mismo.",
                          "Ofrecerle dos juguetes, cuando se incline por uno, escondemos el otro y jugamos con el niño. Después volvemos a ofrecerle los dos. A veces se inclinan siempre por el mismo.",
                          "Cuando le queramos dar un trozo de pan, galleta... le ofrecemos dos trozos, esperamos que elija uno. El otro no se lo damos."
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
                          "Le enseñamos un juego, cuando lo domine, nos olvidamos del juego uno o dos días. Lo repetimos después de ese tiempo y observamos si el bebé lo recuerda.",
                          "Enseñarle el timbre de la casa y esperar que al regresar de la calle busque el mismo lugar.",
                          "Guardar algunos juguetes siempre en un sitio determinado que él lo sepa, al pasar unos días irá directamente al sitio a buscarlos. Al cabo de días se los cambiamos de lugar sin advertírselo. Observamos si nos pide ayuda o se asombra. Se los damos y los volvemos al lugar de siempre."
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
          "Fomenta la autonomía permitiendo que intente señalar los objetos.",
          "Celebra cada acierto con entusiasmo.",
          "Nombra los objetos en voz alta para reforzar el vocabulario cotidiano."
        ],
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
                          "Su equilibrio es bueno, es capaz de reaccionar a movimientos que le hacen perder el equilibrio con otros movimientos compensatorios.",
                          "Sentamos al niño en un taburete, de forma que los pies no toquen el suelo, le invitamos a bajar ofreciéndole las manos. A medida que domine el ejercicio vamos retirándole nuestras manos.",
                          "Nos sentamos con el niño en el suelo y jugamos a tirarnos la pelota."
                        ]
                      },
                      {
                        title: "A gatas. Siempre que sea un juego.",
                        items: [
                          "Jugamos a subir escaleras gateando.",
                          "Ponemos obstáculos en el suelo y nos ponemos a gatear sorteándolos."
                        ]
                      },
                      {
                        title: "De pie",
                        items: [
                          "Debe desplazarse sin dificultad. Y desde esta posición juega, anda, sube, baja, cambia de posición, …",
                          "Camina solo o con ayuda de forma todavía insegura.",
                          "Se agacha y coge juguetes que se le caen o que encuentra sin perder el equilibrio.",
                          "Andar hacia atrás.",
                          "Le ofrecemos juguetes con hilos o cuerdas para que pueda arrastrarlos.",
                          "Hacer pequeñas carreras, a ver quién llega primero a la puerta... le cogemos de la mano y corremos, \"corre, corre que nos pillan\".",
                          "Le damos las manos y jugamos a subir y a bajar.",
                          "Jugamos a tirarnos la pelota de pie."
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
                          "Coger fideos gordos y guardarlos en una caja.",
                          "Coger fideos finos.",
                          "Sacar y meter cubos de una caja.",
                          "Jugar a lanzar objetos."
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
                          "Encajar aros en un palo. Primero le ofrecemos aros grandes y luego más pequeños.",
                          "Le dejamos ceras gruesas y papel y le enseñamos a garabatear, una vez al día.",
                          "En una cartulina hacemos 5 agujeros para poner los dedos. Introducimos por allí los dedos y se lo enseñamos. Retiramos nuestra mano y después le introducimos sus dedos.",
                          "Manipulación y palpación de distintos materiales con diferente textura y dureza: frutas, verduras, telas..."
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
                          "Cogemos plastilina blanda y con el índice hacemos agujeros. Le enseñamos para que él haga lo mismo.",
                          "Con una esponjita con color, que pinte en una cartulina.",
                          "Le pintamos sus dedos, de un solo color, de varios colores, …",
                          "Le atamos hilos de lana en sus dedos a modo de anillo para que se los saque.",
                          "Le ofrecemos nuestra mano cerrada en forma de puño y vamos abriendo los dedos uno a uno. La volvemos a cerrar y le pedimos al niño que nos abra los dedos uno a uno.",
                          "Señalar imágenes con el dedo índice."
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
              [AreaType.SOCIAL]: { title: "Área Social", subSections: [] },
              [AreaType.PERCEPTION]: { title: "Percepción y Cognición", subSections: [] },
            }
          },
          {
            id: "tramo-18-24",
            label: "2º tramo (18 - 24 meses)",
            areas: {
              [AreaType.GROSS_MOTOR]: { title: "Motricidad Gruesa", subSections: [] },
              [AreaType.FINE_MOTOR]: { title: "Motricidad Fina", subSections: [] },
              [AreaType.LANGUAGE]: { title: "Lenguaje", subSections: [] },
              [AreaType.SOCIAL]: { title: "Área Social", subSections: [] },
              [AreaType.PERCEPTION]: { title: "Percepción y Cognición", subSections: [] },
            }
          }
        ]
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
