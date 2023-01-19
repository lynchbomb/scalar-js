"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(vector, dimensions = 2) {
        if (!vector) {
            this.val = dimensions < 3 ? this.createVectorR2() : this.createVectorR3();
        }
        else {
            this.val = vector;
        }
    }
    rotate(deg) {
        let newHeading = this.heading + deg;
        let mag = this.mag;
        this.val.x = Math.cos(newHeading) * mag;
        this.val.y = Math.sin(newHeading) * mag;
        return this;
    }
    update(val) {
        if (typeof val === 'number') {
            this.val.x = this.val.y = val;
        }
        else {
            this.val.x = val.x;
            this.val.y = val.y;
        }
        return this;
    }
    add(val) {
        if (typeof val === 'number') {
            this.val.x += val;
            this.val.y += val;
        }
        else {
            this.val.x += val.x;
            this.val.y += val.y;
        }
        return this;
    }
    scalar(val) {
        if (typeof val === 'number') {
            this.val.x *= val;
            this.val.y *= val;
        }
        else {
            this.val.x *= val.x;
            this.val.y *= val.y;
        }
        return this;
    }
    multi(val) {
        if (typeof val === 'number') {
            this.val.x *= val;
            this.val.y *= val;
        }
        else {
            this.val.x *= val.x;
            this.val.y *= val.y;
        }
        return this;
    }
    divide(val) {
        if (typeof val === 'number') {
            this.val.x /= val;
            this.val.y /= val;
        }
        else {
            this.val.x /= val.x;
            this.val.y /= val.y;
        }
        return this;
    }
    limit(val) {
        if (typeof val === 'number') {
            this.val.x = this.val.x > val ? val : this.val.x;
            this.val.y = this.val.y > val ? val : this.val.y;
        }
        else {
            this.val.x = this.val.x > val.x ? val.x : this.val.x;
            this.val.y = this.val.y > val.y ? val.y : this.val.y;
        }
        return this;
    }
    get heading() {
        return Math.atan2(this.val.y, this.val.x);
    }
    get mag() {
        return Math.sqrt(this.magSq);
    }
    get magSq() {
        return (this.val.x * this.val.x) + (this.val.y * this.val.y);
    }
    get unitVectorR2() {
        return Math.sqrt(Math.pow(this.val.x, 2) + Math.pow(this.val.y, 2));
    }
    createVectorR2(x = 0, y = 0) {
        return Object.create({ x, y });
    }
    createVectorR3(x = 0, y = 0, z = 0) {
        return Object.create({ x, y, z });
    }
}
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map