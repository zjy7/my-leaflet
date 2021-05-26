module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'entry', // 添加的内容
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
}
