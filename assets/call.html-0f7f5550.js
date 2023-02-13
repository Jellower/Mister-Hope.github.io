import{_ as n,X as s,Y as a,a3 as p}from"./framework-e3372978.js";const t={},o=p(`<p>调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 10</span>
<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 9</span>
</code></pre></div><p>由于 JavaScript 允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;blablabla&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 10</span>
<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&quot;haha&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hehe&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 9</span>
</code></pre></div><p>传入的参数比定义的少也没有问题:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 NaN</span>
</code></pre></div><p>此时 <code>abs(x)</code> 函数的参数 x 将收到 <code>undefined</code>，计算结果为 <code>NaN</code>。</p><p>要避免收到 <code>undefined</code>，可以对参数进行检查:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">!==</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;Not a number&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token operator">-</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="递归调用" tabindex="-1"><a class="header-anchor" href="#递归调用" aria-hidden="true">#</a> 递归调用</h2><p>函数可以调用自身，这就是递归(recursion)。下面就是通过递归，计算斐波那契数列的代码。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
</code></pre></div><p>上面代码中，<code>fib</code> 函数内部又调用了 <code>fib</code>，计算得到斐波那契数列的第 6 个元素是 8。</p>`,13),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","call.html.vue"]]);export{i as default};
