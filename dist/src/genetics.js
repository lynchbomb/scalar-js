"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genetics = void 0;
const utils_1 = require("./utils");
class Genetics {
    constructor(curGeneration) {
        this.count = 0;
        this.preGeneration = curGeneration;
        this.curGeneration = curGeneration;
    }
    // bumps the current generation to previous
    // and adds the new generation to current
    cycleGeneration(generation) {
        this.preGeneration = this.curGeneration;
        this.curGeneration = generation;
    }
    // TODO: confirm this math checks out
    getScore(vector, targetVector, originVector) {
        let _originFromTarget = (0, utils_1.getDistanceBetweenR2Vectors)(originVector, targetVector);
        let _unitFromTarget = (0, utils_1.getDistanceBetweenR2Vectors)(vector, targetVector);
        return (1 - (_unitFromTarget / _originFromTarget)) * (100);
    }
    // to be run every time a new population is generated
    // the goal being the highest probablity will go to
    // parents with the highest score all while still
    // allowing generations from lower scoring parents
    getProbability(a) {
        let sum = a.reduce((n1, n2) => n1 + n2);
        let prob = [];
        a.forEach((score) => {
            prob.push(score / sum * 100);
        });
        return prob;
    }
}
exports.Genetics = Genetics;
//# sourceMappingURL=genetics.js.map