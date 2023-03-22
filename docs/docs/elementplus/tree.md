### tree

data 展示数据 

empty-text 

node-key唯一标识

props 配置选项

render-after-expand  默认true

load 加载子数据的方法 lazy才用

render-content 树节点内容区的渲染 ???

highlight-current 高亮选中节点 false

defult-expand-all 默认展开所有

expand-on-click-node 点击节点的时候展开或者收缩节点 true

check-on-click-node 点击的时候选中 默认false

auto-expand-parent 暂开子节点的时候是否自动展开父节点。true

default-expanded-keys 默认展开的节点key的数组 

show-checkbox 节点是否可被选择

check-strictly 显示复选的情况下、是否严格的遵循父子不互相关联的做法 默认 false

default-checked-keys 默认勾选的节点key的数组

current-node-key当前选中的节点

filter-node-method 对树节点进行筛选时执行的方法，返回false则表示这个节点会被隐藏

accordion 是否每次只打开一个同级树节点的暂开

indent  相邻级节点间的水平缩进，单位为像素

icon 自定义树节点的图表组件

lazy 是否懒加载子节点

draggalbe 是否开启拖拽节点的功能

allow-drag 判断节点是否能被拖拽 返回false不能拖动

<!-- allow-drop 拖拽时判定目标节点能否成为拖动目标位置，如果返回false。拖动节点不能被拖放到目标节点。 -->

### porps

label 

children

disabled

isLeaf

class

### 方法

filter

updataKeyChildren 为节点设置新数据 

getCheckedNodes 返回当前选中节点的数组

setCheckedNodes 设置目前选中的节点。

setChecked 设置节点是否被选中

getHalfCheckedNodes 节点可用被选中。



