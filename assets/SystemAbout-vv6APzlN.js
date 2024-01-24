import{E as h,F as l,ad as a,M as n,H as s,ah as r,av as p,N as y,ap as _,aq as b,bp as w,bq as k,br as D}from"./vendor_1706073395038-y6ZWoyLF.js";const N="vadmire-admin",z="module",E="1.9.0",I="VAdmire Admin 是一款基于 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统",V={dev:"vite --mode development","build:mock":"vite build --mode development",build:"vite build --mode production",preview:"vite preview",lint:'prettier . --write && eslint . && stylelint "**/*.{css,scss,sass,vue}"',"lint:fix":'prettier . --write && eslint . --fix && stylelint --fix "**/*.{css,scss,sass,vue}"',release:"standard-version",prepare:"husky install",commit:"git-cz"},A={"@flypeng/tool":"^5.5.2","@logicflow/core":"^1.2.18","@logicflow/extension":"^1.2.19","@pansy/vue-watermark":"^1.2.0","@vueuse/core":"^9.13.0","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","animate.css":"^4.1.1",axios:"^1.6.5",colord:"^2.9.3",dayjs:"^1.11.10","driver.js":"^0.9.8",echarts:"^5.4.3","fuse.js":"^6.6.2",mitt:"^3.0.1",mockjs:"^1.1.0","modern-screenshot":"^4.4.37","naive-ui":"^2.37.3",nprogress:"^0.2.0",pinia:"^2.1.7",swiper:"^10.3.1","v-clipboard":"3.0.0-next.1",vditor:"^3.9.8",vue:"^3.4.15","vue-i18n":"^9.9.0","vue-router":"^4.2.5","vue3-photo-preview":"^0.3.0",vuedraggable:"^4.1.0",xgplayer:"^2.32.6",xlsx:"https://cdn.sheetjs.com/xlsx-0.19.3/xlsx-0.19.3.tgz"},C={"@commitlint/cli":"^17.8.1","@commitlint/config-conventional":"^17.8.1","@flypeng/eslint-config":"2.0.0-beta.3","@flypeng/stylelint-config":"^1.0.1","@iconify-json/ant-design":"^1.1.13","@iconify-json/carbon":"^1.1.28","@iconify-json/ep":"^1.1.14","@iconify-json/fa":"^1.1.8","@iconify-json/ic":"^1.1.17","@iconify-json/line-md":"^1.1.33","@iconify-json/logos":"^1.1.42","@iconify-json/material-symbols":"^1.1.70","@iconify-json/mdi":"^1.1.64","@iconify-json/mdi-light":"^1.1.10","@iconify-json/noto":"^1.1.18","@iconify-json/openmoji":"^1.1.46","@iconify-json/ph":"^1.1.10","@iconify-json/ri":"^1.1.19","@iconify-json/tabler":"^1.1.104","@iconify-json/uil":"^1.1.8","@iconify-json/vscode-icons":"^1.1.33","@iconify/vue":"^4.1.1","@tailwindcss/typography":"^0.5.10","@types/mockjs":"^1.0.10","@types/node":"^18.19.8","@types/nprogress":"^0.2.3","@vitejs/plugin-vue":"^5.0.3",autoprefixer:"^10.4.17",commitizen:"^4.3.0",eslint:"^8.56.0",husky:"^8.0.3","lint-staged":"^13.3.0",postcss:"^8.4.33",prettier:"^3.2.4","rollup-plugin-external-globals":"^0.8.0",sass:"^1.70.0","standard-version":"^9.5.0",stylelint:"^15.11.0",tailwindcss:"^3.4.1",typescript:"^5.3.3","unplugin-auto-import":"^0.14.4","unplugin-icons":"^0.15.3","unplugin-vue-components":"^0.24.1",vite:"^5.0.12","vite-plugin-cdn-import":"^0.3.5","vite-plugin-clear-console":"^0.2.3","vite-plugin-mock":"^2.9.8","vite-plugin-pwa":"^0.16.7","vite-plugin-spa-loading":"^1.2.2","vite-plugin-vue-devtools":"^7.0.11","vue-tsc":"^1.8.27"},L={xlsx:"https://cdn.sheetjs.com/xlsx-0.19.3/xlsx-0.19.3.tgz"},S={commitizen:{path:"cz-conventional-changelog"}},q={name:N,type:z,private:!0,version:E,description:I,scripts:V,dependencies:A,devDependencies:C,overrides:L,"lint-staged":{"*.!{css,scss,sass,vue}":["eslint . --fix"],"*.{css,scss,sass,vue}":['stylelint --fix "**/*.{css,scss,sass,vue}"']},config:S},B={class:"space-y-2"},T=h({__name:"SystemAbout",setup(F){const{name:j,description:x,dependencies:d,devDependencies:u}=q,v=[],m=[];return Object.keys(d).forEach(i=>{const e={name:"",version:""};e.name=i,e.version=d[i],v.push(e)}),Object.keys(u).forEach(i=>{const e={name:"",version:""};e.name=i,e.version=u[i],m.push(e)}),(i,e)=>{const o=w,f=D,g=k;return l(),a("div",B,[n(o,{title:y(j),hoverable:""},{default:s(()=>[r(p(y(x)),1)]),_:1},8,["title"]),n(o,{title:"开发环境相关依赖",hoverable:""},{default:s(()=>[n(g,{"label-placement":"left",bordered:""},{default:s(()=>[(l(),a(_,null,b(m,(t,c)=>n(f,{key:c,label:t.name},{default:s(()=>[r(p(t.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),n(o,{title:"生成环境相关依赖",hoverable:""},{default:s(()=>[n(g,{"label-placement":"left",bordered:""},{default:s(()=>[(l(),a(_,null,b(v,(t,c)=>n(f,{key:c,label:t.name},{default:s(()=>[r(p(t.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})])}}});export{T as default};
