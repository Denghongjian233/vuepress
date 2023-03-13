### 手写call apply bind
  ```js
Function.prototype.MyCall = function(context,...arg){
  if(this === Function.prototype){
    return undefined
  }
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let result = context[fn](...arg)
  delete context[fn]
  return result
}
Function.prototype.MyAplly = function(context,args){
  if(this === Function.prototype){
    return undefined
  }
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let result 
  if(Array.isArray(args)){
    result = context[fn](...args)
  }else{
    result = context[fn]()
  }
  delete context[fn]
  return result
}
Function.prototype.MyBind = function(context){
  if(this === Function.prototype){
    return undefined
  }
  const _this = this
  return function F(...args2){
    return _this.call(context,...args2)
  }
}
  ```