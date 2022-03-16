"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4939],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"waitForAllSettled(dependencies)",sidebar_label:"waitForAllSettled()"},u=void 0,c={unversionedId:"api-reference/utils/waitForAllSettled",id:"api-reference/utils/waitForAllSettled",title:"waitForAllSettled(dependencies)",description:"Un assistant de concurrence qui renvoie un ensemble de Loadables pour l'\xe9tat actuel des d\xe9pendances demand\xe9es. Il attend que toutes les d\xe9pendances soient soit une valeur ou une erreur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAllSettled.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForAllSettled",permalink:"/fr/docs/api-reference/utils/waitForAllSettled",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAllSettled.md",tags:[],version:"current",frontMatter:{title:"waitForAllSettled(dependencies)",sidebar_label:"waitForAllSettled()"},sidebar:"docs",previous:{title:"waitForAll()",permalink:"/fr/docs/api-reference/utils/waitForAll"},next:{title:"waitForNone()",permalink:"/fr/docs/api-reference/utils/waitForNone"}},s=[],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un assistant de concurrence qui renvoie un ensemble de ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"),"s")," pour l'\xe9tat actuel des d\xe9pendances demand\xe9es. Il attend que toutes les d\xe9pendances soient soit une valeur ou une erreur."),(0,o.kt)("p",null,"Les d\xe9pendances peuvent \xeatre fournies sous forme de tableau de tuples ou de d\xe9pendances nomm\xe9es dans un objet."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAllSettled(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAllSettled(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitForAllSettled()")," est similaire \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForNone()")),", sauf qu'il attend qu'au moins une d\xe9pendance ait une valeur (ou une erreur) disponible au lieu de retourner imm\xe9diatement."))}p.isMDXComponent=!0}}]);