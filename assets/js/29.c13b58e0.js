(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{302:function(n,t,l){"use strict";l.r(t);var v=l(14),_=Object(v.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("闭包的作用：")]),n._v(" "),t("ol",[t("li",[n._v("在外部访问函数内部的变量")]),n._v(" "),t("li",[n._v("让函数内的局部变量可以一直保存下去")]),n._v(" "),t("li",[n._v("模块化私有属性和公共属性")])]),n._v(" "),t("p",[n._v("闭包的原理：\n全局变量生存周期是永久，局部变量生存周期随着函数的调用介绍而销毁。\n闭包就是 在函数中定义且成为该函数内部返回的函数的自由变量 的变量，该变量不会随着外部函数调用结束而销毁。\n当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包。")]),n._v(" "),t("p",[n._v("闭包的缺点：占用内层空间 大量使用闭包会造成 栈溢出")]),n._v(" "),t("p",[n._v("由于闭包会一直占用内存空间，直到页面销毁，我们可以主动将已使用的闭包销毁：\n将闭包函数赋值为null 可以销毁闭包")])])}),[],!1,null,null,null);t.default=_.exports}}]);