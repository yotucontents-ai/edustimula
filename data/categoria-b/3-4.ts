import { AgeGroup, AreaType } from '../../types';
import { fotoProvisional } from '../helpers';

export const edad3a4: AgeGroup = {
  id: "3-4",
  label: "3 – 4 años",
  introText: [],
  areas: {
    [AreaType.BASIC_CONCEPTS]: { title: "Conceptos Básicos",      subSections: [] },
    [AreaType.ORAL_LANGUAGE]: {
      title: "Lenguaje Oral",
      subSections: [
        {
          id: "verbos-de-accion",
          title: "Selecciona acciones, conoce verbos de acción",
          content: [
            {
              title: "Selecciona acciones, conoce verbos de acción",
              items: [
                { text: "Presentar al niño dos cartulinas con dibujos que representan a una persona durmiendo, sentada, comiendo. El niño debe señalar el dibujo correcto cuando se le pregunta: “¿Quién está comiendo?”. Al principio ayudarle e ir suprimiendo la ayuda.", imageSrc: fotoProvisional("child-action-cards-two") },
                { text: "Hacer lo mismo, presentándole 4 dibujos para discriminar la acción de uno de ellos.", imageSrc: fotoProvisional("child-action-cards-four") },
                { text: "Hacerle preguntas del tipo “¿Quién nada?”, “¿Quién vuela?”. Si no lo hace decirle: el pez, el pájaro…", imageSrc: fotoProvisional("child-who-swims-who-flies") },
                { text: "Responde a preguntas del tipo: “¿Con qué comes?”, “¿con qué ves?”, “¿con qué oyes?”…", imageSrc: fotoProvisional("child-answers-with-what-questions") }
              ]
            }
          ]
        },
        {
          id: "nombra-colores",
          title: "Nombra colores correctamente",
          content: [
            {
              title: "Nombra colores correctamente",
              items: [
                { text: "Hacerle preguntas del tipo: “¿De qué color es el…?” sobre objetos que están a la vista del niño. Si no contesta decirle “di… (color)”. Hacerlo con los colores rojo, azul, amarillo y verde.", imageSrc: fotoProvisional("child-naming-colors-objects") },
                { text: "Al principio empezar con dos colores: rojo y azul, introducir luego el amarillo y finalmente el verde.", imageSrc: fotoProvisional("child-colors-red-blue-first") },
                { text: "Generalizar a cualquier tipo de objetos.", imageSrc: fotoProvisional("child-colors-any-object") }
              ]
            }
          ]
        },
        {
          id: "cuenta-hasta-3",
          title: "Cuenta hasta 3",
          content: [
            {
              title: "Cuenta hasta 3",
              items: [
                { text: "Enseñarle a contar hasta 3 objetos al tiempo que los va indicando con su dedo índice. Emplear objetos variados. Reforzar sus respuestas.", imageSrc: fotoProvisional("child-counting-to-three") }
              ]
            }
          ]
        },
        {
          id: "nociones-espaciales",
          title: "Posee nociones espaciales",
          content: [
            {
              title: "Conoce el significado de: “delante/detrás”, “al lado”, “entre”, “largo/corto”",
              items: [
                "Dar órdenes del tipo:",
                "Ponte entre el… y la…",
                "Pon la… entre el… y la…",
                "Ponte al lado de…",
                "Pon la… al lado de…",
                "Pon las manos detrás de ti. Pon las manos delante de ti.",
                "Ponte detrás de… Ponte delante de…",
                "Pon la… detrás de… Pon la… delante de…"
              ]
            }
          ]
        },
        {
          id: "adjetivos-largo-corto",
          title: "Conoce el significado de los adjetivos largo-corto",
          content: [
            {
              title: "Conoce el significado de los adjetivos largo-corto",
              items: [
                { text: "Colocar ante su vista 2 objetos iguales, pero de diferente tamaño. A continuación, preguntarle: “¿Cuál es el… (objeto) más largo?” y “¿cuál es el… corto?” para que lo señale. Emplear objetos conocidos, pero variando su posición. Reforzar.", imageSrc: fotoProvisional("child-long-short-objects") }
              ]
            }
          ]
        },
        {
          id: "nociones-cantidad",
          title: "Posee nociones de cantidad: “pocos/muchos”, “más/menos”",
          content: [
            {
              title: "Posee nociones de cantidad: “pocos/muchos”, “más/menos”",
              items: [
                { text: "Colocar ante su vista objetos en montones: a un lado, pocos; al otro, muchos. A continuación, hacerle preguntas del tipo: “¿Dónde hay muchos?”, “¿Dónde hay pocos?” para que señale el montón correspondiente.", imageSrc: fotoProvisional("child-few-many-piles") },
                { text: "Cambiar la posición de los montones y emplear objetos variados.", imageSrc: fotoProvisional("child-piles-change-position") },
                { text: "Colocar montones con desigual número de objetos, preguntarle: “¿Dónde hay más?”, “¿Dónde hay menos?” para que señale el lugar correspondiente. Variar la posición de los montones y emplear objetos diferentes.", imageSrc: fotoProvisional("child-more-less-piles") }
              ]
            }
          ]
        },
        {
          id: "nombra-partes-cuerpo",
          title: "Nombra y señala partes del cuerpo",
          content: [
            {
              title: "Nombra y señala partes del cuerpo",
              items: [
                { text: "Enseñar al niño a señalar partes del cuerpo en sí mismo y en otra persona las siguientes partes del cuerpo humano: cabeza, pelo, pies, manos, boca, orejas, nariz, ojos, espalda y piernas.", imageSrc: fotoProvisional("child-pointing-body-parts") },
                { text: "Hacerle preguntas del tipo: “¿Qué es esto?”, señalando la parte del cuerpo correspondiente. Si no contesta, decir: “di boca”. Reforzar. Hacer lo mismo con las demás partes del cuerpo.", imageSrc: fotoProvisional("child-what-is-this-body-part") }
              ]
            }
          ]
        },
        {
          id: "ordenes-dos-acciones",
          title: "Responde órdenes de 2 acciones y dos objetos",
          content: [
            {
              title: "Responde órdenes de 2 acciones y dos objetos",
              items: [
                { text: "Dar al niño una orden que implique 2 acciones distintas y dos objetos. Por ejemplo “mete el libro en la mochila y llévaselo a mamá”. Al principio se le puede ayudar con gestos si tiene dificultad para comprender lo que se desea. Finalmente debe responder solamente con la orden verbal.", imageSrc: fotoProvisional("child-two-step-instruction-backpack") }
              ]
            }
          ]
        },
        {
          id: "movimientos-cancion",
          title: "Prevé los movimientos que se han de realizar siguiendo la letra de una poesía o canción",
          content: [
            {
              title: "Prevé los movimientos que se han de realizar siguiendo la letra de una poesía o canción",
              items: [
                { text: "Jugar con el niño cantando canciones que impliquen realizar diversos movimientos con el cuerpo, las manos y los pies. Poco a poco el niño debe de ir haciendo estos movimientos por comprensión de la letra de la canción o poesía. Al principio haremos los movimientos con el niño para progresivamente dejarlo solo.", imageSrc: fotoProvisional("child-song-movements") }
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
          id: "saluda-da-gracias",
          title: "Saluda y da las gracias",
          content: [
            {
              title: "Saluda y da las gracias",
              items: [
                { text: "Cuando el niño llegue a algún sitio o vea a algún familiar o amigo realizar esta actividad. Para ello decirle primero al niño “hola” y a continuación animarle a que conteste.", imageSrc: fotoProvisional("child-says-hello") },
                { text: "Emplear primero una marioneta y realizar el ejercicio y después con cualquier persona.", imageSrc: fotoProvisional("child-greeting-puppet") },
                { text: "Cuando se le vaya a dar al niño algo que le guste mucho (juguete, caramelo…), decirle “di gracias”, sin soltarlo el adulto. Una vez lo diga o intente decirlo, se le da. Repetir hasta que se convierta en una rutina.", imageSrc: fotoProvisional("child-says-thank-you") }
              ]
            }
          ]
        },
        {
          id: "preguntas-sociales",
          title: "Contesta a preguntas sociales: nombre, edad…",
          content: [
            {
              title: "Contesta a preguntas sociales: nombre, edad…",
              items: [
                { text: "Preguntarle “¿Cómo te llamas?”, si no contesta decirle: “di… (el nombre del niño)”. Reforzar.", imageSrc: fotoProvisional("child-answers-own-name") },
                { text: "Preguntarle “¿Cuántos años tienes?” al tiempo que se le ayuda a colocar sus dedos.", imageSrc: fotoProvisional("child-shows-age-fingers") }
              ]
            }
          ]
        },
        {
          id: "independencia-comida",
          title: "Independencia en la comida",
          content: [
            {
              title: "Utiliza el tenedor",
              items: [
                { text: "Enseñar al niño a usar el tenedor cuando come. Al principio ayudarle físicamente si es necesario. Reforzar.", imageSrc: fotoProvisional("child-eating-with-fork") }
              ]
            },
            {
              title: "Unta con cuchillo",
              items: [
                { text: "Enseñarle a untar mantequilla, mermelada, queso crema, usando un cuchillo romo. Ayudarle al principio si es necesario.", imageSrc: fotoProvisional("child-spreading-with-knife") }
              ]
            },
            {
              title: "Echa líquidos de un recipiente a otro",
              items: [
                { text: "Enseñarle a servirse agua, leche, de la jarra, botella o brik en su vaso.", imageSrc: fotoProvisional("child-pouring-from-jug") },
                { text: "Al principio, si es necesario, ayudarle guiándole en su mano en la acción. Reforzar sus intentos.", imageSrc: fotoProvisional("child-pouring-with-help") }
              ]
            }
          ]
        },
        {
          id: "va-al-servicio-solo",
          title: "Va al servicio solo con independencia",
          content: [
            {
              title: "Va al servicio solo con independencia",
              items: [
                { text: "El niño ha de aprender a bajarse la ropa, sentarse en el wáter, limpiarse, tirar de la cadena y subirse nuevamente la ropa. Reforzar.", imageSrc: fotoProvisional("child-using-toilet-alone") }
              ]
            }
          ]
        },
        {
          id: "lavarse-secarse-manos",
          title: "Tiene autonomía para lavarse y secarse las manos",
          content: [
            {
              title: "Tiene autonomía para lavarse y secarse las manos",
              items: [
                { text: "Enseñarle a lavarse la cara y manos totalmente solo: abrir el grifo, mojarse, enjabonarse, enjuagarse, cerrar el grifo, secarse y dejar la toalla en su sitio.", imageSrc: fotoProvisional("child-washing-face-hands-alone") }
              ]
            }
          ]
        },
        {
          id: "dientes-y-peinarse",
          title: "Se limpia los dientes y se peina solo",
          content: [
            {
              title: "Se limpia los dientes y se peina solo",
              items: [
                { text: "Enseñarle al niño a limpiarse los dientes en dirección arriba-abajo. Al principio si es necesario, ayudarle. Reforzar.", imageSrc: fotoProvisional("child-brushing-teeth") },
                { text: "Enseñar al niño a peinarse solo ante el espejo. Al principio si es necesario ayudarle guiándole la mano e irle retirando la ayuda poco a poco hasta conseguir que lo haga solo. Reforzar.", imageSrc: fotoProvisional("child-combing-hair-mirror") }
              ]
            }
          ]
        },
        {
          id: "subir-bajar-cremalleras",
          title: "Subir y bajar cremalleras",
          content: [
            {
              title: "Subir y bajar cremalleras",
              items: [
                { text: "Darle un tablero de cremallera con anilla para este ejercicio, y decirle “baja la cremallera”, haciendo que coja la anilla, si no lo hace, ayudarle.", imageSrc: fotoProvisional("child-zipper-board-down") },
                { text: "Una vez que sea capaz de abrir esta cremallera en el tablero, enseñarle a subirla empleando para ello la orden verbal correspondiente.", imageSrc: fotoProvisional("child-zipper-board-up") },
                { text: "Enseñar a subir y bajar cremalleras en sí mismo.", imageSrc: fotoProvisional("child-zipping-own-jacket") }
              ]
            }
          ]
        },
        {
          id: "abrochar-desabrochar-botones",
          title: "Abrochar y desabrochar botones grandes",
          content: [
            {
              title: "Abrochar y desabrochar botones grandes",
              items: [
                { text: "Poner al niño ante un tablero de botones grandes preparado para tal efecto y decirle “desabotona”. Si no lo hace, ayudarle físicamente. Luego debe hacerlo él solo.", imageSrc: fotoProvisional("child-unbuttoning-large-buttons") },
                { text: "Ponerlo ante un tablero de botones grandes desabotonados y decirle “abotona”. Ayudarle físicamente si es necesario. Retirar la ayuda hasta que lo haga solo.", imageSrc: fotoProvisional("child-buttoning-large-buttons") },
                { text: "Hacer que desabotone y abotone botones grandes en sí mismo, por ejemplo, en el mandilón.", imageSrc: fotoProvisional("child-buttoning-smock") }
              ]
            }
          ]
        },
        {
          id: "vestirse-desnudarse",
          title: "Independencia en vestirse y desnudarse",
          content: [
            {
              title: "Independencia en vestirse y desnudarse",
              items: [
                { text: "Enseñar al niño a ponerse y quitarse toda la ropa a excepción de nudos, lazos y botones en la espalda. Reforzar sus intentos.", imageSrc: fotoProvisional("child-dressing-undressing") }
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
          id: "imitacion-trazos",
          title: "Imitación de trazos",
          content: [
            {
              title: "Imitación de trazos",
              items: [
                { text: "Ante una pizarra colocada en vertical, intentar que el niño haga por imitación trazos en forma de cruz.", imageSrc: fotoProvisional("child-cross-strokes-vertical-board") },
                { text: "Ante una pizarra colocada en vertical, intentar que el niño haga por imitación trazos en forma de uve. Guiar la mano del niño al principio.", imageSrc: fotoProvisional("child-v-strokes-vertical-board") },
                { text: "Realizar los ejercicios anteriores con papel y lápiz.", imageSrc: fotoProvisional("child-strokes-paper-pencil") },
                { text: "Puntear una línea vertical en un papel. El niño debe repasarla siguiendo los puntos.", imageSrc: fotoProvisional("child-tracing-dotted-vertical-line") },
                { text: "Puntear en un papel líneas horizontales. Repasarlas siguiendo los puntos.", imageSrc: fotoProvisional("child-tracing-dotted-horizontal-lines") },
                { text: "Puntear y repasar círculos, cruces y trazos en forma de uve.", imageSrc: fotoProvisional("child-tracing-dotted-shapes") }
              ]
            }
          ]
        },
        {
          id: "empareja-colores",
          title: "Empareja colores de 4 en 4",
          content: [
            {
              title: "Empareja colores de 4 en 4",
              items: [
                { text: "Poner ante su vista 4 objetos de colores diferentes. A continuación, decirle: “pon el… con el…”, al tiempo que se le da el objeto para que lo coloque encima o al lado del que es igual. Cambiar el orden de los colores. Hacerlo con los colores: rojo, azul, amarillo, verde, negro, blanco y naranja.", imageSrc: fotoProvisional("child-matching-four-colors") },
                { text: "Hacer lo mismo, pero empleando objetos diferentes. Reforzar.", imageSrc: fotoProvisional("child-matching-colors-other-objects") }
              ]
            }
          ]
        },
        {
          id: "selecciona-colores",
          title: "Selecciona colores",
          content: [
            {
              title: "Selecciona colores",
              items: [
                { text: "Poner ante su vista dos objetos iguales de colores diferentes (rojo, azul, verde, amarillo) y decirle “¿Dónde está el…?” para que lo señale. Variar el orden de colocación de los colores.", imageSrc: fotoProvisional("child-selecting-colors") },
                { text: "Hacer lo mismo con objetos diferentes.", imageSrc: fotoProvisional("child-selecting-colors-other-objects") }
              ]
            }
          ]
        },
        {
          id: "selecciona-numeros",
          title: "Selecciona números",
          content: [
            {
              title: "Selecciona números",
              items: [
                { text: "Poner números en un papel, pintarlos y recortarlos (del 1 al 9). Poner ante la vista del niño de dos en dos y decirle “dame el…” para que lo coja y nos lo dé.", imageSrc: fotoProvisional("child-selecting-numbers-two") },
                { text: "Poner los números de tres en tres, luego de cuatro en cuatro…", imageSrc: fotoProvisional("child-selecting-numbers-more") }
              ]
            }
          ]
        },
        {
          id: "apareja-numeros",
          title: "Apareja números",
          content: [
            {
              title: "Apareja números",
              items: [
                { text: "Dibujar en un papel números repetidos en dos filas y en desorden para que el niño una el número de una fila con el que es igual en la otra fila. Reforzar. Hacerlo del 1 al 9.", imageSrc: fotoProvisional("child-matching-numbers-two-rows") }
              ]
            }
          ]
        },
        {
          id: "formas-geometricas-fundamentales",
          title: "Reconoce las formas geométricas fundamentales",
          content: [
            {
              title: "Reconoce las formas geométricas fundamentales",
              items: [
                { text: "Colocar ante su vista dos piezas geométricas, por ejemplo, círculo y cuadrado. Decirle: “¿Dónde está el círculo?” para que nos dé la pieza correspondiente, al tiempo que nos dice su nombre.", imageSrc: fotoProvisional("child-circle-square-pieces") },
                { text: "Cuando reconozca estas dos piezas, quitar una de ellas y poner en su lugar un triángulo y preguntarle: “¿Dónde está el triángulo?”", imageSrc: fotoProvisional("child-triangle-piece") },
                { text: "Mostrarle las 3 piezas a la vez y repetir las mismas preguntas.", imageSrc: fotoProvisional("child-three-geometric-pieces") },
                { text: "Decirle: “busca una cosa que tenga la misma forma que el círculo”. Hacer que el objeto esté en la habitación. Hacer lo mismo con el cuadrado. Reforzar.", imageSrc: fotoProvisional("child-finding-round-object-room") }
              ]
            }
          ]
        },
        {
          id: "torre-cubos-decrecientes",
          title: "Colocar cubos en tamaño decreciente para hacer una torre",
          content: [
            {
              title: "Colocar cubos en tamaño decreciente para hacer una torre",
              items: [
                { text: "Darle un juego de cubos de tamaños decrecientes y enseñarle a colocarlos de mayor a menor para hacer una torre. Al principio empezar con 2 cubiletes y a medida que lo vaya consiguiendo, ir aumentando el número de cubos.", imageSrc: fotoProvisional("child-nesting-cubes-tower") }
              ]
            }
          ]
        },
        {
          id: "conjunto-doce-piezas",
          title: "Conjunto de hasta 12 piezas",
          content: [
            {
              title: "Conjunto de hasta 12 piezas",
              items: [
                { text: "Presentarle una lámina donde estén representadas desde un mínimo de 6 figuras hasta un máximo de 12. Ir presentándoselas de forma gradual en cuanto al número de figuras.", imageSrc: fotoProvisional("child-picture-sheet-twelve-figures") },
                { text: "Una vez puesta la lámina ante su vista, nombrarle las figuras representadas y decirle: “pon la… con la…”. Reforzar.", imageSrc: fotoProvisional("child-matching-picture-sheet") }
              ]
            }
          ]
        },
        {
          id: "discriminacion-figuras-formas-tamanos",
          title: "Discriminación de figuras, formas y tamaños variados",
          content: [
            {
              title: "En cajas de madera",
              items: [
                { text: "Darle encajes de formas variadas y enseñarle a colocar las piezas correctamente.", imageSrc: fotoProvisional("child-wooden-shape-inset") },
                { text: "Darle encajes de madera con piezas de tamaño decreciente y enseñarle a encajarlas correctamente.", imageSrc: fotoProvisional("child-wooden-size-inset") },
                { text: "Darle un tablero de madera con figuras para encajar y enseñarle a colocarlas correctamente. Empezar con pocas piezas e ir aumentando el número de ellas a medida que las vaya haciendo bien.", imageSrc: fotoProvisional("child-wooden-board-figures") }
              ]
            }
          ]
        },
        {
          id: "transportar-objetos-fragiles",
          title: "Transportar objetos frágiles",
          content: [
            {
              title: "Transportar objetos frágiles",
              items: [
                { text: "Dar al niño vasos llenos de alimentos sólidos, como por ejemplo garbanzos… y hacer que los lleve de un sitio a otro en trayectos cortos.", imageSrc: fotoProvisional("child-carrying-cup-chickpeas") },
                { text: "Conforme vaya realizando bien el ejercicio anterior, poner en el vaso agua, empezando por la mitad y llenando posteriormente el vaso hacia arriba a medida que puede dar unos pasos con él sin derramar agua. Se da por conseguido cuando sea capaz de transportar un vaso lleno de agua 2 metros.", imageSrc: fotoProvisional("child-carrying-cup-water") }
              ]
            }
          ]
        }
      ]
    },
  }
};
