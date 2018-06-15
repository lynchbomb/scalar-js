/* globals module, require */
'use strict';

const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const Rollup = require('broccoli-rollup');
const path = require('path');
const typescript = require('broccoli-typescript-compiler').default;
const buble = require('rollup-plugin-buble');
const fs = require('fs');
const SOURCE_MAPPING_DATA_URL = '//# sourceMap' + 'pingURL=data:application/json;base64,';

module.exports = function(app) {
  const src = new MergeTrees([
    new Funnel(__dirname + '/src', {
      destDir: 'src'
    }),
    new Funnel(__dirname + '/tests', {
      destDir: 'tests'
    })
  ]);

  const qunit = new Funnel(path.dirname(require.resolve('qunit')), {
    annotation: 'tests/qunit.{js,css}',
    destDir: 'tests',
    files: ['qunit.css', 'qunit.js']
  });

  const loader = new Funnel(path.dirname(require.resolve('loader.js')), {
    annotation: 'tests/loader.js',
    destDir: 'tests',
    files: ['loader.js']
  });

  const tests = new Funnel(__dirname + '/tests', {
    destDir: 'tests',
    files: ['index.html']
  });

  const compiled = typescript(src, {
    throwOnError: process.env.EMBER_ENV === 'production',
  });

  const compiledDeclarations = typescript('src', {
    tsconfig: {
      compilerOptions: {
        "declaration": true,
      }
    }
  });

  const es6Tree = typescript(compiled, {
    annotation: 'es6tree',
    rollup: {
      input: 'src/index.js',
      output: [{
        file: 'es6/scalar.js',
        format: 'es',
        sourcemap: true,
        exports: 'named'
      }],
      plugins: [
        loadWithInlineMap()
      ]
    }
  });


  const amdNamed = new Rollup(compiled, {
    rollup: {
      input: 'src/index.js',
      output: [{
        file: 'named-amd/scalar.js',
        exports: 'named',
        format: 'amd',
        amd: { id: 'scalar' },
        sourcemap: true
      }, {
        file: 'scalar.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      }],
      plugins: [
        loadWithInlineMap(),
        buble()
      ]
    }
  });

  const amdTests = new Rollup(compiled, {
    annotation: 'named-amd/tests.js',
    rollup: {
      input: 'tests/index.js',
      external: ['scalar'],
      output: [{
        file: 'named-amd/tests.js',
        format: 'amd',
        amd: { id: 'scalar-tests' },
        sourcemap: true,
        exports: 'named'
      }],
      plugins: [
        loadWithInlineMap(),
        buble()
      ]
    }
  });

  return new MergeTrees([
    es6Tree,
    compiledDeclarations,
    amdNamed,
    amdTests,
    qunit,
    loader,
    tests
  ], {
    annotation: 'dist'
  });
};

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
