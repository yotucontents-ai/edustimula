import { SubSection } from '../types';

/**
 * Imagen provisional (aleatoria, de picsum.photos) para actividades que aún no
 * tienen foto real. Al sustituirla por una foto de public/images, basta con
 * poner la ruta local ("/images/nombre.jpg") en lugar de esta llamada.
 */
export const fotoProvisional = (seed: string): string =>
  `https://picsum.photos/seed/${seed}/600/400`;

/** Opción de un juego: [id, etiqueta, emoji]. */
export type Opcion = [id: string, label: string, emoji: string];

/**
 * Juego de "elige la imagen" como subsección.
 * `successMessage` es opcional (si falta, la app usa "¡Muy bien!").
 */
export const juego = (
  id: string,
  title: string,
  question: string,
  correctAnswer: string,
  opciones: Opcion[],
  successMessage?: string,
): SubSection => ({
  id,
  title,
  game: {
    type: 'select-image',
    question,
    correctAnswer,
    ...(successMessage ? { successMessage } : {}),
    options: opciones.map(([optId, label, emoji]) => ({ id: optId, label, emoji })),
  },
});
