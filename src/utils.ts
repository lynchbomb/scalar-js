import { IBoundary, ICoords } from './interfaces/i-coords';
import { IVector } from './interfaces/i-vector';
import Vector from './vector';

export function generateMatrix(rows: number, columns: number, fillWith: any = 0) {
  return new Array(rows).fill(fillWith).map(() => new Array(columns).fill(fillWith));
}

export function randomIntBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * (9999999 - 0o0)).toString(16);
}

export function getHeadingDegrees(coords: ICoords): number {
  return Math.atan2(coords.y, coords.x) * 180 / Math.PI;
}

export function getHeadingRadians(coords: ICoords): number {
  return Math.atan2(coords.y, coords.x);
}

export function getRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function getDegrees(radians: number): number {
  return radians * (180 / Math.PI);
}

export function generateRandomToken(): string {
  return Math.floor(Math.random() * (9999999 - 0o0)).toString(16);
}

export function getDistanceBetweenR2Vectors(V1: ICoords, V2: ICoords) {
  let _deltaV: ICoords = {
    x: V1.x - V2.x,
    y: V1.y - V2.y
  };

  return Math.sqrt(Math.pow(_deltaV.x, 2) + Math.pow(_deltaV.y, 2));
}

export function isOutOfBounds(coords: ICoords, boundary: IBoundary ): boolean | string {
  let { x, y } = coords;
  let { boundaryHeight, boundaryWidth, boundaryPadding } = boundary;

  // let isAbove = () => {
  //   return (y < 0) ? 'isAbove' : false;
  // };
  // let isRight = () => {
  //   return (x > boundaryWidth + boundaryPadding) ? 'isRight' : false;
  // };
  // let isBelow = () => {
  //   return (y > boundaryHeight + boundaryPadding) ? 'isBelow' : false;
  // };
  // let isLeft = () => {
  //   return (x < 0) ? 'isLeft' : false;
  // };

  // return isAbove() || isRight() || isBelow() || isLeft();

  // above is for testing and below for performance
  // in relation to viewport
  // above, right, below, left
  return (y < 0) || (x > boundaryWidth + boundaryPadding) || (y > boundaryHeight + boundaryPadding) || (x < 0);
}
