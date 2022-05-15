"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[455],{5855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(2685),o=n(1244),a=(n(7378),n(5318)),i=["components"],s={},p="Custom Components",l={unversionedId:"guides/custom-components",id:"guides/custom-components",title:"Custom Components",description:"Use the components prop to customize the components used by DayPicker.",source:"@site/docs/guides/custom-components.md",sourceDirName:"guides",slug:"/guides/custom-components",permalink:"/guides/custom-components",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Formatters",permalink:"/guides/formatters"},next:{title:"Input Fields",permalink:"/guides/input-fields"}},c={},u=[{value:"Custom Day",id:"custom-day",level:2},{value:"Range selections with Shift key",id:"range-selections-with-shift-key",level:3},{value:"Wrapping the day",id:"wrapping-the-day",level:3},{value:"Custom Row",id:"custom-row",level:2},{value:"Example: disable rows in the past",id:"example-disable-rows-in-the-past",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-components"},"Custom Components"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," prop to customize the ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/customcomponents"},"components")," used by DayPicker."),(0,a.kt)("h2",{id:"custom-day"},"Custom Day"),(0,a.kt)("p",null,"You can further refine the interaction with the day cells by using a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Day")," component and the ",(0,a.kt)("a",{parentName:"p",href:"/api/functions/useDayRender"},"useDayRender hook"),"."),(0,a.kt)("h3",{id:"range-selections-with-shift-key"},"Range selections with Shift key"),(0,a.kt)("p",null,"The following example implements a date picker to select ranges while pressing the ",(0,a.kt)("kbd",null,"Shift")," key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-include-example"},"range-shift-key\n")),(0,a.kt)("h3",{id:"wrapping-the-day"},"Wrapping the day"),(0,a.kt)("p",null,"Wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"DayContent")," element with a ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," HTML tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-day\n")),(0,a.kt)("h2",{id:"custom-row"},"Custom Row"),(0,a.kt)("h3",{id:"example-disable-rows-in-the-past"},"Example: disable rows in the past"),(0,a.kt)("p",null,"Implement a custom component to hide the rows of past weeks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-disable-row\n")))}d.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);