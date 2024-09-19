import type { ISortAlgorithm } from "./ISortAlgorithm";
import { BubbleSort } from './BubbleSort';
import { SelectedSort } from "./SelectedSort";
import { CycleSort } from "./CycleSort";

export class SortAlgorithmFactory {
    static getAlgorithm(name: string): ISortAlgorithm {
        if (name == 'bubbleSort') {
            return new BubbleSort();
        }
        if (name == 'selectedSort') {
            return new SelectedSort();
        }
        if (name == 'cycleSort') {
            return new CycleSort();
        }
        else {
            throw Error('Алгоритм не найден');
    }
    }
}