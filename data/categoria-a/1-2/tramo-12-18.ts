import { AgeGroup, AreaType } from '../../../types';
import { juego, fotoProvisional } from '../../helpers';

export const tramo12a18: AgeGroup = {
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
                { text: "Su equilibrio es bueno, es capaz de reaccionar a movimientos que le hacen perder el equilibrio con otros movimientos compensatorios.", imageSrc: fotoProvisional("toddler-sitting-balance-react") },
                { text: "Sentamos al niño en un taburete, de forma que los pies no toquen el suelo, le invitamos a bajar ofreciéndole las manos. A medida que domine el ejercicio vamos retirándole nuestras manos.", imageSrc: fotoProvisional("toddler-stool-feet-up") },
                { text: "Nos sentamos con el niño en el suelo y jugamos a tirarnos la pelota.", imageSrc: fotoProvisional("toddler-floor-ball-pass") },
              ]
            },
            {
              title: "A gatas. Siempre que sea un juego.",
              items: [
                { text: "Jugamos a subir escaleras gateando.", imageSrc: fotoProvisional("toddler-crawl-stairs") },
                { text: "Ponemos obstáculos en el suelo y nos ponemos a gatear sorteándolos.", imageSrc: fotoProvisional("toddler-crawl-obstacles") },
              ]
            },
            {
              title: "De pie",
              items: [
                { text: "Debe desplazarse sin dificultad. Y desde esta posición juega, anda, sube, baja, cambia de posición, …", imageSrc: fotoProvisional("toddler-standing-moving") },
                { text: "Camina solo o con ayuda de forma todavía insegura.", imageSrc: fotoProvisional("toddler-first-walk-unsteady") },
                { text: "Se agacha y coge juguetes que se le caen o que encuentra sin perder el equilibrio.", imageSrc: fotoProvisional("toddler-squat-pick-up") },
                { text: "Andar hacia atrás.", imageSrc: fotoProvisional("toddler-walk-backwards") },
                { text: "Le ofrecemos juguetes con hilos o cuerdas para que pueda arrastrarlos.", imageSrc: fotoProvisional("toddler-pull-toy-string") },
                { text: "Hacer pequeñas carreras, a ver quién llega primero a la puerta... le cogemos de la mano y corremos.", imageSrc: fotoProvisional("toddler-running-race-hand") },
                { text: "Le damos las manos y jugamos a subir y a bajar.", imageSrc: fotoProvisional("toddler-up-down-hands") },
                { text: "Jugamos a tirarnos la pelota de pie.", imageSrc: fotoProvisional("toddler-standing-ball-throw") },
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
                { text: "Coger fideos gordos y guardarlos en una caja.", imageSrc: fotoProvisional("toddler-thick-pasta-box") },
                { text: "Coger fideos finos.", imageSrc: fotoProvisional("toddler-thin-pasta-pick") },
                { text: "Sacar y meter cubos de una caja.", imageSrc: fotoProvisional("toddler-blocks-in-out-box") },
                { text: "Jugar a lanzar objetos.", imageSrc: fotoProvisional("toddler-throwing-objects") },
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
                { text: "Encajar aros en un palo. Primero le ofrecemos aros grandes y luego más pequeños.", imageSrc: fotoProvisional("toddler-ring-stacking-peg") },
                { text: "Le dejamos ceras gruesas y papel y le enseñamos a garabatear, una vez al día.", imageSrc: fotoProvisional("toddler-chunky-crayons-scribble") },
                { text: "En una cartulina hacemos 5 agujeros para poner los dedos. Introducimos por allí los dedos y se lo enseñamos. Retiramos nuestra mano y después le introducimos sus dedos.", imageSrc: fotoProvisional("toddler-cardboard-finger-holes") },
                { text: "Manipulación y palpación de distintos materiales con diferente textura y dureza: frutas, verduras, telas...", imageSrc: fotoProvisional("toddler-texture-exploration") },
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
                { text: "Cogemos plastilina blanda y con el índice hacemos agujeros. Le enseñamos para que él haga lo mismo.", imageSrc: fotoProvisional("toddler-playdough-index-holes") },
                { text: "Con una esponjita con color, que pinte en una cartulina.", imageSrc: fotoProvisional("toddler-sponge-paint-cardboard") },
                { text: "Le pintamos sus dedos, de un solo color, de varios colores, …", imageSrc: fotoProvisional("toddler-finger-paint-colors") },
                { text: "Le atamos hilos de lana en sus dedos a modo de anillo para que se los saque.", imageSrc: fotoProvisional("toddler-wool-finger-rings") },
                { text: "Le ofrecemos nuestra mano cerrada en forma de puño y vamos abriendo los dedos uno a uno. La volvemos a cerrar y le pedimos al niño que nos abra los dedos uno a uno.", imageSrc: fotoProvisional("toddler-open-fingers-one-by-one") },
                { text: "Señalar imágenes con el dedo índice.", imageSrc: fotoProvisional("toddler-point-picture-book") },
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
            juego("g2-1", "¿Dónde está el agua?", "¿Dónde está el agua?", "water",
              [["water", "Agua", "💧"], ["spoon", "Cuchara", "🥄"]],
              "¡Muy bien! Eso es el agua."),
            juego("g2-2", "¿Donde está el plato?", "¿Dónde está el plato?", "plate",
              [["ball", "Pelota", "⚽"], ["plate", "Plato", "🍽️"]]),
            juego("g2-3", "¿Donde está la cuna?", "¿Dónde está la cuna?", "crib",
              [["crib", "Cuna", "🛏️"], ["car", "Coche", "🚗"]]),
            juego("g2-4", "¿Donde está la pelota?", "¿Dónde está la pelota?", "ball",
              [["diaper", "Pañal", "🍼"], ["ball", "Pelota", "⚽"]]),
            juego("g2-5", "¿Donde está la cuchara?", "¿Dónde está la cuchara?", "spoon",
              [["spoon", "Cuchara", "🥄"], ["shoe", "Zapato", "👟"]]),
            juego("g2-6", "¿Donde está el pañal?", "¿Dónde está el pañal?", "diaper",
              [["book", "Libro", "📖"], ["diaper", "Pañal", "🍼"]]),
          ]
        },
        {
          id: "level-3-options",
          title: "Nivel 2 (3 opciones)",
          subSections: [
            juego("g3-1", "¿Dónde está el agua?", "¿Dónde está el agua?", "water",
              [["water", "Agua", "💧"], ["plate", "Plato", "🍽️"], ["ball", "Pelota", "⚽"]]),
            juego("g3-2", "¿Dónde está el biberón?", "¿Dónde está el biberón?", "milk",
              [["crib", "Cuna", "🛏️"], ["milk", "Biberón", "🍼"], ["spoon", "Cuchara", "🥄"]]),
            juego("g3-3", "¿Dónde está el zapato?", "¿Dónde está el zapato?", "shoe",
              [["shirt", "Camiseta", "👕"], ["shoe", "Zapato", "👟"], ["apple", "Manzana", "🍎"]]),
            juego("g3-4", "¿Dónde está la casa?", "¿Dónde está la casa?", "home",
              [["car", "Coche", "🚗"], ["home", "Casa", "🏠"], ["tree", "Árbol", "🌳"]]),
            juego("g3-5", "¿Dónde está el sol?", "¿Dónde está el sol?", "sun",
              [["sun", "Sol", "☀️"], ["moon", "Luna", "🌙"], ["star", "Estrella", "⭐"]]),
            juego("g3-6", "¿Dónde está el gato?", "¿Dónde está el gato?", "cat",
              [["dog", "Perro", "🐶"], ["cat", "Gato", "🐱"], ["bird", "Pájaro", "🐦"]]),
          ]
        },
        {
          id: "level-4-options",
          title: "Nivel 3 (4 opciones)",
          subSections: [
            juego("g4-1", "¿Dónde está la cuchara?", "¿Dónde está la cuchara?", "spoon",
              [["water", "Agua", "💧"], ["plate", "Plato", "🍽️"], ["spoon", "Cuchara", "🥄"], ["diaper", "Pañal", "🍼"]]),
            juego("g4-2", "¿Dónde está la cuna?", "¿Dónde está la cuna?", "crib",
              [["crib", "Cuna", "🛏️"], ["ball", "Pelota", "⚽"], ["house", "Casa", "🏠"], ["car", "Coche", "🚗"]]),
            juego("g4-3", "¿Dónde está el plátano?", "¿Dónde está el plátano?", "banana",
              [["apple", "Manzana", "🍎"], ["banana", "Plátano", "🍌"], ["bread", "Pan", "🍞"], ["milk", "Leche", "🥛"]]),
            juego("g4-4", "¿Dónde está el libro?", "¿Dónde está el libro?", "book",
              [["pencil", "Lápiz", "✏️"], ["book", "Libro", "📖"], ["toy", "Juguete", "🧸"], ["box", "Caja", "📦"]]),
            juego("g4-5", "¿Dónde está la bici?", "¿Dónde está la bici?", "bike",
              [["bus", "Autobús", "🚌"], ["bike", "Bici", "🚲"], ["car", "Coche", "🚗"], ["boat", "Barco", "⛵"]]),
            juego("g4-6", "¿Dónde está la flor?", "¿Dónde está la flor?", "flower",
              [["tree", "Árbol", "🌳"], ["flower", "Flor", "🌸"], ["leaf", "Hoja", "🍃"], ["grass", "Césped", "🌿"]]),
          ]
        }
      ]
    },
    {
      id: "imitar-movimientos",
      title: "2. Imitar movimientos lengua y labios",
      icon: "Wind",
      subSections: [
        juego("mov-1", "Sopla", "¡Sopla!", "sopla",
          [["sopla", "Sopla", "💨"]],
          "¡Genial! Sopla otra vez."),
        juego("mov-2", "Muaa (Beso)", "¡Muaa!", "beso",
          [["beso", "Beso", "😘"]],
          "¡Qué beso más rico!"),
        juego("mov-3", "Lengua afuera", "Saca la lengua: ¡Aaaa!", "fuera",
          [["fuera", "Lengua afuera", "😛"]],
          "¡Muy bien!"),
        juego("mov-4", "Lengua a los lados", "Mueve la lengua de lado a lado", "lados",
          [["lados", "A los lados", "😝"]],
          "¡Como un reloj!"),
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
            juego("cp-1", "Cabeza", "Tócate la CABEZA", "ok",
              [["ok", "CABEZA", "🧒"]]),
            juego("cp-2", "Nariz", "Tócate la NARIZ", "ok",
              [["ok", "NARIZ", "👃"]]),
            juego("cp-3", "Boca", "Tócate la BOCA", "ok",
              [["ok", "BOCA", "👄"]]),
            juego("cp-4", "Pelo", "Tócate el PELO", "ok",
              [["ok", "PELO", "💇"]]),
            juego("cp-5", "Orejas", "Tócate las OREJAS", "ok",
              [["ok", "OREJAS", "👂"]]),
            juego("cp-6", "Ojos", "Tócate los OJOS", "ok",
              [["ok", "OJOS", "👀"]]),
          ]
        },
        {
          id: "cara-papás",
          title: "En mamá o papá",
          subSections: [
            juego("cpp-1", "Cabeza", "Señala la CABEZA en papá/mamá", "ok",
              [["ok", "CABEZA", "🧒"]]),
            juego("cpp-2", "Nariz", "Señala la NARIZ en papá/mamá", "ok",
              [["ok", "NARIZ", "👃"]]),
            juego("cpp-3", "Boca", "Señala la BOCA en papá/mamá", "ok",
              [["ok", "BOCA", "👄"]]),
            juego("cpp-4", "Pelo", "Señala el PELO en papá/mamá", "ok",
              [["ok", "PELO", "💇"]]),
            juego("cpp-5", "Orejas", "Señala las OREJAS en papá/mamá", "ok",
              [["ok", "OREJAS", "👂"]]),
            juego("cpp-6", "Ojos", "Señala los OJOS en papá/mamá", "ok",
              [["ok", "OJOS", "👀"]]),
          ]
        },
        {
          id: "cara-dibujo",
          title: "En un dibujo de niño",
          subSections: [
            juego("cd-1", "¿Dónde está la BOCA?", "BOCA", "boca",
              [["boca", "Boca", "👄"], ["ojos", "Ojos", "👀"], ["nariz", "Nariz", "👃"]],
              "¡Bien!"),
            juego("cd-2", "¿Dónde está la NARIZ?", "NARIZ", "nariz",
              [["orejas", "Orejas", "👂"], ["nariz", "Nariz", "👃"], ["pelo", "Pelo", "💇"]],
              "¡Bien!"),
            juego("cd-3", "¿Donde están los OJOS?", "OJOS", "ojos",
              [["ojos", "Ojos", "👀"], ["boca", "Boca", "👄"], ["cabeza", "Cabeza", "🧒"]],
              "¡Bien!"),
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
            juego("body-1", "Mano", "Tócate la MANO", "ok",
              [["ok", "MANO", "✋"]]),
            juego("body-2", "Pie", "Tócate el PIE", "ok",
              [["ok", "PIE", "🦶"]]),
            juego("body-3", "Barriga", "Tócate la BARRIGA", "ok",
              [["ok", "BARRIGA", "🫃"]]),
          ]
        },
        {
          id: "cuerpo-dibujo",
          title: "Sobre un dibujo",
          subSections: [
            juego("bd-1", "¿Donde está la MANO?", "MANO", "mano",
              [["mano", "Mano", "✋"], ["pie", "Pie", "🦶"]]),
            juego("bd-2", "¿Donde está el PIE?", "PIE", "pie",
              [["mano", "Mano", "✋"], ["pie", "Pie", "🦶"]]),
          ]
        }
      ]
    },
    {
      id: "uno-muchos",
      title: "5. Diferenciación UNO-MUCHOS",
      icon: "Layers",
      subSections: [
        juego("um-1", "Pelotas", "¿Dónde hay MUCHAS pelotas?", "muchos",
          [["uno", "Una ⚽", "⚽"], ["muchos", "Muchas ⚽⚽⚽", "⚽⚽⚽"]]),
        juego("um-2", "Manzanas", "¿Dónde hay UNA manzana?", "uno",
          [["uno", "Una 🍎", "🍎"], ["muchos", "Muchas 🍎🍎🍎", "🍎🍎🍎"]]),
        juego("um-3", "Flores", "¿Dónde hay MUCHAS flores?", "muchos",
          [["uno", "Una 🌸", "🌸"], ["muchos", "Muchas 🌸🌸🌸", "🌸🌸🌸"]]),
        juego("um-4", "Estrellas", "¿Dónde hay UNA estrella?", "uno",
          [["uno", "Una ⭐", "⭐"], ["muchos", "Muchas ⭐⭐⭐", "⭐⭐⭐"]]),
        juego("um-5", "Coches", "¿Dónde hay MUCHOS coches?", "muchos",
          [["uno", "Uno 🚗", "🚗"], ["muchos", "Muchos 🚗🚗🚗", "🚗🚗🚗"]]),
      ]
    },
    {
      id: "donde-tren",
      title: "6. ¿Dónde está el tren?",
      icon: "TrainFront",
      subSections: [
        juego("tren-1", "Juego del tren", "¿Dónde está el tren?", "tren",
          [["tren", "Tren", "🚂"], ["bus", "Bus", "🚌"]],
          "¡Chucu-chucu! ¡Ahí está!"),
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
            { text: "Hacemos ruido con la lengua, para que la mueva.", imageSrc: fotoProvisional("toddler-tongue-noise") },
            { text: "Hacer chasquidos.", imageSrc: fotoProvisional("toddler-tongue-click") },
            { text: "Abrir y cerrar los labios.", imageSrc: fotoProvisional("toddler-lips-open-close") },
            { text: "Sacar la lengua y meterla sin ruido y con ruido.", imageSrc: fotoProvisional("toddler-tongue-in-out-sound") },
            { text: "Dar besos solo con los labios o tirándolos con la mano.", imageSrc: fotoProvisional("toddler-kiss-lips-blowing") },
            { text: "Soplar para: Apagar cerillas, velas, volar algodones encima de una mesa, bolitas de papel...", imageSrc: fotoProvisional("toddler-blow-candle-cotton") },
            { text: "Soplarle su cara y que él nos sople la nuestra.", imageSrc: fotoProvisional("toddler-blow-face-adult") },
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
            { text: "Colocamos delante del niño objetos que conozca bien, le decimos el nombre señalándolo. Después repetimos el ejercicio sin señalarlo, esperamos que él lo haga.", imageSrc: fotoProvisional("toddler-objects-point-name") },
            { text: "Repetimos con otros juguetes.", imageSrc: fotoProvisional("toddler-more-toys-name") },
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
            { text: "Cogemos un libro con imágenes grandes o pequeñas, esperamos que mire una y le decimos el nombre.", imageSrc: fotoProvisional("toddler-picture-book-name") },
            { text: "Le enseñamos fotos suyas, decimos su nombre.", imageSrc: fotoProvisional("toddler-own-photo-name") },
            { text: "Fotos de papá, de mamá, decimos su nombre, …", imageSrc: fotoProvisional("toddler-parents-photos") },
            { text: "Aprovechamos la hora de la comida para decirle el nombre de lo que va a utilizar: plato, vaso, cuchara. Lo mismo con la ropa de vestir.", imageSrc: fotoProvisional("toddler-mealtime-naming") },
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
            { text: "Cantarle una canción sencilla varias veces para que el niño a su manera intente seguir un trozo a su manera.", imageSrc: fotoProvisional("toddler-sing-simple-song") },
            { text: "Elegimos una palabra de un estribillo sencillo, para que él la termine. Por ejemplo: \"palmas, Palmi...\"", imageSrc: fotoProvisional("toddler-finish-song-word") },
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
            { text: "Inventar cuentos cortos para que el niño pueda ir participando gestualmente o con alguna palabra que ya conoce.", imageSrc: fotoProvisional("toddler-short-story-gesture") },
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
            { text: "¿Dónde están los ojos? ¿Dónde está la boca?,...el adulto le enseñará si aún no lo conoce, posteriormente el niño debe señalarlos cuando el adulto le pregunta.", imageSrc: fotoProvisional("toddler-body-parts-where") },
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
                { text: "Empezamos a ayudarle a sacarse prendas sencillas como calcetines, zapatos. Le enseñamos los calcetines, se los ponemos y le tiramos un poco de la punta para que se los saque.", imageSrc: fotoProvisional("toddler-pull-off-socks") },
                { text: "Para poner jersey o camisa, le enseñamos el agujero de la misma, para que estire los brazos y los meta allí.", imageSrc: fotoProvisional("toddler-put-on-shirt") },
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
                { text: "Las manos. Abrimos el grifo, ponemos sus manos bajo el agua, le enjabonamos y enjuagamos. Dejamos que el niño colabore y se las secamos con la toalla.", imageSrc: fotoProvisional("toddler-handwash-soap-tap") },
                { text: "La cara. Le mojamos las manos y se las llevamos a la cara. Le enseñamos la toalla y cómo secarse.", imageSrc: fotoProvisional("toddler-face-wash-towel") },
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
                { text: "Continuamos poniéndole en el orinal y en el wáter. Tanto si hace como si no, nos mostramos contentos de que esté sentado un rato. No hay necesidad de reñirle ni dejarle solo.", imageSrc: fotoProvisional("toddler-potty-toilet-routine") },
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
                { text: "Le ponemos delante de una ventana y le dejamos que mire sin decirle nada, unos minutos.", imageSrc: fotoProvisional("toddler-window-watching-alone") },
                { text: "Le enseñamos un libro atractivo y dejamos que lo observe sin decirle nada.", imageSrc: fotoProvisional("toddler-book-explore-alone") },
              ]
            },
            {
              title: "Con intervención del adulto",
              items: [
                { text: "Los ejercicios anteriores, pero diciéndole al niño lo que hacemos o llamándole la atención sobre algo determinado.", imageSrc: fotoProvisional("toddler-adult-point-window") },
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
                { text: "Le enseñamos una lámina y le decimos: ¿Dónde está...? Pasamos página, le enseñamos otra cosa y volvemos a la primera página a preguntar lo mismo.", imageSrc: fotoProvisional("toddler-flashcard-memory-where") },
                { text: "Guardamos un juguete suyo en una caja o cajón antes de irse a dormir, al día siguiente le preguntamos \"¿dónde está?\".", imageSrc: fotoProvisional("toddler-hidden-toy-next-day") },
                { text: "Le enseñamos un perro (por ejemplo) y luego lo mezclamos con otros animales. Le pedimos que lo busque.", imageSrc: fotoProvisional("toddler-find-animal-mixed") },
                { text: "Darle objetos para manipular o arrastrar y enseñarle cómo. Esperar y volvérselo a dar.", imageSrc: fotoProvisional("toddler-object-manipulate-recall") },
                { text: "Buscar dibujos.", imageSrc: fotoProvisional("toddler-find-drawing") },
                { text: "Clasificar colores, formas y tamaños. Dame los rojos, dame los redondos, dame los pequeños,...", imageSrc: fotoProvisional("toddler-sort-colors-shapes") },
              ]
            }
          ]
        }
      ]
    },
  }
};
