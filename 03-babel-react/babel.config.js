// CommonJS
// - require()
// - module.exports

const babelConfig = {
  comments: false,
  presets: [
    ['@babel/preset-env', {
      modules: false
    }],
    '@babel/preset-react'
  ]
};

module.exports = babelConfig;