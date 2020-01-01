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
        decl.replaceWith(`
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: ${value};
          -webkit-box-orient: vertical;
        `)

      });
    });
  }
})
