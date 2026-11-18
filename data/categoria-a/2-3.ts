import { AgeGroup, AreaType, IntroItem } from '../../types';
import { fotoProvisional } from '../helpers';

export const edad2a3: AgeGroup = {
  id: "2-3",
  label: "2 – 3 años",
  introText: [
    { icon: "MessageSquare", color: "bg-orange-100", text: "A esta edad el niño ya puede realizar frases sencillas." },
    { icon: "Gamepad2",      color: "bg-purple-100", text: "Fomenta el juego simbólico (hacer como que come, como que duerme)." },
    { icon: "Activity",      color: "bg-green-100",  text: "Trabaja la coordinación motora con juegos de saltar o trepar." },
  ] as IntroItem[],
  areas: {
    [AreaType.GROSS_MOTOR]: {
      title: "Motricidad Gruesa",
      subSections: [
        {
          id: "alternar-pies-escaleras",
          title: "Alternar los pies al subir escaleras",
          content: [
            {
              title: "Alternar los pies al subir escaleras",
              items: [
                { text: "Colocamos al niño ante una escalera. Le damos la mano y le animamos a que suba colocando un pie en cada peldaño.", imageSrc: fotoProvisional("child-stairs-holding-hand") },
                { text: "Ponerlo agarrado a la barandilla y animarlo a que suba la escalera de igual manera.", imageSrc: fotoProvisional("child-stairs-handrail") },
                { text: "Ponerlo al comienzo de la escalera y animarlo a subirla sin apoyo, colocando un pie en cada peldaño.", imageSrc: fotoProvisional("child-stairs-no-support") }
              ]
            }
          ]
        },
        {
          id: "andar-hilera-tacos",
          title: "Andar sobre una hilera de tacos",
          content: [
            {
              title: "Andar sobre una hilera de tacos de 15 cm aproximadamente de ancho",
              items: [
                { text: "Hacer una hilera de tacos de 2 m aproximadamente, animar al niño a subir y a andar por ella, colocando un pie delante del otro. Si es preciso al principio, darle ayuda física cogiéndole una mano.", imageSrc: fotoProvisional("child-walking-wooden-blocks") }
              ]
            }
          ]
        },
        {
          id: "andar-desnivel",
          title: "Andar en desnivel",
          content: [
            {
              title: "Andar en desnivel",
              items: [
                { text: "Colocar un tablero de 10 cm de alto y 1,30 cm de largo. Poner al niño con un pie en el tablero y el otro en el suelo. Animarle a andar en esa posición ayudándole cogiéndole de una mano hasta que aprenda a realizarlo sin dificultad.", imageSrc: fotoProvisional("child-walking-uneven-board-help") },
                { text: "Hacer lo mismo, pero sin ayuda.", imageSrc: fotoProvisional("child-walking-uneven-board-alone") },
                { text: "Hacer lo mismo con un tablero que mida 15 cm de alto.", imageSrc: fotoProvisional("child-walking-higher-board") }
              ]
            }
          ]
        },
        {
          id: "lanzar-atrapar-pelota",
          title: "Lanzar y atrapar una pelota con ambas manos",
          content: [
            {
              title: "Lanzar y atrapar una pelota con ambas manos",
              items: [
                { text: "Ponerse niño y adulto de pie frente a frente. Jugar a lanzarse la pelota uno al otro. Si el niño tiene dificultad en atrapar la pelota, situar a otro adulto detrás del niño para que le ayude con sus manos y atrape la pelota. Retirar la ayuda paulatinamente.", imageSrc: fotoProvisional("child-adult-throw-catch-ball") }
              ]
            }
          ]
        },
        {
          id: "salto",
          title: "Salto",
          content: [
            {
              title: "Salto",
              items: [
                { text: "Colocarlo de pie encima de una cama o colchoneta, cogiéndole de las manos, animarle a saltar. Para ello debe doblar ligeramente las rodillas, al tiempo que se le da ligeramente impulso y se le dice “salta”.", imageSrc: fotoProvisional("child-jumping-on-mattress") },
                { text: "De pie en el suelo, se le coge de las manos y se le da la misma orden y procedimiento. Retirando poco a poco el apoyo y que el niño salte solo con los dos pies juntos.", imageSrc: fotoProvisional("child-jumping-on-floor") },
                { text: "Colocarlo sobre un escalón. Cogerle de las manos que doble ligeramente las rodillas y se le dice “salta”, a la vez que se le da impulso para la ejecución del movimiento. Poco a poco se retira la ayuda hasta que el niño salte solo a pies juntillas.", imageSrc: fotoProvisional("child-jumping-from-step") }
              ]
            }
          ]
        },
        {
          id: "triciclo-pedalear",
          title: "Manejar triciclo. Pedalear",
          content: [
            {
              title: "Manejar triciclo. Pedalear",
              items: [
                { text: "Enseñar al niño a subirse y bajarse del triciclo. Hacer que se siente, atarle los pies a los pedales con cintas y enseñarle a pedalear. Reforzar sus intentos.", imageSrc: fotoProvisional("child-tricycle-feet-tied") },
                { text: "Cuando sepa llevar el triciclo con los dos pies atados a los pedales, desatarle uno y animarle a seguir pedaleando.", imageSrc: fotoProvisional("child-tricycle-one-foot-free") },
                { text: "Desatarle también el otro pie para que pedalee normalmente.", imageSrc: fotoProvisional("child-tricycle-pedaling-free") }
              ]
            }
          ]
        },
        {
          id: "sostenerse-un-pie",
          title: "Intentar sostenerse sobre un solo pie",
          content: [
            {
              title: "Intentar sostenerse sobre un solo pie",
              items: [
                { text: "Ponerlo delante de un espejo grande, cogerle de la mano y decirle “levanta el pie”, al tiempo que lo hace el adulto. Reforzar la imitación. Intentar que sea capaz de estar en esta posición al menos 3”. Luego se le puede acercar una silla para que se agarre a ella.", imageSrc: fotoProvisional("child-one-foot-mirror") },
                { text: "Cuando el niño sea capaz de hacerlo con el apoyo de una mano, intentar que lo haga sin ninguna ayuda solo, ante el modelo del adulto, sin espejo.", imageSrc: fotoProvisional("child-one-foot-alone") }
              ]
            }
          ]
        },
        {
          id: "jugar-en-cuclillas",
          title: "Jugar en cuclillas",
          content: [
            {
              title: "Jugar en cuclillas",
              items: [
                { text: "Poner al niño en cuclillas en el suelo, agarrado de ambas manos. Reforzar a mantener esta posición.", imageSrc: fotoProvisional("child-squatting-holding-hands") },
                { text: "Estando el niño en cuclillas, soltarle una mano y ofrecerle un juguete para que lo coja con esa mano.", imageSrc: fotoProvisional("child-squatting-reaching-toy") },
                { text: "Soltarle las manos para que se mantenga en esa posición sin ayuda.", imageSrc: fotoProvisional("child-squatting-no-help") }
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
          id: "imitar-trazos",
          title: "Imitar trazos",
          content: [
            {
              title: "a) Imitar trazos circulares",
              items: [
                { text: "Poner al niño frente a una pizarra vertical. Trazar un círculo y animarle a que realice trazos circulares. Al principio ayudarle guiándole la mano.", imageSrc: fotoProvisional("child-circle-strokes-blackboard") },
                { text: "Hacer lo mismo sobre una cartulina o papel encima de una mesa con ceras de colores.", imageSrc: fotoProvisional("child-circle-strokes-crayons") }
              ]
            },
            {
              title: "b) Imitar trazos en cruz",
              items: [
                { text: "Poner al niño frente a una pizarra vertical. Trazar una cruz y animarle a que la imite. Al principio ayudarle.", imageSrc: fotoProvisional("child-cross-strokes-blackboard") },
                { text: "Hacer lo mismo sobre una mesa en papel o cartulina con ceras de colores.", imageSrc: fotoProvisional("child-cross-strokes-crayons") }
              ]
            },
            {
              title: "c) Imitar trazos de líneas en forma de uve",
              items: [
                { text: "Poner al niño frente a una pizarra vertical. Trazar líneas en forma de uve y animarle a que lo realice.", imageSrc: fotoProvisional("child-v-strokes-blackboard") },
                { text: "Hacer lo mismo sobre una mesa con ceras de colores.", imageSrc: fotoProvisional("child-v-strokes-crayons") }
              ]
            }
          ]
        },
        {
          id: "enhebrar-cordon",
          title: "Enhebrar un cordón",
          content: [
            {
              title: "Enhebrar un cordón",
              items: [
                { text: "Enseñarle a enhebrar bolas grandes con un cordón. Primero empezar con un cordón semirrígido y cuando lo haga con este, ir dándole otro cada vez más flexible, hasta que lo haga con uno de algodón.", imageSrc: fotoProvisional("child-threading-large-beads") },
                { text: "Cuando enhebre sin problema las bolas grandes, ir disminuyendo su tamaño… hasta que lo haga con formas pequeñas.", imageSrc: fotoProvisional("child-threading-small-beads") },
                { text: "Hacer que enhebre también otras formas geométricas: cilindros, cubos…", imageSrc: fotoProvisional("child-threading-geometric-shapes") }
              ]
            }
          ]
        },
        {
          id: "puente-tres-cubos",
          title: "Imitar la construcción de un puente con 3 cubos",
          content: [
            {
              title: "Imitar la construcción de un puente con 3 cubos",
              items: [
                { text: "Construir ante su vista un puente con tres cubos y animarle a imitarlo.", imageSrc: fotoProvisional("child-block-bridge-demo") },
                { text: "Al principio colocar los dos cubos de la base y que él termine de colocar el de arriba.", imageSrc: fotoProvisional("child-block-bridge-top-block") },
                { text: "Cuando lo realice sin dificultad, animarle a que lo haga solo desde el principio. Reforzar.", imageSrc: fotoProvisional("child-block-bridge-alone") }
              ]
            }
          ]
        },
        {
          id: "llenar-vaciar-recipientes",
          title: "Llenar y vaciar recipientes",
          content: [
            {
              title: "Llenar y vaciar recipientes",
              items: [
                { text: "Jugar con el niño a vaciar y llenar recipientes con arena, así como a pasar la arena de uno a otro.", imageSrc: fotoProvisional("child-filling-containers-sand") },
                { text: "Hacer lo mismo, pero con el agua.", imageSrc: fotoProvisional("child-filling-containers-water") }
              ]
            }
          ]
        },
        {
          id: "desenvolver-paquetes",
          title: "Desenvolver paquetes",
          content: [
            {
              title: "Desenvolver paquetes",
              items: [
                { text: "Darle paquetes de tamaño regular medio desenvueltos para que él termine de quitarle el papel. Poco a poco ir dándoselo cada vez más envuelto.", imageSrc: fotoProvisional("child-unwrapping-package-partly") },
                { text: "Presentarle el paquete totalmente envuelto para que él solo lo desenvuelva.", imageSrc: fotoProvisional("child-unwrapping-package-fully") }
              ]
            }
          ]
        },
        {
          id: "torres-diez-cubos",
          title: "Construcción de torres de hasta 10 cubos",
          content: [
            {
              title: "Construcción de torres de hasta 10 cubos",
              items: [
                { text: "Enseñarle a hacer torres de ocho cubos. A continuación de nueve y por último de diez.", imageSrc: fotoProvisional("child-block-tower-ten") }
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
          id: "empleo-plural",
          title: "Empleo del plural",
          content: [
            {
              title: "Empleo del plural",
              items: [
                { text: "Formar plurales. Mostrar al niño una caja conteniendo una pelota. Preguntarle: “¿Qué es?” para que responda “una pelota”. A continuación presentarle otra caja con muchas pelotas y decirle “¿Qué son?” para que diga “pelotas”. Reforzar con muchos ejemplos.", imageSrc: fotoProvisional("child-plural-box-balls") }
              ]
            }
          ]
        },
        {
          id: "empleo-pronombres",
          title: "Empleo de pronombres",
          content: [
            {
              title: "Yo",
              items: [
                { text: "Hacerle preguntas del tipo “¿Quién es… (su nombre)?”, para que diga “Yo”. Si no lo hace se le dice “di yo”. Insistir hasta que responda usando el pronombre Yo. Reforzar las respuestas.", imageSrc: fotoProvisional("child-pronoun-yo") }
              ]
            },
            {
              title: "Él / Ella",
              items: [
                { text: "Hacerle preguntas del tipo “¿Quién es… (nombre de un/una familiar)?”, para que responda “él”/“ella”. Si no lo hace, decirle “di él” o “di ella” al tiempo que se le hace señalar a la persona correspondiente. Reforzar las respuestas.", imageSrc: fotoProvisional("child-pronoun-el-ella") }
              ]
            },
            {
              title: "Tú, tuyo",
              items: [
                { text: "Hacer preguntas del tipo “¿Quién es mamá?”, para que responda “tú”. Si no lo hace, decirle “di tú”, al tiempo que se le hace señalar a la persona correspondiente. Reforzar sus respuestas.", imageSrc: fotoProvisional("child-pronoun-tu") }
              ]
            },
            {
              title: "Mío",
              items: [
                { text: "Hacerle preguntas del tipo “¿De quién son estos zapatos?”, al tiempo que se le muestran sus zapatos, para que responda “mío”. Hacer lo mismo con otras prendas de vestir, juguetes…", imageSrc: fotoProvisional("child-pronoun-mio-shoes") }
              ]
            },
            {
              title: "Eso",
              items: [
                { text: "Hacerle preguntas del tipo “¿Qué quieres?”, refiriéndonos a cosas que el niño desconoce su nombre, para que diga “eso”, al tiempo que lo señala. Reforzar las respuestas.", imageSrc: fotoProvisional("child-pronoun-eso") }
              ]
            }
          ]
        },
        {
          id: "dice-su-nombre",
          title: "Dice su nombre, nombrarse",
          content: [
            {
              title: "Dice su nombre, nombrarse",
              items: [
                { text: "Preguntar al niño con frecuencia “¿Cómo te llamas?”. Si no contesta decirle “di… (su nombre)” hasta que responda a la pregunta. Reforzar sus intentos.", imageSrc: fotoProvisional("child-says-own-name") }
              ]
            }
          ]
        },
        {
          id: "direcciones-espaciales",
          title: "Comprensión de direcciones espaciales referidas a su cuerpo",
          content: [
            {
              title: "Arriba - abajo",
              items: [
                { text: "Darle órdenes verbales del tipo: “pon los brazos arriba”, “pon los brazos abajo”, para que las ejecute. Ayudarle al principio si es necesario.", imageSrc: fotoProvisional("child-arms-up-down") }
              ]
            },
            {
              title: "Encima - debajo",
              items: [
                { text: "Poner al niño junto a una silla. Darle un juguete y decirle “ponlo debajo de la silla”. A continuación darle otro juguete y decirle “ponlo encima de la silla”. Al principio, si es necesario, ayudarle. Hacer lo mismo en otros lugares de la casa (cama, mesa…) y con objetos diferentes.", imageSrc: fotoProvisional("child-toy-over-under-chair") }
              ]
            }
          ]
        },
        {
          id: "partes-del-cuerpo",
          title: "Reconocimiento de partes de su cuerpo",
          content: [
            {
              title: "Reconocimiento de partes de su cuerpo",
              items: [
                { text: "Enseñarle a reconocer primero en sí mismo, después en otra persona y finalmente en un muñeco o lámina con una figura humana, partes del cuerpo tales como: rodilla, pierna, estómago, pecho, espalda, hombro, cuello…", imageSrc: fotoProvisional("child-body-parts-doll") }
              ]
            }
          ]
        },
        {
          id: "frases-tres-palabras",
          title: "Construcción de frases de 3 palabras",
          content: [
            {
              title: "Construcción de frases de 3 palabras",
              items: [
                { text: "Cuando el niño quiera algo utilizar frases de 3 palabras. Un ejemplo, si desea agua, hacer que diga: “mamá dame agua”. Si no lo hace, decírselo primero y hacer que después lo repita él. Hacerlo siempre utilizando la palabra que ya conoce. Reforzar sus intentos.", imageSrc: fotoProvisional("child-three-word-sentences") }
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
          id: "jugar-turnos",
          title: "Jugar con sus compañeros y seguir su turno",
          content: [
            {
              title: "Jugar con sus compañeros y seguir su turno",
              items: [
                { text: "Reunir a dos o tres niños y organizar actividades para realizarlas juntos. Por ejemplo, hacer una torre de 9 cubos. Para ello, repartir los cubos entre los niños. A continuación decirle que cada uno ponga uno, por turno y hacer que esperen su vez, dándoles la entrada cada vez que les toque. Reforzar cuando esperen su turno para colocar el cubo.", imageSrc: fotoProvisional("children-taking-turns-blocks") },
                { text: "Variar el tipo de actividad a realizar.", imageSrc: fotoProvisional("children-playing-together-activities") }
              ]
            }
          ]
        },
        {
          id: "nombrarse-espejo-foto",
          title: "Se llama ante el espejo y delante de una foto",
          content: [
            {
              title: "Se llama ante el espejo y delante de una foto",
              items: [
                { text: "Poner al niño delante de un espejo y preguntarle “¿Quién es ese niño?”, señalándole. Si no contesta decirle “di… (su nombre)”. Reforzar la respuesta. Ir retirando la ayuda.", imageSrc: fotoProvisional("child-names-self-mirror") },
                { text: "Hacer lo mismo ante una foto del niño.", imageSrc: fotoProvisional("child-names-self-photo") }
              ]
            }
          ]
        },
        {
          id: "desabrochar-botones",
          title: "Desabrocha botones",
          content: [
            {
              title: "Desabrocha botones",
              items: [
                { text: "Enseñarle a desabrochar botones en un tablero o en otra persona. Empezar a colocar el botón a mitad de ojal, para que él termine de sacarlo. Después hacer que lo desabroche solo desde el principio. Ayudarle si es necesario e ir retirando paulatinamente la ayuda.", imageSrc: fotoProvisional("child-unbuttoning-board") }
              ]
            }
          ]
        },
        {
          id: "lavar-secar-manos",
          title: "Lavarse las manos y secárselas con ayuda",
          content: [
            {
              title: "Lavarse las manos y secárselas con ayuda",
              items: [
                { text: "Cuando vaya a lavar las manos decirle “lávate las manos”. Hacer que vaya al baño, abra el grifo, se moje las manos, las enjabone y se seque. Finalmente ha de colgar la toalla en su sitio.", imageSrc: fotoProvisional("child-washing-drying-hands") }
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
          id: "subir-bajar-braguitas",
          title: "Subirse y bajarse las braguitas y pantalones",
          content: [
            {
              title: "Subirse y bajarse las braguitas y pantalones",
              items: [
                { text: "Cuando el niño vaya a utilizar el wáter, animarlo a que sea él quien se baje las braguitas y se las suba. Para ello, decirle “bájate las braguitas” al tiempo que se le ayuda si es necesario, dirigiéndole el movimiento.", imageSrc: fotoProvisional("child-pulling-down-pants") },
                { text: "Cuando se las tenga que subir, decirle “sube las braguitas”, igualmente ayudarle si lo necesita. Ir retirando la ayuda.", imageSrc: fotoProvisional("child-pulling-up-pants") }
              ]
            }
          ]
        },
        {
          id: "no-pis-noche",
          title: "No se hace pis durante la noche, normalmente",
          content: [
            {
              title: "No se hace pis durante la noche, normalmente",
              items: [
                { text: "Antes de irse a la cama, hacer que haga pis. Si por la mañana amanece seco, reforzar alabándolo por ello.", imageSrc: fotoProvisional("child-bedtime-toilet-routine") }
              ]
            }
          ]
        },
        {
          id: "quitarse-abrigo-chaqueta",
          title: "Se quita el abrigo y la chaqueta",
          content: [
            {
              title: "Se quita el abrigo y la chaqueta",
              items: [
                { text: "Cuando se vaya a sacar el abrigo o la chaqueta, dejar la última manga y decirle “quítate el abrigo”, para que termine de hacerlo. Cuando lo haga bien, hacer que se lo quite desde el comienzo. Ayudarle en los movimientos a realizar. Reforzar sus intentos.", imageSrc: fotoProvisional("child-taking-off-coat") }
              ]
            }
          ]
        },
        {
          id: "sorber-pajita",
          title: "Sorbe líquidos en pajita",
          content: [
            {
              title: "Sorbe líquidos en pajita",
              items: [
                { text: "Cuando se le dé agua u otra bebida refrescante, enseñarle a tomarla sorbiendo por una pajita. Mejora la respiración.", imageSrc: fotoProvisional("child-drinking-with-straw") }
              ]
            }
          ]
        },
        {
          id: "ponerse-zapatos",
          title: "Ponerse los zapatos",
          content: [
            {
              title: "Ponerse los zapatos",
              items: [
                { text: "Cuando se le vaya a poner los zapatos, dárselos desabrochados y decirle “ponte los zapatos”. Si tiene dificultad ayudarle. Poco a poco ir retirando la ayuda hasta que lo haga solo.", imageSrc: fotoProvisional("child-putting-on-shoes") }
              ]
            }
          ]
        },
        {
          id: "lotes-seis-dibujos",
          title: "Lotes de hasta 6 dibujos",
          content: [
            {
              title: "Lotes de hasta 6 dibujos",
              items: [
                { text: "Poner un cartón con dos imágenes sencillas y claras ante su vista. Nombrarle las figuras representadas. Darle a continuación un cartón pequeño conteniendo una de las figuras anteriores y decirle: “pon la… con la…” es decir, con la que sea igual.", imageSrc: fotoProvisional("child-matching-two-pictures") },
                { text: "Si no lo hace ayudarle. Cuando lo haga solo sin problema, darle tres, luego cuatro…", imageSrc: fotoProvisional("child-matching-three-four-pictures") },
                { text: "Lo mismo pero con un lote de seis figuras.", imageSrc: fotoProvisional("child-matching-six-pictures") }
              ]
            }
          ]
        },
        {
          id: "discriminar-formas",
          title: "Discriminar formas geométricas y figuras",
          content: [
            {
              title: "Con círculo, triángulo y cuadrado",
              items: [
                { text: "Darle un tablero conteniendo las tres formas básicas y enseñarle a encajarlas correctamente. Reforzar.", imageSrc: fotoProvisional("child-shape-sorter-three-shapes") }
              ]
            },
            {
              title: "Con formas geométricas variadas",
              items: [
                { text: "Presentar al niño formas geométricas variadas. Ir aumentando progresivamente el número de formas geométricas a encajar. Ayudarle si es necesario.", imageSrc: fotoProvisional("child-shape-sorter-varied-shapes") }
              ]
            }
          ]
        },
        {
          id: "puzles-tres-piezas",
          title: "Construcción de puzles de hasta 3 piezas",
          content: [
            {
              title: "Construcción de puzles de hasta 3 piezas",
              items: [
                { text: "Proporcionar al niño un puzzle de dos piezas que represente una figura conocida por él. Entregarle el puzzle hecho, después separar unos centímetros las dos piezas y decir “ahora arréglalo tú”. Ayudarle a unir las piezas e ir suprimiendo esta ayuda progresivamente.", imageSrc: fotoProvisional("child-two-piece-puzzle") },
                { text: "Darle otros puzles distintos del anterior de dos piezas.", imageSrc: fotoProvisional("child-other-two-piece-puzzles") },
                { text: "Pasar a hacer lo mismo con tres piezas, que sea capaz de unir las tres piezas correctamente.", imageSrc: fotoProvisional("child-three-piece-puzzle") }
              ]
            }
          ]
        }
      ]
    }
  }
};
