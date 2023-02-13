import{_ as e,X as t,Y as a,a3 as s}from"./framework-e3372978.js";const i={},n=s(`<h1 id="git-large-file-storage" tabindex="-1"><a class="header-anchor" href="#git-large-file-storage" aria-hidden="true">#</a> Git Large File Storage</h1><p>Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><ol><li><p>Download and install the Git command-line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs <span class="token function">install</span>
</code></pre></div><p>You’ll need to run this in your repository directory, once per repository.</p></li><li><p>Select the file types you’d like Git LFS to manage (or directly edit your .gitattributes). You can configure file extensions at anytime.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs track <span class="token string">&quot;*.psd&quot;</span>
</code></pre></div><p>Make sure to track <code>.gitattributes</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> .gitattributes
</code></pre></div></li></ol>`,4),o=[n];function r(l,c){return t(),a("div",null,o)}const p=e(i,[["render",r],["__file","gitLFS.html.vue"]]);export{p as default};
