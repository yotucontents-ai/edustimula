import { AgeGroup, AreaType } from '../../../types';
import { fotoProvisional } from '../../helpers';

export const tramo9a12: AgeGroup = {
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
                { text: "Le sentamos sobre un rodillo grande y le sujetamos por muslos y rodillas. Suavemente deslizamos el rodillo adelante y atrás para que el niño haga esfuerzo por enderezarse y permanezca sentado.", imageSrc: fotoProvisional("baby-roller-sitting-balance") },
                { text: "Sentamos al niño delante nuestra y jugamos a pasarle la pelota. La distancia entre el adulto y el niño debe ser pequeña para facilitarle que nos la devuelva.", imageSrc: fotoProvisional("baby-sitting-ball-pass") },
                { text: "Sentarle en el suelo y ponerle juguetes para que los coja y juegue con ellos. Así sentado sin apoyo, va liberando los brazos. Reforzar sus intentos.", imageSrc: fotoProvisional("baby-sitting-floor-toys") },
                { text: "Ofrecerle una caja o cubo llena de juguetes para que los saque.", imageSrc: fotoProvisional("baby-box-toys-emptying") },
                { text: "Darle juegos de encajes sencillos. Le resultará fácil sacarlos, le ayudamos a ponerlos.", imageSrc: fotoProvisional("baby-shape-sorter-simple") },
                { text: "Reflejo de apoyo lateral. Estando el niño sentado sobre una superficie dura, lo empujamos repentinamente hacia uno y otro lado, para que apoye la mano correspondiente y así se protegerá ante una caída hacia los lados.", imageSrc: fotoProvisional("baby-lateral-support-reflex") },
              ]
            },
            {
              title: "Pasar de tumbado boca arriba / tumbado boca abajo y viceversa",
              items: [
                { text: "Le damos las manos para que se incorpore, una vez sentado le volvemos a tumbar.", imageSrc: fotoProvisional("baby-sit-up-hands") },
                { text: "Aprovechamos al cambiarlo, le cogemos los pies y se los acercamos a la boca. También en esta postura le cruzamos los brazos y se los abrimos.", imageSrc: fotoProvisional("baby-diaper-feet-mouth") },
              ]
            },
            {
              title: "Tumbado boca abajo",
              items: [
                { text: "Le ofrecemos juguetes para que se arrastren. Le enseñamos algún juguete y cuando vaya a alcanzarlo se lo alejamos para que siga intentando cogerlo.", imageSrc: fotoProvisional("baby-tummy-reach-toy") },
                { text: "Carretilla. Estando el niño boca abajo, levantarlo sujetándolo por los muslos y haciendo que se apoye sobre sus brazos. Incitarle a que se desplace utilizando solo sus brazos.", imageSrc: fotoProvisional("baby-wheelbarrow-arms") },
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
                { text: "Le agarramos por los muslos impidiéndole que lo haga, seguramente se enojará, esperamos unos segundos y lo dejamos.", imageSrc: fotoProvisional("baby-crawl-hold-thighs") },
                { text: "Dejamos la habitación libre de juguetes y nos ponemos a gatear con el bebé, gateamos en línea recta, para atrás, dando vueltas, …", imageSrc: fotoProvisional("baby-crawl-together-adult") },
                { text: "Gatear en una habitación llena de juguetes, obstáculos, tendrá que sortearlos.", imageSrc: fotoProvisional("baby-crawl-obstacle-course") },
                { text: "Ponerle elementos sorpresa: al ir gateando se encuentra con un pañuelo que al tirar de él, sale su juguete preferido.", imageSrc: fotoProvisional("baby-crawl-surprise-scarf") },
                { text: "Colgar de la pared algún juguete pequeño que no tenga peso, se pondrá de pie para cogerlo. Cuando domine la postura de pie, se lo vamos elevando para que tenga que esforzarse en cogerlo.", imageSrc: fotoProvisional("baby-stand-reach-wall-toy") },
                { text: "Colgar de la pared paneles con muñecos, cintas, pelotas de distinto tamaño, pero que pueda tocar, morder, chupar, tirar. Cambiar los paneles cuando ya los tenga aburridos.", imageSrc: fotoProvisional("baby-wall-panel-toys") },
                { text: "Cuando gatee sin dificultad, le ponemos cojines de diferentes tamaños, animándolo a subir y seguir desplazándose.", imageSrc: fotoProvisional("baby-crawl-over-cushions") },
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
                { text: "Jugar con él cogiéndole por las caderas de pie. Hablarle, reír, cantarle, balancearle.", imageSrc: fotoProvisional("baby-standing-hips-support") },
                { text: "Primeros pasos con ayuda: Cuando está de pie agarrado con las dos manos, ofrecerle un juguete para que lo coja y suelte una mano. Sin forzarle, le cogemos de las manos y le ayudamos a andar. No forzarlo, hay niños que dan pasos y otros todavía no.", imageSrc: fotoProvisional("baby-first-steps-hands") },
                { text: "Coger objetos del suelo: Estando el niño de pie agarrado a un mueble, colocar juguetes en el suelo para que se agache a cogerlos. Empezar con juguetes altos e ir disminuyendo la altura.", imageSrc: fotoProvisional("baby-stand-squat-pick-toy") },
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
                { text: "Vertical, de arriba abajo. Horizontal, golpeando un objeto contra otro.", imageSrc: fotoProvisional("baby-bang-objects-hands") },
                { text: "Coger 2 objetos a la vez con ambas manos. Cuando el niño tenga un objeto ofrecerle otro, intentando que sostenga los dos.", imageSrc: fotoProvisional("baby-hold-two-objects") },
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
                { text: "Ofrecerle canicas, botones, bolitas,… para que los coja con el dedo índice y pulgar.", imageSrc: fotoProvisional("baby-pincer-marbles-buttons") },
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
                { text: "Tocar el piano con ese dedo.", imageSrc: fotoProvisional("baby-index-finger-piano") },
                { text: "Tocar interruptores.", imageSrc: fotoProvisional("baby-index-light-switch") },
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
                { text: "Sacar objetos de un recipiente ancho.", imageSrc: fotoProvisional("baby-take-out-container") },
                { text: "Sacar y meter anillas grandes en un eje.", imageSrc: fotoProvisional("baby-stacking-rings") },
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
                { text: "Seguimos tocando palmas. Unos lo realizan, otros no.", imageSrc: fotoProvisional("baby-clapping-hands") },
                { text: "Untarle los dedos con sustancias ricas para que los chupe o se los mire.", imageSrc: fotoProvisional("baby-finger-licking-food") },
                { text: "Abrir y cerrar los dedos de la mano de forma espontánea. Cuando le digamos \"adiós\", ya puede realizar movimientos con los 4 dedos.", imageSrc: fotoProvisional("baby-open-close-fingers") },
                { text: "Le ayudaremos a palparse el cuerpo con las manos: la cara, la barriga, las piernas, …", imageSrc: fotoProvisional("baby-touch-own-body") },
                { text: "Dejamos que con el índice nos toque la boca, los ojos, …", imageSrc: fotoProvisional("baby-index-touch-face") },
                { text: "Con lapiceros de colores gordos y no tóxicos, dejar que los toque. Más tarde realizamos rayas en papel grande para que nos imite.", imageSrc: fotoProvisional("baby-chunky-crayons-paper") },
                { text: "Darles trapos y hacer gesto de limpiar el suelo, mesa, cama con movimientos circulares y horizontales para que el niño nos imite.", imageSrc: fotoProvisional("baby-wipe-cloth-imitate") },
                { text: "Enseñarle a amasar: hundir los dedos en pasta espesa de agua y harina, o con plastilina blanda.", imageSrc: fotoProvisional("baby-dough-fingers-knead") },
                { text: "Hacer agujeros grandes en una cartulina y después agujeros pequeños para que meta por ahí los dedos.", imageSrc: fotoProvisional("baby-finger-holes-cardboard") },
                { text: "Darle hojas de papel para que rompa, revistas viejas.", imageSrc: fotoProvisional("baby-tearing-paper") },
                { text: "Darle cuentos para que pase las hojas con el dedo índice.", imageSrc: fotoProvisional("baby-turn-book-pages") },
                { text: "Darle encajes de diferente dificultad: cajas que se metan unas dentro de otras, muñecas rusas, …", imageSrc: fotoProvisional("baby-nesting-boxes-matryoshka") },
                { text: "Le proporcionamos un rastrillo de juguete, le enseñamos el movimiento de arrastre y dejamos que juegue con él.", imageSrc: fotoProvisional("baby-toy-rake-dragging") },
                { text: "Tira de la cadena del wáter.", imageSrc: fotoProvisional("baby-toilet-flush-chain") },
                { text: "Encender y apagar las luces.", imageSrc: fotoProvisional("baby-light-switch-on-off") },
                { text: "Tapar y destapar tarteras.", imageSrc: fotoProvisional("baby-container-lid-open") },
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
                { text: "Abrir y cerrar la boca.", imageSrc: fotoProvisional("baby-open-close-mouth") },
                { text: "Sacar y meter la lengua.", imageSrc: fotoProvisional("baby-stick-out-tongue") },
                { text: "Hacer sonidos guturales: ja ja je je, dentales y labiales tatata, papap, bababa, dadada, mamama.", imageSrc: fotoProvisional("baby-babbling-gutural") },
                { text: "Acariciarle las mejillas, soplárselas, tocárselas con algodón, plumas, con sus muñecos, con una cuchara de metal,…", imageSrc: fotoProvisional("baby-cheek-touch-feather") },
                { text: "Delante de un espejo, le cogemos su mano y le decimos: \"pelo\" se la llevamos al pelo, luego en la boca, la nariz, orejas.", imageSrc: fotoProvisional("baby-mirror-body-parts") },
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
                { text: "Combinar voz y no voz: le decimos \"dame la pelota\" y se lo repetimos sin hacer sonido (sólo con muecas de la boca).", imageSrc: fotoProvisional("baby-voice-silence-mouth") },
                { text: "Ponemos música y la apagamos, la volvemos a poner. Lo mismo con nuestra voz.", imageSrc: fotoProvisional("baby-music-on-off") },
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
                { text: "\"NO\". Cuando el niño se acerque a algo que no queramos que toque, le decimos: NO. El niño se tiene que detener y mirarnos. Al cabo de unos segundos intentará volver a tocarlo, le apartamos enseñándole otro objeto. Repetimos la negación cada vez que realice una acción que no debe.", imageSrc: fotoProvisional("baby-understand-no-prohibition") },
              ]
            },
            {
              title: "Responder adecuadamente cuando se le llama por su nombre",
              items: [
                { text: "Cuando le llamemos debe mirarnos. Entonces debemos ofrecerle algún juguete, darle comida o salir de paseo.", imageSrc: fotoProvisional("baby-respond-name-look") },
              ]
            },
            {
              title: "Imitar ruidos",
              items: [
                { text: "Por ejemplo, darle un coche y enseñarle a imitar su sonido: BRUM, BRUM, BRUM.", imageSrc: fotoProvisional("baby-toy-car-brum") },
                { text: "Imitar sonidos de animales.", imageSrc: fotoProvisional("baby-animal-sounds-imitate") },
              ]
            },
            {
              title: "Jugamos con tarjetas, libros, juguetes: imitar sonidos",
              items: [
                { text: "Le enseñamos imágenes de animales, niños, partes de la cara, juguetes y le vamos diciendo el nombre: \"gato\", \"tren\", \"pelota\", \"cara\", \"nariz\".", imageSrc: fotoProvisional("baby-flashcards-animals-names") },
                { text: "Ponemos encima de la mesa tres juguetes, nos sentamos con el niño. Decimos el nombre de uno de los juguetes mientras lo señalamos, esperamos y repetimos su nombre. Hay niños que intentan imitar sonidos, otros todavía no.", imageSrc: fotoProvisional("baby-table-three-toys-name") },
                { text: "Juegos con la punta de la lengua emitiendo sonidos.", imageSrc: fotoProvisional("baby-tongue-tip-sounds") },
                { text: "Imitamos sonidos que el niño produzca.", imageSrc: fotoProvisional("baby-adult-imitates-sounds") },
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
                { text: "Jugamos con él a contarle cuentos. Nos sentamos con él con uno de sus cuentos, lo abrimos esperando que él nos ayude y le contamos lo que vemos.", imageSrc: fotoProvisional("baby-storytime-together") },
                { text: "Cogemos sus manos o sus brazos y le contamos lo que vemos: \"mira este dedito es el más pequeño...\"", imageSrc: fotoProvisional("baby-finger-rhyme-hand") },
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
                { text: "Jugar a esconderse con un pañuelo, trapo,…nos tapamos la cara y nos destapamos. Se lo hacemos a él.", imageSrc: fotoProvisional("baby-peek-a-boo-cloth") },
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
                { text: "Nos sentamos frente al niño y le tiramos una pelota, esperamos a que él haga lo mismo.", imageSrc: fotoProvisional("baby-ball-roll-back") },
                { text: "Le ofrecemos sus juguetes, cuando los coja, esperamos que él nos ofrezca alguno, si no lo hace, le decimos: ¿me lo das? Mientras se lo quitamos suavemente.", imageSrc: fotoProvisional("baby-give-toy-sharing") },
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
                { text: "Cuando le saquemos el pañal se lo acercamos un poco y le decimos: \"caca\", \"pis\" y lo tiramos.", imageSrc: fotoProvisional("baby-diaper-change-word") },
                { text: "Le ponemos en el orinal a las horas que creamos más adecuadas, al menos una vez al día.", imageSrc: fotoProvisional("baby-potty-daily-routine") },
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
                { text: "El niño debe colaborar cuando se le viste, facilitando la entrada de la prenda. Ya debe empezar a quitarse ropa fácil: gorro, guante, calcetín, zapato,...", imageSrc: fotoProvisional("baby-dressing-cooperate") },
                { text: "No tienen que lavarse, sí darse cuenta de lo que se está haciendo e intentar en algún momento imitarlo: lavar la cara con su manita, lavarse las dos manos,…", imageSrc: fotoProvisional("baby-wash-face-imitate") },
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
                { text: "Con un pañuelo tapamos objetos, ya sea en su habitación, baño, comedor…y los destapamos. Esperamos a que lo haga él.", imageSrc: fotoProvisional("baby-cloth-cover-object") },
                { text: "Jugamos a esconder objetos y que el niño los encuentre. Le enseñamos un juguete, cuando lo vaya a coger, lo escondemos en nuestra mano, tiene que intentar abrirla.", imageSrc: fotoProvisional("baby-find-hidden-toy-hand") },
                { text: "Le cogemos en brazos y miramos por la ventana sin hablar. Al cabo de un rato le explicamos lo que vemos.", imageSrc: fotoProvisional("baby-window-watching-arms") },
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
                { text: "Darle varias láminas o tarjetas para que las mire, esperamos a que coja una y retiramos las otras. Cuando termine volvemos a hacer lo mismo.", imageSrc: fotoProvisional("baby-choose-flashcard") },
                { text: "Ofrecerle dos juguetes, cuando se incline por uno, escondemos el otro y jugamos con el niño. Después volvemos a ofrecerle los dos. A veces se inclinan siempre por el mismo.", imageSrc: fotoProvisional("baby-choose-favorite-toy") },
                { text: "Cuando le queramos dar un trozo de pan, galleta... le ofrecemos dos trozos, esperamos que elija uno. El otro no se lo damos.", imageSrc: fotoProvisional("baby-choose-food-piece") },
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
                { text: "Le enseñamos un juego, cuando lo domine, nos olvidamos del juego uno o dos días. Lo repetimos después de ese tiempo y observamos si el bebé lo recuerda.", imageSrc: fotoProvisional("baby-memory-game-recall") },
                { text: "Enseñarle el timbre de la casa y esperar que al regresar de la calle busque el mismo lugar.", imageSrc: fotoProvisional("baby-doorbell-location") },
                { text: "Guardar algunos juguetes siempre en un sitio determinado. Al cabo de días se los cambiamos de lugar sin advertírselo. Observamos si nos pide ayuda o se asombra.", imageSrc: fotoProvisional("baby-toy-storage-place") },
              ]
            }
          ]
        }
      ]
    },
  }
};
