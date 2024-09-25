import type { ISortAlgorithm } from './ISortAlgorithm'

export class SelectedSort implements ISortAlgorithm {
    sort(array: number[]): void {
        for (let i = 0; i < array.length; i++) {
            let min = i;
        
            for (let j = i + 1; j < array.length; j++) {
              if (array[min] > array[j]) {
                min = j;
              }
            }
        
            [array[i], array[min]] = [array[min], array[i]];
          }
    }

}