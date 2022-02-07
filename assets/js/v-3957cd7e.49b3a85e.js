"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[56927],{90753:(n,e,s)=>{s.r(e),s.d(e,{default:()=>p});const a=(0,s(66252).uE)('<p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p><p>jQuery 能帮我们干这些事情:</p><ul><li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li><li>简洁的操作 DOM 的方法: 写 <code>$(&#39;#test&#39;)</code> 肯定比 <code>document.getElementById(&#39;test&#39;)</code> 来得简洁；</li><li>轻松实现动画、修改 CSS 等各种操作。</li><li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li></ul><h2 id="jquery-版本" tabindex="-1"><a class="header-anchor" href="#jquery-版本" aria-hidden="true">#</a> jQuery 版本</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>jQuery 的 <code>1.x</code> 版本 兼容 ie678，<code>2.x</code> 为了精简代码体积移除了 ie678 的兼容。<code>3.x</code> 只兼容最新的一批浏览器，是官方还在更新维护的把呢不能</p><p>由于已经 2020 年了，直接选用 jQuery<code>3.x</code> 版本即可。</p></div><p>从 jQuery 官网可以下载最新版本。jQuery 只是一个 jquery-xxx.js 文件，但您会看到有 compressed(已压缩)和 uncompressed(未压缩)两种版本，使用时完全一样，但如果您想深入研究 jQuery 源码，那就用 uncompressed 版本。</p><h2 id="使用-jquery" tabindex="-1"><a class="header-anchor" href="#使用-jquery" aria-hidden="true">#</a> 使用 jQuery</h2><p>使用 jQuery 只需要在页面的 <code>&lt;head&gt;</code> 引入 jQuery 文件即可:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//code.jquery.com/jquery-3.4.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号" aria-hidden="true">#</a> $ 符号</h2><p><code>$</code> 是著名的 jQuery 符号。实际上，jQuery 把所有功能全部封装在一个全局变量 jQuery 中，而 <code>$</code> 也是一个合法的变量名，它是变量 jQuery 的别名:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>jQuery<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>\nwindow<span class="token punctuation">.</span>$<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>\n$ <span class="token operator">===</span> jQuery<span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token keyword">typeof</span> $<span class="token punctuation">;</span> <span class="token comment">// &#39;function&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>$</code> 本质上就是一个函数，但是函数也是对象，于是 <code>$</code> 除了可以直接调用外，也可以有很多其他属性。</p><p>注意，您看到的 <code>$</code> 函数名可能不是 <code>jQuery(selector, context)</code>，因为很多 JavaScript 压缩工具可以对函数名和参数改名，所以压缩过的 jQuery 源码 <code>$</code> 函数可能变成 <code>a(b, c)</code>。</p><p>绝大多数时候，我们都直接用 <code>$</code> (因为写起来更简单嘛)。但是，如果 <code>$</code> 这个变量不幸地被占用了，而且还不能改，那我们就只能让 jQuery 把 <code>$</code> 变量交出来，然后就只能使用 <code>jQuery</code> 这个变量:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>\njQuery<span class="token punctuation">.</span><span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n$<span class="token punctuation">;</span> <span class="token comment">// undefined</span>\njQuery<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这种黑魔法的原理是 jQuery 在占用<code>$</code>之前，先在内部保存了原来的<code>$</code>,调用 <code>jQuery.noConflict()</code> 时会把原来保存的变量还原。</p>',17),t={},p=(0,s(83744).Z)(t,[["render",function(n,e){return a}]])},83744:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},98574:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-3957cd7e",path:"/code/website/jQuery/intro.html",title:"jQuery 介绍",lang:"zh-CN",frontmatter:{title:"jQuery 介绍",icon:"creative",category:["JQuery"],date:"2019-11-02T00:00:00.000Z",tag:["介绍"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/jQuery/intro.html"}],["meta",{property:"og:title",content:"jQuery 介绍"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"介绍"}],["meta",{property:"article:published_time",content:"2019-11-02T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"jQuery 介绍","image":[""],"datePublished":"2019-11-02T00:00:00.000Z","dateModified":"","author":[]}']]},excerpt:"<p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p>\n<p>jQuery 能帮我们干这些事情:</p>\n<ul>\n<li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li>\n<li>简洁的操作 DOM 的方法: 写 <code>$('#test')</code> 肯定比 <code>document.getElementById('test')</code> 来得简洁；</li>\n<li>轻松实现动画、修改 CSS 等各种操作。</li>\n<li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li>\n</ul>\n",headers:[{level:2,title:"jQuery 版本",slug:"jquery-版本",children:[]},{level:2,title:"使用 jQuery",slug:"使用-jquery",children:[]},{level:2,title:"$ 符号",slug:"符号",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:1.98,words:593},filePathRelative:"code/website/jQuery/intro.md"}}}]);