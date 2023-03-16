第二种方式是 webSocket，服务端引入第三方插件 ws 创建 socket 服务，

客户端使用 H5 新增 API new WebSocket 连接服务端，通过 send 方法发送数据，onmessage 方法接收数据