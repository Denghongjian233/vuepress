
### 双向数据绑定的原理

vue采用的是数据劫持结合发布者订阅者模式的方式，通过Object.defineProperty（）来劫持各个属性的setter（发布），getter（订阅）。

在数据变动时发布消息给订阅者，触发相应的监听回调。

通过下标方式修改数组数据、或者给对象添加新属性。object.defineproperty不能拦截到这些操作。 vue内部通过重写函数的方式解决了这个问题。

Proxy相当于在目标对象之前架设一层“拦截”，外界对该对象的访问

都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

从而实现数据劫持，它可以完美监听到任何方式的数据改变，兼容性 他是ES6

主要通过Proxy对对象进行绑定监听处理，通过new Map对对象的属性操作进行处理，将要执行的函数匹配到存到对应的prop上面

通过每次的访问触发get方法，进行存方法的操作，通过修改触发set的方法，此时执行回调监听的函数，这样达到修改数据和视图的


### MVVM

软件架构设计模式 优化开发效率

Mvvm model view modelview

model代表数据模型，数据和业务逻辑都在model定义

view 代表ui视图

viewmodel负责监听model中的数据的改变并且控制视图的更新。处理用户交互操作

model与view并无直接联系，而是用过viewmodel来进行联系的，

moedl与viewmodel之间有着数据绑定的联系

所以model中的数据改变时会触发view层的刷新，view中由于用户操作而改变的数据也会在model中实现

这种模式实现了model和view的数据自动同步，因此开发者只需要专注于数据的维护操作就可。

### computed和watch

computed 缓存，依赖的数据改变 重新计算

只做计算不做其他操作。

不支持异步。

watch 不支持缓存，数据变化就执行。支持异步。

监听的数据必须是data中声明的，或者是父组件传递过来的props数据

有两个参数 immediate 组件加载立刻触发的回调函数

deep ：深度监听，数组中的对象发生辩护。

需要异步或者操作api

### slot 

默认插槽

具名插槽

作用域插槽 有数据传递 就用。

当子组件的vm实例化时，获取父组件传入的slot的内容，存放在vm&slot中，默认插槽是default。

### 过滤器

### 保存页面当前的状态

组件被卸载

localstorage、sessionstorage。组件即将销毁的生命周期中把当前组件的state通过json。string存储

路由，lingk组件中的prop 

组件不被卸载

要切换的组件作为子组件全屏渲染、父组件中正常存储页面状态。

还有就是keepalive

### 事件修饰符

.stop 冒泡

.prevent 默认行文

.capture 捕获

.self 触发自己

.once 只触发一次

### v-if 与v-show

### v-model

:value @input

作用在组件上

绑定value和事件

### data为什么是一个函数而不是对象

共享一个对象

状态污染。

根实例只有一个 不会污染

### keepalive

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

一旦使用keepalive包裹组件，此时mouted，created等钩子函数只会在第一次进入组件时调用，当再次切换回来时将不会调用。

此时如果我们还想在每次切换时做一些事情，就需要用到另外的周期函数，actived和deactived，这两个钩子函数只有被keepalive包裹后才会调用。

### 单向数据流 

子组件不能直接改变父组件的数据。

### mixin

minxin 使我们能为vue组件编写可插拔和可重用的功能

多个组件之间重用一组组件选项 生命周期 hook 方法

可以编写mixin 

### vue模板编译原理

template无法被浏览器解析并渲染，这不属于浏览器的标准。不是正确的html语法

将template转化为一个js函数、浏览器就可以执行这一个函数并渲染出对应的HTML元素，让视图拍起来

解析parse 优化optimiez 生成generate render

### ssr

服务端渲染、vue在客户端吧标签渲染成html的工作放在服务端完成，然后html直接返回给客户端

ssr的优势 

更好的seo

首屏加载速度更快。

ssr的缺点。

开发条件受到限制，服务器渲染只支持beforecreate和create两个钩子

更多的服务器负载 

服务端如果有库 需要nodejs环境。

### vue 性能优化

v-if 和 v-for 

keepalive

key保持唯一

路由懒加载、异步组件。图片懒加载 

防抖节流。

第三模块按需载入。

服务端渲染

2. 打包优化

压缩代码

treeshaking

cdn加载第三方模块

多线程打包

3. 用户体验 
骨架屏




