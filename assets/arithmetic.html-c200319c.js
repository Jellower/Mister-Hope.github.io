import{_ as a,X as s,Y as n,a3 as e}from"./framework-e3372978.js";const p={},o=e(`<h2 id="算术表达式" tabindex="-1"><a class="header-anchor" href="#算术表达式" aria-hidden="true">#</a> 算术表达式</h2><p><code>((...))</code> 语法可以进行整数的算术运算。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token variable"><span class="token punctuation">((</span>foo <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">))</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
<span class="token number">10</span>
</code></pre></div><p><code>((...))</code> 会自动忽略内部的空格，所以下面的写法都正确，得到同样的结果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable"><span class="token punctuation">((</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">))</span></span>
<span class="token variable"><span class="token punctuation">((</span> <span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span> <span class="token punctuation">))</span></span>
<span class="token variable"><span class="token punctuation">((</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token punctuation">))</span></span>
</code></pre></div><p>这个语法不返回值，命令执行的结果根据算术运算的结果而定。只要算术结果不是 <code>0</code>，命令就算执行成功。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token variable"><span class="token punctuation">((</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token punctuation">))</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
</code></pre></div><p>上面例子中，<code>3 + 2</code> 的结果是 5，命令就算执行成功，环境变量 <code>$?</code> 为 <code>0</code>。</p><p>如果算术结果为 <code>0</code>，命令就算执行失败。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token variable"><span class="token punctuation">((</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token number">3</span> <span class="token punctuation">))</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre></div><p>上面例子中，<code>3 - 3</code> 的结果是 <code>0</code>，环境变量 <code>$?</code> 为 <code>1</code>，表示命令执行失败。</p><p>如果要读取算术运算的结果，需要在 <code>((...))</code> 前面加上美元符号 <code>$((...))</code>，使其变成算术表达式，返回算术运算的值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">4</span>
</code></pre></div><p><code>((...))</code> 语法支持的算术运算符如下。</p><ul><li><code>+</code>: 加法</li><li><code>-</code>: 减法</li><li><code>*</code>: 乘法</li><li><code>/</code>: 除法(整除)</li><li><code>%</code>: 余数</li><li><code>**</code>: 指数</li><li><code>++</code>: 自增运算(前缀或后缀)</li><li><code>--</code>: 自减运算(前缀或后缀)</li></ul><p>注意，除法运算符的返回结果总是整数，比如 <code>5</code> 除以 <code>2</code>，得到的结果是 <code>2</code>，而不是 <code>2.5</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">2</span>
</code></pre></div><p><code>++</code> 和 <code>--</code> 这两个运算符有前缀和后缀的区别。作为前缀是先运算后返回值，作为后缀是先返回值后运算。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token number">0</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>i<span class="token operator">++</span><span class="token variable">))</span></span>
<span class="token number">0</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token number">1</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token operator">++</span>i<span class="token variable">))</span></span>
<span class="token number">2</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>++</code> 作为后缀是先返回值，执行 <code>echo</code> 命令，再进行自增运算；作为前缀则是先进行自增运算，再返回值执行 <code>echo</code> 命令。</p><p><code>$((...))</code> 内部可以用圆括号改变运算顺序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token variable">))</span></span>
<span class="token number">20</span>
</code></pre></div><p>上面例子中，内部的圆括号让加法先于乘法执行。</p><p><code>$((...))</code> 结构可以嵌套。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token variable">))</span></span>
<span class="token number">75</span>
<span class="token comment"># 等同于</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token variable">$((</span><span class="token number">5</span><span class="token operator">**</span><span class="token number">2</span><span class="token variable">))</span></span> * <span class="token number">3</span><span class="token punctuation">))</span>
<span class="token number">75</span>
</code></pre></div><p>这个语法只能计算整数，否则会报错。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 报错</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">1.5</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
bash: 语法错误
</code></pre></div><p><code>$((...))</code> 的圆括号之中，不需要在变量名之前加上 <code>$</code>，不过加上也不报错。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">2</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$number <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
<span class="token number">3</span>
</code></pre></div><p>上面例子中，变量 <code>number</code> 前面有没有美元符号，结果都是一样的。</p><p>如果在 <code>$((...))</code> 里面使用字符串，Bash 会认为那是一个变量名。如果不存在同名变量，Bash 就会将其作为空值，因此不会报错。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> &quot;hello&quot; <span class="token operator">+</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">2</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> &quot;hello&quot; <span class="token operator">*</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">0</span>
</code></pre></div><p>上面例子中，<code>&quot;hello&quot;</code> 会被当作变量名，返回空值，而 <code>$((...))</code> 会将空值当作 <code>0</code>，所以乘法的运算结果就是 <code>0</code>。同理，如果 <code>$((...))</code> 里面使用不存在的变量，也会当作 <code>0</code> 处理。</p><p>如果一个变量的值为字符串，跟上面的处理逻辑是一样的。即该字符串如果不对应已存在的变量，在 <code>$((...))</code> 里面会被当作空值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>hello
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> foo <span class="token operator">+</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">2</span>
</code></pre></div><p>上面例子中，变量 <code>foo</code> 的值是 <code>hello</code>，而 <code>hello</code> 也会被看作变量名。这使得有可能写出动态替换的代码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>hello
$ <span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token number">3</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> foo <span class="token operator">+</span> <span class="token number">2</span> <span class="token variable">))</span></span>
<span class="token number">5</span>
</code></pre></div><p>上面代码中，<code>foo + 2</code> 取决于变量 <code>hello</code> 的值。</p><p>最后，<code>$[...]</code> 是以前的语法，也可以做整数运算，不建议使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token number">2</span>+2<span class="token punctuation">]</span>
<span class="token number">4</span>
</code></pre></div><h2 id="数值的进制" tabindex="-1"><a class="header-anchor" href="#数值的进制" aria-hidden="true">#</a> 数值的进制</h2><p>Bash 的数值默认都是十进制，但是在算术表达式中，也可以使用其他进制。</p><ul><li><code>number</code>: 没有任何特殊表示法的数字是十进制数(以 10 为底)。</li><li><code>0number</code>: 八进制数。</li><li><code>0xnumber</code>: 十六进制数。</li><li><code>base#number</code>: <code>base</code> 进制的数。</li></ul><p>下面是一些例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">0xff</span><span class="token variable">))</span></span>
<span class="token number">255</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">2</span>#<span class="token number">11111111</span><span class="token variable">))</span></span>
<span class="token number">255</span>
</code></pre></div><p>上面例子中，<code>0xff</code> 是十六进制数，<code>2#11111111</code> 是二进制数。</p><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2><p><code>$((...))</code> 支持以下的二进制位运算符。</p><ul><li><code>&lt;&lt;</code>: 位左移运算，把一个数字的所有位向左移动指定的位。</li><li><code>&gt;&gt;</code>: 位右移运算，把一个数字的所有位向右移动指定的位。</li><li><code>&amp;</code>: 位的“与”运算，对两个数字的所有位执行一个 <code>AND</code> 操作。</li><li><code>|</code>: 位的“或”运算，对两个数字的所有位执行一个 <code>OR</code> 操作。</li><li><code>~</code>: 位的“否”运算，对一个数字的所有位取反。</li><li><code>^</code>: 位的异或运算(exclusive or)，对两个数字的所有位执行一个异或操作。</li></ul><p>下面是右移运算符 <code>&gt;&gt;</code> 的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">16</span><span class="token operator">&gt;&gt;</span><span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">4</span>
</code></pre></div><p>下面是左移运算符 <code>&lt;&lt;</code> 的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">16</span><span class="token operator">&lt;&lt;</span><span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">64</span>
</code></pre></div><p>下面是 <code>17</code> (二进制 <code>10001</code>)和 <code>3</code> (二进制 <code>11</code>)的各种二进制运算的结果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">17</span><span class="token operator">&amp;</span><span class="token number">3</span><span class="token variable">))</span></span>
<span class="token number">1</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">17</span><span class="token operator">|</span><span class="token number">3</span><span class="token variable">))</span></span>
<span class="token number">19</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">17</span><span class="token operator">^</span><span class="token number">3</span><span class="token variable">))</span></span>
<span class="token number">18</span>
</code></pre></div><h2 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h2><p><code>$((...))</code> 支持以下的逻辑运算符。</p><ul><li><code>&lt;</code>: 小于</li><li><code>&gt;</code>: 大于</li><li><code>&lt;=</code>: 小于或相等</li><li><code>&gt;=</code>: 大于或相等</li><li><code>==</code>: 相等</li><li><code>!=</code>: 不相等</li><li><code>&amp;&amp;</code>: 逻辑与</li><li><code>||</code>: 逻辑或</li><li><code>!</code>: 逻辑否</li><li><code>expr1?expr2:expr3</code>: 三元条件运算符。若表达式 <code>expr1</code> 的计算结果为非零值(算术真)，则执行表达式 <code>expr2</code>，否则执行表达式 <code>expr3</code>。</li></ul><p>如果逻辑表达式为真，返回 <code>1</code>，否则返回 <code>0</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">1</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token variable">))</span></span>
<span class="token number">1</span>
</code></pre></div><p>三元运算符执行一个单独的逻辑测试。它用起来类似于 <code>if/then/else</code> 语句。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>a<span class="token operator">&lt;</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token variable">))</span></span>
<span class="token number">1</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>a<span class="token operator">&gt;</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token variable">))</span></span>
<span class="token number">0</span>
</code></pre></div><p>上面例子中，第一个表达式为真时，返回第二个表达式的值，否则返回第三个表达式的值。</p><h2 id="赋值运算" tabindex="-1"><a class="header-anchor" href="#赋值运算" aria-hidden="true">#</a> 赋值运算</h2><p>算术表达式 <code>$((...))</code> 可以执行赋值运算。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token variable">))</span></span>
<span class="token number">1</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token number">1</span>
</code></pre></div><p>上面例子中，<code>a=1</code> 对变量 <code>a</code> 进行赋值。这个式子本身也是一个表达式，返回值就是等号右边的值。</p><p><code>$((...))</code> 支持的赋值运算符，有以下这些。</p><ul><li><code>parameter = value</code>: 简单赋值。</li><li><code>parameter += value</code>: 等价于 <code>parameter = parameter + value</code>。</li><li><code>parameter -= value</code>: 等价于 <code>parameter = parameter – value</code>。</li><li><code>parameter *= value</code>: 等价于 <code>parameter = parameter * value</code>。</li><li><code>parameter /= value</code>: 等价于 <code>parameter = parameter / value</code>。</li><li><code>parameter %= value</code>: 等价于 <code>parameter = parameter % value</code>。</li><li><code>parameter &lt;&lt;= value</code>: 等价于 <code>parameter = parameter &lt;&lt; value</code>。</li><li><code>parameter &gt;&gt;= value</code>: 等价于 <code>parameter = parameter &gt;&gt; value</code>。</li><li><code>parameter &amp;= value</code>: 等价于 <code>parameter = parameter &amp; value</code>。</li><li><code>parameter |= value</code>: 等价于 <code>parameter = parameter | value</code>。</li><li><code>parameter ^= value</code>: 等价于 <code>parameter = parameter ^ value</code>。</li></ul><p>下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">5</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>foo<span class="token operator">*=</span><span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">10</span>
</code></pre></div><p>如果在表达式内部赋值，可以放在圆括号中，否则会报错。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> a<span class="token operator">&lt;</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>a<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">-=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token variable">))</span></span>
</code></pre></div><h2 id="求值运算" tabindex="-1"><a class="header-anchor" href="#求值运算" aria-hidden="true">#</a> 求值运算</h2><p>逗号 <code>,</code> 在 <code>$((...))</code> 内部是求值运算符，执行前后两个表达式，并返回后一个表达式的值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>foo <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token variable">))</span></span>
<span class="token number">12</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
<span class="token number">3</span>
</code></pre></div><p>上面例子中，逗号前后两个表达式都会执行，然后返回后一个表达式的值 <code>12</code>。</p><h2 id="expr-命令" tabindex="-1"><a class="header-anchor" href="#expr-命令" aria-hidden="true">#</a> expr 命令</h2><p><code>expr</code> 命令支持算术运算，可以不使用 <code>((...))</code> 语法。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">expr</span> <span class="token number">3</span> + <span class="token number">2</span>
<span class="token number">5</span>
</code></pre></div><p><code>expr</code> 命令支持变量替换。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">3</span>
$ <span class="token function">expr</span> <span class="token variable">$foo</span> + <span class="token number">2</span>
<span class="token number">5</span>
</code></pre></div><p><code>expr</code> 命令也不支持非整数参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">expr</span> <span class="token number">3.5</span> + <span class="token number">2</span>
expr: 非整数参数
</code></pre></div><p>上面例子中，如果有非整数的运算，<code>expr</code> 命令就报错了。</p>`,85),c=[o];function l(t,r){return s(),n("div",null,c)}const i=a(p,[["render",l],["__file","arithmetic.html.vue"]]);export{i as default};
