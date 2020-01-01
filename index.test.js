let postcss = require('postcss')
let fs = require('fs')

let plugin = require('./')
/* eslint-disable */

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

// /* Write tests here

it('does something', async () => {
  let inputcss = fs.readFileSync('./test.css');
  let outputcss = fs.readFileSync('./output.css').toString();

  await run(inputcss, outputcss, { })
})

// */
