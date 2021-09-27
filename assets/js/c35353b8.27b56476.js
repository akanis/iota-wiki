"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70893],{34789:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],s={title:"IOTA 1.5 Chrysalis",description:"The current Mainnet implementation where all IOTA transactions and use cases happen."},l="IOTA 1.5 Chrysalis",c={unversionedId:"learn/networks/iota-1.5-chrysalis",id:"learn/networks/iota-1.5-chrysalis",isDocsHomePage:!1,title:"IOTA 1.5 Chrysalis",description:"The current Mainnet implementation where all IOTA transactions and use cases happen.",source:"@site/docs/learn/networks/iota-1.5-chrysalis.md",sourceDirName:"learn/networks",slug:"/learn/networks/iota-1.5-chrysalis",permalink:"/docs/learn/networks/iota-1.5-chrysalis",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/docs/learn/networks/iota-1.5-chrysalis.md",tags:[],version:"current",frontMatter:{title:"IOTA 1.5 Chrysalis",description:"The current Mainnet implementation where all IOTA transactions and use cases happen."},sidebar:"learn",previous:{title:"Hardware Wallets",permalink:"/docs/learn/wallets/hardware-wallets"},next:{title:"IOTA 2.0 Coordicide",permalink:"/docs/learn/networks/iota-2.0-coordicide"}},u=[{value:"Vision",id:"vision",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Migration",id:"migration",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],h={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iota-15-chrysalis"},"IOTA 1.5 Chrysalis"),(0,o.kt)("h2",{id:"vision"},"Vision"),(0,o.kt)("p",null,'The IOTA Foundation is well on the way to realizing its core goal of a decentralized IOTA mainnet. Considerable progress has been made in basic research on removing the coordinator, this is referred to as "Coordicide". Some Coordicide modules have already been added to the IOTA mainnet, including autopeering and object storage. Before the Coordicide can be completed, the IOTA mainnet had to be further optimized to provide a business-compatible solution for the ecosystem.'),(0,o.kt)("p",null,'This intermediate update ran under the project name "Chrysalis". A chrysalis is a shape that a caterpillar takes before it emerges from its cocoon as a fully developed moth or butterfly. In the context of IOTA, Chrysalis stands for the transformation of the mainnet into a mature form to bring IOTA to production-readiness. '),(0,o.kt)("p",null,'To describe the status of the network more concisely, it is also marked as IOTA 1.5. Anyone can start building projects on the Tangle without worrying about the need for major refactoring regarding the final network migration. There will be no significant changes on the way to IOTA 2.0, "Coordicide", as the majority of the code base including tools, libraries, and APIs is already available.'),(0,o.kt)("h2",{id:"launch"},"Launch"),(0,o.kt)("p",null,"Chrysalis was the most significant update in IOTA's history; it covered all aspects of the protocol, libraries, wallets, and software implementations developed by the IOTA Foundation. The update of the Tangle fixed technical problems and inefficiencies and implemented further improvements in terms of performance and security. Exotic aspects of the protocol have been replaced by established standards and a wealth of new tools have been made available to developers, businesses, and exchanges. "),(0,o.kt)("p",null,'The first major milestone was achieved with the deployment of "Chrysalis Phase 1" in August 2020. This update included a set of components improving the reliability, performance, and usability of the IOTA network.'),(0,o.kt)("p",null,"The first phase of Chrysalis resulted in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction confirmation times of around 10 seconds"),(0,o.kt)("li",{parentName:"ul"},"Reduction of the need to reattach transactions to the Tangle"),(0,o.kt)("li",{parentName:"ul"},"A significant increase in TPS (transactions per second)"),(0,o.kt)("li",{parentName:"ul"},"Performance and reliability improvements for the nodes")),(0,o.kt)("p",null,"Since April 2021 the complete Chrysalis Network finally is live. It is supposed to give the Tangle a noticeable performance boost and it simplifies handling for developers and interested companies enormously. All users should be able to benefit from several new features through the new version. In addition to the improved performance of the Tangle, a lot has changed, especially in the area of account management."),(0,o.kt)("p",null,"The second phase of Chrysalis consisted of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reusable addresses and support for standard cryptography (EdDSA)"),(0,o.kt)("li",{parentName:"ul"},"A simplified transaction layout and a reduction in transaction size, which leads to an increase in performance and efficiency"),(0,o.kt)("li",{parentName:"ul"},"Significant improvements in the usability and reliability of IOTA"),(0,o.kt)("li",{parentName:"ul"},"A change from the account model to a UTXO-based model")),(0,o.kt)("h2",{id:"migration"},"Migration"),(0,o.kt)("p",null,'The legacy network is still operational to guarantee the migration of IOTA-Tokens at any time before "Coordicide" happens. It is not possible to transfer funds in the old network anymore. '),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/chrysalis-migration-process/"},"https://blog.iota.org/chrysalis-migration-process/")," for more details about the migration of IOTA-Tokens. Tokens held on exchanges will be migrated by the respective exchanges on behalf of their customers."),(0,o.kt)("p",null,"All users maintaining a node in the new or the legacy network can upgrade their systems using the latest releases on GitHub:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/gohornet/hornet"},"Chrysalis Hornet"))," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/iotaledger/bee"},"Chrysalis Bee"))," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/gohornet/hornet/releases/tag/v0.5.8"},"Legacy Hornet"))," ")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"need to add a footer section for further content - (three cards)")),(0,o.kt)("h2",{id:"useful-links"},"Useful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://chrysalis.iota.org/"},"chrysalis.iota.org"))," - Official Chrysalis Status Page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/iota-chrysalis-a-new-dawn/"},"blog.iota.org/iota-chrysalis-a-new-dawn"))," - Blog post Announcement to Chrysalis")))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);