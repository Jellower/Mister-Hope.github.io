"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[36124],{60138:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(66252).uE)('<h1 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具" aria-hidden="true">#</a> 管理工具</h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h2><p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p><ul><li><p>获取软件包更新:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>更新软件包:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>其他命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></li></ul><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h2><p>已经预装。</p><p>在中国大陆不建议使用 Snap</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>其他命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-cache</span> search <span class="token comment"># ------(package 搜索包)</span>\n\n<span class="token function">apt-cache</span> show <span class="token comment">#------(package 获取包的相关信息，如说明、大小、版本等)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token comment"># ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> -f <span class="token function">install</span> <span class="token comment"># -----(强制安装?#&quot;-f = --fix-missing&quot;当是修复安装吧...)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token comment">#-----(package 删除包)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> remove - - purge <span class="token comment"># ------(package 删除包，包括删除配置文件等)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> autoremove --purge <span class="token comment"># ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token comment">#------更新源</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade <span class="token comment">#------更新已安装的包</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> dist-upgrade <span class="token comment"># ---------升级系统</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> dselect-upgrade <span class="token comment">#------使用 dselect 升级</span>\n\n<span class="token function">apt-cache</span> depends <span class="token comment">#-------(package 了解使用依赖)</span>\n\n<span class="token function">apt-cache</span> rdepends <span class="token comment"># ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> build-dep <span class="token comment"># ------(package 安装相关的编译环境)</span>\n\n<span class="token function">apt-get</span> <span class="token builtin class-name">source</span> <span class="token comment">#------(package 下载该包的源代码)</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> autoclean <span class="token comment"># --------清理下载文件的存档 &amp;&amp; 只清理过时的包</span>\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> check <span class="token comment">#-------检查是否有损坏的依赖</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li></ol></section>',9),t={},p=(0,a(83744).Z)(t,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},67480:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-69b91c60",path:"/linux/ubuntu/manage.html",title:"管理工具",lang:"zh-CN",frontmatter:{icon:"tool",date:"2019-11-21T00:00:00.000Z",category:["Linux"],head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/ubuntu/manage.html"}],["meta",{property:"og:title",content:"管理工具"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2019-11-21T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"管理工具","image":[""],"datePublished":"2019-11-21T00:00:00.000Z","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"apt-get",slug:"apt-get",children:[]},{level:2,title:"Snap",slug:"snap",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:1.12,words:336},filePathRelative:"linux/ubuntu/manage.md"}}}]);