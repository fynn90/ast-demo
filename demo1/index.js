/*
 * @Author: Fan
 * @Date: 2020-12-04 14:19:00
 * @description: 
 */
const recast = require('recast')

const code = `
  function add(a,b) {
    return a+b;
  }
`
const ast = recast.parse(code);

const add = ast.program.body[0]

console.log(add.params[0])