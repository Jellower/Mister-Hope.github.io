import{_ as t,X as e,Y as p,a1 as l,$ as a,a3 as n,a0 as s}from"./framework-e3372978.js";const o={},c=a("p",null,"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。",-1),r=n(`<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><p>用 <code>print()</code> 在括号中加上字符串，就可以向屏幕上输出指定的文字。比如输出 <code>&#39;hello, world&#39;</code>，用代码实现如下:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p><code>print()</code> 函数也可以接受多个字符串，用逗号 “,” 隔开，就可以连成一串输出:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;The quick brown fox&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jumps over&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;the lazy dog&#39;</span><span class="token punctuation">)</span>
The quick brown fox jumps over the lazy dog
</code></pre></div><p><code>print()</code> 会依次打印每个字符串，遇到逗号“,”会输出一个空格。</p><p><code>print()</code> 也可以打印整数，或者计算结果:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
<span class="token number">300</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token number">300</span>
</code></pre></div><p>因此，我们可以把计算 <code>100 + 200</code> 的结果打印得更漂亮一点:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;100 + 200 =&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span> <span class="token operator">=</span> <span class="token number">300</span>
</code></pre></div><p>注意，对于 <code>100 + 200</code>，Python 解释器自动计算出结果 300，但是，<code>&#39;100 + 200 =&#39;</code> 是字符串而非数学公式，Python 把它视为字符串，请自行解释上述打印结果。</p><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2><p>如果需要用户从电脑输入一些字符，Python 提供了一个 <code>input()</code>，可以让用户输入字符串，并存放到一个变量里。比如输入用户的名字:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Mr<span class="token punctuation">.</span>Hope
</code></pre></div><p>当您输入 <code>name = input()</code> 并按下回车后，Python 交互式命令行就在等待您的输入了。这时，您可以输入任意字符，然后按回车后完成输入。</p><p>输入完成后，不会有任何提示，Python 交互式命令行又回到 <code>&gt;&gt;&gt;</code> 状态了。那我们刚才输入的内容到哪去了? 答案是存放到 <code>name</code> 变量里了。可以直接输入 <code>name</code> 查看变量内容:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name
<span class="token string">&#39;Mr.Hope&#39;</span>
</code></pre></div>`,17),m=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"变量"),a("p",null,"请回忆初中数学所学的代数基础知识:"),a("p",null,[s("设正方形的边长为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(" ，则正方形的面积为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a"),a("mo",null,"×"),a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a \\times a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"×"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(" 。把边长 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(" 看做一个变量，我们就可以根据 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(" 的值计算正方形的面积，比如:")]),a("p",null,[s("若 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a"),a("mo",null,"="),a("mn",null,"2")]),a("annotation",{encoding:"application/x-tex"},"a = 2")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"2")])])]),s(" ，则面积为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a"),a("mo",null,"×"),a("mi",null,"a"),a("mo",null,"="),a("mn",null,"2"),a("mo",null,"×"),a("mn",null,"2"),a("mo",null,"="),a("mn",null,"4")]),a("annotation",{encoding:"application/x-tex"},"a \\times a = 2 \\times 2 = 4")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"×"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"2"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"×"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"2"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"4")])])]),s(" ；")]),a("p",null,[s("若 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a"),a("mo",null,"="),a("mn",null,"3.5")]),a("annotation",{encoding:"application/x-tex"},"a = 3.5")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"3.5")])])]),s("，则面积为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a"),a("mo",null,"×"),a("mi",null,"a"),a("mo",null,"="),a("mn",null,"3.5"),a("mo",null,"×"),a("mn",null,"3.5"),a("mo",null,"="),a("mn",null,"12.25")]),a("annotation",{encoding:"application/x-tex"},"a \\times a = 3.5 \\times 3.5 = 12.25")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"×"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"3.5"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"×"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"3.5"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"12.25")])])]),s(" 。")]),a("p",null,[s("在计算机程序中，变量不仅可以为整数或浮点数，还可以是字符串，因此，"),a("code",null,"name"),s(" 作为一个变量就是一个字符串。")]),a("p",null,[s("要打印出 "),a("code",null,"name"),s(" 变量的内容，除了直接写 "),a("code",null,"name"),s(" 然后按回车外，还可以用 "),a("code",null,"print()"),s(" 函数:")]),a("div",{class:"language-python","data-ext":"py"},[a("pre",{class:"language-python"},[a("code",null,[a("span",{class:"token operator"},">>"),a("span",{class:"token operator"},">"),s(),a("span",{class:"token keyword"},"print"),a("span",{class:"token punctuation"},"("),s("name"),a("span",{class:"token punctuation"},")"),s(`
Mr`),a("span",{class:"token punctuation"},"."),s(`Hope
`)])])])],-1),i=n(`<p>有了输入和输出，我们就可以把上次打印 <code>&#39;hello, world&#39;</code> 的程序改成有点意义的程序了:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello,&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
</code></pre></div><p>运行上面的程序，第一行代码会让用户输入任意字符作为自己的名字，然后存入 <code>name</code> 变量中；第二行代码会根据用户的名字向用户说 <code>hello</code>，比如输入 <code>Mr.Hope</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>C:/Workspace<span class="token operator">&gt;</span> python hello.py
Mr.Hope
hello, Mr.Hope
</code></pre></div><p>但是程序运行的时候，没有任何提示信息告诉用户:“嘿，赶紧输入您的名字”，这样显得很不友好。所以 <code>input()</code> 可以让您显示一个字符串来提示用户，于是我们把代码改成:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;please enter your name: &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello,&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
</code></pre></div><p>再次运行这个程序，您会发现，程序一运行，会首先打印出 <code>please enter your name:</code>，这样，用户就可以根据提示，输入名字后，得到 <code>hello, xxx</code> 的输出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>C:/Workspace<span class="token operator">&gt;</span> python hello.py
please enter your name: Mr.Hope
hello, Mr.Hope
</code></pre></div><p>每次运行该程序，根据用户输入的不同，输出结果也会不同。</p><p>在命令行下，输入和输出就是这么简单。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>任何计算机程序都是为了执行一个特定的任务，有了输入，用户才能告诉计算机程序所需的信息，有了输出，程序运行后才能告诉用户任务的结果。</p><p>输入是 Input，输出是 Output，因此，我们把输入输出统称为 Input/Output，或者简写为 IO。</p><p><code>input()</code> 和 <code>print()</code> 是在命令行下面最基本的输入和输出，但是，用户也可以通过其他更高级的图形界面完成输入和输出，比如，在网页上的一个文本框输入自己的名字，点击“确定”后在网页上看到输出信息。</p>`,14);function u(h,d){return e(),p("div",null,[c,l(" more "),r,m,i])}const k=t(o,[["render",u],["__file","io.html.vue"]]);export{k as default};
