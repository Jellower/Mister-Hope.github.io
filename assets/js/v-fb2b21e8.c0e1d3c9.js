"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[51975],{18332:(n,s,e)=>{e.r(s),e.d(s,{default:()=>i});const a=(0,e(66252).uE)('<h1 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h1><h2 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h2><p><code>cp</code> 命令用于将文件(或目录)拷贝到目的地。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 拷贝单个文件</span>\n$ <span class="token function">cp</span> <span class="token builtin class-name">source</span> dest\n\n<span class="token comment"># 拷贝多个文件</span>\n$ <span class="token function">cp</span> source1 source2 source3 dest\n\n<span class="token comment"># -i 目的地有同名文件时会提示确认</span>\n$ <span class="token function">cp</span> -i file1 file2\n\n<span class="token comment"># -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1</span>\n<span class="token comment"># dir2如果不存在，将被创建</span>\n<span class="token comment"># 拷贝目录时，该参数是必需的</span>\n$ <span class="token function">cp</span> -r dir1 dir2\n\n<span class="token comment"># -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件</span>\n$ <span class="token function">cp</span> -u *.html destination\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>其他参数</p><ul><li><code>-a</code> 拷贝时保留所有属性，包括所有者与权限</li><li><code>-v</code> 显示拷贝的详细信息</li></ul><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h2><p><code>mkdir</code> 命令用于新建目录。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 新建多个目录</span>\n$ <span class="token function">mkdir</span> dir1 dir2 dir3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h2><p><code>mv</code> 命令用于将源文件移动到目的地。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 移动单个文件</span>\n$ <span class="token function">mv</span> item1 item2\n\n<span class="token comment"># 移动多个文件</span>\n$ <span class="token function">mv</span> file1 file2 dir1\n\n<span class="token comment"># 将dir1拷贝进入dir2，完成后dir2将多出一个子目录dir1</span>\n<span class="token comment"># 如果dir2不存在，将会被创建</span>\n$ <span class="token function">mv</span> dir1 dir2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>参数</p><ul><li><code>-i</code> 覆盖已经存在的文件时，会提示确认</li><li><code>-u</code> 只移动目的地不存在的文件，或比目的地更新的文件</li></ul><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h2><p><code>rm</code> 命令用于删除文件。</p><p>参数。</p><ul><li><code>-i</code> 文件存在时，会提示确认。</li><li><code>-r</code> 递归删除一个子目录</li><li><code>-f</code> 如果删除不存在的文件，不报错</li><li><code>-v</code> 删除时展示详细信息</li></ul><h2 id="ln" tabindex="-1"><a class="header-anchor" href="#ln" aria-hidden="true">#</a> ln</h2><p><code>ln</code> 命令用于建立链接文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 新建硬链接</span>\n$ <span class="token function">ln</span> <span class="token function">file</span> <span class="token function">link</span>\n\n<span class="token comment"># 新建软链接</span>\n$ <span class="token function">ln</span> -s item <span class="token function">link</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',21),l={},i=(0,e(83744).Z)(l,[["render",function(n,s){return a}]])},83744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},50891:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-fb2b21e8",path:"/linux/bash/archives/file-operation.html",title:"文件操作",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/file-operation.html"}],["meta",{property:"og:title",content:"文件操作"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"文件操作","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"cp",slug:"cp",children:[]},{level:2,title:"mkdir",slug:"mkdir",children:[]},{level:2,title:"mv",slug:"mv",children:[]},{level:2,title:"rm",slug:"rm",children:[]},{level:2,title:"ln",slug:"ln",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:1.31,words:394},filePathRelative:"linux/bash/archives/file-operation.md"}}}]);