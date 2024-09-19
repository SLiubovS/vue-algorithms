import type { ISortAlgorithm } from "./ISortAlgorithm";
import { BubbleSort } from './BubbleSort';
import { SelectedSort } from "./SelectedSort";


export class SortAlgorithmFactory {
    static getAlgorithm(name: string): ISortAlgorithm {
        if (name == 'bubbleSort') {
            return new BubbleSort();
        }
        if (name == 'selectedSort') {
            return new SelectedSort();
        }
        else {
            throw Error('Алгоритм не найден');
    }
    }
}