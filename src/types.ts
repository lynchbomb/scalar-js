export interface IVector {
  val: Coords;
  heading: number;
  rotate: (deg: number) => this;
  update: (val: Coords | number) => this;
  add: (val: Coords | number) => this;
  scalar: (val: Coords | number) => this;
  multi: (val: Coords | number) => this;
  divide: (val: Coords | number) => this;
  limit: (val: Coords | number) => this;
  mag: number;
  magSq: number;
  unitVectorR2: number;
}

export interface IGenetics {
  curGeneration: [GeneticsItem];
  preGeneration: [GeneticsItem];
  count: number;
  cycleGeneration: (generation: [GeneticsItem]) => void;
  getScore: (vector: Coords, targetVector: Coords, originVector: Coords) => number;
  getProbability: (a: [number]) => number[];
}

export interface GeneticsItem {
  score: number;
  coords: Coords;
  probability: number;
}

export interface Coords {
  x: number;
  y: number;
}

export interface Clamped {
  x: boolean;
  y: boolean;
}

export interface Boundary {
  boundaryWidth: number;
  boundaryHeight: number;
  boundaryPadding: number;
}
