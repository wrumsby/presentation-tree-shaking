/* eslint-env node */
import { readFileSync } from 'fs';
import babel from 'rollup-plugin-babel';

const getBabelOptions = (format = 'esm') => {
  if (format === 'cjs') {
    const data = readFileSync(`${__dirname}/build/.cjs.babelrc`);

    return JSON.parse(data);
  }

  const data = readFileSync(`${__dirname}/build/.esm.babelrc`);

  return JSON.parse(data);
};

module.exports = commandLineArgs => {
  const babelOptions = getBabelOptions(commandLineArgs.format);

  return ({
    input: 'src/index.js',
    output: {
      dir: 'dist',
      exports: 'named'
    },
    plugins: [babel(babelOptions)],
    external: []
  });
};
