"use strict";(self.webpackChunkliam_site=self.webpackChunkliam_site||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},o="API",p={unversionedId:"api",id:"api",title:"API",description:"Liam",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/api",draft:!1,editUrl:"https://github.com/liam-js/site/blob/main/docs/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/docs/intro"},next:{title:"\u533a\u5757",permalink:"/docs/block/"}},i={},s=[{value:"Liam",id:"liam",level:2},{value:"render()",id:"render",level:3},{value:"toJs()",id:"to-js",level:3},{value:"createElement()",id:"create-element",level:3},{value:"config()",id:"config",level:3},{value:"set()",id:"set",level:3},{value:"get()",id:"get",level:3},{value:"on()",id:"on",level:3},{value:"off()",id:"off",level:3},{value:"offById()",id:"off-by-id",level:3},{value:"trigger()",id:"trigger",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("h2",{id:"liam"},"Liam"),(0,r.kt)("h3",{id:"render"},"render()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"render(blockJs, node)\n")),(0,r.kt)("p",null,"\u7528\u4e8e\u628a\u533a\u5757\uff08blockJs\uff09\u6e32\u67d3\u5230\u9875\u9762\u67d0\u4e2a\u8282\u70b9(node)\u4e0a\uff0c\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"render({\n  type: 'h1',\n  children: 'Hello, world!'\n}, document.querySelector('#root'));\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,r.kt)("strong",{parentName:"p"},"blockJs")," \u53c2\u6570\u662f\u4e00\u4e2a\u6587\u672c\u683c\u5f0f\uff0c\u9700\u8981\u5148\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#to-js"},(0,r.kt)("inlineCode",{parentName:"a"},"toJs"))," \u65b9\u6cd5\u628a\u5b83\u8f6c\u6362\u6210 js.")),(0,r.kt)("h3",{id:"to-js"},"toJs()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"toJs(blockText, variables)\n")),(0,r.kt)("p",null,"\u628a\uff08\u533a\u5757\uff09\u6587\u672c\u8f6c\u6210\uff08\u533a\u5757\uff09 js,  variables,\u4e3a\u8f6c\u5316\u8fc7\u7a0b\u4e2d\u6ce8\u5165\u7684\u53d8\u91cf\uff0c\u9ed8\u8ba4\u6ce8\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Liam"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM"),", \u8f6c\u5316\u7ed3\u679c\u4e00\u822c\u7528\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"#render"},(0,r.kt)("inlineCode",{parentName:"a"},"Liam.render"))," \u6e32\u67d3\uff0c\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," const blockJs = toJs(`\n  {\n    type: 'h1',\n    // React \u4e3a toJs \u6ce8\u5165\u7684\u53d8\u91cf\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\n    children: text\n  }\n`, {\n  text: 'Hello, world!'\n})\n")),(0,r.kt)("h3",{id:"create-element"},"createElement()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createElement(blockJs)\n")),(0,r.kt)("p",null,"\u628a\u533a\u5757\uff08blockJs\uff09\u8f6c\u6210 Element \u5143\u7d20,  \u53ef\u4ee5\u5728\u4f7f\u7528 React \u5f00\u53d1\u65f6\uff0c\u5f15\u5165\u533a\u5757\u4f7f\u7528\uff0c\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const blockElement = createElement({\n  type: 'h1',\n  children: 'Hello, world!'\n});\n\n// React \u51fd\u6570\u7ec4\u4ef6\nfunction Demo(){\n  return (\n    <>\n    // highlight-start\n    { /* \u53ef\u4ee5\u548c\u539f\u751f\u7684 React jsx \u6df7\u7528 */ }\n    {blockElement}\n    // highlight-end\n    <p>\u5f88\u4e0d\u9519\uff1a\uff09</p>\n    </>\n  )\n}\n")),(0,r.kt)("h3",{id:"config"},"config()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config({\n\n  // \u5168\u5c40\u72b6\u6001\n  states,\n\n  // \u901a\u8fc7\u533a\u5757\u4fe1\u606f\u83b7\u53d6\u7ec4\u4ef6\uff08\u7c7b\u4f3c\u4e2d\u95f4\u4ef6\uff09\n  getComponent,\n\n  // \u7ec4\u4ef6\u540d\uff08type\uff09\u6620\u5c04\n  componentMap,\n\n  // \u9ed8\u8ba4\u4e3a false;\u662f\u5426\u7528\u7ec4\u4ef6\u5305\u88f9\u6587\u5b57\uff0c\u4e00\u822c\u7528\u4e8e\u8c03\u8bd5\u4f7f\u7528\uff1b\n  // \u67d0\u4e9b\u7ec4\u4ef6\u542f\u7528\u6b64\u529f\u80fd\u65f6\u4f1a\u51fa\u9519\uff0c\u4e0a\u7ebf\u65f6\u5efa\u8bbe\u7f6e\u4e3a false\n  wrapText\n});\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u6210\u5458")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"states"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u72b6\u6001\uff0c\u4e4b\u540e\u5728\u53ef\u5728\u533a\u5757\u4e2d\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"#get"},(0,r.kt)("inlineCode",{parentName:"a"},"Liam.get('mode')"))," \u548c ",(0,r.kt)("a",{parentName:"td",href:"#set"},(0,r.kt)("inlineCode",{parentName:"a"},"Liam.set('mode', 'light')")),",\u6765\u83b7\u53d6\u6216\u8bbe\u7f6e\u76f8\u5e94\u7684\u503c\uff1b"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u533a\u5757\u4fe1\u606f\u83b7\u53d6\u7ec4\u4ef6\uff08\u7ec4\u4ef6\u4e2d\u95f4\u4ef6\uff09\uff0c",(0,r.kt)("br",null),"\u6bcf\u8bbe\u7f6e\u4e00\u6b21\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u95f4\u4ef6\uff0c\u540e\u8bbe\u7f6e\u5148\u8c03\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#block/members#type"},"\u5185\u7f6e\u4e00\u4e2a\u4e2d\u95f4\u4ef6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"componentMap"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\uff08type\uff09\u6620\u5c04\uff0c\u6bcf\u8bbe\u7f6e\u4e00\u6b21\u4f1a\u548c\u4e4b\u524d\u7684 componentMap \u5408\u5e76"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wrapText"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7528\u7ec4\u4ef6\u5305\u88f9\u6587\u5b57\uff0c\u4e00\u822c\u7528\u4e8e\u8c03\u8bd5\u4f7f\u7528,",(0,r.kt)("br",null),"\u67d0\u4e9b\u7ec4\u4ef6\u542f\u7528\u6b64\u529f\u80fd\u65f6\u4f1a\u51fa\u9519\uff0c\u4e0a\u7ebf\u65f6\u5efa\u8bbe\u7f6e\u4e3a false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"config({\n\n  // \u5168\u5c40\u72b6\u6001\n  states: {\n    mode: 'dark'\n  },\n\n  // \u901a\u8fc7\u533a\u5757\u4fe1\u606f\u83b7\u53d6\u7ec4\u4ef6\uff08\u7c7b\u4f3c\u4e2d\u95f4\u4ef6\uff09\n  getComponent: function (ctx, next) {\n      const { schema } = ctx;\n      if (schema.type && schema.type === 'Demo') {\n\n        // \u5982\u679c\u6709\u7ec4\u4ef6\u5339\u914d\uff0c\u5219\u8bbe\u7f6e ctx.component \u4e3a\u7ec4\u4ef6\uff0c\n        // \u540e\u7eed\u7684\u4e2d\u95f4\u4ef6\u4e0d\u518d\u5904\u7406\n        ctx.component = Demo;\n      }\n      next();\n    },\n\n  // \u7ec4\u4ef6\u540d\uff08type\uff09\u6620\u5c04\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e86 rc, \u540e\u7eed\u7684\u533a\u5757\u91cc\u7684 type \u5982\u679c\u5199\u6210 \u2018rc#ResponsiveContainer\u2019\uff0c\n  // \u5219\u4f1a\u6620\u5c04\u4e3a \u2018url#https://e.sinaimg.cn/ssfe/unpkg/recharts@2.1.10/umd/Recharts.js\n  // #ResponsiveContainer\u2019\n  componentMap: {\n    'rc': 'url#https://e.sinaimg.cn/ssfe/unpkg/recharts@2.1.10/umd/Recharts.js'\n  },\n\n  // \u9ed8\u8ba4\u4e3a false;\u662f\u5426\u7528\u7ec4\u4ef6\u5305\u88f9\u6587\u5b57\uff0c\u4e00\u822c\u7528\u4e8e\u8c03\u8bd5\u4f7f\u7528\uff1b\n  // \u67d0\u4e9b\u7ec4\u4ef6\u542f\u7528\u6b64\u529f\u80fd\u65f6\u4f1a\u51fa\u9519\uff0c\u4e0a\u7ebf\u65f6\u5efa\u8bbe\u7f6e\u4e3a false\n  wrapText: true\n});\n")),(0,r.kt)("h3",{id:"set"},"set()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"set(key,value)\n")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5168\u5c40\u72b6\u6001\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"set('mode','dark');\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60f3\u5728\u8bbe\u7f6e\u5168\u5c40\u72b6\u6001\u65f6\uff0c\u89e6\u53d1\u67d0\u4e2a\u533a\u5757\u66f4\u65b0\uff0c\u9700\u8981\u8981\u5728\u533a\u5757\u7684 ",(0,r.kt)("a",{parentName:"p",href:"block/members#s"},"\u5168\u5c40\u72b6\u6001\u4f9d\u8d56\u5b57\u6bb5 s")," \u4e2d\u8bbe\u7f6e\u72b6\u6001\u540d\u3002")),(0,r.kt)("h3",{id:"get"},"get()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get(key,value)\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u5168\u5c40\u72b6\u6001\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"get('mode');\n")),(0,r.kt)("h3",{id:"on"},"on()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const eventId = on(eventName,eventCallback)\n")),(0,r.kt)("p",null,"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0ceventName \u4e3a\u4e8b\u4ef6\u540d\uff0ceventCallback \u4e3a\u4e8b\u4ef6\u56de\u8c03\uff0c\u5176\u4e2d\u7684\u56de\u8c03\u53c2\u6570\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"#trigger"},"trigger")," \u7684\u6570\u636e\uff0c\u8fd4\u56de\u7684 eventId \u53ef\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#off-by-id"},"offById")," \u89e3\u7ed1\u4e8b\u4ef6\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventId = on('dataLoaded',function(data){\n  console.log(data);\n});\n")),(0,r.kt)("h3",{id:"off"},"off()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"off(eventName,eventCallback)\n")),(0,r.kt)("p",null,"\u89e3\u7ed1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0ceventName \u4e3a\u4e8b\u4ef6\u540d\uff0ceventCallback \u4e3a\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#on"},"on")," \u7ed1\u5b9a\u65f6\u7684\u4e8b\u4ef6\u56de\u8c03\uff0c\u5982\u679c\u7ed1\u5b9a\u65f6\u6709 eventId \u53ef\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#off-by-id"},"offById")," \u89e3\u7ed1\u4e8b\u4ef6\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventCallback = function(data){\n  console.log(data);\n}; \n\n// highlight-next-line\noff('dataLoaded',eventCallback);\n")),(0,r.kt)("h3",{id:"off-by-id"},"offById()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"offById(eventName,eventCallback)\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4e8b\u4ef6 id \u89e3\u7ed1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0ceventId \u4e3a\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#on"},"on")," \u7ed1\u5b9a\u4e8b\u4ef6\u65f6\u8fd4\u56de\u7684id\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventId = on('dataLoaded',function(data){\n  console.log(data);\n});\n\n// highlight-next-line\noffById('eventId');\n")),(0,r.kt)("h3",{id:"trigger"},"trigger()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"trigger(eventName,eventData)\n")),(0,r.kt)("p",null,"\u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0ceventName \u4e3a\u4e8b\u4ef6\u540d\uff0ceventData \u4e3a\u4f20\u7ed9\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#on"},"on")," \u7ed1\u5b9a\u7684\u56de\u8c03\u51fd\u6570\u7684\u6570\u636e\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventId = on('dataLoaded',function(data){\n  // {name:'liam'}\n  console.log(data);\n});\n\n// highlight-start\ntrigger('dataLoaded', {\n  name: 'liam'\n});\n// highlight-end\n")))}m.isMDXComponent=!0}}]);