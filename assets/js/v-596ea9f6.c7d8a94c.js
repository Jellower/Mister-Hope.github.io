"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[92362],{11725:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const a=(0,i(66252).uE)('<h2 id="应用提供多个入口点" tabindex="-1"><a class="header-anchor" href="#应用提供多个入口点" aria-hidden="true">#</a> 应用提供多个入口点</h2><p>Android 应用由各种可单独调用的组件构成。例如，Activity 是提供界面 (UI) 的一种应用组件。</p><p>“主” Activity 在用户点按您的应用图标时启动。您还可以将用户从其他位置(例如，从通知中，甚至从其他应用中)引导至某个 Activity。</p><p>其他组件(如广播接收器和服务)使应用能够在没有界面的情况下执行后台任务。</p><h2 id="应用可适应不同的设备" tabindex="-1"><a class="header-anchor" href="#应用可适应不同的设备" aria-hidden="true">#</a> 应用可适应不同的设备</h2><p>Android 允许您为不同的设备提供不同的资源。例如，您可以针对不同的屏幕尺寸创建不同的布局。系统会根据当前设备的屏幕尺寸确定要使用的布局。</p><p>如果应用的任何功能需要特定的硬件，如摄像头，您可以在运行时查询该设备是否具有该硬件，如果没有，则停用相应的功能。您可以指定应用需要特定的硬件，这样，Google Play 就不会允许在没有这些硬件的设备上安装应用。</p><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><ul><li><p>app &gt; java &gt; com.example.myfirstapp &gt; MainActivity</p><p>这是主 Activity。它是应用的入口点。当您构建和运行应用时，系统会启动此 Activity 的实例并加载其布局。</p></li><li><p>app &gt; res &gt; layout &gt; activity_main.xml</p><p>此 XML 文件定义了 Activity 界面的布局。它包含一个 TextView 元素，其中具有“Hello, World!”文本</p></li><li><p>app &gt; manifests &gt; AndroidManifest.xml</p><p>清单文件描述了应用的基本特性并定义了每个应用组件。</p></li><li><p>Gradle Scripts &gt; build.gradle</p><p>有两个使用此名称的文件: 一个针对项目“Project: My First App”，另一个针对应用模块“Module: app”。每个模块均有自己的 build.gradle 文件，但此项目当前仅有一个模块。您可以使用每个模块的 build.file 控制 Gradle 插件编译应用的方式</p></li></ul><h2 id="运行应用" tabindex="-1"><a class="header-anchor" href="#运行应用" aria-hidden="true">#</a> 运行应用</h2><h3 id="在真实设备上运行" tabindex="-1"><a class="header-anchor" href="#在真实设备上运行" aria-hidden="true">#</a> 在真实设备上运行</h3><ol><li><p>在开发者选项窗口中启用 USB 调试。</p></li><li><p>在 Android Studio 中，从工具栏中的运行/调试配置下拉菜单中选择您的应用。</p></li><li><p>在工具栏中，从目标设备下拉菜单中选择要用来运行应用的设备。</p></li><li><p>点击 Run</p></li></ol><h3 id="在模拟器上运行" tabindex="-1"><a class="header-anchor" href="#在模拟器上运行" aria-hidden="true">#</a> 在模拟器上运行</h3><ol><li><p>在 Android Studio 中创建一个 Android 虚拟设备 (AVD)，模拟器可以使用它安装和运行您的应用。</p></li><li><p>在工具栏中，从运行/调试配置下拉菜单中选择您的应用。</p></li><li><p>从目标设备下拉菜单中，选择要用来运行应用的 AVD。</p></li><li><p>点击 Run</p></li></ol><h2 id="术语介绍" tabindex="-1"><a class="header-anchor" href="#术语介绍" aria-hidden="true">#</a> 术语介绍</h2><ul><li>Intent 是在相互独立的组件(如两个 Activity)之间提供运行时绑定功能的对象。Intent 表示应用执行某项操作的意图。您可以使用 Intent 执行多种任务。</li></ul>',16),l={},r=(0,i(83744).Z)(l,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,a]of t)i[e]=a;return i}},89956:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-596ea9f6",path:"/code/Android/intro.html",title:"基本特性",lang:"zh-CN",frontmatter:{title:"基本特性",icon:"info",date:"2020-04-07T00:00:00.000Z",category:["Android"],tag:["介绍"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/Android/intro.html"}],["meta",{property:"og:title",content:"基本特性"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"介绍"}],["meta",{property:"article:published_time",content:"2020-04-07T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"基本特性","image":[""],"datePublished":"2020-04-07T00:00:00.000Z","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"应用提供多个入口点",slug:"应用提供多个入口点",children:[]},{level:2,title:"应用可适应不同的设备",slug:"应用可适应不同的设备",children:[]},{level:2,title:"项目结构",slug:"项目结构",children:[]},{level:2,title:"运行应用",slug:"运行应用",children:[{level:3,title:"在真实设备上运行",slug:"在真实设备上运行",children:[]},{level:3,title:"在模拟器上运行",slug:"在模拟器上运行",children:[]}]},{level:2,title:"术语介绍",slug:"术语介绍",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:2.34,words:703},filePathRelative:"code/Android/intro.md"}}}]);