import {
  getDistanceBetweenR2Vectors
} from './utils';
import type { GeneticsItem, IGenetics, Coords } from './types';

export class Genetics implements IGenetics {
  public curGeneration: [GeneticsItem];
  public preGeneration: [GeneticsItem];
  public count: number = 0;

  constructor(curGeneration: [GeneticsItem]) {
    this.preGeneration = curGeneration;
    this.curGeneration = curGeneration;
  }

  // bumps the current generation to previous
  // and adds the new generation to current
  public cycleGeneration(generation: [GeneticsItem]): void {
    this.preGeneration = this.curGeneration;
    this.curGeneration = generation;
  }

  // TODO: confirm this math checks out
  public getScore(vector: Coords, targetVector: Coords, originVector: Coords): number {
    let _originFromTarget = getDistanceBetweenR2Vectors(originVector, targetVector);
    let _unitFromTarget = getDistanceBetweenR2Vectors(vector, targetVector);

    return (1 - (_unitFromTarget / _originFromTarget)) * (100);
  }

  // to be run every time a new population is generated
  // the goal being the highest probablity will go to
  // parents with the highest score all while still
  // allowing generations from lower scoring parents
  public getProbability(a: [number]): number[] {
    let sum: number = a.reduce((n1, n2) => n1 + n2);
    let prob: number[] = [];

    a.forEach((score) => {
      prob.push(score / sum * 100);
    });

    return prob;
  }
}
