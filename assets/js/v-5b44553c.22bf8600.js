"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33892],{82174:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const n=(0,a(66252).uE)('<p>在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注 意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个 地方之一。</p><p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 <code>--amend</code> 选 项的提交命令来重新提交:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit --amend\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这个命令会将暂存区中的文件提交。如果自上次提交以来您还未做任何修改(例如，在上次提交后马上执行了 此命令)， 那么快照会保持不变，而您所修改的只是提交信息。</p><p>文本编辑器启动后，可以看到之前的提交信息。编辑后保存会覆盖原来的提交信息。</p><p>例如，您提交后发现忘记了暂存某些需要的修改，可以像下面这样操作:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&#39;initial commit&#39;</span>\n<span class="token function">git</span> <span class="token function">add</span> forgotten_file\n<span class="token function">git</span> commit --amend\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>最终您只会有一个提交——第二次提交将代替第一次提交的结果。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当您在修补最后的提交时，并不是通过用改进后的提交 原位替换 掉旧有提交的方式来修复 的， 理解这一点非常重要。从效果上来说，就像是旧有的提交从未存在过一样，它并不会出 现在仓库的历史中。</p><p>修补提交最明显的价值是可以稍微改进您最后的提交，而不会让“啊，忘了添加一个文件”或 者 “小修补，修正笔误”这种提交信息弄乱您的仓库历史。</p></div>',9),s={},i=(0,a(83744).Z)(s,[["render",function(e,t){return n}]])},83744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},51311:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-5b44553c",path:"/software/git/recall.html",title:"撤销操作",lang:"zh-CN",frontmatter:{title:"撤销操作",icon:"return",category:["Git"],tag:["Git","软件"],head:[["meta",{property:"og:url",content:"https://mrhope.site/software/git/recall.html"}],["meta",{property:"og:title",content:"撤销操作"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"Git"}],["meta",{property:"article:tag",content:"软件"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"撤销操作","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[],git:{createdTime:1591861522e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:1.54,words:461},filePathRelative:"software/git/recall.md"}}}]);