import type { ISortAlgorithm } from './ISortAlgorithm';
import { BubbleSort } from './BubbleSort';
import { SelectedSort } from './SelectedSort';
import { CycleSort } from './CycleSort';
import { QuickSort } from './QuickSort';

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
        if (name == 'quickSort') {
            return new QuickSort();
        }
        else {
            throw Error('Алгоритм не найден');
        }
    }
}