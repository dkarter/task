"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[97],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const o={slug:"/releasing/",sidebar_position:10},i="\u53d1\u5e03",s={unversionedId:"releasing",id:"releasing",title:"\u53d1\u5e03",description:"Task \u7684\u53d1\u5e03\u6d41\u7a0b\u662f\u5728 GoReleaser \u7684\u5e2e\u52a9\u4e0b\u5b8c\u6210\u7684\u3002 \u672c\u5730\u8c03\u7528 Taskfile \u7684 test-release \u4efb\u52a1\u53ef\u4ee5\u6d4b\u8bd5\u53d1\u5e03\u6d41\u7a0b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/releasing.md",sourceDirName:".",slug:"/releasing/",permalink:"/zh-Hans/releasing/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/releasing/",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u8d21\u732e",permalink:"/zh-Hans/contributing/"},next:{title:"Taskfile \u7248\u672c",permalink:"/zh-Hans/taskfile-versions/"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03"},"\u53d1\u5e03"),(0,a.kt)("p",null,"Task \u7684\u53d1\u5e03\u6d41\u7a0b\u662f\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://goreleaser.com/"},"GoReleaser")," \u7684\u5e2e\u52a9\u4e0b\u5b8c\u6210\u7684\u3002 \u672c\u5730\u8c03\u7528 Taskfile \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"test-release")," \u4efb\u52a1\u53ef\u4ee5\u6d4b\u8bd5\u53d1\u5e03\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/actions"},"GitHub Actions")," \u4f1a\u5728\u65b0 tag \u63a8\u9001\u5230 master \u5206\u652f\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u53d1\u5e03\u4ea7\u51fa\u7269\uff08\u539f\u751f\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3001DEB \u548c RPM \u5305\uff09\u3002"),(0,a.kt)("p",null,"\u4ece v3.15.0 \u5f00\u59cb\uff0c\u539f\u59cb\u53ef\u6267\u884c\u6587\u4ef6\u4e5f\u53ef\u4ee5\u901a\u8fc7\u68c0\u67e5\u7279\u5b9a\u7684\u6807\u7b7e\u5e76\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"goreleaser build"),"\uff0c\u4f7f\u7528\u4e0a\u8ff0 GitHub Actions \u4e2d\u5b9a\u4e49\u7684 Go \u7248\u672c\uff0c\u5728\u672c\u5730\u8fdb\u884c\u590d\u5236\u548c\u9a8c\u8bc1\u3002"),(0,a.kt)("h1",{id:"homebrew"},"Homebrew"),(0,a.kt)("p",null,"Goreleaser \u4f1a\u81ea\u52a8\u5411 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap"},"Homebrew tap")," \u4ed3\u5e93\u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap/blob/master/Formula/go-task.rb"},"Formula/go-task.rb")," \u6587\u4ef6\u63a8\u9001\u4e00\u4e2a\u65b0\u7684\u63d0\u4ea4\uff0c\u4ee5\u53d1\u5e03\u65b0\u7684\u7248\u672c\u3002"),(0,a.kt)("h1",{id:"npm"},"npm"),(0,a.kt)("p",null,"\u8981\u53d1\u5e03\u5230 npm \uff0c\u8bf7\u66f4\u65b0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/blob/master/package.json#L3"},(0,a.kt)("inlineCode",{parentName:"a"},"package.json"))," \u6587\u4ef6\u4e2d\u7684\u7248\u672c\uff0c\u7136\u540e\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"task npm:publish")," \u6765\u63a8\u9001\u5b83\u3002"),(0,a.kt)("h1",{id:"snapcraft"},"Snapcraft"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-task/snap"},"snap package")," \u53d1\u5e03\u65b0\u7248\u672c\u9700\u8981\u624b\u52a8\u6267\u884c\u4e0b\u9762\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-task/snap/blob/master/snap/snapcraft.yaml#L2"},"snapcraft.yaml")," \u6587\u4ef6\u4e2d\u7684\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"amd64"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"armhf")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"arm64")," \u79fb\u52a8\u5230 ",(0,a.kt)("a",{parentName:"li",href:"https://snapcraft.io/task/releases"},"Snapcraft dashboard")," \u7684\u7a33\u5b9a\u901a\u9053\u3002")),(0,a.kt)("h1",{id:"scoop"},"Scoop"),(0,a.kt)("p",null,"Scoop \u662f\u4e00\u4e2a Windows \u7cfb\u7edf\u7684\u547d\u4ee4\u884c\u5305\u7ba1\u7406\u5de5\u5177\u3002 Scoop \u7684\u5305\u6e05\u5355\u7531\u793e\u533a\u7ef4\u62a4\u3002 Scoop \u7684\u7ef4\u62a4\u4eba\u901a\u5e38\u4f1a\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukesampson/scoop-extras/blob/master/bucket/task.json"},"\u8fd9\u4e2a\u6587\u4ef6")," \u91cc\u7ef4\u62a4\u7248\u672c\u3002 \u5982\u679c\u53d1\u73b0 Task \u7248\u672c\u662f\u65e7\u7684\uff0c\u8bf7\u63d0\u4ea4\u4e00\u4e2a Issue \u901a\u77e5\u6211\u4eec\u3002"),(0,a.kt)("h1",{id:"nix"},"Nix"),(0,a.kt)("p",null,"Nix \u5b89\u88c5\u7531\u793e\u533a\u7ef4\u62a4\u3002 Nix \u5305\u7684\u7ef4\u62a4\u4eba\u5458\u901a\u5e38\u4f1a\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs/blob/nixos-unstable/pkgs/development/tools/go-task/default.nix"},"\u8fd9\u4e2a\u6587\u4ef6")," \u91cc\u7ef4\u62a4\u7248\u672c\u3002 \u5982\u679c\u53d1\u73b0 Task \u7248\u672c\u662f\u65e7\u7684\uff0c\u8bf7\u63d0\u4ea4\u4e00\u4e2a Issue \u901a\u77e5\u6211\u4eec\u3002"))}u.isMDXComponent=!0}}]);