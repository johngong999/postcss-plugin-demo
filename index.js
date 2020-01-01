let postcss = require('postcss')
/* eslint-disable */
module.exports = postcss.plugin('postcss-demo', (opts = { }) => {
  // Work with options here
  return (root, result) => {
    root.walkComments(comment => {
      comment.remove()
    })
    // Transform CSS AST here
    root.walkRules(rule => {
      // We'll put more code here in a moment…
      rule.walkDecls('lines', decl => {
        // We work with each `decl` object here.

        let { value } = decl;
        let display = postcss.decl({prop: 'display', value: '-webkit-box'});
        let overflow = postcss.decl({prop: 'overflow', value: 'hidden'});
        let clamp = postcss.decl({prop: '-webkit-line-clamp', value});
        let orient = postcss.decl({prop: '-webkit-box-orient', value: 'vertical'});
        decl.replaceWith([display,overflow,clamp, orient]);
      });
    });
  }
})
