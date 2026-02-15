/**
 * Отримати шлях роута
 *
 * @param route Об'єкт з полем path (рядок або функція, що повертає рядок)
 * @param args Параметри для функції path (якщо застосовується)
 * @returns Шлях сторінки у вигляді рядка
 *
 * @example
 * // Простий шлях
 * getPath({ path: '/signup' })
 * // => "/signup"
 *
 * // Динамічний шлях
 * getPath({ path: (id: number) => `/profile/${id}` }, 42)
 * // => "/profile/42"
 */
export function getPath(
  route: { path: string | ((...args: any[]) => string) },
  ...args: any[]
): string {
  if (typeof route.path === 'function') {
    return route.path(...args);
  }
  return route.path;
}
