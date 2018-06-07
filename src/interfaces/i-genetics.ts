import { ICoords } from './i-coords';

export interface IGenetics {
  curGeneration: [IGeneticsItem];
  preGeneration: [IGeneticsItem];
  count: number;
  cycleGeneration: (generation: [IGeneticsItem]) => void;
  getScore: (vector: ICoords, targetVector: ICoords, originVector: ICoords) => number;
  getProbability: (a: [number]) => [number];
}

export interface IGeneticsItem {
  score: number;
  coords: ICoords;
  probability: number;
}
