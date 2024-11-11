import type { ISearchAlgorithm } from './ISearchAlgorithm'

export class LinearSearch implements ISearchAlgorithm {
    search(array: number[], element: number): number {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return i;
            }
        }
        return -1
    }
}