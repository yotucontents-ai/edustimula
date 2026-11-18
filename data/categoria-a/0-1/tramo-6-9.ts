import { AgeGroup, AreaType } from '../../../types';
import { fotoProvisional } from '../../helpers';

export const tramo6a9: AgeGroup = {
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
                { text: "Ejercicios de relajación y respiración, como en el trimestre anterior con el balón de playa.", imageSrc: fotoProvisional("baby-beach-ball-relax") },
                { text: "Palpaciones con las yemas de los dedos por todo el cuerpo, ligeros golpes, ligeros masajes.", imageSrc: fotoProvisional("baby-fingertip-massage") },
                { text: "Amasarle suavemente la espalda, las piernas y los brazos.", imageSrc: fotoProvisional("baby-back-leg-massage") },
                { text: "Masajes faciales.", imageSrc: fotoProvisional("baby-facial-massage") },
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
                { text: "Tumbado boca abajo. Desde esta postura se arrastra hacia atrás, se sienta, gira sobre sí mismo, etc.", imageSrc: fotoProvisional("baby-tummy-crawl-spin") },
                { text: "Tumbado boca arriba. Sobre todo, cuando algo le llama mucho la atención.", imageSrc: fotoProvisional("baby-back-attention") },
                { text: "Sentado. Permanece en esta posición al final del trimestre sin perder el equilibrio.", imageSrc: fotoProvisional("baby-sitting-balance") },
                { text: "De pie. Al final de este trimestre intentan ponerse de pie cuando tienen cerca objetos o personas que se lo permiten.", imageSrc: fotoProvisional("baby-standing-support") },
                { text: "Gateo. Se inicia el gateo. Con este ejercicio se ejercitan los dos hemisferios del cerebro.", imageSrc: fotoProvisional("baby-crawling-start") },
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
                { text: "Le gusta coger objetos y soltarlos.", imageSrc: fotoProvisional("baby-grasp-release-object") },
                { text: "Diferencia unos materiales de otros.", imageSrc: fotoProvisional("baby-texture-materials") },
                { text: "Utiliza el índice y el pulgar para coger objetos.", imageSrc: fotoProvisional("baby-pincer-grasp-6m") },
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
                { text: "Señala con el índice, aplaude. Da palmadas, da golpes, tira objetos lejos.", imageSrc: fotoProvisional("baby-point-clap-throw") },
                { text: "Le gusta manipular objetos con ambas manos.", imageSrc: fotoProvisional("baby-both-hands-objects") },
                { text: "Empieza a utilizar la pinza pulgar índice para coger objetos más con una mano que con otra.", imageSrc: fotoProvisional("baby-thumb-index-dominant") },
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
                { text: "En este trimestre aparece su primera palabra, en unos niños ocurre antes, en otros más tarde.", imageSrc: fotoProvisional("baby-first-word") },
                { text: "A partir del 8º mes al niño le gusta mucho imitar.", imageSrc: fotoProvisional("baby-imitation-8months") },
                { text: "Es normal ver al niño con la lengua fuera. Es importante activar este músculo para el habla. Todo lo que hagamos juegos o sonidos enseñándoles la lengua, le gustarán mucho.", imageSrc: fotoProvisional("baby-tongue-out-play") },
                { text: "Empieza a comprender preguntas como ¿dónde está el chupete? ¿Dónde está mamá? ¡No toques eso!", imageSrc: fotoProvisional("baby-understanding-questions") },
                { text: "Utiliza el grito para mostrar su enfado.", imageSrc: fotoProvisional("baby-cry-frustration") },
                { text: "Emite mucha cantidad de sonidos ante personas conocidas.", imageSrc: fotoProvisional("baby-babbling-familiar-face") },
                { text: "Utiliza el índice para señalar, como forma primitiva de preguntar.", imageSrc: fotoProvisional("baby-pointing-index") },
                { text: "Le gusta que le hablen, que le canten, la música, suele bailar al oírla.", imageSrc: fotoProvisional("baby-music-dancing") },
                { text: "Empezar a enseñarle a decir \"adiós\".", imageSrc: fotoProvisional("baby-waving-goodbye") },
                { text: "Dar nombre a las cosas.", imageSrc: fotoProvisional("baby-naming-objects") },
                { text: "Tirar besos y soplar.", imageSrc: fotoProvisional("baby-blowing-kisses") },
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
                { text: "Cosquillas con contacto corporal.", imageSrc: fotoProvisional("baby-tickling-contact") },
                { text: "Carcajadas sin contacto corporal.", imageSrc: fotoProvisional("baby-laughing-no-touch") },
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
                { text: "Iniciarlo en el control de esfínteres. Al darnos cuenta de que va a hacer caca, le ponemos en el orinal. Ya se le puede ir acostumbrando poco a poco después de beber o de las comidas. Le entretenemos y cuando se dé cuenta que ha hecho caca o pis, se pondrá muy contento y lo irá pidiendo cada vez más. No regañarle.", imageSrc: fotoProvisional("baby-potty-training") },
                { text: "Vestirse. Poco a poco colaborará en el vestido. Le vamos diciendo: un brazo, la pierna, la cabeza.", imageSrc: fotoProvisional("baby-getting-dressed") },
                { text: "Lavarse. Enseñarle la esponja y explicarle: el bebé se lava las manos, los pies.", imageSrc: fotoProvisional("baby-washing-hands-sponge") },
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
                { text: "Ofrecerle dos juguetes para que se decida a coger solo uno.", imageSrc: fotoProvisional("baby-choose-two-toys") },
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
                { text: "Cambiarle los juguetes del sitio dónde están habitualmente, de espaldas, medio tapados,… para que él los descubra.", imageSrc: fotoProvisional("baby-discover-hidden-toy") },
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
                { text: "Enseñarle libros con detalles.", imageSrc: fotoProvisional("baby-picture-book-details") },
                { text: "Ofrecerle juguetes con muchos detalles llamativos.", imageSrc: fotoProvisional("baby-detailed-colorful-toys") },
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
                { text: "Le cantamos una canción que acompañamos de palabra y gesto. Terminará por hacer el gesto sin que se lo pidamos.", imageSrc: fotoProvisional("baby-song-word-gesture") },
                { text: "Decir adiós, lo repetirá de forma automática.", imageSrc: fotoProvisional("baby-bye-bye-automatic") },
              ]
            }
          ]
        }
      ]
    },
  }
};
