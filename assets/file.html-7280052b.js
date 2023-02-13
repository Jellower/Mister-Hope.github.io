import{_ as s,X as e,Y as l,$ as n,Z as o,a2 as i,a3 as t,H as c,a0 as p}from"./framework-e3372978.js";const u={},d=t(`<h2 id="touch-命令" tabindex="-1"><a class="header-anchor" href="#touch-命令" aria-hidden="true">#</a> touch 命令</h2><p>需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。</p><p>Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间:</p><ul><li>访问时间 (Access Time，简称 atime): 只要文件的内容被读取，访问时间就会更新。例如，使用 <code>cat</code> 命令可以查看文件的内容，此时文件的访问时间就会发生改变。</li><li>数据修改时间 (Modify Time，简称 mtime): 当文件的内容数据发生改变，此文件的数据修改时间就会跟着相应改变。</li><li>状态修改时间 (Change Time，简称 ctime): 当文件的状态发生变化，就会相应改变这个时间。比如说，如果文件的权限或者属性发生改变，此时间就会相应改变。</li></ul><p>touch 命令的基本格式如下:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">touch</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 文件名</span></span>
</code></pre></div><p>选项:</p><ul><li>-a: 只修改文件的访问时间；</li><li>-c: 仅修改文件的时间参数(3 个时间参数都改变)，如果文件不存在，则不建立新文件。</li><li>-d: 后面可以跟欲修订的日期，而不用当前的日期，即把文件的 atime 和 mtime 时间改为指定的时间。</li><li>-m: 只修改文件的数据修改时间。</li><li>-t: 命令后面可以跟欲修订的时间，而不用目前的时间，时间书写格式为 YYMMDDhhmm。</li></ul><p>可以看到，touch 命令可以只修改文件的访问时间，也可以只修改文件的数据修改时间，但是不能只修改文件的状态修改时间。因为，不论是修改访问时间，还是修改文件的数据时间，对文件来讲，状态都会发生改变，即状态修改时间会随之改变(更新为操作当前文件的真正时间)。</p><h2 id="ln-命令" tabindex="-1"><a class="header-anchor" href="#ln-命令" aria-hidden="true">#</a> ln 命令</h2><p>如果要想说清楚 ln 命令，则必须先解释下 ext 文件系统(Linux 文件系统)是如何工作的。我们在前面讲解了分区的格式化就是写入文件系统，而我们的 Linux 目前使用的是 ext4 文件系统。</p><p>ext4 文件系统会把分区主要分为两大部分(暂时不提超级块): 小部分用于保存文件的 inode (i 节点)信息；剩余的大部分用于保存 block 信息。</p><p>inode 的默认大小为 128 Byte，用来记录文件的权限(r、w、x)、文件的所有者和属组、文件的大小、文件的状态改变时间(ctime)、文件的最近一次读取时间(atime)、文件的最近一次修改时间(mtime)、文件的数据真正保存的 block 编号。每个文件需要占用一个 inode。大家如果仔细查看，就会发现 inode 中是不记录文件名的，那是因为文件名记录在文件所在目录的 block 中。</p><p>block 的大小可以是 1KB、2KB、4KB，默认为 4KB。block 用于实际的数据存储，如果一个 block 放不下数据，则可以占用多个 block。例如，有一个 10KB 的文件需要存储，则会占用 3 个 block，虽然最后一个 block 不能占满，但也不能再放入其他文件的数据。这 3 个 block 有可能是连续的，也有可能是分散的。</p><p>由此，我们可以知道以下 2 个重要的信息:</p><ol><li>每个文件都独自占用一个 inode，文件内容由 inode 的记录来指向；</li><li>如果想要读取文件内容，就必须借助目录中记录的文件名找到该文件的 inode，才能成功找到文件内容所在的 block 块；</li></ol><p>了解了 Linux 系统底层文件的存储状态后，接下来学习 ln 命令。</p><p>ln 命令用于给文件创建链接，根据 Linux 系统存储文件的特点，链接的方式分为以下 2 种:</p><ul><li>软链接: 类似于 Windows 系统中给文件创建快捷方式，即产生一个特殊的文件，该文件用来指向另一个文件，此链接方式同样适用于目录。</li><li>硬链接: 我们知道，文件的基本信息都存储在 inode 中，而硬链接指的就是给一个文件的 inode 分配多个文件名，通过任何一个文件名，都可以找到此文件的 inode，从而读取该文件的数据信息。</li></ul><p>ln 命令的基本格式如下:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ln</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 源文件 目标文件</span></span>
</code></pre></div><p>选项:</p><ul><li>-s: 建立软链接文件。如果不加 <code>-s</code> 选项，则建立硬链接文件；</li><li>-f: 强制。如果目标文件已经存在，则删除目标文件后再建立链接文件；</li></ul><h3 id="ln-扩展介绍" tabindex="-1"><a class="header-anchor" href="#ln-扩展介绍" aria-hidden="true">#</a> ln 扩展介绍</h3>`,24);function h(r,m){const a=c("RouterLink");return e(),l("div",null,[d,n("ul",null,[n("li",null,[o(a,{to:"/linux/command/ln.html"},{default:i(()=>[p("点击前往")]),_:1})])])])}const b=s(u,[["render",h],["__file","file.html.vue"]]);export{b as default};
