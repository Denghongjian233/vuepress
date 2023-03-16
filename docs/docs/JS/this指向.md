<!--
 * @Author: dhj 17613071153@163.com
 * @Date: 2023-03-16 09:56:26
 * @LastEditors: dhj 17613071153@163.com
 * @LastEditTime: 2023-03-16 09:58:00
 * @FilePath: \vuepress\docs\docs\JS\this指向.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
谁调用指向谁

箭头函数没有this，它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值

call、apply、bind