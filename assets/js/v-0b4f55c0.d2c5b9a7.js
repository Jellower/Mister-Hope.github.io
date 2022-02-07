"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[74311],{13134:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<p>面向对象最重要的概念就是类 (Class) 和实例 (Instance) ，必须牢记类是抽象的模板，比如 <code>Student</code> 类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。</p><p>仍以 <code>Student</code> 类为例，在 Python 中，定义类是通过 class 关键字:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">pass</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>class 后面紧接着是类名，即 <code>Student</code>，类名通常是大写开头的单词，紧接着是(object)，表示该类是从哪个类继承下来的，继承的概念我们后面再讲，通常，如果没有合适的继承类，就使用 object 类，这是所有类最终都会继承的类。</p><p>定义好了 <code>Student</code> 类，就可以根据 <code>Student</code> 类创建出 <code>Student</code> 的实例，创建实例是通过 <code>className()</code> 实现的:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart\n<span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>Student <span class="token builtin">object</span> at <span class="token number">0x10a67a590</span><span class="token operator">&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Student\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.Student&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到，变量 <code>bart</code> 指向的就是一个 Student 的实例，后面的 <code>0x10a67a590</code> 是内存地址，每个 object 的地址都不一样，而 <code>Student</code> 本身则是一个类。</p><p>可以自由地给一个实例变量绑定属性，比如，给实例 <code>bart</code> 绑定一个 <code>name</code> 属性:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bart Simpson&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>name\n<span class="token string">&#39;Bart Simpson&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>由于类可以起到模板的作用，因此，可以在创建实例的时候，把一些我们认为必须绑定的属性强制填写进去。通过定义一个特殊的 <strong>init</strong> 方法，在创建实例的时候，就把 <code>name</code>，<code>score</code> 等属性绑上去:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>特殊方法 <code>__init__</code> 前后分别有两个下划线!!!</p></div><p>由于 <strong>init</strong> 方法的第一个参数永远是 <code>self</code>，表示创建的实例本身，因此，在 <strong>init</strong> 方法内部，就可以把各种属性绑定到 <code>self</code>，因为 <code>self</code> 就指向创建的实例本身。</p><p>有了 <strong>init</strong> 方法，在创建实例的时候，就不能传入空的参数了，必须传入与 <strong>init</strong> 方法匹配的参数，但 self 不需要传，Python 解释器自己会把实例变量传进去:</p><div class="language-pt ext-pt line-numbers-mode"><pre class="language-pt"><code>&gt;&gt;&gt; bart = Student(&#39;Bart Simpson&#39;, 59)\n&gt;&gt;&gt; bart.name\n&#39;Bart Simpson&#39;\n&gt;&gt;&gt; bart.score\n59\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>和普通的函数相比，在类中定义的函数只有一点不同，就是第一个参数永远是实例变量 self，并且，调用时，不用传递该参数。除此之外，类的方法和普通函数没有什么区别，所以，您仍然可以用默认参数、可变参数、关键字参数和命名关键字参数。</p><h2 id="数据封装" tabindex="-1"><a class="header-anchor" href="#数据封装" aria-hidden="true">#</a> 数据封装</h2><p>面向对象编程的一个重要特点就是数据封装。在上面的 Student 类中，每个实例就拥有各自的 name 和 score 这些数据。我们可以通过函数来访问这些数据，比如打印一个学生的成绩:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>std<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>std<span class="token punctuation">.</span>name<span class="token punctuation">,</span> std<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> print_score<span class="token punctuation">(</span>bart<span class="token punctuation">)</span>\nBart Simpson<span class="token punctuation">:</span> <span class="token number">59</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但是，既然 Student 实例本身就拥有这些数据，要访问这些数据，就没有必要从外面的函数去访问，可以直接在 Student 类的内部定义访问数据的函数，这样，就把“数据”给封装起来了。这些封装数据的函数是和 Student 类本身是关联起来的，我们称之为类的方法:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score\n\n    <span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>要定义一个方法，除了第一个参数是 self 外，其他和普通函数一样。要调用一个方法，只需要在实例变量上直接调用，除了 self 不用传递，其他参数正常传入:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>print_score<span class="token punctuation">(</span><span class="token punctuation">)</span>\nBart Simpson<span class="token punctuation">:</span> <span class="token number">59</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样一来，我们从外部看 Student 类，就只需要知道，创建实例需要给出 name 和 score，而如何打印，都是在 Student 类的内部定义的，这些数据和逻辑被“封装”起来了，调用很容易，但却不用知道内部实现的细节。</p><p>封装的另一个好处是可以给 Student 类增加新的方法，比如 get_grade:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">def</span> <span class="token function">get_grade</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">if</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;A&#39;</span>\n        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;B&#39;</span>\n        <span class="token keyword">else</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;C&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>同样的，get_grade 方法可以直接在实例变量上调用，不需要知道内部实现细节:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>\n<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score\n\n    <span class="token keyword">def</span> <span class="token function">get_grade</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">if</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;A&#39;</span>\n        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;B&#39;</span>\n        <span class="token keyword">else</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;C&#39;</span>\n\nlisa <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span>\nbart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>lisa<span class="token punctuation">.</span>name<span class="token punctuation">,</span> lisa<span class="token punctuation">.</span>get_grade<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment"># Lisa A</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>bart<span class="token punctuation">.</span>name<span class="token punctuation">,</span> bart<span class="token punctuation">.</span>get_grade<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment"># Bart C</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="实例属性和类属性" tabindex="-1"><a class="header-anchor" href="#实例属性和类属性" aria-hidden="true">#</a> 实例属性和类属性</h2><p>由于 Python 是动态语言，根据类创建的实例可以任意绑定属性。</p><p>给实例绑定属性的方法是通过实例变量，或者通过 <code>self</code> 变量:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n\ns <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span>\ns<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">90</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>但是，如果 <code>Student</code> 类本身需要绑定一个属性呢？可以直接在 class 中定义属性，这种属性是类属性，归 <code>Student</code> 类所有:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    name <span class="token operator">=</span> <span class="token string">&#39;Student&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当我们定义了一个类属性后，这个属性虽然归类所有，但类的所有实例都可以访问到。来测试一下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     name <span class="token operator">=</span> <span class="token string">&#39;Student&#39;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 创建实例s</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># 打印name属性，因为实例并没有name属性，所以会继续查找class的name属性</span>\nStudent\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Student<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># 打印类的name属性</span>\nStudent\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span> <span class="token comment"># 给实例绑定name属性</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># 由于实例属性优先级比类属性高，因此，它会屏蔽掉类的name属性</span>\nMichael\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Student<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># 但是类属性并未消失，用Student.name仍然可以访问</span>\nStudent\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">del</span> s<span class="token punctuation">.</span>name <span class="token comment"># 如果删除实例的name属性</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># 再次调用s.name，由于实例的name属性没有找到，类的name属性就显示出来了</span>\nStudent\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>从上面的例子可以看出，在编写程序的时候，千万<strong>不要对实例属性和类属性使用相同的名字</strong>，因为相同名称的实例属性将屏蔽掉类属性，但是当您删除实例属性后，再使用相同的名称，访问到的将是类属性。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><p>类是创建实例的模板，而实例则是一个一个具体的对象，各个实例拥有的数据都互相独立，互不影响；</p></li><li><p>方法就是与实例绑定的函数，和普通函数不同，方法可以直接访问实例的数据；</p></li><li><p>通过在实例上调用方法，我们就直接操作了对象内部的数据，但无需知道方法内部的实现细节。</p></li><li><p>和静态语言不同，Python 允许对实例变量绑定任何数据，也就是说，对于两个实例变量，虽然它们都是同一个类的不同实例，但拥有的变量名称都可能不同:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> lisa <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Lisa Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">87</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">8</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>age\n<span class="token number">8</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> lisa<span class="token punctuation">.</span>age\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nAttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Student&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;age&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>实例属性属于各个实例所有，互不干扰；</p></li><li><p>类属性属于类所有，所有实例共享一个属性；</p></li><li><p>不要对实例属性和类属性使用相同的名字，否则将产生难以发现的错误。</p></li></ul>',39),t={},e=(0,a(83744).Z)(t,[["render",function(n,s){return p}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},56382:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0b4f55c0",path:"/code/language/python/oop/instance.html",title:"类和实例",lang:"zh-CN",frontmatter:{title:"类和实例",author:"廖雪峰",icon:"class",date:"2021-03-28T00:00:00.000Z",category:["Python"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/python/oop/instance.html"}],["meta",{property:"og:title",content:"类和实例"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:published_time",content:"2021-03-28T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"类和实例","image":[""],"datePublished":"2021-03-28T00:00:00.000Z","dateModified":"","author":[{"@type":"Person","name":"廖雪峰"}]}']]},excerpt:"<p>面向对象最重要的概念就是类 (Class) 和实例 (Instance) ，必须牢记类是抽象的模板，比如 <code>Student</code> 类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。</p>\n",headers:[{level:2,title:"数据封装",slug:"数据封装",children:[]},{level:2,title:"实例属性和类属性",slug:"实例属性和类属性",children:[]},{level:2,title:"小结",slug:"小结",children:[]}],git:{createdTime:1616944982e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2},{name:"Mister-Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:5.94,words:1783},filePathRelative:"code/language/python/oop/instance.md"}}}]);