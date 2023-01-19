"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyKinetics = exports.applyForce = exports.netForce = void 0;
const vector_1 = require("./vector");
function netForce(forces) {
    // creates a new zeroed vector
    let _f = new vector_1.Vector();
    // every force is additive to _f
    forces.forEach((force) => {
        _f.add(force.val);
    });
    // returns forces sum vector
    return _f;
    // this.applyForce(_f);
}
exports.netForce = netForce;
// a force if a vector that causes an object with mass to accelerate
// Net Force = Mass * Acceleration\
function applyForce(mass, acc, force) {
    // zero out acceleration between frames
    acc.multi(0);
    // acceleration = net force / mass
    force.divide(mass);
    acc.add(force.val);
    return acc;
}
exports.applyForce = applyForce;
function applyKinetics(mass, acc, forces, velocity, maxVelocity) {
    applyForce(mass, acc, netForce(forces));
    // TL;DR Newtons three laws of Motion
    // 1. an object at rest stays at rest and an object in motion stays in motion
    velocity.add(acc.val);
    if (maxVelocity) {
        velocity.limit(maxVelocity);
    }
    return velocity;
}
exports.applyKinetics = applyKinetics;
//# sourceMappingURL=physics.js.map