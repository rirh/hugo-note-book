import{_ as a,o as e,c as s,a as n}from"./app.a5d386c5.js";const l=JSON.parse('{"title":"正文","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.打开Mac偏好设置 > 网络","slug":"_1-打开mac偏好设置-网络","link":"#_1-打开mac偏好设置-网络","children":[]},{"level":2,"title":"2.点击右下角添加按钮,并选择vpn","slug":"_2-点击右下角添加按钮-并选择vpn","link":"#_2-点击右下角添加按钮-并选择vpn","children":[]},{"level":2,"title":"选择VPN类型：L2TP/IPSec，输入任意服务器名称，单击创建","slug":"选择vpn类型-l2tp-ipsec-输入任意服务器名称-单击创建","link":"#选择vpn类型-l2tp-ipsec-输入任意服务器名称-单击创建","children":[]},{"level":2,"title":"输入服务器地址 账户名称，先点击应用，然后点击连接","slug":"输入服务器地址-账户名称-先点击应用-然后点击连接","link":"#输入服务器地址-账户名称-先点击应用-然后点击连接","children":[]},{"level":2,"title":"输入密码点击好","slug":"输入密码点击好","link":"#输入密码点击好","children":[]},{"level":2,"title":"一般来说会有这样的错误","slug":"一般来说会有这样的错误","link":"#一般来说会有这样的错误","children":[]},{"level":2,"title":"如下操作","slug":"如下操作","link":"#如下操作","children":[]},{"level":2,"title":"做完上面的这些步骤返回偏好设置再进行连接就可以正常使用了","slug":"做完上面的这些步骤返回偏好设置再进行连接就可以正常使用了","link":"#做完上面的这些步骤返回偏好设置再进行连接就可以正常使用了","children":[]}],"relativePath":"note/vpn.md"}'),c={name:"note/vpn.md"},p=[n('<h1 id="正文" tabindex="-1">正文 <a class="header-anchor" href="#正文" aria-hidden="true">#</a></h1><h2 id="_1-打开mac偏好设置-网络" tabindex="-1">1.打开Mac偏好设置 &gt; 网络 <a class="header-anchor" href="#_1-打开mac偏好设置-网络" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190214142801606.png" alt="在这里插入图片描述"></p><h2 id="_2-点击右下角添加按钮-并选择vpn" tabindex="-1"><strong>2.点击右下角添加按钮,并选择vpn</strong> <a class="header-anchor" href="#_2-点击右下角添加按钮-并选择vpn" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190214142908348.png" alt="在这里插入图片描述"></p><h2 id="选择vpn类型-l2tp-ipsec-输入任意服务器名称-单击创建" tabindex="-1">选择VPN类型：L2TP/IPSec，输入任意服务器名称，单击创建 <a class="header-anchor" href="#选择vpn类型-l2tp-ipsec-输入任意服务器名称-单击创建" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190214142955148.png" alt="在这里插入图片描述"></p><h2 id="输入服务器地址-账户名称-先点击应用-然后点击连接" tabindex="-1">输入服务器地址 账户名称，先点击应用，然后点击连接 <a class="header-anchor" href="#输入服务器地址-账户名称-先点击应用-然后点击连接" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190214143828561.png" alt="在这里插入图片描述"></p><h2 id="输入密码点击好" tabindex="-1">输入密码点击好 <a class="header-anchor" href="#输入密码点击好" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190214143907162.png" alt="在这里插入图片描述"></p><h2 id="一般来说会有这样的错误" tabindex="-1">一般来说会有这样的错误 <a class="header-anchor" href="#一般来说会有这样的错误" aria-hidden="true">#</a></h2><blockquote><p>IPSec 共享密钥”丢失。请验证您的设置并尝试重新连接。</p></blockquote><h2 id="如下操作" tabindex="-1">如下操作 <a class="header-anchor" href="#如下操作" aria-hidden="true">#</a></h2><blockquote><p>打开终端</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> cd </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ppp</span></span>\n<span class="line"><span style="color:#A6ACCD;"> sudo touch options</span></span>\n<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//输入密码</span></span>\n<span class="line"><span style="color:#A6ACCD;"> sudo vim options</span></span>\n<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 在vim中通过输入i 进入插入模式。粘贴下面内容后按(“esc“ ＋ “：“ 退出，&quot;wq&quot;保存)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">plugin L2TP</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ppp</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">l2tpnoipsec</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span></code></pre></div><h2 id="做完上面的这些步骤返回偏好设置再进行连接就可以正常使用了" tabindex="-1">做完上面的这些步骤返回偏好设置再进行连接就可以正常使用了 <a class="header-anchor" href="#做完上面的这些步骤返回偏好设置再进行连接就可以正常使用了" aria-hidden="true">#</a></h2><p>（2019-08-15） （ps：有的连接上以后还是访问不了 并且ping出现只有第一条有数据 就超时了） 这个可能是DNS污染问题，请按如下步骤操作:</p><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190815113037702.png" alt="在这里插入图片描述"><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190815113149465.png" alt="在这里插入图片描述"><strong>1.选择你所用的vpn进入高级选项</strong><strong>2.选择DNS添加两条ip <code>8.8.4.4</code> 和 <code>208.67.222.222</code></strong><br><strong>3.打开终端输入命令<code>dscacheutil -flushcache</code></strong></p><p>重新链接一下就可以使用了</p>',20)];const t=a(c,[["render",function(a,n,l,c,t,i){return e(),s("div",null,p)}]]);export{l as __pageData,t as default};