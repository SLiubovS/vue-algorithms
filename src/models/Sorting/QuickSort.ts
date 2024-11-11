import type { ISortAlgorithm } from './ISortAlgorithm';

export class QuickSort implements ISortAlgorithm {

  sort(array: number[]): void {
    this.quicksort(array, 0, array.length - 1);
  }

  private partition(array: number[], start: number, end: number): number {
    let temp: number;
    let marker = start;
    for (let i = start; i < end; i++) {
      if (array[i] < array[end]) {
        temp = array[marker];
        array[marker] = array[i];
        array[i] = temp;
        marker++;
      }
    }

    temp = array[marker];
    array[marker] = array[end];
    array[end] = temp;
    return marker;
  }

  private quicksort(array: number[], start: number, end: number): void {
    if (start >= end) return;

    let pivot = this.partition(array, start, end);
    this.quicksort(array, start, pivot - 1);
    this.quicksort(array, pivot + 1, end);
  }
}      
