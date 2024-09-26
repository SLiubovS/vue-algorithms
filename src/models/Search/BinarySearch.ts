import type { ISearchAlgorithm } from './ISearchAlgorithm'

export class BinarySearch implements ISearchAlgorithm {
    private sort(array: number[]): void {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i; j++) {
              if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
              }
            }
          }
    }

    search(array: number[], element: number): number {

        // this.sort(array); // т.к. бинарный поиск работает только с отсортированным массивом

        let start = 0;
        let end = array.length - 1;
      
        while (start <= end) {
          let mid = Math.floor((start + end) / 2);
      
          if (array[mid] === element) {
            return mid;
          }
      
          if (array[mid] < element) {
            start = mid + 1; // Отбрасываем левую часть массива
          } else {
            end = mid - 1; // Отбрасываем правую часть массива
          }
        }
        return -1
    }    
}