/**
 * Checks if the Information Component should have a left line / connector.
 * @param length
 * @param index
 */
export function getHasLeftLine(length: number, index: number): boolean {
  return length === 0 ? false : index + 1 !== length
}
