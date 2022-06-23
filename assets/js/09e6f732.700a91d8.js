"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4428],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),i=n(6010),o="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),i=n(7294),o=n(6010),a=n(2389),l=n(7392),u=n(7094),c=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,n,a=e.lazy,f=e.block,d=e.defaultValue,m=e.values,b=e.groupId,v=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),C=N.tabGroupChoices,x=N.setTabGroupChoices,w=(0,i.useState)(k),O=w[0],T=w[1],E=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=C[b];null!=_&&_!==O&&g.some((function(e){return e.value===_}))&&T(_)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==O&&(I(t),T(r),null!=b&&x(b,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,i=E.indexOf(e.currentTarget)+1;n=null!=(r=E[i])?r:E[0];break;case"ArrowLeft":var o,a=E.indexOf(e.currentTarget)-1;n=null!=(o=E[a])?o:E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},v)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:j,onClick:j},a,{className:(0,o.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),a?(0,i.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,a.Z)();return i.createElement(f,(0,r.Z)({key:String(t)},e))}},4069:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=n(5488),l=n(5162),u=["components"],c={title:"Notifications"},s=void 0,p={unversionedId:"ox_lib/Interface/Client/notify",id:"ox_lib/Interface/Client/notify",title:"Notifications",description:"lib.notify",source:"@site/docs/ox_lib/Interface/Client/notify.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/notify",permalink:"/docs/ox_lib/Interface/Client/notify",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/notify.md",tags:[],version:"current",frontMatter:{title:"Notifications"},sidebar:"docs",previous:{title:"Input Dialog",permalink:"/docs/ox_lib/Interface/Client/input"},next:{title:"Progress",permalink:"/docs/ox_lib/Interface/Client/progress"}},f={},d=[{value:"lib.notify",id:"libnotify",level:3},{value:"lib.defaultNotify",id:"libdefaultnotify",level:3}],m={toc:d};function b(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"libnotify"},"lib.notify"),(0,o.kt)("p",null,"Custom notifications with a lot of styling options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- id: string (optional)\n-- title: string (if description then optional)\n-- description: string (if title then optional)\n-- duration: number (optional)\n-- position: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left' (optional)\n-- type: 'inform' | 'error' | 'success'\n-- style: table (optional)\n-- icon: string (optional)\n-- iconColor: string (optional)\n\nlib.notify(data)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"id")," - When set the current notification will be unique and only shown once on screen",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"title")," - Must provide if there is no description",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"description")," - Must provide if there is no title",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"position")," - Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-right'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"type")," - Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'inform'"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"style")," - React CSS styling, works the same as in ",(0,o.kt)("a",{parentName:"p",href:"/docs/ox_lib/Interface/Client/textui"},"TextUI"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"icon")," - Font Awesome 6 icon, works the same as in ",(0,o.kt)("a",{parentName:"p",href:"/docs/ox_lib/Interface/Client/textui"},"TextUI"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"iconColor")," - Set a different color for the provided icon  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify({\n    title = 'Notification title',\n    description = 'Notification description',\n    type = 'success'\n})\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/cRxJICO.png",alt:"notification"}))),(0,o.kt)(l.Z,{value:"custom",label:"Custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify({\n    id = 'some_identifier',\n    title = 'Notification title',\n    description = 'Notification description',\n    position = 'top',\n    style = {\n        backgroundColor = '#141517',\n        color = '#909296'\n    },\n    icon = 'ban',\n    iconColor = '#C53030'\n})\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/0EK5APp.png",alt:"custom_notification"})))),(0,o.kt)("h3",{id:"libdefaultnotify"},"lib.defaultNotify"),(0,o.kt)("p",null,"Default notifications provided by Chakra UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- title: string (if description then optional)\n-- description: string (if title then optional)\n-- duration: number (optional)\n-- position: ToastPositionWithLogical (optional)\n-- status: "info" | "warning" | "success" | "error" (optional)\n-- id: number (optional)\n\nlib.defaultNotify(data)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"lib.defaultNotify({\n    title = 'Notification title',\n    description = 'Notification description',\n    status = 'success'\n})\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/EIibuY9.png",alt:"default_notification"})))}b.isMDXComponent=!0}}]);