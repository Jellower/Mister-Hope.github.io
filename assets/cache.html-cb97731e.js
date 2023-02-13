import{_ as t,X as c,Y as p,$ as n,a0 as a,Z as e,a1 as o,a3 as i,H as l}from"./framework-e3372978.js";const u={},r=n("p",null,"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。",-1),d=n("p",null,"日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。",-1),h=n("p",null,"当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。",-1),k={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"缓存依赖",-1),y={href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"配置项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),a(" 配置项")],-1),v=n("h3",{id:"path",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#path","aria-hidden":"true"},"#"),a(" path")],-1),b=n("p",null,"要缓存和还原的文件，目录和通配符模式的列表。",-1),f={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"相关信息",-1),x={href:"https://github.com/actions/toolkit/tree/main/packages/glob",target:"_blank",rel:"noopener noreferrer"},$=i(`<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>用于保存缓存与还原缓存的的密钥</p><h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys" aria-hidden="true">#</a> restore-keys</h3><p>当 key 没有命中缓存是用于恢复缓存键值的有序列表</p><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><p><code>cache-hit</code>: 一个布尔值，表明是否找到与该键完全匹配的值</p><h2 id="缓存范围" tabindex="-1"><a class="header-anchor" href="#缓存范围" aria-hidden="true">#</a> 缓存范围</h2><p>缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>Yarn:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
  <span class="token comment"># 使用此 id 获得 \`cache-hit\`</span>
  <span class="token comment"># (\`steps.yarn-cache.outputs.cache-hit != &#39;true&#39;\`)</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/
    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      \${{ runner.os }}-yarn-</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个缓存键" tabindex="-1"><a class="header-anchor" href="#创建一个缓存键" aria-hidden="true">#</a> 创建一个缓存键</h2><p>缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。</p><p>例如，使用 <code>hashFiles</code> 功能可让您在依存关系更改时创建新的缓存。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      node_modules/</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><p>利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install
</code></pre></div><h2 id="缓存限制" tabindex="-1"><a class="header-anchor" href="#缓存限制" aria-hidden="true">#</a> 缓存限制</h2><p>一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。</p><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2>`,20),w={href:"https://github.com/actions/cache",target:"_blank",rel:"noopener noreferrer"};function B(N,V){const s=l("ExternalLinkIcon");return c(),p("div",null,[r,d,h,n("div",k,[m,n("p",null,[a("关于缓存依赖的文档，详见 "),n("a",y,[a("缓存依赖项以加快工作流程"),e(s)]),a("。")])]),o(" more "),_,v,b,n("div",f,[g,n("p",null,[a("支持的 glob 模式，请参见 "),n("a",x,[a("@actions/glob"),e(s)]),a("。")])]),$,n("p",null,[n("a",w,[a("https://github.com/actions/cache"),e(s)])])])}const E=t(u,[["render",B],["__file","cache.html.vue"]]);export{E as default};
