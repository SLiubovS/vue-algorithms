import type { ISearchAlgorithm } from "./ISearchAlgorithm";
import { LinearSearch } from './LinearSearch';

export class SearchAlgorithmFactory {
    static getAlgorithm(name: string): ISearchAlgorithm {
        if (name == 'linearSearch') {
            return new LinearSearch();
        }
        
        else {
            throw Error('Алгоритм не найден');
    }
    }
}