import { Vector } from './vector';
import type { Coords } from './types';

export function netForce(forces: Vector[]): Vector {
  // creates a new zeroed vector
  let _f = new Vector();
  // every force is additive to _f
  forces.forEach((force) => {
    _f.add(force.val);
  });
  // returns forces sum vector
  return _f;
  // this.applyForce(_f);
}

// a force if a vector that causes an object with mass to accelerate
// Net Force = Mass * Acceleration\
export function applyForce(mass: number, acc: Vector, force: Vector): Vector {
  // zero out acceleration between frames
  acc.multi(0);
  // acceleration = net force / mass
  force.divide(mass);
  acc.add(force.val);

  return acc;
}

export function applyKinetics(mass: number, acc: Vector, forces: Vector[], velocity: Vector, maxVelocity?: Coords | number): Vector {
  applyForce(mass, acc, netForce(forces));

  // TL;DR Newtons three laws of Motion
  // 1. an object at rest stays at rest and an object in motion stays in motion
  velocity.add(acc.val);

  if (maxVelocity) {
    velocity.limit(maxVelocity);
  }

  return velocity;
}
