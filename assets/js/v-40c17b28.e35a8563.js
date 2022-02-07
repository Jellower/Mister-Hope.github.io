"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81562],{77980:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(66252).uE)('<p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型:</p><h2 id="函数的合并" tabindex="-1"><a class="header-anchor" href="#函数的合并" aria-hidden="true">#</a> 函数的合并</h2><p><a href="/doc/private/language/typescript/basics/type-of-function#%E9%87%8D%E8%BD%BD">之前学习过</a>，我们可以使用重载定义多个函数类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="接口的合并" tabindex="-1"><a class="header-anchor" href="#接口的合并" aria-hidden="true">#</a> 接口的合并</h2><p>接口中的属性在合并时会简单的合并到一个接口中:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>相当于:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意，<strong>合并的属性的类型必须是唯一的</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 虽然重复了，但是类型都是 `number`，所以不会报错</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 类型不一致，会报错</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable &#39;price&#39; must be of type &#39;number&#39;, but here has type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>接口中方法的合并，与函数的合并一样:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>相当于:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="类的合并" tabindex="-1"><a class="header-anchor" href="#类的合并" aria-hidden="true">#</a> 类的合并</h2><p>类的合并与接口的合并规则一致。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/declaration-merging.html" target="_blank" rel="noopener noreferrer">Declaration Merging</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration%20Merging.html" target="_blank" rel="noopener noreferrer">中文版</a>)</li></ul>',20),e={},t=(0,a(83744).Z)(e,[["render",function(n,s){return p}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},72685:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-40c17b28",path:"/code/language/typescript/advanced/declaration-merging.html",title:"声明合并",lang:"zh-CN",frontmatter:{title:"声明合并",icon:"merge",category:["TypeScript"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/advanced/declaration-merging.html"}],["meta",{property:"og:title",content:"声明合并"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"声明合并","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"<p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型:</p>\n",headers:[{level:2,title:"函数的合并",slug:"函数的合并",children:[]},{level:2,title:"接口的合并",slug:"接口的合并",children:[]},{level:2,title:"类的合并",slug:"类的合并",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.12,words:335},filePathRelative:"code/language/typescript/advanced/declaration-merging.md"}}}]);