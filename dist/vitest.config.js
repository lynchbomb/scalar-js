"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
//eslint-disable-next-line import/no-default-export
exports.default = (0, config_1.defineConfig)({
    test: {
        testTimeout: 100000,
        hookTimeout: 50000,
        watchExclude: ['package.json', '**/fixtures/**'],
        threads: false,
    },
});
//# sourceMappingURL=vitest.config.js.map