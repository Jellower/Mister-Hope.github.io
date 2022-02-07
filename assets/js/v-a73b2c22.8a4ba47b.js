"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9377],{88762:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});const i=(0,t(66252).uE)('<h2 id="启动页" tabindex="-1"><a class="header-anchor" href="#启动页" aria-hidden="true">#</a> 启动页</h2><h2 id="登录页" tabindex="-1"><a class="header-anchor" href="#登录页" aria-hidden="true">#</a> 登录页</h2><p>在登录页，可以使用微信扫码登陆开发者工具，开发者工具将使用这个微信帐号的信息进行小程序的开发和调试。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/login.b4162666.png" alt="login"></p><h2 id="项目列表" tabindex="-1"><a class="header-anchor" href="#项目列表" aria-hidden="true">#</a> 项目列表</h2><p>登录成功后，会看到已经存在的项目列表和代码片段列表，</p><p>在项目列表可以选择公众号网页调试，进入到公众号网页调试模式。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/projectlist.aae3a02e.png" alt="project list"></p><h3 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h3><p>当符合以下条件时，可以在本地创建一个小程序项目</p><ol><li>需要一个小程序的 AppID；如没有 AppID，可以选择申请使用测试号。</li><li>登录的微信号需要是该 AppID 的开发者；</li><li>需要选择一个空目录，或者选择的非空目录下存在 <code>app.json</code> 或者 <code>project.config.json</code>。当选择空目录时，可以选择是否在该目录下生成一个简单的项目。</li></ol><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/addproject.ec48a6a3.png" alt="New project"></p><h3 id="多开项目" tabindex="-1"><a class="header-anchor" href="#多开项目" aria-hidden="true">#</a> 多开项目</h3><p>工具支持同时打开多个项目，每次打开项目时会从新窗口打开，入口有以下几种:</p><ul><li>从项目选择页打开项目，处于项目窗口时可以从菜单栏的项目 -&gt; 查看所有项目打开项目选择页</li><li>从菜单栏的最近打开项目列表中打开的项目会从新窗口打开</li><li>新建项目</li><li>命令行或 HTTP 调用工具打开项目</li></ul><h3 id="管理项目" tabindex="-1"><a class="header-anchor" href="#管理项目" aria-hidden="true">#</a> 管理项目</h3><p>对本地项目进行删除和批量删除</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/projectmanage.8cdedbdc.png" alt="manage"></p><h2 id="主界面" tabindex="-1"><a class="header-anchor" href="#主界面" aria-hidden="true">#</a> 主界面</h2><p>开发者工具主界面，从上到下，从左到右，分别为: 菜单栏、工具栏、模拟器、编辑器、调试器 五大部分。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/parts.c8bf6336.png" alt="layout"></p><h3 id="菜单栏" tabindex="-1"><a class="header-anchor" href="#菜单栏" aria-hidden="true">#</a> 菜单栏</h3><h4 id="微信-web-开发者工具" tabindex="-1"><a class="header-anchor" href="#微信-web-开发者工具" aria-hidden="true">#</a> 微信 Web 开发者工具</h4><p>切换帐号: 快速切换登录用户</p><p>关于: 关于开发者工具</p><p>检查更新: 检查版本更新</p><p>开发者论坛: 前往开发者论坛</p><p>开发者文档: 前往开发者文档</p><p>调试: 调试开发者工具、调试编辑器；如果遇到疑似开发者工具或者编辑器的 bug，可以打开调试工具查看是否有出错日志，欢迎在论坛上反馈相关问题</p><p>更换开发模式: 快速切换公众号网页调试和小程序调试</p><p>退出: 退出开发者工具</p><h4 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h4><p>新建项目: 快速新建项目</p><p>打开最近: 可以查看最近打开的项目列表，并选择是否进入对应项目</p><p>查看所有项目: 新窗口打开启动页的项目列表页</p><p>关闭当前项目: 关闭当前项目，回到启动页的项目列表页</p><h4 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h4><p>新建文件</p><p>保存</p><p>保存所有</p><p>关闭文件</p><h4 id="编辑-可以查看编辑相关的操作和快捷键" tabindex="-1"><a class="header-anchor" href="#编辑-可以查看编辑相关的操作和快捷键" aria-hidden="true">#</a> 编辑: 可以查看编辑相关的操作和快捷键</h4><h4 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h4><p>编译: 编译当前小程序项目</p><p>刷新: 与编译的功能一致，由于历史原因保留对应的快捷键 ctrl(⌘) + R</p><p>编译配置: 可以选择普通编译或自定义编译条件</p><p>前后台切换: 模拟客户端小程序进入后台运行和返回前台的操作</p><p>清除缓存: 清除文件缓存、数据缓存、以及授权数据</p><h4 id="界面-控制主界面窗口模块的显示与隐藏" tabindex="-1"><a class="header-anchor" href="#界面-控制主界面窗口模块的显示与隐藏" aria-hidden="true">#</a> 界面: 控制主界面窗口模块的显示与隐藏</h4><h4 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h4><p>外观设置: 控制编辑器的配色主题、字体、字号、行距</p><p>编辑设置: 控制文件保存的行为，编辑器的表现</p><p>代理设置: 选择直连网络、系统代理和手动设置代理</p><p>通知设置: 设置是否接受某种类型的通知</p><h3 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏" aria-hidden="true">#</a> 工具栏</h3><p>点击用户头像可以打开个人中心，在这里可以便捷的切换用户和查看开发者工具收到的消息。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/noticecenter.ffa6e967.png" alt="Tool"></p><p>用户头像右侧是控制主界面模块显示/隐藏的按钮。至少需要有一个模块显示。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/showandhide.5388b188.gif" alt="button"></p><p>工具栏中间，可以选择普通编译，也可以新建并选择自定义条件进行编译和预览。</p><p>通过切后台按钮，可以模拟小程序进入后台的情况</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/background.2cd7c93b.png" alt="scence"></p><p>工具栏上提供了清缓存的快速入口。可以便捷的清除工具上的文件缓存、数据缓存、还有后台的授权数据，方便开发者调试。</p><p>工具栏右侧是开发辅助功能的区域，在这里可以上传代码、申请测试、上传腾讯云、查看项目信息</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/righttools.8bacf906.png" alt="righttools"></p><h3 id="工具栏管理" tabindex="-1"><a class="header-anchor" href="#工具栏管理" aria-hidden="true">#</a> 工具栏管理</h3><p>在工具栏上点击鼠标右键，可以打开工具栏管理</p><h3 id="模拟器" tabindex="-1"><a class="header-anchor" href="#模拟器" aria-hidden="true">#</a> 模拟器</h3><p>模拟器可以模拟小程序在微信客户端的表现。小程序的代码通过编译后可以在模拟器上直接运行。</p><p>开发者可以选择不同的设备，也可以添加自定义设备来调试小程序在不同尺寸机型上的适配问题。</p><p>在模拟器底部的状态栏，可以直观地看到当前运行小程序的场景值，页面路径及页面参数</p><h4 id="独立窗口" tabindex="-1"><a class="header-anchor" href="#独立窗口" aria-hidden="true">#</a> 独立窗口</h4><p>点击 模拟器/调试器 右上角的按钮可以使用独立窗口显示 模拟器/调试器</p>',73),r={},p=(0,t(83744).Z)(r,[["render",function(e,a){return i}]])},83744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,i]of a)t[e]=i;return t}},12036:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i={key:"v-a73b2c22",path:"/code/mini-app/tools/interface.html",title:"界面",lang:"zh-CN",frontmatter:{title:"界面",icon:"layout",category:["小程序"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/tools/interface.html"}],["meta",{property:"og:title",content:"界面"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"界面","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"启动页",slug:"启动页",children:[]},{level:2,title:"登录页",slug:"登录页",children:[]},{level:2,title:"项目列表",slug:"项目列表",children:[{level:3,title:"新建项目",slug:"新建项目",children:[]},{level:3,title:"多开项目",slug:"多开项目",children:[]},{level:3,title:"管理项目",slug:"管理项目",children:[]}]},{level:2,title:"主界面",slug:"主界面",children:[{level:3,title:"菜单栏",slug:"菜单栏",children:[]},{level:3,title:"工具栏",slug:"工具栏",children:[]},{level:3,title:"工具栏管理",slug:"工具栏管理",children:[]},{level:3,title:"模拟器",slug:"模拟器",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:1604856934e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:4.52,words:1356},filePathRelative:"code/mini-app/tools/interface.md"}}}]);