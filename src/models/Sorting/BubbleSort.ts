import type { ISortAlgorithm } from './ISortAlgorithm'

export class BubbleSort implements ISortAlgorithm {
  sort(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }
}