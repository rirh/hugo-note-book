import{_ as s,j as a,k as n,S as l}from"./chunks/framework.2ff57350.js";const t=JSON.parse('{"title":"包管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"note/npm.md","filePath":"note/npm.md"}'),e={name:"note/npm.md"},p=[l('<h1 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h1><p>本文对mac上npm开发的一些使用和配置分享， 假定阅读者已经有一定shell基础和前端工作流的知识。</p><h3 id="pack-管理器-brew" tabindex="-1">Pack 管理器 <a href="http://brew.sh/%20%20" target="_blank" rel="noreferrer">brew</a> <a class="header-anchor" href="#pack-管理器-brew" aria-label="Permalink to &quot;Pack 管理器  [brew](http://brew.sh/%20%20)&quot;">​</a></h3><h4 id="安装" tabindex="-1">安装： <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装：&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/usr/bin/ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">注释</th></tr></thead><tbody><tr><td style="text-align:left;"><code>brew –help</code></td><td style="text-align:left;">查看brew的帮助</td></tr><tr><td style="text-align:left;"><code>brew install git</code></td><td style="text-align:left;">安装软件</td></tr><tr><td style="text-align:left;"><code>brew uninstall git</code></td><td style="text-align:left;">卸载软件</td></tr><tr><td style="text-align:left;"><code>brew search git</code></td><td style="text-align:left;">搜索软件</td></tr><tr><td style="text-align:left;"><code>brew list</code></td><td style="text-align:left;">显示已经安装软件列表</td></tr><tr><td style="text-align:left;"><code>brew update</code></td><td style="text-align:left;">更新软件，把所有的Formula目录更新，并且会对本机已经安装并有更新的软件用*标明。</td></tr><tr><td style="text-align:left;"><code>brew upgrade git</code></td><td style="text-align:left;">更新某具体软件</td></tr><tr><td style="text-align:left;"><code>brew info git</code></td><td style="text-align:left;">显示软件内容信息</td></tr><tr><td style="text-align:left;"><code>brew home</code></td><td style="text-align:left;">用浏览器打开网站</td></tr><tr><td style="text-align:left;"><code>brew deps</code></td><td style="text-align:left;">显示包依赖</td></tr><tr><td style="text-align:left;"><code>brew deps --installed --tree</code></td><td style="text-align:left;">显示包的依赖树</td></tr><tr><td style="text-align:left;"><code>brew cleanup git</code> <code>brew cleanup</code></td><td style="text-align:left;">删除程序，和upgrade一样，单个软件删除和所有程序老版删除。</td></tr><tr><td style="text-align:left;"><code>brew outdated</code></td><td style="text-align:left;">查看需要更新的已安装程序</td></tr></tbody></table><h2 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h2><h4 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew install nvm</span></span></code></pre></div><p>推荐安装安装nvm来管理Node版本；其次推荐brew来对node和npm版本进行管理。</p><p>默认终端是在 <code>~/.bash_profile</code>文件下配置以下环境变量：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># For NVM</span></span>\n<span class="line"><span style="color:#A6ACCD;">export NVM_DIR=~/.nvm</span></span>\n<span class="line"><span style="color:#A6ACCD;">source $(brew --prefix nvm)/nvm.sh</span></span></code></pre></div><p>如果mac中没有该文件执行以下操作：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd ~</span></span>\n<span class="line"><span style="color:#A6ACCD;"> touch .bash_profile</span></span>\n<span class="line"><span style="color:#A6ACCD;"> open -e .bash_profile</span></span>\n<span class="line"><span style="color:#A6ACCD;"> source .bash_profile</span></span>\n<span class="line"><span style="color:#A6ACCD;"> //查看配置是否成功</span></span>\n<span class="line"><span style="color:#A6ACCD;"> echo $PATH</span></span></code></pre></div><p>打开一个新的终端并输入nvm查看配置是否成功。</p><h2 id="nvm" tabindex="-1">NVM <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;NVM&quot;">​</a></h2><h4 id="列出远程服务器上所有的可用版本" tabindex="-1">列出远程服务器上所有的可用版本 <a class="header-anchor" href="#列出远程服务器上所有的可用版本" aria-label="Permalink to &quot;列出远程服务器上所有的可用版本&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm ls-remote</span></span>\n<span class="line"><span style="color:#A6ACCD;">##### 执行结果</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">   $ nvm ls-remote</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v0.1.14</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v0.1.15</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v0.1.16</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v0.1.17</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v0.1.18</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v0.1.19</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v12.6.0</span></span>\n<span class="line"><span style="color:#A6ACCD;">        v12.7.0</span></span></code></pre></div><h4 id="安装对应的版本" tabindex="-1">安装对应的版本 <a class="header-anchor" href="#安装对应的版本" aria-label="Permalink to &quot;安装对应的版本&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm install x.x.x</span></span></code></pre></div><h4 id="查看已安装的列表" tabindex="-1">查看已安装的列表 <a class="header-anchor" href="#查看已安装的列表" aria-label="Permalink to &quot;查看已安装的列表&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//显示已安装的版本列表</span></span>\n<span class="line"><span style="color:#A6ACCD;">nvm list;</span></span></code></pre></div><h4 id="执行结果" tabindex="-1">执行结果 <a class="header-anchor" href="#执行结果" aria-label="Permalink to &quot;执行结果&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ nvm list</span></span>\n<span class="line"><span style="color:#A6ACCD;">-&gt;       v4.1.0</span></span>\n<span class="line"><span style="color:#A6ACCD;">       v10.16.0</span></span>\n<span class="line"><span style="color:#A6ACCD;">default -&gt; v10.16.0</span></span>\n<span class="line"><span style="color:#A6ACCD;">node -&gt; stable (-&gt; v10.16.0) (default)</span></span>\n<span class="line"><span style="color:#A6ACCD;">stable -&gt; 10.16 (-&gt; v10.16.0) (default)</span></span>\n<span class="line"><span style="color:#A6ACCD;">iojs -&gt; N/A (default)</span></span>\n<span class="line"><span style="color:#A6ACCD;">unstable -&gt; N/A (default)</span></span>\n<span class="line"><span style="color:#A6ACCD;">lts/* -&gt; lts/dubnium (-&gt; v10.16.0)</span></span>\n<span class="line"><span style="color:#A6ACCD;">lts/argon -&gt; v4.9.1 (-&gt; N/A)</span></span>\n<span class="line"><span style="color:#A6ACCD;">lts/boron -&gt; v6.17.1 (-&gt; N/A)</span></span>\n<span class="line"><span style="color:#A6ACCD;">lts/carbon -&gt; v8.16.0 (-&gt; N/A)</span></span>\n<span class="line"><span style="color:#A6ACCD;">lts/dubnium -&gt; v10.16.0</span></span></code></pre></div><h4 id="切换node版本" tabindex="-1">切换node版本 <a class="header-anchor" href="#切换node版本" aria-label="Permalink to &quot;切换node版本&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm use v10.16.0</span></span></code></pre></div><h4 id="nvm常用命令" tabindex="-1">nvm常用命令 <a class="header-anchor" href="#nvm常用命令" aria-label="Permalink to &quot;nvm常用命令&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">注释</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nvm install</code></td><td style="text-align:left;">下载</td></tr><tr><td style="text-align:left;"><code>nvm use 版本号</code></td><td style="text-align:left;">切换版本</td></tr><tr><td style="text-align:left;"><code>nvm ls</code></td><td style="text-align:left;">已下载的版本</td></tr><tr><td style="text-align:left;"><code>nvm ls-remote</code></td><td style="text-align:left;">远程版本列表</td></tr><tr><td style="text-align:left;"><code>nvm alias default 版本</code></td><td style="text-align:left;">设置默认的版本</td></tr></tbody></table><p>由于天朝网络被墙，npm安装国外包就会变的很慢，有时需要安装某个在国外的包将会耗费大量的时间。为了解决这个问题有很多勤劳无私开发者，使用国内镜像解决！并且服务都是免费的。这个操作被称为换源。但是换源是配置操作，经常操作会导致多处配置不一致，有些时候需要多个文件修改。如果不熟悉架构原理的程序员很容易遗忘某一处导致npm无法正常工作。因此，推荐使用nrm源管理工具</p><h4 id="安装-2" tabindex="-1">安装 <a class="header-anchor" href="#安装-2" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g nrm</span></span></code></pre></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//列出可选的源</span></span>\n<span class="line"><span style="color:#A6ACCD;">nrm ls                                                                                                                                    </span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">* npm ---- https://registry.npmjs.org/</span></span>\n<span class="line"><span style="color:#A6ACCD;">  cnpm --- http://r.cnpmjs.org/</span></span>\n<span class="line"><span style="color:#A6ACCD;">  taobao - http://registry.npm.taobao.org/</span></span>\n<span class="line"><span style="color:#A6ACCD;">  eu ----- http://registry.npmjs.eu/</span></span>\n<span class="line"><span style="color:#A6ACCD;">  au ----- http://registry.npmjs.org.au/</span></span>\n<span class="line"><span style="color:#A6ACCD;">  sl ----- http://npm.strongloop.com/</span></span>\n<span class="line"><span style="color:#A6ACCD;">  nj ----- https://registry.nodejitsu.com/</span></span>\n<span class="line"><span style="color:#A6ACCD;">//带 * 的是当前使用的源，上面的输出表明当前源是官方源。</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//切换</span></span>\n<span class="line"><span style="color:#A6ACCD;">nrm use taobao </span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//你可以增加定制的源，特别适用于添加企业内部的私有源。私有源可以使用cnpmjs架设。</span></span>\n<span class="line"><span style="color:#A6ACCD;">nrm add  &lt;registry&gt; &lt;url&gt; [home]</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//删除源</span></span>\n<span class="line"><span style="color:#A6ACCD;">nrm del &lt;registry&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//测试源的响应时间</span></span>\n<span class="line"><span style="color:#A6ACCD;">//测试单个</span></span>\n<span class="line"><span style="color:#A6ACCD;">nrm test npm </span></span>\n<span class="line"><span style="color:#A6ACCD;">//测试所有</span></span>\n<span class="line"><span style="color:#A6ACCD;">nrm test   </span></span>\n<span class="line"><span style="color:#A6ACCD;">//注意，为了取得较准确的结果，可以考虑多次测试取平均值。</span></span></code></pre></div><h4 id="npm-常用命令" tabindex="-1">npm 常用命令 <a class="header-anchor" href="#npm-常用命令" aria-label="Permalink to &quot;npm 常用命令&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//1.一般情况下 一路enter</span></span>\n<span class="line"><span style="color:#A6ACCD;"> $ npm init</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;"> //2.全部使用默认配置</span></span>\n<span class="line"><span style="color:#A6ACCD;"> $npm init --yes</span></span>\n<span class="line"><span style="color:#A6ACCD;"> //全局安装</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm install 模块名 -g</span></span>\n<span class="line"><span style="color:#A6ACCD;">//本地安装</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm install 模块名</span></span>\n<span class="line"><span style="color:#A6ACCD;">//一次性安装多个</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm install 模块1 模块2 模块n --save</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//安装运行时依赖包</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm install 模块名 --save</span></span>\n<span class="line"><span style="color:#A6ACCD;">//安装开发时依赖包</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm install 模块名 --save-dev</span></span>\n<span class="line"><span style="color:#A6ACCD;">//查看本地安装的目录</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm root</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//查看全局安装的目录</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm root -g</span></span>\n<span class="line"><span style="color:#A6ACCD;">//卸载本地模块</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm uninstall 模块名</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//卸载全局模块</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm uninstall -g 模块名</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm update 模块名</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm update 模块名 -g</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm ls</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm ls -g</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">package.json文件的配置说明：</span></span>\n<span class="line"><span style="color:#A6ACCD;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;blog&quot;,  //项目名称</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;0.0.0&quot;,   //版本</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,   //项目描述</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;private&quot;: true,  </span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,  //入口文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {   //配置一些通用的命令脚本</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;start&quot;: &quot;node ./bin/www&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [],  //项目的关键字</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,  //作者</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;dependencies&quot;: {   //开发时的依赖</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;body-parser&quot;: &quot;~1.16.0&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;cookie-parser&quot;: &quot;~1.4.3&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;debug&quot;: &quot;~2.6.0&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;ejs&quot;: &quot;~2.5.5&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;express&quot;: &quot;~4.14.1&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;morgan&quot;: &quot;~1.7.0&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;serve-favicon&quot;: &quot;~2.3.2&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"><span style="color:#A6ACCD;">  &quot;devDependencies&quot;: {   //运行时的依赖</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;express-session&quot;: &quot;^1.15.1&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><a href="http://www.ruanyifeng.com/blog/2016/01/npm-install.html" target="_blank" rel="noreferrer">关于npm的安装机制</a></p>',37)];const o=s(e,[["render",function(s,l,t,e,o,c){return a(),n("div",null,p)}]]);export{t as __pageData,o as default};