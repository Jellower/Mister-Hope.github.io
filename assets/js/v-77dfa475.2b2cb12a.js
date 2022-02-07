"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1618],{23368:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(66252);const p=(0,t.uE)('<p>本章是最常见的的 HTML 标签介绍。</p><h2 id="标题和段落" tabindex="-1"><a class="header-anchor" href="#标题和段落" aria-hidden="true">#</a> 标题和段落</h2><p>大部分的文本结构由标题和段落组成。不管是小说、报刊、教科书还是杂志等。</p><p>内容结构化会使读者的阅读体验更轻松，更愉快。</p><p>在 HTML 中，每个段落是通过 <code>&lt;p&gt;</code> 元素标签进行定义的, 比如下面这样:</p><div id="code-demo-6d3e59b6" class="code-demo-wrapper" data-title="%E4%B8%80%E4%B8%AA%E6%AE%B5%E8%90%BD" data-code="%7B%22html%22%3A%22%3Cp%3E%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E6%AE%B5%E8%90%BD%EF%BC%8C%E5%8D%83%E7%9C%9F%E4%B8%87%E7%A1%AE%E3%80%82%3C%2Fp%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是一个段落，千真万确。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p>每个标题(Heading)是通过“标题标签”进行定义的:</p><div id="code-demo-1dcc6da6" class="code-demo-wrapper" data-title="%E4%B8%80%E4%B8%AA%E6%A0%87%E9%A2%98" data-code="%7B%22html%22%3A%22%3Ch1%3E%E6%88%91%E6%98%AF%E6%96%87%E7%AB%A0%E7%9A%84%E6%A0%87%E9%A2%98%3C%2Fh1%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>我是文章的标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p>这里有六个标题元素标签 —— <code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>、<code>&lt;h3&gt;</code>、<code>&lt;h4&gt;</code>、<code>&lt;h5&gt;</code>、<code>&lt;h6&gt;</code>。每个元素代表文档中不同级别的内容; <code>&lt;h1&gt;</code> 表示主标题(the main heading)，<code>&lt;h2&gt;</code> 表示二级子标题(subheadings)，<code>&lt;h3&gt;</code> 表示三级子标题(sub-subheadings)，等等。</p><div class="custom-container tip"><p class="custom-container-title">最佳实践</p><ul><li><p>您应该最好只对每个页面使用一次 <code>&lt;h1&gt;</code> — 这是顶级标题，所有其他标题位于层次结构中的下方。</p></li><li><p>请确保在层次结构中以正确的顺序使用标题。不要使用 <code>&lt;h3&gt;</code> 来表示副标题，后面跟 <code>&lt;h2&gt;</code> 来表示副副标题 - 这是没有意义的，会导致奇怪的结果。</p></li><li><p>在可用的六个标题级别中，您应该旨在每页使用不超过三个，除非您认为有必要使用更多。具有许多级别的文档(即，较深的标题层次结构)变得难以操作并且难以导航。在这种情况下，如果可能，建议将内容分散在多个页面上。</p></li></ul></div><div class="custom-container tip"><p class="custom-container-title">为什么需要结构化</p><p>这是因为没有元素给内容结构，所以浏览器不知道什么是标题，什么是段落。此外:</p><ul><li>用户在阅读网页时，往往会快速浏览以查找相关内容，经常只是阅读开头的标题(我们通常在一个网页上会花费很少的时间)。如果用户不能在几秒内看到一些有用的内容，他们很可能会感到沮丧并离开。</li><li>对您的网页建立索引的搜索引擎将标题的内容视为影响网页搜索排名的重要关键字。没有标题，您的网页在 SEO(搜索引擎优化)方面效果不佳。</li><li>严重视力障碍者通常不会阅读网页；他们用听力来代替。完成这项工作的软件叫做屏幕阅读器(screen reader)。该软件提供了快速访问给定文本内容的方法。在使用的各种技术中，它们通过朗读标题来提供文档的概述，让用户能快速找到他们需要的信息。如果标题不可用，用户将被迫听到整个文档的大声朗读。</li><li>使用 CSS 样式化内容，或者使用 JavaScript 做一些有趣的事情，您需要包含相关内容的元素，所以 CSS / JavaScript 可以有效地定位它。</li></ul></div><div class="custom-container tip"><p class="custom-container-title">为什么需要语义</p><p>在我们身边的任何地方都要依赖语义学。我们依靠以前的经验就知道日常事物都代表什么；当我们看到什么，我们就会知道它代表什么。举个例子, 我们知道红色交通灯表示“停止”，绿色交通灯表示”通行“。</p><p>同样的道理，我们需要确保使用了正确的元素来给予内容正确的意思、作用以及外形。在这里，<code>&lt;h1&gt;</code> 元素也是一个语义元素，它给出了包裹在您的页面上用来表示顶级标题的角色(或意义)的文本。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>这是一个顶级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>一般来说，浏览器会给它一个更大的字形来让它看上去像个标题。虽然您可以使用 CSS 让它变成任何您想要的样式。更重要的是，它的语义值将以多种方式被使用，比如通过搜索引擎和屏幕阅读器(上文提到过的)。</p><p>在另一方面，您可以让任一元素看起来像一个顶级标题，如下:</p><div id="code-demo-7f860608" class="code-demo-wrapper" data-title="%E4%B8%80%E4%B8%AA%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%BE%88%E5%83%8F%E9%A1%B6%E7%BA%A7%E6%A0%87%E9%A2%98%E7%9A%84%20span" data-code="%7B%22html%22%3A%22%3Cspan%20style%3D%5C%22font-size%3A%2032px%3B%20margin%3A%2021px%200%3B%5C%22%3E%E8%BF%99%E6%98%AF%E9%A1%B6%E7%BA%A7%E6%A0%87%E9%A2%98%E5%90%97%3F%20%3C%2Fspan%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 21px 0<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>这是顶级标题吗? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p>这是一个 <code>&lt;span&gt;</code> 元素，它没有语义。当您想要对它用 CSS(或者 JS)时，您可以用它包裹内容，且不需要附加任何额外的意义。我们已经对它使用了 CSS 来让它看起来像一个顶级标题。然而，由于它没有语义值，所以它不会有任何上文提到的帮助。最好的方法是使用相关的 HTML 元素来标记这个项目。</p></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>列表在生活中随处可见，一共有三种不同类型的列表。</p><h3 id="无序-unordered" tabindex="-1"><a class="header-anchor" href="#无序-unordered" aria-hidden="true">#</a> 无序 Unordered</h3><p>无序的列表被用来标记每个项目。在这里，项目的顺序并不重要。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>豆浆\n油条\n豆汁\n焦圈\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>每份无序的清单从 <code>&lt;ul&gt;</code> 元素开始，它包裹所有列表项目，下一步就是用 <code>&lt;li&gt;</code> 元素把每个列出的项目分别包裹起来:</p><div id="code-demo-54a267c0" class="code-demo-wrapper" data-title="%E6%97%A0%E5%BA%8F%E5%88%97%E8%A1%A8" data-code="%7B%22html%22%3A%22%3Cul%3E%5Cn%20%20%3Cli%3E%E8%B1%86%E6%B5%86%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E6%B2%B9%E6%9D%A1%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E8%B1%86%E6%B1%81%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E7%84%A6%E5%9C%88%3C%2Fli%3E%5Cn%3C%2Ful%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>豆浆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>油条<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>豆汁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>焦圈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h3 id="有序-ordered" tabindex="-1"><a class="header-anchor" href="#有序-ordered" aria-hidden="true">#</a> 有序 Ordered</h3><p>有序的列表是根据项目的顺序列出来的——让我们以一组方向为例:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>沿着条路走到头\n右转\n直行穿过第一个十字路口\n在第三个十字路口处左转\n继续走 300 米，学校就在您的右手边\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这个标记的结构和无序列表一样，唯一不同的是您需要用 <code>&lt;ol&gt;</code> 元素将所有项目包裹, 而不是用 <code>&lt;ul&gt;</code>:</p><div id="code-demo-751fc4c0" class="code-demo-wrapper" data-title="%E6%9C%89%E5%BA%8F%E5%88%97%E8%A1%A8" data-code="%7B%22html%22%3A%22%3Col%3E%5Cn%20%20%3Cli%3E%E6%B2%BF%E7%9D%80%E6%9D%A1%E8%B7%AF%E8%B5%B0%E5%88%B0%E5%A4%B4%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E5%8F%B3%E8%BD%AC%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E7%9B%B4%E8%A1%8C%E7%A9%BF%E8%BF%87%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8D%81%E5%AD%97%E8%B7%AF%E5%8F%A3%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E5%9C%A8%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8D%81%E5%AD%97%E8%B7%AF%E5%8F%A3%E5%A4%84%E5%B7%A6%E8%BD%AC%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E7%BB%A7%E7%BB%AD%E8%B5%B0%20300%20%E7%B1%B3%EF%BC%8C%E5%AD%A6%E6%A0%A1%E5%B0%B1%E5%9C%A8%E6%82%A8%E7%9A%84%E5%8F%B3%E6%89%8B%E8%BE%B9%3C%2Fli%3E%5Cn%3C%2Fol%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>沿着条路走到头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>右转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>直行穿过第一个十字路口<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>在第三个十字路口处左转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>继续走 300 米，学校就在您的右手边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h3 id="描述列表" tabindex="-1"><a class="header-anchor" href="#描述列表" aria-hidden="true">#</a> 描述列表</h3>',25),e=(0,t.Uk)("详情请见 "),l=(0,t.Uk)("格式化 → 描述列表"),c=(0,t.uE)('<h3 id="嵌套列表-nesting-lists" tabindex="-1"><a class="header-anchor" href="#嵌套列表-nesting-lists" aria-hidden="true">#</a> 嵌套列表 Nesting lists</h3><p>请务必注意正确嵌套列表，不要忘记父元素 <code>&lt;ul&gt;</code></p><div id="code-demo-212268c2" class="code-demo-wrapper" data-title="%E4%B8%80%E4%B8%AA%E5%B5%8C%E5%A5%97%E5%88%97%E8%A1%A8" data-code="%7B%22html%22%3A%22%3Col%3E%5Cn%20%20%3Cli%3E%5Cn%20%20%20%20%E5%85%88%E7%94%A8%E8%9B%8B%E7%99%BD%E4%B8%80%E4%B8%AA%E3%80%81%E7%9B%90%E5%8D%8A%E8%8C%B6%E5%8C%99%E5%8F%8A%E6%B7%80%E7%B2%89%E4%B8%A4%E5%A4%A7%E5%8C%99%E6%90%85%E6%8B%8C%E5%9D%87%E5%8C%80%EF%BC%8C%E8%B0%83%E6%88%90%E2%80%9C%E8%85%8C%E6%96%99%E2%80%9D%EF%BC%8C%E9%B8%A1%E8%83%B8%E8%82%89%E5%88%87%E6%88%90%E7%BA%A6%E4%B8%80%E5%8E%98%E7%B1%B3%E8%A7%81%E6%96%B9%E7%9A%84%E7%A2%8E%E4%B8%81%E5%B9%B6%E7%94%A8%E2%80%9C%E8%85%8C%E6%96%99%E2%80%9D%E6%90%85%E6%8B%8C%E5%9D%87%E5%8C%80%EF%BC%8C%E8%85%8C%E6%B8%8D%E5%8D%8A%E5%B0%8F%E6%97%B6%E3%80%82%5Cn%20%20%3C%2Fli%3E%5Cn%20%20%3Cli%3E%5Cn%20%20%20%20%E7%94%A8%E9%85%B1%E6%B2%B9%E4%B8%80%E5%A4%A7%E5%8C%99%E3%80%81%E6%B7%80%E7%B2%89%E6%B0%B4%E4%B8%80%E5%A4%A7%E5%8C%99%E3%80%81%E7%B3%96%E5%8D%8A%E8%8C%B6%E5%8C%99%E3%80%81%E7%9B%90%E5%9B%9B%E5%88%86%E4%B9%8B%E4%B8%80%E8%8C%B6%E5%8C%99%E3%80%81%E7%99%BD%E9%86%8B%E4%B8%80%E8%8C%B6%E5%8C%99%E3%80%81%E8%92%9C%E6%9C%AB%E5%8D%8A%E8%8C%B6%E5%8C%99%E8%B0%83%E6%8B%8C%E5%9D%87%E5%8C%80%EF%BC%8C%E8%B0%83%E6%88%90%E2%80%9C%E7%BB%BC%E5%90%88%E8%B0%83%E5%91%B3%E6%96%99%E2%80%9D%E3%80%82%5Cn%20%20%3C%2Fli%3E%5Cn%20%20%3Cli%3E%5Cn%20%20%20%20%E9%B8%A1%E4%B8%81%E8%85%8C%E5%A5%BD%E4%BB%A5%E5%90%8E%EF%BC%8C%E8%89%B2%E6%8B%89%E6%B2%B9%E4%B8%8B%E9%94%85%E7%83%A7%E7%83%AD%EF%BC%8C%E5%85%88%E5%B0%86%E9%B8%A1%E4%B8%81%E5%80%92%E5%85%A5%E9%94%85%E5%86%85%EF%BC%8C%E7%94%A8%E5%A4%A7%E7%81%AB%E5%BF%AB%E7%82%B8%E5%8D%8A%E5%88%86%E9%92%9F%EF%BC%8C%E7%82%B8%E5%88%B0%E5%8F%98%E8%89%B2%E4%B9%8B%E5%90%8E%EF%BC%8C%E6%8D%9E%E5%87%BA%E6%9D%A5%E6%B2%A5%E5%B9%B2%E6%B2%B9%E6%B1%81%E5%A4%87%E7%94%A8%E3%80%82%5Cn%20%20%3C%2Fli%3E%5Cn%20%20%3Cli%3E%5Cn%20%20%20%20%E5%9C%A8%E9%94%85%E9%87%8C%E7%95%99%E4%B8%8B%E7%BA%A6%E4%B8%A4%E5%A4%A7%E5%8C%99%E6%B2%B9%EF%BC%8C%E7%83%A7%E7%83%AD%E5%90%8E%E5%B0%86%E5%88%87%E5%A5%BD%E7%9A%84%E5%B9%B2%E8%BE%A3%E6%A4%92%E4%B8%8B%E9%94%85%EF%BC%8C%E7%94%A8%E5%B0%8F%E7%81%AB%E7%82%92%E9%A6%99%E5%90%8E%EF%BC%8C%E5%86%8D%E6%94%BE%E5%85%A5%E8%8A%B1%E6%A4%92%E7%B2%92%E5%92%8C%E8%91%B1%E6%AE%B5%E4%B8%80%E8%B5%B7%E7%88%86%E9%A6%99%E3%80%82%E9%9A%8F%E5%90%8E%E9%B8%A1%E4%B8%81%E9%87%8D%E6%96%B0%E4%B8%8B%E9%94%85%EF%BC%8C%E7%94%A8%E5%A4%A7%E7%81%AB%E5%BF%AB%E7%82%92%E7%89%87%E5%88%BB%E5%90%8E%EF%BC%8C%E5%86%8D%E5%80%92%E5%85%A5%E2%80%9C%E7%BB%BC%E5%90%88%E8%B0%83%E5%91%B3%E6%96%99%E2%80%9D%E7%BB%A7%E7%BB%AD%E5%BF%AB%E7%82%92%E3%80%82%5Cn%20%20%20%20%3Cul%3E%5Cn%20%20%20%20%20%20%3Cli%3E%5Cn%20%20%20%20%20%20%20%20%E5%A6%82%E6%9E%9C%E6%82%A8%E9%87%87%E7%94%A8%E6%AD%A3%E5%AE%97%E5%B7%9D%E8%8F%9C%E5%81%9A%E6%B3%95%EF%BC%8C%E6%9C%80%E5%90%8E%E5%8F%AA%E9%9C%80%E5%8A%A0%E5%85%A5%E8%8A%B1%E7%94%9F%E7%B1%B3%EF%BC%8C%E7%82%92%E6%8B%8C%E5%87%A0%E4%B8%8B%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%B5%B7%E9%94%85%E4%BA%86%E3%80%82%5Cn%20%20%20%20%20%20%3C%2Fli%3E%5Cn%20%20%20%20%20%20%3Cli%3E%E5%A6%82%E6%9E%9C%E6%82%A8%E5%9C%A8%E5%8C%97%E6%96%B9%EF%BC%8C%E5%8F%AF%E5%8A%A0%E5%85%A5%E9%BB%84%E7%93%9C%E4%B8%81%E3%80%81%E8%83%A1%E8%90%9D%E5%8D%9C%E4%B8%81%E5%92%8C%E8%8A%B1%E7%94%9F%E7%B1%B3%EF%BC%8C%E7%BF%BB%E7%82%92%E5%90%8E%E8%B5%B7%E9%94%85%E3%80%82%3C%2Fli%3E%5Cn%20%20%20%20%3C%2Ful%3E%5Cn%20%20%3C%2Fli%3E%5Cn%3C%2Fol%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n    先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n    用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n    鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n    在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n        如果您采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>如果您在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h2 id="重点强调" tabindex="-1"><a class="header-anchor" href="#重点强调" aria-hidden="true">#</a> 重点强调</h2><p>在人类语言中，为了突出一句话的意思，我们通常强调某些词，并且我们通常想要标记某些词作为重点或者在某种程度上的不同。HTML 提供了许多语义化的元素，并且允许我们通过这些元素的意义标记正文内容，在这个章节中，我们将看到最常见的一小部分元素。</p><h3 id="强调" tabindex="-1"><a class="header-anchor" href="#强调" aria-hidden="true">#</a> 强调</h3><p>当我们想要在口语中添加强调，我们重读某些词，以便隐含的说出我们想要说的意思。类似的，在写作中，我们通过将文字写成斜体来强调它。比如，接下来的两个句子就有不同的含义.</p><p>I am glad you weren’t late.</p><p>I am <em>glad</em> you weren’t <em>late</em>.</p><p>第一句话听起来真的像松了一口气因为没有迟到。相反，第二句话听起来具有讽刺性而且有隐含的攻击性，表达对一个人迟到的恼怒。</p><p>在 HTML 中我们用 <code>&lt;em&gt;</code>(emphasis)元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为斜体，但您不应该纯粹使用这个标签来获得斜体风格，为了获得斜体风格，您应该使用 <code>&lt;span&gt;</code> 元素和一些 CSS，或者是 <code>&lt;i&gt;</code> 元素(见下文)。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>I am <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>glad<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> you weren&#39;t <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>late<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="非常重要" tabindex="-1"><a class="header-anchor" href="#非常重要" aria-hidden="true">#</a> 非常重要</h3><p>为了强调重要的词，在口语方面我们往往用重音强调，在文字方面则是用粗体字来达到强调的效果。</p><p>在 HTML 中我们用 <code>&lt;strong&gt;</code> (strong importance) 元素来标记这样的请况。这样做既可以让文档更加地有用，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为粗体，但您不应该纯粹使用这个标签来获得粗体风格，为了获得粗体风格，您应该使用 <code>&lt;span&gt;</code> 元素和一些 CSS，或者是 <code>&lt;b&gt;</code> 元素 (见下文)。</p><div id="code-demo-26f66b68" class="code-demo-wrapper" data-title="%E5%BC%BA%E8%B0%83" data-code="%7B%22html%22%3A%22%3Cp%3EThis%20liquid%20is%20%3Cstrong%3Ehighly%20toxic%3C%2Fstrong%3E.%3C%2Fp%3E%5Cn%5Cn%3Cp%3EI%20am%20counting%20on%20you.%20%3Cstrong%3EDo%20not%3C%2Fstrong%3E%20be%20late!%3C%2Fp%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This liquid is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>highly toxic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>I am counting on you. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Do not<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> be late!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p>如有需要您可以将 strong 元素和 em 元素嵌套在其他的标签中:</p><div id="code-demo-2d9a2132" class="code-demo-wrapper" data-title="%E6%A0%87%E7%AD%BE%E7%9A%84%E5%B5%8C%E5%A5%97" data-code="%7B%22html%22%3A%22%3Cp%3E%5Cn%20%20This%20liquid%20is%20%3Cstrong%3Ehighly%20toxic%3C%2Fstrong%3E%20%E2%80%94%20if%20you%20drink%20it%2C%5Cn%20%20%3Cstrong%3Eyou%20may%20%3Cem%3Edie%3C%2Fem%3E%3C%2Fstrong%5Cn%20%20%3E.%5Cn%3C%2Fp%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n  This liquid is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>highly toxic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> — if you drink it,\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>you may <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>die<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span>\n  <span class="token punctuation">&gt;</span></span>.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h3 id="斜体字、粗体字、下划线" tabindex="-1"><a class="header-anchor" href="#斜体字、粗体字、下划线" aria-hidden="true">#</a> 斜体字、粗体字、下划线</h3><p>迄今为止我们已经讨论的元素都是意义清楚的语义元素。<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, 和 <code>&lt;u&gt;</code> 的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样的元素，仅仅影响表象而且没有语义，被称为表象元素(presentational elements)并且不应该再被使用。因为正如我们在之前看到的，语义对可访问性，SEO(搜索引擎优化)等非常重要。</p><p>HTML5 用新的语义规则重新定义了 <code>&lt;b&gt;</code>,<code>&lt;i&gt;</code> 和 <code>&lt;u&gt;</code>,稍微有点混乱。</p><p>这里是最好的经验法则: 使用 <code>&lt;b&gt;</code>,<code>&lt;i&gt;</code>,<code>&lt;u&gt;</code> 来传达传统意义上的粗体，斜体或下划线是合适的，没有其他元素更适合这样用了。然而，始终拥有可访问性的思维模式是至关重要的。斜体的概念对人们使用屏幕阅读器是没有帮助的，对使用其他书写系统而不是拉丁文书写系统的人们也是没有帮助的。</p><ul><li><code>&lt;i&gt;</code> 被用来传达传统上用斜体表达的意义: 外国文字，分类名称，技术术语，一种思想……</li><li><code>&lt;b&gt;</code> 被用来传达传统上用粗体表达的意义: 关键字，产品名称，引导句……</li><li><code>&lt;u&gt;</code> 被用来传达传统上用下划线表达的意义: 专有名词，拼写错误……</li></ul><div id="code-demo-2dd33424" class="code-demo-wrapper" data-title="%E6%96%9C%E4%BD%93%E5%AD%97%E3%80%81%E7%B2%97%E4%BD%93%E5%AD%97%E3%80%81%E4%B8%8B%E5%88%92%E7%BA%BF" data-code="%7B%22html%22%3A%22%3C!--%20%E5%AD%A6%E5%90%8D%20--%3E%5Cn%3Cp%3E%E7%BA%A2%E5%96%89%E5%8C%97%E8%9C%82%E9%B8%9F(%E5%AD%A6%E5%90%8D%3A%20%3Ci%3EArchilocus%20colubris%3C%2Fi%3E)%20%E6%98%AF%E5%8C%97%E7%BE%8E%E4%B8%9C%E9%83%A8%E6%9C%80%E5%B8%B8%E8%A7%81%E7%9A%84%E8%9C%82%E9%B8%9F%E5%93%81%E7%A7%8D%E3%80%82%3C%2Fp%3E%5Cn%5Cn%3C!--%20%E8%88%B6%E6%9D%A5%E8%AF%8D%20--%3E%5Cn%3Cp%3E%5Cn%20%20%E8%8F%9C%E5%8D%95%E4%B8%8A%E6%9C%89%E5%A5%BD%E5%A4%9A%E8%88%B6%E6%9D%A5%E8%AF%8D%E6%B1%87%EF%BC%8C%E6%AF%94%E5%A6%82%20%3Ci%20lang%3D%5C%22uk-latn%5C%22%3Evatrushka%3C%2Fi%3E(%E4%B8%9C%E6%AC%A7%E4%B9%B3%E9%85%AA%E9%9D%A2%E5%8C%85)%2C%5Cn%20%20%3Ci%20lang%3D%5C%22id%5C%22%3Enasi%20goreng%3C%2Fi%3E(%E5%8D%B0%E5%B0%BC%E7%82%92%E9%A5%AD)%E4%BB%A5%E5%8F%8A%3Ci%20lang%3D%5C%22fr%5C%22%3Esoupe%20%C3%A0%20l&#39;oignon%3C%2Fi%5Cn%20%20%3E(%E6%B3%95%E5%BC%8F%E6%B4%8B%E8%91%B1%E6%B1%A4)%E3%80%82%5Cn%3C%2Fp%3E%5Cn%5Cn%3C!--%20%E5%B7%B2%E7%9F%A5%E7%9A%84%E9%94%99%E8%AF%AF%E4%B9%A6%E5%86%99%20--%3E%5Cn%3Cp%3E%E6%80%BB%E6%9C%89%E4%B8%80%E5%A4%A9%E6%88%91%E4%BC%9A%E6%94%B9%E6%8E%89%E5%86%99%3Cu%3E%E6%8E%AA%E5%AD%97%3C%2Fu%3E%E7%9A%84%E6%AF%9B%E7%97%85%E3%80%82%3C%2Fp%3E%5Cn%5Cn%3C!--%20%E7%B3%BB%E5%88%97%E8%AF%B4%E6%98%8E%E6%96%87%E5%AD%97%E4%B8%AD%E9%9C%80%E8%A6%81%E7%AA%81%E5%87%BA%E7%9A%84%E6%96%87%E5%AD%97%20--%3E%5Cn%3Col%3E%5Cn%20%20%3Cli%3E%3Cb%3E%E5%88%87%3C%2Fb%3E%E4%B8%8B%E4%B8%A4%E7%89%87%E9%9D%A2%E5%8C%85%EF%BC%8C%3C%2Fli%3E%5Cn%20%20%3Cli%3E%E5%9C%A8%E4%B8%A4%E7%89%87%E9%9D%A2%E5%8C%85%E4%B8%AD%E9%97%B4%3Cb%3E%E5%A4%B9%E5%85%A5%3C%2Fb%3E%E4%B8%80%E7%89%87%E8%A5%BF%E7%BA%A2%E6%9F%BF%E5%92%8C%E4%B8%80%E7%89%87%E7%94%9F%E8%8F%9C%E5%8F%B6%E3%80%82%3C%2Fli%3E%5Cn%3C%2Fol%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 学名 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>红喉北蜂鸟(学名: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>Archilocus colubris<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>) 是北美东部最常见的蜂鸟品种。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 舶来词 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n  菜单上有好多舶来词汇，比如 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uk-latn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>vatrushka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>(东欧乳酪面包),\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>nasi goreng<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>(印尼炒饭)以及<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>soupe à l&#39;oignon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span>\n  <span class="token punctuation">&gt;</span></span>(法式洋葱汤)。\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 已知的错误书写 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>总有一天我会改掉写<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">&gt;</span></span>措字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">&gt;</span></span>的毛病。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 系列说明文字中需要突出的文字 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>切<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>下两片面包，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>在两片面包中间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>夹入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>一片西红柿和一片生菜叶。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></div></div><div class="code-demo-footer"></div></div>',24),o={},i=(0,a(83744).Z)(o,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t.Wm)(a,{to:"/code/website/html/intro/format.html#%E6%8F%8F%E8%BF%B0%E5%88%97%E8%A1%A8"},{default:(0,t.w5)((()=>[l])),_:1})]),c],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},73310:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-77dfa475",path:"/code/website/html/intro/basic.html",title:"基础内容",lang:"zh-CN",frontmatter:{title:"基础内容",icon:"module",date:"2019-09-02T00:00:00.000Z",category:["HTML"],tag:["HTML"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/html/intro/basic.html"}],["meta",{property:"og:title",content:"基础内容"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"HTML"}],["meta",{property:"article:published_time",content:"2019-09-02T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"基础内容","image":[""],"datePublished":"2019-09-02T00:00:00.000Z","dateModified":"","author":[]}']]},excerpt:"<p>本章是最常见的的 HTML 标签介绍。</p>\n",headers:[{level:2,title:"标题和段落",slug:"标题和段落",children:[]},{level:2,title:"列表",slug:"列表",children:[{level:3,title:"无序 Unordered",slug:"无序-unordered",children:[]},{level:3,title:"有序 Ordered",slug:"有序-ordered",children:[]},{level:3,title:"描述列表",slug:"描述列表",children:[]},{level:3,title:"嵌套列表 Nesting lists",slug:"嵌套列表-nesting-lists",children:[]}]},{level:2,title:"重点强调",slug:"重点强调",children:[{level:3,title:"强调",slug:"强调",children:[]},{level:3,title:"非常重要",slug:"非常重要",children:[]},{level:3,title:"斜体字、粗体字、下划线",slug:"斜体字、粗体字、下划线",children:[]}]}],git:{createdTime:1605457814e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:8}]},readingTime:{minutes:10.01,words:3004},filePathRelative:"code/website/html/intro/basic.md"}}}]);