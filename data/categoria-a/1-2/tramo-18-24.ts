import { AgeGroup, AreaType } from '../../../types';
import { fotoProvisional } from '../../helpers';

export const tramo18a24: AgeGroup = {
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
                { text: "Saltando obstáculos pequeños: cuerda de saltar, un taco pequeño.", imageSrc: fotoProvisional("toddler-jump-obstacle-rope") },
                { text: "Andar por caminos estrechos marcados en el suelo.", imageSrc: fotoProvisional("toddler-walk-narrow-path") },
                { text: "Transportar de un lado a otro, objetos en las dos manos.", imageSrc: fotoProvisional("toddler-carry-both-hands") },
                { text: "Le llenamos las manos de juguetes pequeños, cubos, y jugamos a trasladarlos sin que se le caigan.", imageSrc: fotoProvisional("toddler-carry-blocks-no-drop") },
                { text: "Subir y bajar escaleras. Primero a gatas, luego con apoyo, primero un pie y luego el otro y empezar a bajarlas de espaldas.", imageSrc: fotoProvisional("toddler-stairs-up-down") },
                { text: "Empieza a saltar desde alturas pequeñas.", imageSrc: fotoProvisional("toddler-jump-small-height") },
                { text: "Chutar un balón. Esto le ayudará a mantener mejor el equilibrio en un solo pie.", imageSrc: fotoProvisional("toddler-kick-ball-balance") },
                { text: "Jugar a perseguirlo corriendo.", imageSrc: fotoProvisional("toddler-chase-running-play") },
              ]
            },
            {
              title: "En cuclillas",
              items: [
                { text: "Andando de la mano, le tiramos un juguete al suelo y le ayudamos a que se agache sin soltarle para recogerlo.", imageSrc: fotoProvisional("toddler-squat-pick-walking") },
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
                { text: "Coger hilos de distinto grosor y que los meta en una caja.", imageSrc: fotoProvisional("toddler-threads-box-thickness") },
                { text: "Pinchar palillos en plastilina blanda.", imageSrc: fotoProvisional("toddler-toothpick-playdough") },
                { text: "Desenroscar tapones de rosca en botellas. Desenroscar tornillos grandes.", imageSrc: fotoProvisional("toddler-unscrew-bottle-cap") },
                { text: "Romper o rasgar papeles de revistas con las manos.", imageSrc: fotoProvisional("toddler-tear-magazine-paper") },
                { text: "Hacer torres con cubos, tacos, cajas.", imageSrc: fotoProvisional("toddler-block-tower-build") },
                { text: "Abrir las manos para que nos las choque. Que él las ponga y le chocamos nosotros.", imageSrc: fotoProvisional("toddler-high-five-hands") },
                { text: "Tiramos el balón con las dos manos: sentado o de pie.", imageSrc: fotoProvisional("toddler-throw-ball-both-hands") },
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
                { text: "Jugamos a dar palmadas. Ponemos una música con canción cortita, al final aplaudimos.", imageSrc: fotoProvisional("toddler-clap-music-end") },
                { text: "Le enseñamos a abrir y cerrar los grifos.", imageSrc: fotoProvisional("toddler-open-close-tap") },
                { text: "Introducir en botellas de cuello estrecho lentejas, guisantes, judías,...", imageSrc: fotoProvisional("toddler-drop-lentils-bottle") },
                { text: "Deshacer lazos.", imageSrc: fotoProvisional("toddler-untie-bow-knot") },
                { text: "Le acariciamos uno a uno los dedos mientras le cantamos alguna canción relacionada.", imageSrc: fotoProvisional("toddler-finger-song-caress") },
                { text: "Le hacemos cosquillas en la palma de la mano.", imageSrc: fotoProvisional("toddler-palm-tickle") },
                { text: "Quitar y poner gomets, cintas adhesivas, cello,...", imageSrc: fotoProvisional("toddler-sticker-tape-peel") },
                { text: "Desenvolver caramelos o pequeños paquetitos.", imageSrc: fotoProvisional("toddler-unwrap-candy") },
                { text: "Garabatear libremente con colores.", imageSrc: fotoProvisional("toddler-free-scribble-crayons") },
                { text: "Ensartar aros en una cuerda.", imageSrc: fotoProvisional("toddler-thread-rings-string") },
                { text: "Le enseñamos a subir y bajar cremalleras.", imageSrc: fotoProvisional("toddler-zip-unzip") },
                { text: "Jugamos a verter agua, arena, juguetes de un cubo a otro.", imageSrc: fotoProvisional("toddler-pour-water-buckets") },
                { text: "Pasar las páginas de un cuento.", imageSrc: fotoProvisional("toddler-turn-pages-book") },
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
                { text: "Hablarle con distintas tonalidades, desde posiciones distintas.", imageSrc: fotoProvisional("toddler-tones-voice-positions") },
                { text: "Le sentamos en una silla y le llamamos desde el lado derecho, izquierdo, por detrás. Esperamos que se gire y nos escondemos.", imageSrc: fotoProvisional("toddler-turn-sound-direction") },
                { text: "Tocamos distintos instrumentos y se los ofrecemos para que los toque.", imageSrc: fotoProvisional("toddler-instruments-play") },
                { text: "Jugamos a dar palmadas fuertes y flojas.", imageSrc: fotoProvisional("toddler-loud-soft-clap") },
                { text: "Jugamos a dar patadas fuertes u flojas, sentados en el suelo.", imageSrc: fotoProvisional("toddler-loud-soft-kick-floor") },
                { text: "Le susurramos en el oído derecho, luego en el izquierdo. Buscamos sonidos escondidos para que se guíe por el sonido.", imageSrc: fotoProvisional("toddler-whisper-ear-find-sound") },
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
                { text: "Hacer pequeños círculos alrededor de las comisuras de los labios.", imageSrc: fotoProvisional("toddler-lip-corner-circles") },
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
                { text: "Sacar y meter la lengua despacio. Lo hacemos primero nosotros para que él intente hacer lo mismo.", imageSrc: fotoProvisional("toddler-tongue-slow-in-out") },
                { text: "Tocar con la lengua el labio inferior y el superior.", imageSrc: fotoProvisional("toddler-tongue-touch-lips") },
                { text: "Sacar y meter la lengua rápido haciendo ruido.", imageSrc: fotoProvisional("toddler-tongue-fast-noise") },
                { text: "Jugamos a lamer sustancias esparcidas en platos, para imitar como comen o beben animales.", imageSrc: fotoProvisional("toddler-lick-plate-animal") },
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
                { text: "Soplamos por soplar: pelotitas de algodón, bolas grandes de algodón, hojas secas.", imageSrc: fotoProvisional("toddler-blow-cotton-leaves") },
                { text: "Jugamos a hacer burbujas con una pajita.", imageSrc: fotoProvisional("toddler-straw-bubbles") },
                { text: "Podemos soplar a apagar velitas.", imageSrc: fotoProvisional("toddler-blow-candles") },
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
                { text: "Jugamos a nombrar juguetes: señalamos uno y preguntamos ¿Qué es esto? Si no responde se lo decimos, esperamos y seguimos con otros juguetes.", imageSrc: fotoProvisional("toddler-name-toys-what-is") },
                { text: "Jugar a terminar palabras. Elegimos palabras sencillas y le enseñamos a que las termine.", imageSrc: fotoProvisional("toddler-finish-words-game") },
                { text: "Le enseñamos a decir sí y no.", imageSrc: fotoProvisional("toddler-yes-no-gestures") },
                { text: "Le enseñamos a decir su nombre.", imageSrc: fotoProvisional("toddler-say-own-name") },
                { text: "Saludos: Decimos \"adiós\" con la mano cuando alguien se va. Cuando alguien llegue decimos \"hola\".", imageSrc: fotoProvisional("toddler-hello-goodbye-wave") },
                { text: "Contamos cuentos.", imageSrc: fotoProvisional("toddler-storytime-lap") },
                { text: "Nombramos las acciones del día: levantarse, desayunar, comer, merendar, cenar.", imageSrc: fotoProvisional("toddler-daily-routine-name") },
                { text: "Frases cortas con dos palabras sin nexos para expresar lo que necesita.", imageSrc: fotoProvisional("toddler-two-word-phrases") },
                { text: "Aparece la primera pregunta ¿qué es? Se interesa por todo lo que le rodea.", imageSrc: fotoProvisional("toddler-what-is-curious") },
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
                { text: "Potenciar el encuentro con otros niños (guardería, parque, familiares) dando juguetes a todos e iniciando algún juego: pelota, cochecitos, hacer torres.", imageSrc: fotoProvisional("toddler-play-other-children") },
                { text: "Le enseñamos a recoger los juguetes, con ayuda.", imageSrc: fotoProvisional("toddler-tidy-up-toys") },
                { text: "Cuando alguien le ofrezca algo, le decimos que diga \"gracias\".", imageSrc: fotoProvisional("toddler-say-thank-you") },
                { text: "Le enseñamos que hay cosas que se pueden hacer y otras que no, sin reñirle, advirtiéndole cuando toque cosas peligrosas.", imageSrc: fotoProvisional("toddler-no-dangerous-things") },
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
                { text: "Cuando tenga pis o caca, le pedimos que nos ayude a cambiarle, busque el pañal y las toallitas. Le enseñamos el pañal sucio y lo tiramos.", imageSrc: fotoProvisional("toddler-diaper-change-help") },
                { text: "Podemos alternar pañal y no pañal para que se dé cuenta cuando se moja que es incómodo.", imageSrc: fotoProvisional("toddler-no-diaper-awareness") },
                { text: "Lo acostumbramos a sentarse en el orinal y que vaya pidiendo pis y caca.", imageSrc: fotoProvisional("toddler-potty-ask-habit") },
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
                { text: "Le ayudamos a buscar en una prenda la parte delantera y la de atrás, el derecho y el revés.", imageSrc: fotoProvisional("toddler-front-back-clothes") },
                { text: "Le enseñamos a quitarse la ropa empezando con prendas sencillas: calcetines, pantalón, abrigo. Sacamos un poco la prenda para facilitarle la labor.", imageSrc: fotoProvisional("toddler-undress-simple-clothes") },
                { text: "Jugamos a bajar pantalones y faldas.", imageSrc: fotoProvisional("toddler-pull-down-pants") },
                { text: "Con el abrigo o chaqueta puesto, le ayudamos a subir y bajar la cremallera.", imageSrc: fotoProvisional("toddler-zip-jacket") },
                { text: "Jugamos a vestir y desvestir a los muñecos.", imageSrc: fotoProvisional("toddler-dress-undress-doll") },
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
                { text: "Le enseñamos a cepillarse los dientes después de las comidas, le permitimos que lo haga con el dedo o con un cepillo para niños.", imageSrc: fotoProvisional("toddler-brush-teeth-after-meal") },
                { text: "Le enseñamos a lavarse después de las comidas.", imageSrc: fotoProvisional("toddler-wash-after-meal") },
                { text: "Le enseñamos como le cortamos las uñas y para qué.", imageSrc: fotoProvisional("toddler-nail-cutting-explain") },
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
                { text: "A través de libros con imágenes, tarjetas.", imageSrc: fotoProvisional("toddler-image-books-cards") },
                { text: "En la casa, paseamos observando y diciendo el nombre de las cosas. Por la ventana, observamos lo que vemos y lo comentamos.", imageSrc: fotoProvisional("toddler-home-walk-point-name") },
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
                { text: "Damos dos palmadas encima de la mesa. Al levantar las manos, él debe dar también dos palmadas. Lo mismo con patadas.", imageSrc: fotoProvisional("toddler-table-clap-mirror") },
                { text: "Le contamos un cuento, le decimos que esté atento y le pedimos que señale los personajes conforme van saliendo.", imageSrc: fotoProvisional("toddler-story-point-characters") },
                { text: "Le damos instrucciones cortas para que las realice. Por ejemplo: trae los cubos de la mesa.", imageSrc: fotoProvisional("toddler-short-instruction-fetch") },
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
                { text: "La hacemos primero nosotros, la tiramos y le pedimos que la haga luego.", imageSrc: fotoProvisional("toddler-tower-build-knock") },
              ]
            },
            {
              title: "Comparaciones",
              items: [
                { text: "Grande/pequeño. Con juguetes o láminas, le pedimos que señale o traiga el grande o el pequeño.", imageSrc: fotoProvisional("toddler-big-small-compare") },
                { text: "Pesado/ligero. Por ejemplo, con un papel y una bolsa con cosas que pesen.", imageSrc: fotoProvisional("toddler-heavy-light-compare") },
                { text: "Lleno/vacío. Con una caja vacía y otra con juguetes, un vaso vacío y otro con líquido.", imageSrc: fotoProvisional("toddler-full-empty-compare") },
                { text: "Largo/corto. Con hilos largos y cortos, líneas largas y cortas, calcetines largos y cortos.", imageSrc: fotoProvisional("toddler-long-short-compare") },
              ]
            },
            {
              title: "Colores",
              items: [
                { text: "Ponemos encima los que sean del mismo color. No tiene que saber el nombre. Ej.: juntamos papeles, juguetes o ropa del mismo color.", imageSrc: fotoProvisional("toddler-sort-same-color") },
              ]
            },
            {
              title: "Rompecabezas sencillos",
              items: [
                { text: "Tableros con 3 piezas de animales.", imageSrc: fotoProvisional("toddler-3piece-animal-puzzle") },
                { text: "Partimos las figuras básicas de círculo, triángulo y cuadrado en dos mitades, las desmontamos y le pedimos que las monte.", imageSrc: fotoProvisional("toddler-shape-halves-puzzle") },
                { text: "Partimos una hoja de papel delante de él en dos, le enseñamos como se juntan y vuelve a ser una.", imageSrc: fotoProvisional("toddler-paper-tear-join") },
                { text: "Con una naranja, mandarina, manzana, plátano, ...", imageSrc: fotoProvisional("toddler-fruit-halves-pieces") },
              ]
            },
            {
              title: "Concepto de tiempo: Día / Noche",
              items: [
                { text: "Aprovechamos la luz solar para explicarle que es de día y a la hora de acostarse que es de noche.", imageSrc: fotoProvisional("toddler-day-night-sunlight") },
                { text: "Le enseñamos dibujos con estrellas y luna (noche) y dibujos con sol (día).", imageSrc: fotoProvisional("toddler-day-night-drawings") },
              ]
            },
            {
              title: "Jugamos a contar: Uno",
              items: [
                { text: "Le decimos que nos traiga un juguete, enseñándole a la vez 1 dedo.", imageSrc: fotoProvisional("toddler-count-one-finger") },
                { text: "Le enseñamos objetos de uno en uno, mientras decimos \"uno\".", imageSrc: fotoProvisional("toddler-one-object-at-a-time") },
              ]
            },
            {
              title: "Juegos simbólicos",
              items: [
                { text: "Con una caja, hacemos como que es un coche, conducimos, pitamos...", imageSrc: fotoProvisional("toddler-box-pretend-car") },
              ]
            }
          ]
        }
      ]
    },
  }
};
