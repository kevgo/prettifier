export function concatToSet<T>(set: Set<T>, array: T[]): void {
  for (const element of array) {
    set.add(element)
  }
}

export function removeAllFromSet<T>(set: Set<T>, array: T[]): void {
  for (const element of array) {
    set.delete(element)
  }
}
