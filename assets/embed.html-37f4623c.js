import{_ as e,X as o,Y as i,$ as a,a0 as n,Z as p,a3 as s,H as c}from"./framework-e3372978.js";const l={},d=s(`<h2 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> Iframe</h2><p><code>&lt;iframe&gt;</code> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">allowfullscreen</span>
  <span class="token attr-name">sandbox</span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Fallback link for browsers that don&#39;t support iframes
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul><li><p>allowfullscreen</p><p>如果设置，<code>&lt;iframe&gt;</code> 则可以通过全屏 API 设置为全屏模式(稍微超出本文的范围)。</p></li><li><p>frameborder</p><p>如果设置为 1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0 删除边框。不推荐这样设置，因为在 CSS 中可以更好地实现相同的效果。border: none;</p></li><li><p>src</p><p>该属性与 <code>&lt;video&gt;/&lt;img&gt;</code> 一样包含指向要嵌入文档的 URL 路径。</p></li><li><p>width 和 height</p><p>这些属性指定您想要的 iframe 的宽度和高度。</p></li><li><p>备选内容 与 <code>&lt;video&gt;</code> 等其他类似元素相同，您可以在 <code>&lt;iframe&gt;&lt;/iframe&gt;</code> 标签之间包含备选内容，如果浏览器不支持 <code>&lt;iframe&gt;</code>，将会显示备选内容，这种情况下，我们已经添加了一个到该页面的链接。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>2020 年几乎不可能遇到不支持 <code>&lt;iframe&gt;</code> 的浏览器。</p></div></li><li><p>sandbox</p><p>该属性需要在已经支持其他 <code>&lt;iframe&gt;</code> 功能(例如 IE 10 及更高版本)但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置。</p></li></ul><h3 id="安全隐患" tabindex="-1"><a class="header-anchor" href="#安全隐患" aria-hidden="true">#</a> 安全隐患</h3><p>如果黑客试图恶意修改您的网页或欺骗人们进行不想做的事情时常把 iframe 作为共同的攻击目标(官方术语: 攻击向量)，例如显示用户名和密码等敏感信息。因此，规范工程师和浏览器开发人员已经开发了各种安全机制，使 <code>&lt;iframe&gt;</code> 更加安全。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>单击劫持是一种常见的 iframe 攻击，黑客将隐藏的 iframe 嵌入到您的文档中(或将您的文档嵌入到他们自己的恶意网站)，并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。</p></div><h4 id="只有在必要时嵌入" tabindex="-1"><a class="header-anchor" href="#只有在必要时嵌入" aria-hidden="true">#</a> 只有在必要时嵌入</h4><p>有时嵌入第三方内容(例如 YouTube 视频和地图)是有意义的，但如果您只在完全需要时嵌入第三方内容，您可以省去很多麻烦。网络安全的一个很好的经验法则是“您怎么谨慎都不为过，如果您决定要做这件事，多检查一遍；如果是别人做的，在被证明是安全的之前，都假设这是危险的。”</p><p>除了安全问题，您还应该意识到知识产权问题。无论在线内容还是离线内容，绝大部分内容都是有版权的，甚至是一些您没想到有版权的内容(例如，Wikimedia Commons 上的大多数图片)。不要在网页上展示一些不属于您的内容，除非您是所有者或所有者给了您明确的、书面的许可。对于侵犯版权的惩罚是严厉的。再说一次，您再小心也不为过。</p><p>如果内容获得许可，您必须遵守许可条款。例如，MDN 上的内容是在 CC-BY-SA 下许可的，这意味着，如果您要引用我们的内容，就必须用适当的方式注明来源，即使您对内容做了实质性的修改。</p><h4 id="使用-https" tabindex="-1"><a class="header-anchor" href="#使用-https" aria-hidden="true">#</a> 使用 HTTPS</h4><p>HTTPS 是 HTTP 的加密版本。您应该尽可能用 HTTPS 为您的网站提供服务:</p><ul><li>HTTPS 减少了远程内容在传输过程中被篡改的机会，</li><li>HTTPS 防止嵌入式内容访问您的父文档中的内容，反之亦然。</li></ul><p>由于 HTTPS 的第二个好处，无论成本如何，您绝对不能使用 HTTP 嵌入第三方内容(在最好的情况下，您的用户的 Web 浏览器会给他们一个可怕的警告)。</p><h4 id="始终使用-sandbox-属性" tabindex="-1"><a class="header-anchor" href="#始终使用-sandbox-属性" aria-hidden="true">#</a> 始终使用 sandbox 属性</h4><p>您应该给嵌入的内容仅能完成自己工作的权限，当然这也适用于您自己的内容。</p><p>一个允许包含在其里的代码以适当的方式执行或者用于测试，但不能对其他代码库(意外或恶意)造成任何损害的容器称为沙盒。</p><p>未沙盒化 (Unsandboxed) 内容可以做得太多，如执行 JavaScript，提交表单，弹出窗口等。默认情况下，您应该使用没有参数的 <code>sandbox</code> 属性来强制执行所有可用的限制，如我们前面的示例所示。如果真的需要关闭某些限制，您可以逐个添加权限(在 <code>sandbox=&quot;&quot;</code> 属性值内)。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>您永远不应该同时添加 <code>allow-scripts</code> 和 <code>allow-same-origin</code> 到您的 sandbox 属性中-在这种情况下，嵌入式内容可以绕过阻止站点执行脚本的同源安全策略，并使用 JavaScript 完全关闭沙盒。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果攻击者可以欺骗人们直接访问恶意内容(在 iframe 之外)，则沙盒无法提供保护。如果某些内容可能是恶意的(例如，用户生成的内容)，请保证其是从不同的域向您的主站点提供的。</p></div>`,21),r={class:"hint-container info"},u=a("p",{class:"hint-container-title"},"相关信息",-1),h={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox",target:"_blank",rel:"noopener noreferrer"},m=s('<h4 id="配置-csp-指令" tabindex="-1"><a class="header-anchor" href="#配置-csp-指令" aria-hidden="true">#</a> 配置 CSP 指令</h4><p>CSP 代表内容安全策略，它提供一组 HTTP 标头(由 web 服务器发送时与元数据一起发送的元数据)，旨在提高 HTML 文档的安全性。在 <code>&lt;iframe&gt;</code> 安全性方面，您可以将服务器配置为发送适当的 <code>X-Frame-Options</code> 标题。这样做可以防止其他网站在其网页中嵌入您的内容(这将导致点击和一系列其他攻击)。</p><h2 id="embed-和-object" tabindex="-1"><a class="header-anchor" href="#embed-和-object" aria-hidden="true">#</a> <code>&lt;embed&gt;</code> 和 <code>&lt;object&gt;</code></h2><p><code>&lt;embed&gt;</code> 和 <code>&lt;object&gt;</code> 元素的功能不同于 <code>&lt;iframe&gt;</code>。这些元素是用来嵌入多种类型的外部内容的通用嵌入工具，其中包括像 Java 小程序，PDF 这样的插件技术，甚至像视频，SVG 和图像的内容。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>目前浏览器对视频，SVG，图像的支持已经很好，而且网站应该使用 JavaScript 编写，所以不建议使用这两个元素。</p></div>',5);function v(k,b){const t=c("ExternalLinkIcon");return o(),i("div",null,[d,a("div",r,[u,a("p",null,[n("更多沙盒相关详情，请见 "),a("a",h,[n("MDN sandbox"),p(t)])])]),m])}const f=e(l,[["render",v],["__file","embed.html.vue"]]);export{f as default};
