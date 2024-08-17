(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7180],{87627:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_inventory/Frameworks/esx",function(){return n(75142)}])},75142:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return l}});var r=n(52676),o=n(82601),i=n(48745),t=n(77100);let l=[{depth:2,value:"Compatibility",id:"compatibility"},{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Convert ESX inventory data",id:"convert-esx-inventory-data"},{depth:2,value:"Optional Optimisation",id:"optional-optimisation"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"ESX"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["You will need a ",(0,r.jsx)(s.a,{href:"https://github.com/esx-framework/esx_core",children:"compatible version of ESX Legacy"})," (1.6.0 or higher)."]}),"\n",(0,r.jsxs)(s.li,{children:["You can convert player inventories with ",(0,r.jsx)(s.code,{children:"convertinventory esx"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["All items in the database will be migrated to the internal item data.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Always restart the resource when items are migrated!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsx)(s.p,{children:"Ox Inventory is a complete replacement for existing item, inventory, and weapon systems; it is inherently incompatible with ESX and any resources that rely on default behaviour."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Loadouts do not exist and weapons are treated as items."}),"\n",(0,r.jsx)(s.li,{children:"Standard shops and stashes (i.e. esx_shops, esx_weaponshop, and esx_policejob)."}),"\n",(0,r.jsx)(s.li,{children:"Resources that alter the default esx inventory or provide a ui (i.e. esx_trunkinventory, esx_inventoryhud)."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use a compatible version of ",(0,r.jsx)(s.a,{href:"https://github.com/esx-framework/esx-legacy",children:"ESX Legacy"})," (1.6.0+)."]}),"\n",(0,r.jsxs)(s.li,{children:["Modify your ",(0,r.jsx)(s.code,{children:"server.cfg"}),", starting ox_inventory immediately after es_extended."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"start oxmysql"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"start ox_lib"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"start es_extended"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"start qtarget"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"start ox_inventory"})})]})}),"\n",(0,r.jsx)(s.h2,{id:"convert-esx-inventory-data",children:"Convert ESX inventory data"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Start the server and type ",(0,r.jsx)(s.code,{children:"convertinventory esx"})," into the server console."]}),"\n",(0,r.jsxs)(s.li,{children:["Optionally, type ",(0,r.jsx)(s.code,{children:"convertinventory esxproperty"})," into the server console."]}),"\n",(0,r.jsx)(s.li,{children:"Restart the server once conversion is complete."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"optional-optimisation",children:"Optional Optimisation"}),"\n",(0,r.jsxs)(s.p,{children:["All item related functions from xPlayer, such as ",(0,r.jsx)(s.code,{children:"xPlayer.getInventoryItem"}),", have been modified for compatibility purposes; however they are considered deprecated."]}),"\n",(0,r.jsx)(s.p,{children:"The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones."}),"\n",(0,r.jsx)(s.p,{children:"You should read through the functions section for further information, but the following should give you a decent idea."}),"\n",(0,r.jsxs)(t.mQ,{items:["ESX","Ox Inventory"],children:[(0,r.jsx)(t.OK,{children:(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" xPlayer."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getInventoryItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'acetone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:").count "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" xPlayer."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getInventoryItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'antifreeze'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:").count "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" xPlayer."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getInventoryItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sudo'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:").count "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"9"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    xPlayer."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"removeInventoryItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"acetone"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    xPlayer."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"removeInventoryItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"antifreeze"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    xPlayer."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"removeInventoryItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"sudo"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})}),(0,r.jsxs)(t.OK,{children:[(0,r.jsx)(s.p,{children:"Add the following code somewhere in your resource to cache the exports metatable."}),(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ox_inventory "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory"})]})})}),(0,r.jsx)(s.p,{children:"You will be able to reference any functions exposed through the export."}),(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" items "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Search"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'acetone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'antifreeze'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sudo'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" items "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" items.acetone "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" items.antifreeze "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" items.sudo "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"9"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'acetone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'antifreeze'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sudo'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})]})]})]})}s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/ox_inventory/Frameworks/esx.mdx",route:"/ox_inventory/Frameworks/esx",frontMatter:{title:"ESX"},timestamp:1723891967e3,title:"ESX",headings:l},pageNextRoute:"/ox_inventory/Frameworks/esx"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=87627)}),_N_E=e.O()}]);