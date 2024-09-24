import type { ISortAlgorithm } from './ISortAlgorithm';

export class QuickSort implements ISortAlgorithm {

  sort(array: number[]): void {
    this.quicksort(array, 0, array.length - 1);
  }


  private partition(array: number[], start: number, end: number): number {
// TO DO https://ru.wikibooks.org/wiki/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8_%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%B2/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0/%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F#C#_2
  }

  private quicksort(array: number[], start: number, end: number): void {
    if (start >= end) return;
      
    let pivot = this.partition(array, start, end);
    this.quicksort(array, start, pivot - 1);
    this.quicksort(array, pivot + 1, end);
  }
}      
