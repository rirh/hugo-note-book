import{_ as a,j as s,k as n,S as e}from"./chunks/framework.2ff57350.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"note/error.md","filePath":"note/error.md"}'),p={name:"note/error.md"},o=[e('<h2 id="引子" tabindex="-1">引子 <a class="header-anchor" href="#引子" aria-label="Permalink to &quot;引子&quot;">​</a></h2><blockquote><p>因为公司的电脑是之前同事用过的电脑小L同学把电脑带回家重装系统，来到公司准备重新安装公司的webpack项目发现使用以下命令报错文件夹中也没有<code>node_modules</code></p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre></div><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm remove nativescript -g</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm cache clear --force</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm install nativescript -g</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">//如果使用没有效果</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">npm cache clear --force </span></span>\n<span class="line"><span style="color:#A6ACCD;">npm install --no-shrinkwrap --update-binary</span></span></code></pre></div>',5)];const t=a(p,[["render",function(a,e,l,p,t,r){return s(),n("div",null,o)}]]);export{l as __pageData,t as default};