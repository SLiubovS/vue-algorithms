// алгоритм поиска
export interface ISearchAlgorithm {
    // принимает на вход массив и искомый элемент, возвращает индекс найденого элемента или -1
    search(array: number[], element: number): number;
}