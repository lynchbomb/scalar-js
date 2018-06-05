import { ICoords, IClamped } from './i-coords';
import Vector from '../vector';

export interface IVector {
  val: ICoords;
  heading: number;
  rotate: (deg: number) => this;
  update: (val: ICoords | number) => this;
  add: (val: ICoords | number) => this;
  scalar: (val: ICoords | number) => this;
  multi: (val: ICoords | number) => this;
  divide: (val: ICoords | number) => this;
  limit: (val: ICoords | number) => this;
  mag: number;
  magSq: number;
  unitVectorR2: number;
}
