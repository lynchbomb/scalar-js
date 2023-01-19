import type { GeneticsItem, IGenetics, Coords } from './types';
export declare class Genetics implements IGenetics {
    curGeneration: [GeneticsItem];
    preGeneration: [GeneticsItem];
    count: number;
    constructor(curGeneration: [GeneticsItem]);
    cycleGeneration(generation: [GeneticsItem]): void;
    getScore(vector: Coords, targetVector: Coords, originVector: Coords): number;
    getProbability(a: [number]): number[];
}
//# sourceMappingURL=genetics.d.ts.map