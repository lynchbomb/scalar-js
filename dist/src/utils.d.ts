import type { Boundary, Coords } from './types';
export declare function generateMatrix(rows: number, columns: number, fillWith?: any): any[][];
export declare function randomIntBetween(min: number, max: number): number;
export declare function getRandomColor(): string;
export declare function getHeadingDegrees(coords: Coords): number;
export declare function getHeadingRadians(coords: Coords): number;
export declare function getRadians(degrees: number): number;
export declare function getDegrees(radians: number): number;
export declare function generateRandomToken(): string;
export declare function getDistanceBetweenR2Vectors(V1: Coords, V2: Coords): number;
export declare function isOutOfBounds(coords: Coords, boundary: Boundary): boolean | string;
//# sourceMappingURL=utils.d.ts.map