(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{309:function(v,_,t){"use strict";t.r(_);var l=t(14),p=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("ol",[_("li",[v._v("DNS协议的概念")])]),v._v(" "),_("p",[v._v("domain name system的缩写，提供的是一种主机名到IP地址的转换")]),v._v(" "),_("p",[v._v("由分层的DNS服务器组成的分布式数据库，是定义了主机如何查询这个分布式数据库的方式的应用协议。")]),v._v(" "),_("p",[v._v("能够让人更方便的访问互联网，不用去记住能够被机器直接读取的IP数串。")]),v._v(" "),_("p",[v._v("作用：将域名解析为IP地址，客户端向DNS服务器发送域名查询请求，DNS服务告知客户机web服务器的IP地址。")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("DNS同时使用tcp和udp协议")])]),v._v(" "),_("p",[v._v("dns占用53号端口、同时使用Tcp和udp协议。")]),v._v(" "),_("ul",[_("li",[v._v("在区域传输的时候使用TCP协议")])]),v._v(" "),_("p",[v._v("辅域名服务器会定时向主域名服务器进行查询以便了解数据是否有变动。如有变动、会执行一次区域传送、进行数据同步。")]),v._v(" "),_("p",[v._v("区域传送使用TCP而不是UDP，因为数据同步传送的数据量比一个请求应答的数据量多的多")]),v._v(" "),_("p",[v._v("TCP是一种可靠连接，保证了数据的准确性")]),v._v(" "),_("ul",[_("li",[v._v("在域名解析的时候使用UDP协议")])]),v._v(" "),_("p",[v._v("客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。不用经过三次握手，这样DNS服务器负载更低，响应更快。")]),v._v(" "),_("p",[v._v("理论上说，客户端也可以指定向DNS服务器查询时用TCP，但事实上，很多DNS服务器进行配置的时候，仅支持UDP查询包。")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("DNS完整查询过程")])]),v._v(" "),_("p",[v._v("解析域名过程")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("浏览器的缓存查找对应的IP地址，找到直接返回。")])]),v._v(" "),_("li",[_("p",[v._v("请求发送给本地的DNS服务器，本地域名服务器缓存中查询，")])]),v._v(" "),_("li",[_("p",[v._v("本地DNSfuwqi  根域名服务器 返回一个所查询域的顶级域名服务器地址，")])]),v._v(" "),_("li",[_("p",[v._v("顶级域名服务器发送请求 接受请求的服务器会查询自己的缓存。有记录-返回，没有记录 返回下一级的权威域名服务器的地址")])]),v._v(" "),_("li",[_("p",[v._v("DNS服务器将返回的结果保存在缓存中，便于下次使用")])]),v._v(" "),_("li",[_("p",[v._v("本地DNS服务器将返回结果返回给浏览器")])])])])}),[],!1,null,null,null);_.default=p.exports}}]);