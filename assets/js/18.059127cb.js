(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(t,s,i){"use strict";i.r(s);var n=i(14),r=Object(n.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("原理：随着滚轮滚动，底部的图片会被不断地加载，从而显示在页面上，按需加载，当页面需要显示图片的时候才进行加载，否则不加载")]),this._v(" "),t("ol",[t("li",[this._v("页面加载完成时记录每个img标签的src值的字符串，")]),this._v(" "),t("li",[this._v("用鼠标滚轮判断图片是否出现在屏幕，如果是，则把记录的src值赋值给src属性")]),this._v(" "),t("li",[this._v("然后让image的src来发起请求，获取对应的图片放置到DOM树的这个位置上，从而实现图片的页面渲染！\n于是就可以知道，当进入页面的时候，其实我们已经把所有的图片的这个地址信息拿到了，图片懒加载的作用就是让这个图片的src按需发起请求，获取图片。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);