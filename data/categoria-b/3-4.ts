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
    [AreaType.SOCIAL]:         { title: "Área Social",            subSections: [] },
    [AreaType.PERCEPTION]:     { title: "Percepción y Cognición", subSections: [] },
  }
};
