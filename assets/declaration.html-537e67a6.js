import{_ as o,X as c,Y as l,Z as t,a2 as p,a3 as e,$ as n,a0 as s,H as u}from"./framework-e3372978.js";const i={},d=e('<h2 id="值的专一性" tabindex="-1"><a class="header-anchor" href="#值的专一性" aria-hidden="true">#</a> 值的专一性</h2><p>CSS 每个属性都会有且仅有一个值。</p><ul><li>如果您设置了多个值，最终优先级最高的值会被应用、</li><li>如果您没有设置值，则会应用默认值。默认值可以是 <code>unset</code>(未设置), <code>inherit</code> (继承父属性值), <code>initial</code> (初始值)。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的 CSS 引擎完全忽略。</p></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个函数由函数名和一些括号组成，其中放置了该函数的允许值。</p><p><strong>案例</strong>: <code>calc()</code> 函数允许您在 CSS 中进行简单的计算</p>',7),r=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])])],-1),k=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),s("90% - 30px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" rebeccapurple"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=n("p",null,[n("strong",null,"案例"),s(": "),n("code",null,"url()"),s(" 允许您引入外部资源")],-1),h=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("logo"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])])],-1),v=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".logo"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),s("/logo.svg"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),m=e(`<h2 id="速记属性" tabindex="-1"><a class="header-anchor" href="#速记属性" aria-hidden="true">#</a> 速记属性</h2><p>一些属性，如 <code>font</code>, <code>background</code>, <code>padding</code>, <code>border</code>, <code>margin</code> 等属性称为速记属性--这是因为它们允许您在一行中设置多个属性值，从而节省时间并使代码更整洁。</p><p><strong>案例</strong>: 以下两个 CSS 是完全等价的</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px 15px 5px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg-graphic.png<span class="token punctuation">)</span></span> 10px 10px repeat-x fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg-graphic.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>
  <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(b,_){const a=u("CodeDemo");return c(),l("div",null,[d,t(a,{id:"code-demo-32",type:"normal",title:"calc()",code:"eJwtzUsKwyAUheGtXC4UWmjalI5qHytxoleJUquipgmE7D0mZPp/B86EpvwcMnwp+wdyIuc3RxlGjnD9cI9npJyrX2qDiXuAKJSyvmNwa+P4XMtgVTEMSDg6PtoDNHCvdNpMCvp2KfReNRRcSAySlppIxD5Fp7fNDoOxZQ1zvZ0XnZoyRw=="},{default:p(()=>[r,k]),_:1}),g,t(a,{id:"code-demo-39",type:"normal",title:"url()",code:"eJxNzE0OgyAQQOGrTGbVJq3aLW09CRsEMxARjIM/ifHuws7tl5d3oE2jR4E/41bQXjH/JfpIUSLUrQz4Qs2cg6ogHDIAbM4kK+DTNNP+LWB7RzbdpVN6oDkuwbzdqKgXsMz+UZdHxSs9c3Tm+XkBTk0p4g=="},{default:p(()=>[h,v]),_:1}),m])}const f=o(i,[["render",x],["__file","declaration.html.vue"]]);export{f as default};
