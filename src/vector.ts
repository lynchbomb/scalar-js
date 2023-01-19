import type { Coords, IVector } from './types';

export class Vector implements IVector {
  public val: Coords;

  constructor(vector?: Coords, dimensions: number = 2) {
    if (!vector) {
      this.val = dimensions < 3 ? this.createVectorR2() : this.createVectorR3();
    } else {
      this.val = vector;
    }
  }

  public rotate(deg: number): this {
    let newHeading = this.heading + deg;
    let mag = this.mag;
    this.val.x = Math.cos(newHeading) * mag;
    this.val.y = Math.sin(newHeading) * mag;

    return this;
  }

  public update(val: Coords | number): this {
    if (typeof val === 'number') {
      this.val.x = this.val.y = val;
    } else {
      this.val.x = val.x;
      this.val.y = val.y;
    }

    return this;
  }

  public add(val: Coords | number): this {
    if (typeof val === 'number') {
      this.val.x += val;
      this.val.y += val;
    } else {
      this.val.x += val.x;
      this.val.y += val.y;
    }

    return this;
  }

  public scalar(val: Coords | number): this {
    if (typeof val === 'number') {
      this.val.x *= val;
      this.val.y *= val;
    } else {
      this.val.x *= val.x;
      this.val.y *= val.y;
    }

    return this;
  }

  public multi(val: Coords | number): this {
    if (typeof val === 'number') {
      this.val.x *= val;
      this.val.y *= val;
    } else {
      this.val.x *= val.x;
      this.val.y *= val.y;
    }

    return this;
  }

  public divide(val: Coords | number): this {
    if (typeof val === 'number') {
      this.val.x /= val;
      this.val.y /= val;
    } else {
      this.val.x /= val.x;
      this.val.y /= val.y;
    }

    return this;
  }

  public limit(val: Coords | number): this {
    if (typeof val === 'number') {
      this.val.x = this.val.x > val ? val : this.val.x;
      this.val.y = this.val.y > val ? val : this.val.y;
    } else {
      this.val.x = this.val.x > val.x ? val.x : this.val.x;
      this.val.y = this.val.y > val.y ? val.y : this.val.y;
    }

    return this;
  }

  public get heading(): number {
    return Math.atan2(this.val.y, this.val.x);
  }

  public get mag(): number {
    return Math.sqrt(this.magSq);
  }

  public get magSq(): number {
    return (this.val.x * this.val.x) + (this.val.y * this.val.y);
  }

  public get unitVectorR2(): number {
    return Math.sqrt(Math.pow(this.val.x, 2) + Math.pow(this.val.y, 2));
  }

  private createVectorR2(x: number = 0, y: number = 0): Coords {
    return Object.create({x, y});
  }

  private createVectorR3(x: number = 0, y: number = 0, z: number = 0) {
    return Object.create({x, y, z});
  }
}
