import type { ISortAlgorithm } from './ISortAlgorithm'

export class QuickSort implements ISortAlgorithm {
    sort(array: number[], start: number, end: number): void {
        const partition = (array: number[], start: number, end: number) => {
            const pivot = array[end]; // Определяем опорный элемент
            let i = start; // Определяем индекс, по которому делим массив на две части
          
            for (let j = start; j <= end - 1; j++) {
              if (array[j] <= pivot) {
                [array[i], array[j]] = [array[j], array[i]]; // Меняем значения переменных
                i++;
              }
            }
          
            [array[i], array[end]] = [array[end], array[i]]; // Меняем значения переменных
            return i;
          };
          
          const quickSort = (array: number[], start: number, end: number) => {
            if (start < end) { // Условия запуска рекурсии
              const pi = partition(array, start, end); // Получаем индекс
          
              quickSort(array, start, pi - 1);
              quickSort(array, pi + 1, end);
            }
          };
    }
}      
