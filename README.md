# PostCSS Demo

[PostCSS] plugin demo for study.

[PostCSS]: https://github.com/postcss/postcss

该插件能去除css文件中的所有注释，并实现了自定义属性lines，用于多行截断。
```css
.foo {
    height: 20px;
    lines: 1;/* 这是一个自定义属性 */
}
```

```css
.foo {
    height: 20px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-demo'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
