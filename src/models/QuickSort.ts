import type { ISortAlgorithm } from './ISortAlgorithm';

export class QuickSort implements ISortAlgorithm {
    sort(array: number[]): number[] {
      
      if (array.length <= 1) {
        return array;
    }
 
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];
 
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
          leftArray.push(array[i]);
        }
        else {
          rightArray.push(array[i])
        }
    }
    return [...this.sort(leftArray), pivot, ...this.sort(rightArray)];
    }
    
}      
