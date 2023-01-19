import { Vector } from './vector';
import type { Coords } from './types';
export declare function netForce(forces: Vector[]): Vector;
export declare function applyForce(mass: number, acc: Vector, force: Vector): Vector;
export declare function applyKinetics(mass: number, acc: Vector, forces: Vector[], velocity: Vector, maxVelocity?: Coords | number): Vector;
//# sourceMappingURL=physics.d.ts.map