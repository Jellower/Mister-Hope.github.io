"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[63423],{8159:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(66252).uE)('<p>我们从一个简单的例子开始。</p><p>将以下代码复制到 <code>hello.ts</code> 中:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>然后执行</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc hello.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这时候会生成一个编译好的文件 <code>hello.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>TypeScript 中，使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p><p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p><p><strong>TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。</strong></p><blockquote><p><code>let</code> 是 ES6 中的关键字，和 <code>var</code> 类似，用于定义一个局部变量，可以参阅 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noopener noreferrer">let 和 const 命令</a>。</p></blockquote><p>下面尝试把这段代码编译一下:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>编辑器中会提示错误，编译的时候也会出错:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>index.ts<span class="token punctuation">(</span><span class="token number">6,22</span><span class="token punctuation">)</span>: error TS2345: Argument of <span class="token builtin class-name">type</span> <span class="token string">&#39;number[]&#39;</span> is not assignable to parameter of <span class="token builtin class-name">type</span> <span class="token string">&#39;string&#39;</span><span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>但是还是生成了 js 文件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p><p>如果要在报错的时候终止 js 文件的生成，可以在 <code>tsconfig.json</code> 中配置 <code>noEmitOnError</code> 即可。关于 <code>tsconfig.json</code>，请参阅<a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html" target="_blank" rel="noopener noreferrer">官方手册</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html" target="_blank" rel="noopener noreferrer">中文版</a>)。</p>',19),p={},t=(0,a(83744).Z)(p,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},77782:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-7552317a",path:"/code/language/typescript/intro/hello-typescript.html",title:"Hello TypeScript",lang:"zh-CN",frontmatter:{title:"Hello TypeScript",icon:"creative",category:["TypeScript"],tag:["快速上手"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/intro/hello-typescript.html"}],["meta",{property:"og:title",content:"Hello TypeScript"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"快速上手"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Hello TypeScript","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:1.25,words:374},filePathRelative:"code/language/typescript/intro/hello-typescript.md"}}}]);