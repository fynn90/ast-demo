/*
 * @Author: Fan
 * @Date: 2020-12-04 16:37:01
 * @description: 
 */
const recast  = require('recast')

recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function({node}) {
        printSource(node) // 查看源码
        console.log(node) // 查看AST对象
        return false
      }
    });
});