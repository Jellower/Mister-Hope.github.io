"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1053],{4902:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(66252).uE)('<p>面向对象编程——Object Oriented Programming，简称 OOP，是一种程序设计思想。OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。</p><p>面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。</p><p>而面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。</p><p>在 Python 中，所有数据类型都可以视为对象，当然也可以自定义对象。自定义的对象数据类型就是面向对象中的类 (Class) 的概念。</p><p>我们以一个例子来说明面向过程和面向对象在程序流程上的不同之处。</p><p>假设我们要处理学生的成绩表，为了表示一个学生的成绩，面向过程的程序可以用一个 dict 表示:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>std1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">:</span> <span class="token number">98</span> <span class="token punctuation">}</span>\nstd2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">:</span> <span class="token number">81</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>而处理学生成绩可以通过函数实现，比如打印学生的成绩:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>std<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>std<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> std<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果采用面向对象的程序设计思想，我们首选思考的不是程序的执行流程，而是 <code>Student</code> 这种数据类型应该被视为一个对象，这个对象拥有 <code>name</code> 和 <code>score</code> 这两个属性 (Property) 。如果要打印一个学生的成绩，首先必须创建出这个学生对应的对象，然后，给对象发一个 <code>print_score</code> 消息，让对象自己把自己的数据打印出来。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score\n\n    <span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>给对象发消息实际上就是调用对象对应的关联函数，我们称之为对象的方法 (Method) 。面向对象的程序写出来就像这样:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>\nlisa <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Lisa Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">87</span><span class="token punctuation">)</span>\nbart<span class="token punctuation">.</span>print_score<span class="token punctuation">(</span><span class="token punctuation">)</span>\nlisa<span class="token punctuation">.</span>print_score<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>面向对象的设计思想是从自然界中来的，因为在自然界中，类 (Class) 和实例 (Instance) 的概念是很自然的。Class 是一种抽象概念，比如我们定义的 Class——Student，是指学生这个概念，而实例 (Instance) 则是一个个具体的 Student，比如，<code>Bart Simpson</code> 和 <code>Lisa Simpson</code> 是两个具体的 Student。</p><p>所以，面向对象的设计思想是抽象出 Class，根据 Class 创建 Instance。</p><p>面向对象的抽象程度又比函数要高，因为一个 Class 既包含数据，又包含操作数据的方法。</p>',16),p={},e=(0,a(83744).Z)(p,[["render",function(n,s){return t}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},16907:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4754e3b1",path:"/code/language/python/oop/intro.html",title:"面向对象编程",lang:"zh-CN",frontmatter:{title:"面向对象编程",icon:"info",date:"2021-03-28T00:00:00.000Z",category:["Python"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/python/oop/intro.html"}],["meta",{property:"og:title",content:"面向对象编程"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2021-03-28T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"面向对象编程","image":[""],"datePublished":"2021-03-28T00:00:00.000Z","dateModified":"","author":[]}']]},excerpt:"",headers:[],git:{createdTime:1616944982e3,updatedTime:1644166018e3,contributors:[{name:"Mister-Hope",email:"zhangbowang1998@gmail.com",commits:1},{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.41,words:724},filePathRelative:"code/language/python/oop/intro.md"}}}]);