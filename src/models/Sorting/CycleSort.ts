import type { ISortAlgorithm } from './ISortAlgorithm'

export class CycleSort implements ISortAlgorithm {
  sort(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      let position = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < value) {
          position++;
        }
      }
      if (position === i) {
        continue;
      }
      while (value === array[position]) {
        position++;
      }

      [array[position], value] = [value, array[position]];

      while (position !== i) {
        position = i;
        for (let k = i + 1; k < array.length; k++) {
          if (array[k] < value) {
            position++;
          }
        }
        while (value === array[position]) {
          position++;
        }
        [array[position], value] = [value, array[position]];
      }
    }
  }
}
