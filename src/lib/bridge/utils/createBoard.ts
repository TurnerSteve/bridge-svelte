import { executeAlgo } from "$lib/bridge/deal-generators";
import { Algorithm } from "$lib/types/dealingAlgo-enum";
import type { Board, DealResult } from "$lib/types/structs";

export function createBoard(boardNo: number, algo: Algorithm, slots: number[]): Board {
    const deal: DealResult = executeAlgo(algo, slots);
    const board: Board = {
      boardNo: boardNo,
      algo: deal.algo,
      description: deal.description,
      deal: deal.deal,
    };
  
    return board;
  }