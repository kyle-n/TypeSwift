const { build } = require('esbuild');
const fs = require('fs/promises');

build({
  entryPoints: ['src/index.ts'],
  sourcemap: true,
  bundle: true,
  target: 'es2015',
  outdir: 'lib'
}).then(() => {
  return fs.mkdir('_bundles');
}).then(() => {
  const copyBundle = fs.copyFile('lib/index.js', '_bundles/typeswift.js');
  const copyMap = fs.copyFile('lib/index.js.map', '_bundles/typeswift.js.map');
  const minify = build({
    entryPoints: ['lib/index.js'],
    minify: true,
    outfile: '_bundles/typeswift.min.js'
  });
  return Promise.all([copyBundle, copyMap, minify]);
}).catch(e => {
  process.stderr.write(e.stderr);
  process.exit(1);
});
