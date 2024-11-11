import type { ISearchAlgorithm } from './ISearchAlgorithm';
import { LinearSearch } from './LinearSearch';
import { BinarySearch } from './BinarySearch';
import { DepthFirstSearch } from './DepthFirstSearch';

export class SearchAlgorithmFactory {
    static getAlgorithm(name: string): ISearchAlgorithm {
        if (name == 'linearSearch') {
            return new LinearSearch();
        }
        if (name == 'binarySearch') {
            return new BinarySearch();
        }
        if (name == 'depthFirstSearch') {
            return new DepthFirstSearch();
        }
        else {
            throw Error('Алгоритм не найден');
        }
    }
}