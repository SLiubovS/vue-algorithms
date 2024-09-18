import type { ISortAlgorithm } from "./ISortAlgorithm";
import { BubbleSort } from './BubbleSort';

export class SortAlgorithmFactory {
    static getAlgorithm(name: string): ISortAlgorithm {
        if (name == 'bubbleSort') {
            return new BubbleSort();
        }
        else {
            throw Error('Алгоритм не найден');
    }
    }
}