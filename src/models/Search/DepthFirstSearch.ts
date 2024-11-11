import type { ISearchAlgorithm } from './ISearchAlgorithm'

export class DepthFirstSearch implements ISearchAlgorithm {

  search(array: number[], element: number): number {
    // const dfs = (array: number[], element: number) => {
    //     const stack = [element];

    //     while (stack.length > 0) {
    //       const vert = stack.shift(); // Выбираем первую вершину из стека

    //       if (array[vert]) {
    //         stack.unshift(...array[vert]); // Добавляем вершины в начало стека
    //       }
    //     //   return vert;
    //     }


    //   };
    return -1;
  }

}