"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[61092],{45462:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(66252).uE)('<p>Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 <code>/tmp</code> 目录里面创建文件或目录，这样做有很多弊端，使用 <code>mktemp</code> 命令是最安全的做法。</p><h2 id="临时文件的安全问题" tabindex="-1"><a class="header-anchor" href="#临时文件的安全问题" aria-hidden="true">#</a> 临时文件的安全问题</h2><p>直接创建临时文件，尤其在 <code>/tmp</code> 目录里面，往往会导致安全问题。</p><p>首先，<code>/tmp</code> 目录是所有人可读写的，任何用户都可以往该目录里面写文件。创建的临时文件也是所有人可读的。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">touch</span> /tmp/info.txt\n$ <span class="token function">ls</span> -l /tmp/info.txt\n-rw-r--r-- <span class="token number">1</span> ruanyf ruanyf <span class="token number">0</span> <span class="token number">12</span>月 <span class="token number">28</span> <span class="token number">17</span>:12 /tmp/info.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面命令在 <code>/tmp</code> 目录直接创建文件，该文件默认是所有人可读的。</p><p>其次，如果攻击者知道临时文件的文件名，他可以创建符号链接，链接到临时文件，可能导致系统运行异常。攻击者也可能向脚本提供一些恶意数据。因此，临时文件最好使用不可预测、每次都不一样的文件名，防止被利用。</p><p>最后，临时文件使用完毕，应该删除。但是，脚本意外退出时，往往会忽略清理临时文件。</p><p>生成临时文件应该遵循下面的规则。</p><blockquote><ul><li>创建前检查文件是否已经存在。</li><li>确保临时文件已成功创建。</li><li>临时文件必须有权限的限制。</li><li>临时文件要使用不可预测的文件名。</li><li>脚本退出时，要删除临时文件(使用 <code>trap</code> 命令)。</li></ul></blockquote><h2 id="mktemp-命令的用法" tabindex="-1"><a class="header-anchor" href="#mktemp-命令的用法" aria-hidden="true">#</a> mktemp 命令的用法</h2><p><code>mktemp</code> 命令就是为安全创建临时文件而设计的。虽然在创建临时文件之前，它不会检查临时文件是否存在，但是它支持唯一文件名和清除机制，因此可以减轻安全攻击的风险。</p><p>直接运行 <code>mktemp</code> 命令，就能生成一个临时文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp\n/tmp/tmp.4GcsWSG4vj\n\n$ <span class="token function">ls</span> -l /tmp/tmp.4GcsWSG4vj\n-rw------- <span class="token number">1</span> ruanyf ruanyf <span class="token number">0</span> <span class="token number">12</span>月 <span class="token number">28</span> <span class="token number">12</span>:49 /tmp/tmp.4GcsWSG4vj\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面命令中，<code>mktemp</code> 命令生成的临时文件名是随机的，而且权限是只有用户本人可读写。</p><p>Bash 脚本使用 <code>mktemp</code> 命令的用法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n\n<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Our temp file is <span class="token variable">$TMPFILE</span>&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>为了确保临时文件创建成功，<code>mktemp</code> 命令后面最好使用 OR 运算符 (<code>||</code>)，保证创建失败时退出脚本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n\n<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Our temp file is <span class="token variable">$TMPFILE</span>&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>为了保证脚本退出时临时文件被删除，可以使用 <code>trap</code> 命令指定退出时的清除操作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n\n<span class="token builtin class-name">trap</span> <span class="token string">&#39;rm -f &quot;$TMPFILE&quot;&#39;</span> EXIT\n\n<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Our temp file is <span class="token variable">$TMPFILE</span>&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="mktemp-命令的参数" tabindex="-1"><a class="header-anchor" href="#mktemp-命令的参数" aria-hidden="true">#</a> mktemp 命令的参数</h2><p><code>-d</code> 参数可以创建一个临时目录。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp -d\n/tmp/tmp.Wcau5UjmN6\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>-p</code> 参数可以指定临时文件所在的目录。默认是使用 <code>$TMPDIR</code> 环境变量指定的目录，如果这个变量没设置，那么使用 <code>/tmp</code> 目录。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp -p /home/ruanyf/\n/home/ruanyf/tmp.FOKEtvs2H3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>-t</code> 参数可以指定临时文件的文件名模板，模板的末尾必须至少包含三个连续的 <code>X</code> 字符，表示随机字符，建议至少使用六个 <code>X</code>。默认的文件名模板是 <code>tmp.</code> 后接十个随机字符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp -t mytemp.XXXXXXX\n/tmp/mytemp.yZ1HgZV\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="trap-命令" tabindex="-1"><a class="header-anchor" href="#trap-命令" aria-hidden="true">#</a> trap 命令</h2><p><code>trap</code> 命令用来在 Bash 脚本中响应系统信号。</p><p>最常见的系统信号就是 SIGINT(中断)，即按 <code>Ctrl + C</code> 所产生的信号。<code>trap</code> 命令的 <code>-l</code> 参数，可以列出所有的系统信号。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">trap</span> -l\n <span class="token number">1</span><span class="token punctuation">)</span> SIGHUP  <span class="token number">2</span><span class="token punctuation">)</span> SIGINT  <span class="token number">3</span><span class="token punctuation">)</span> SIGQUIT  <span class="token number">4</span><span class="token punctuation">)</span> SIGILL  <span class="token number">5</span><span class="token punctuation">)</span> SIGTRAP\n <span class="token number">6</span><span class="token punctuation">)</span> SIGABRT  <span class="token number">7</span><span class="token punctuation">)</span> SIGBUS  <span class="token number">8</span><span class="token punctuation">)</span> SIGFPE  <span class="token number">9</span><span class="token punctuation">)</span> SIGKILL <span class="token number">10</span><span class="token punctuation">)</span> SIGUSR1\n<span class="token number">11</span><span class="token punctuation">)</span> SIGSEGV <span class="token number">12</span><span class="token punctuation">)</span> SIGUSR2 <span class="token number">13</span><span class="token punctuation">)</span> SIGPIPE <span class="token number">14</span><span class="token punctuation">)</span> SIGALRM <span class="token number">15</span><span class="token punctuation">)</span> SIGTERM\n<span class="token number">16</span><span class="token punctuation">)</span> SIGSTKFLT <span class="token number">17</span><span class="token punctuation">)</span> SIGCHLD <span class="token number">18</span><span class="token punctuation">)</span> SIGCONT <span class="token number">19</span><span class="token punctuation">)</span> SIGSTOP <span class="token number">20</span><span class="token punctuation">)</span> SIGTSTP\n<span class="token number">21</span><span class="token punctuation">)</span> SIGTTIN <span class="token number">22</span><span class="token punctuation">)</span> SIGTTOU <span class="token number">23</span><span class="token punctuation">)</span> SIGURG <span class="token number">24</span><span class="token punctuation">)</span> SIGXCPU <span class="token number">25</span><span class="token punctuation">)</span> SIGXFSZ\n<span class="token number">26</span><span class="token punctuation">)</span> SIGVTALRM <span class="token number">27</span><span class="token punctuation">)</span> SIGPROF <span class="token number">28</span><span class="token punctuation">)</span> SIGWINCH <span class="token number">29</span><span class="token punctuation">)</span> SIGIO <span class="token number">30</span><span class="token punctuation">)</span> SIGPWR\n<span class="token number">31</span><span class="token punctuation">)</span> SIGSYS <span class="token number">34</span><span class="token punctuation">)</span> SIGRTMIN <span class="token number">35</span><span class="token punctuation">)</span> SIGRTMIN+1 <span class="token number">36</span><span class="token punctuation">)</span> SIGRTMIN+2 <span class="token number">37</span><span class="token punctuation">)</span> SIGRTMIN+3\n<span class="token number">38</span><span class="token punctuation">)</span> SIGRTMIN+4 <span class="token number">39</span><span class="token punctuation">)</span> SIGRTMIN+5 <span class="token number">40</span><span class="token punctuation">)</span> SIGRTMIN+6 <span class="token number">41</span><span class="token punctuation">)</span> SIGRTMIN+7 <span class="token number">42</span><span class="token punctuation">)</span> SIGRTMIN+8\n<span class="token number">43</span><span class="token punctuation">)</span> SIGRTMIN+9 <span class="token number">44</span><span class="token punctuation">)</span> SIGRTMIN+10 <span class="token number">45</span><span class="token punctuation">)</span> SIGRTMIN+11 <span class="token number">46</span><span class="token punctuation">)</span> SIGRTMIN+12 <span class="token number">47</span><span class="token punctuation">)</span> SIGRTMIN+13\n<span class="token number">48</span><span class="token punctuation">)</span> SIGRTMIN+14 <span class="token number">49</span><span class="token punctuation">)</span> SIGRTMIN+15 <span class="token number">50</span><span class="token punctuation">)</span> SIGRTMAX-14 <span class="token number">51</span><span class="token punctuation">)</span> SIGRTMAX-13 <span class="token number">52</span><span class="token punctuation">)</span> SIGRTMAX-12\n<span class="token number">53</span><span class="token punctuation">)</span> SIGRTMAX-11 <span class="token number">54</span><span class="token punctuation">)</span> SIGRTMAX-10 <span class="token number">55</span><span class="token punctuation">)</span> SIGRTMAX-9 <span class="token number">56</span><span class="token punctuation">)</span> SIGRTMAX-8 <span class="token number">57</span><span class="token punctuation">)</span> SIGRTMAX-7\n<span class="token number">58</span><span class="token punctuation">)</span> SIGRTMAX-6 <span class="token number">59</span><span class="token punctuation">)</span> SIGRTMAX-5 <span class="token number">60</span><span class="token punctuation">)</span> SIGRTMAX-4 <span class="token number">61</span><span class="token punctuation">)</span> SIGRTMAX-3 <span class="token number">62</span><span class="token punctuation">)</span> SIGRTMAX-2\n<span class="token number">63</span><span class="token punctuation">)</span> SIGRTMAX-1 <span class="token number">64</span><span class="token punctuation">)</span> SIGRTMAX\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>trap</code> 的命令格式如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">trap</span> <span class="token punctuation">[</span>动作<span class="token punctuation">]</span> <span class="token punctuation">[</span>信号1<span class="token punctuation">]</span> <span class="token punctuation">[</span>信号2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上面代码中，“动作”是一个 Bash 命令，“信号”常用的有以下几个。</p><blockquote><ul><li>HUP: 编号 1，脚本与所在的终端脱离联系。</li><li>INT: 编号 2，用户按下 Ctrl + C，意图让脚本中止运行。</li><li>QUIT: 编号 3，用户按下 Ctrl + 斜杠，意图退出脚本。</li><li>KILL: 编号 9，该信号用于杀死进程。</li><li>TERM: 编号 15，这是 <code>kill</code> 命令发出的默认信号。</li><li>EXIT: 编号 0，这不是系统信号，而是 Bash 脚本特有的信号，不管什么情况，只要退出脚本就会产生。</li></ul></blockquote><p><code>trap</code> 命令响应 <code>EXIT</code> 信号的写法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">trap</span> <span class="token string">&#39;rm -f &quot;$TMPFILE&quot;&#39;</span> EXIT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上面命令中，脚本遇到 <code>EXIT</code> 信号时，就会执行 <code>rm -f &quot;$TMPFILE&quot;</code>。</p><p>trap 命令的常见使用场景，就是在 Bash 脚本中指定退出时执行的清理命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n\n<span class="token builtin class-name">trap</span> <span class="token string">&#39;rm -f &quot;$TMPFILE&quot;&#39;</span> EXIT\n\n<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token function">ls</span> /etc <span class="token operator">&gt;</span> <span class="token variable">$TMPFILE</span>\n<span class="token keyword">if</span> <span class="token function">grep</span> -qi <span class="token string">&quot;kernel&quot;</span> <span class="token variable">$TMPFILE</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token builtin class-name">echo</span> <span class="token string">&#39;find&#39;</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面代码中，不管是脚本正常执行结束，还是用户按 <code>Ctrl + C</code> 终止，都会产生 <code>EXIT</code> 信号，从而触发删除临时文件。</p><p>注意，<code>trap</code> 命令必须放在脚本的开头。否则，它上方的任何命令导致脚本退出，都不会被它捕获。</p><p>如果 <code>trap</code> 需要触发多条命令，可以封装一个 Bash 函数。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">egress</span> <span class="token punctuation">{</span>\n  command1\n  command2\n  command3\n<span class="token punctuation">}</span>\n\n<span class="token builtin class-name">trap</span> egress EXIT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><ul><li><a href="https://www.putorius.net/working-with-temporary-files.html" target="_blank" rel="noopener noreferrer">Working with Temporary Files and Directories in Shell Scripts</a>, Steven Vona</li><li><a href="https://www.putorius.net/using-trap-to-exit-bash-scripts-cleanly.html" target="_blank" rel="noopener noreferrer">Using Trap to Exit Bash Scripts Cleanly</a></li><li><a href="https://mywiki.wooledge.org/SignalTrap" target="_blank" rel="noopener noreferrer">Sending and Trapping Signals</a></li></ul>',47),p={},t=(0,a(83744).Z)(p,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},93186:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-a3b03640",path:"/linux/bash/mktemp.html",title:"mktemp 命令，trap 命令",lang:"zh-CN",frontmatter:{title:"mktemp 命令，trap 命令",icon:"shell",author:"阮一峰",category:["Linux"],tag:["Bash"],copyrightText:'本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh">知识共享 署名-相同方式共享 3.0协议</a>',head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/mktemp.html"}],["meta",{property:"og:title",content:"mktemp 命令，trap 命令"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:author",content:"阮一峰"}],["meta",{property:"article:tag",content:"Bash"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"mktemp 命令，trap 命令","image":[""],"datePublished":"","dateModified":"","author":[{"@type":"Person","name":"阮一峰"}]}']]},excerpt:"<p>Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 <code>/tmp</code> 目录里面创建文件或目录，这样做有很多弊端，使用 <code>mktemp</code> 命令是最安全的做法。</p>\n",headers:[{level:2,title:"临时文件的安全问题",slug:"临时文件的安全问题",children:[]},{level:2,title:"mktemp 命令的用法",slug:"mktemp-命令的用法",children:[]},{level:2,title:"mktemp 命令的参数",slug:"mktemp-命令的参数",children:[]},{level:2,title:"trap 命令",slug:"trap-命令",children:[]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:4.79,words:1436},filePathRelative:"linux/bash/mktemp.md"}}}]);