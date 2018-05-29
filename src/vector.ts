import { IClamped, ICoords } from './interfaces/i-coords';

export default class Vector {
  public val: ICoords;
  private isClamped: IClamped = {
    x: false,
    y: false
  };

  constructor(vector: ICoords | null = null, dimensions: number = 2) {
    if (!vector) {
      this.val = dimensions < 3 ? this.createVectorR2() : this.createVectorR3();
    } else {
      this.val = vector;
    }
  }
  public heading(): number {
    return Math.atan2(this.val.y, this.val.x);
  }
  public rotate(a: number) {
    let newHeading = this.heading() + a;
    let mag = this.mag();
    this.val.x = Math.cos(newHeading) * mag;
    this.val.y = Math.sin(newHeading) * mag;
  }
  public update(vector: ICoords) {
    this.val.x = vector.x;
    this.val.y = vector.y;
  }
  public add(vector: ICoords) {
    this.val.x = this.val.x + vector.x;
    this.val.y = this.val.y + vector.y;
  }
  public scalar(int: number) {
    this.val.x *= int;
    this.val.y *= int;
  }
  public multi(vector: ICoords) {
    this.val.x = this.val.x * vector.x;
    this.val.y = this.val.y * vector.y;
  }
  public multiFlat(int: number) {
    this.val.x = this.val.x * int;
    this.val.y = this.val.y * int;
  }
  public divide(vector: ICoords) {
    this.val.x = this.val.x / vector.x;
    this.val.y = this.val.y / vector.y;
  }
  public divideFlat(int: number) {
    this.val.x = this.val.x / int;
    this.val.y = this.val.y / int;
  }
  public limit(limit: number) {
    this.val.x = this.val.x > limit ? limit : this.val.x;
    this.val.y = this.val.y > limit ? limit : this.val.y;
  }
  public clamp(int: number) {
    this.isClamped.x = this.val.x >= int ? true : false;
    this.isClamped.y = this.val.y >= int ? true : false;
    this.val.x = this.isClamped.x ? int : this.val.x;
    this.val.y = this.isClamped.y ? int : this.val.y;
  }
  public mag() {
    return Math.sqrt(this.magSq());
  }
  public magSq(): number {
    return this.val.x * this.val.x + this.val.y * this.val.y;
  }
  private createVectorR2(x: number = 0, y: number = 0): ICoords {
    return Object.create({x, y});
  }
  private createVectorR3(x: number = 0, y: number = 0, z: number = 0) {
    return Object.create({x, y, z});
  }
}
