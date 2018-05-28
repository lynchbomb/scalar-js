const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const Rollup = require('broccoli-rollup');
const path = require('path');
const typescript = require('broccoli-typescript-compiler').typescript;
const buble = require('rollup-plugin-buble');
const fs = require('fs');

const SOURCE_MAPPING_DATA_URL = '//# sourceMap' + 'pingURL=data:application/json;base64,';

module.exports = function () {
  const src = new Funnel(__dirname + '/src', {
    destDir: 'src'
  });

  const compiled = typescript(src, {
    tsconfig: {
      compilerOptions: {
        sourceMap: true,
        declaration: true
      }
    }
  });

  const scalarjs = new Rollup(compiled, {
    rollup: {
      input: 'src/index.js',
      output: {
        sourcemap: true,
        format: 'es',
        file: 'es6/scalar-js.js'
      },
    plugins: [
        loadWithInlineMap()
      ]
    }
  });

  return scalarjs;
}

function loadWithInlineMap() {
  return {
    load: function (id) {
      var code = fs.readFileSync(id, 'utf8');
      var result = {
        code: code,
        map: null
      };
      var index = code.lastIndexOf(SOURCE_MAPPING_DATA_URL);
      if (index === -1) {
        return result;
      }
      result.code = code.slice(0, index);
      result.map = parseSourceMap(code.slice(index + SOURCE_MAPPING_DATA_URL.length));
      result.file = id;
      return result;
    }
  };
}

function parseSourceMap(base64) {
  return JSON.parse(new Buffer(base64, 'base64').toString('utf8'));
}
