import type { Coords, IVector } from './types';
export declare class Vector implements IVector {
    val: Coords;
    constructor(vector?: Coords, dimensions?: number);
    rotate(deg: number): this;
    update(val: Coords | number): this;
    add(val: Coords | number): this;
    scalar(val: Coords | number): this;
    multi(val: Coords | number): this;
    divide(val: Coords | number): this;
    limit(val: Coords | number): this;
    get heading(): number;
    get mag(): number;
    get magSq(): number;
    get unitVectorR2(): number;
    private createVectorR2;
    private createVectorR3;
}
//# sourceMappingURL=vector.d.ts.map