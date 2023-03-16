<!--
 * @Author: dhj 17613071153@163.com
 * @Date: 2023-03-16 17:57:03
 * @LastEditors: dhj 17613071153@163.com
 * @LastEditTime: 2023-03-16 18:51:56
 * @FilePath: \vuepress\docs\docs\kuangjjia\vue3与虚拟dom.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 对虚拟dom的理解

本质上说、虚拟dom就是js对象，通过对象的方式来表示dom结构。

将页面的状态抽象为JS对象的形式，配合不同的渲染工具，使跨平台渲染成为可能。

虚拟DOM是对DOM的抽象，这个对象是更加轻量级的对DOM的描述。他设计的最初目的，就是更好的跨平台，

比如nodejs就没有dom，要想实现ssr，那么一个方式就是借助虚拟dom，因为虚拟dom本身就是js对象，

在代码渲染到页面之前，vue会吧代码转化为一个对象。以对象的形式来描述真实DOM结构、最终渲染到页面。

在每次数据发生改变前，虚拟DOM都会缓存一份，变化之时，现在的虚拟DOM会与换产的虚拟dom精心比较。

在vue内部封装了diff算法，通过这个算法来进行比较，渲染时修改改变的变化，原先没发生改变的通过原来的数据进行渲染。

操作dom性能差

### diff算法

1. 判断是否为同一节点、删除节点重新创建

2. patchvnode 判断如何对该节点的子节点进行处理。

3. 如果都有、updatachildren 判断如何对这些新老节点的子节点进行操作。

4. 匹配时 找到相同的子节点，递归

diff中，只对同层的子节点比较。放弃跨级的节点比较。时间复杂度从03到0n 

新旧children都为多个子节点时才需要核心的diff算法进行同层级的比较。


