import{_ as a,X as i,Y as n,$ as e,Z as c,a0 as o,a3 as d,H as r}from"./framework-e3372978.js";const s={},h=d(`<h2 id="semantic" tabindex="-1"><a class="header-anchor" href="#semantic" aria-hidden="true">#</a> Semantic</h2><p>对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。</p><p>无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以便大家查看。所以我们需要一种规范的，语义化的备注格式，很快由知名项目牵头，全球接收并统一了一种语义化的备注格式，这就是 semantic 规范的来源。</p><h2 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h2><p>当一个仓库所有的 commit 信息都是用标准的 semantic 格式时，用户可以很方便的理解每一个 commit 的作用。</p><p>同时，semantic 支持直接将某个提交或 PR 与特定 issue 链接，并自动关闭或引用这些 issue。</p><p>通过一些第三方工具，大家可以基于这些备注信息进行过滤查找，更新日志生成等操作。</p><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
&lt;body&gt;

&lt;footer&gt;
</code></pre></div><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h3><p>第一行被称为 <code>header</code>，它必须只有一行，包括三个字段: <code>&lt;type&gt;</code>(必需)、<code>&lt;scope&gt;</code>(可选)和 <code>&lt;subject&gt;</code>(必需)</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><p>commit 的类型。</p><p>规范中规定了如下类型:</p><ul><li><code>feat</code>: feature, 新增功能</li><li><code>fix</code> : bug fix, 修复 bug</li><li><code>docs</code>: documentation, 仅仅修改了文档，如 <code>README.md</code></li><li><code>style</code>: style, 仅仅是对格式进行修改，如逗号、缩进、空格等，不改变代码逻辑</li><li><code>refactor</code>: refactor, 代码重构，一般更改了源文件或测试文件，但没有新增功能或修复 bug</li><li><code>perf</code>: performance, 优化相关，如提升性能、用户体验等</li><li><code>test</code>: test, 测试用例，包括单元测试，集成测试</li><li><code>chore</code>: chore, 对于库的其他内容的改变，一般不涉及到源文件或测试文件，比如更改 CI 设置，提升仓库以来等</li><li><code>revert</code>: 版本回滚</li></ul><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h3><p>用于说明 commit 影响的范围，比如: <code>views</code> , <code>component</code>, <code>utils</code>, <code>test</code>。这个是由项目的内容与结构决定的。</p><h3 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h3><p>commit 目的的简短描述，最好小于 50 字符，一般不超过 65 个字符，最长不超过 80 字符。</p><p>当 subject 限制的字符数无法详细说明此 commit 的变动时，将 commit 的具体变动放置在 body 中</p><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h3><p>对本次 commit 修改内容的具体描述，可以分为多行。<code>body</code> 是可选的，而且 <code>body</code> 可以有多行。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><p>可选的，前面有一空行。可以添加一些备注，一般放置 <code>BREAKING CHANGE</code>(一些破坏性的变动) 或修复的 bug(涉及的 issue)的链接。</p><h2 id="semantic-commit-与-changelog-生成" tabindex="-1"><a class="header-anchor" href="#semantic-commit-与-changelog-生成" aria-hidden="true">#</a> Semantic commit 与 Changelog 生成</h2><p>不同语言环境都有很多种工具来帮助您创建一个 semantic commit 或者自动生成 changelog。</p>`,26),l={class:"hint-container tip"},m=e("p",{class:"hint-container-title"},"案例",-1),p=e("p",null,"Node.js 环境下可以使用:",-1),u={href:"https://github.com/commitizen/cz-conventional-changelog",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"cz-conventional-changelog",-1),_=e("code",null,"git cz",-1),b={href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"conventional-changelog-cli",-1),x={href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"};function v(y,E){const t=r("ExternalLinkIcon");return i(),n("div",null,[h,e("div",l,[m,p,e("ul",null,[e("li",null,[e("p",null,[e("a",u,[g,c(t)]),o(" 提供 "),_,o(" 命令辅助创建 semantic commit。")])]),e("li",null,[e("p",null,[e("a",b,[f,c(t)]),o(" 来快速生成更新日志，如 "),e("a",x,[o("vuepress-theme-hope 的更改日志"),c(t)])])])])])])}const j=a(s,[["render",v],["__file","semantic.html.vue"]]);export{j as default};
