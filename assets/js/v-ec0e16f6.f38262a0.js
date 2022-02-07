"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[98872],{89276:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const p=(0,a(66252).uE)('<h1 id="vue-单文件组件说明" tabindex="-1"><a class="header-anchor" href="#vue-单文件组件说明" aria-hidden="true">#</a> Vue 单文件组件说明</h1><p>Vue 文件即是一个组件文件，组件文件既可以成为其他 vue 文件的一个组件，又可以添加到 router 中成为一个页面视图。</p><p>Vue 文件主要由三部分构成:</p><ul><li><p><code>template</code> 对应网站视图树，即 HTML 部分</p></li><li><p><code>script</code> 对应网站的脚本。即 js 部分，默认为 Javascript，可以添加 <code>lang=&quot;ts&quot;</code> 来指定页面脚本文件为 <code>Typescript</code></p></li><li><p><code>style</code> 对应网站的样式，即 CSS 部分，可以通过添加 <code>scoped</code> 属性来指定样式只在当前文件生效。</p></li></ul><p>在脚本部分中，如有需要，需要使用 <code>export default{}</code> 向外暴露一个对象以供 Router 或其他 Vue 文件引用。</p><p>在 HTML 标签中，由于页面都被 Router 托管，如需要跳转到本网站的其他视图上去，需要使用 <code>&lt;route-link to=&quot;内部url地址&quot;&gt;链接文字&lt;/route-link&gt;</code></p><hr><p>下面是学校公众号界面</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;px-3 pt-3&quot;</span><span class="token operator">&gt;</span>学院微信<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>hr <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mx-3&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;row px-3&quot;</span><span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>a\n        <span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">&quot;item.url&quot;</span>\n        <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.text&quot;</span>\n        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;col-4 col-sm-3 col-md-2 col-lg-1 col-fix&quot;</span>\n        v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in gzh&quot;</span>\n      <span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>img\n          <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;require(`@/icon/function/schoolGzh/${item.src}.jpg`)&quot;</span>\n          <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;img-thumbnail mt-1 img-fix&quot;</span>\n          style<span class="token operator">=</span><span class="token string">&quot;border-radius:50%;&quot;</span>\n        <span class="token operator">/</span><span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mx-1 my-2 gzhName&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>text <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;SchoolGzh&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">gzh</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">url</span><span class="token operator">:</span>\n          <span class="token string">&quot;https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=MzA3NTM3MTkzOQ==&amp;scene=110#wechat_redirect&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;美术学院&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;art&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// ...中间的学院数据在此省略</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">url</span><span class="token operator">:</span>\n          <span class="token string">&quot;https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=MzIwMzI0NTE0NQ==#wechat_webview_type=1&amp;wechat_redirect&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;纽瓦克学院&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;runin&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>\n<span class="token punctuation">.</span>col<span class="token operator">-</span>fix <span class="token punctuation">{</span>\n  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> 5px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">.</span>img<span class="token operator">-</span>fix <span class="token punctuation">{</span>\n  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">;</span>\n  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem <span class="token number">5</span><span class="token operator">%</span> <span class="token number">0</span> <span class="token number">5</span><span class="token operator">%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">.</span>gzhName <span class="token punctuation">{</span>\n  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>\n  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">;</span>\n  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>下面是网站的 404 页面</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>h1 mt<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&gt;</span>Page not found<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\n      很抱歉并未找到您打开的界面，可能是您输入的路径有误，网页尚未制作或者出现了一个bug。\n    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\n      您可以反馈给\n      <span class="token operator">&lt;</span>router<span class="token operator">-</span>link\n        to<span class="token operator">=</span><span class="token string">&quot;http://wpa.qq.com/msgrd?v=3&amp;amp;uin=1178522294&amp;amp;site=qq&amp;amp;menu=yes&quot;</span>\n        <span class="token operator">&gt;</span>Mr<span class="token punctuation">.</span>Hope<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link\n      <span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Page404&quot;</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',11),e={},t=(0,a(83744).Z)(e,[["render",function(s,n){return p}]])},83744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,p]of n)a[s]=p;return a}},19442:(s,n,a)=>{a.r(n),a.d(n,{data:()=>p});const p={key:"v-ec0e16f6",path:"/code/vue/vue.html",title:"Vue 单文件组件说明",lang:"zh-CN",frontmatter:{icon:"vue",category:["Vue"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/vue/vue.html"}],["meta",{property:"og:title",content:"Vue 单文件组件说明"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Vue 单文件组件说明","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[],git:{createdTime:1591204114e3,updatedTime:1604687154e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:1.69,words:506},filePathRelative:"code/vue/vue.md"}}}]);