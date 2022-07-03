import{X as x,_ as I,d as h,Y as k,Z as P,v as _,w as U,x as C}from"./index.d0953f99.js";var b={exports:{}};(function(g,A){(function(c,r){g.exports=r()})(x,function(){function c(e){var s=[];return e.AMapUI&&s.push(r(e.AMapUI)),e.Loca&&s.push(w(e.Loca)),Promise.all(s)}function r(e){return new Promise(function(s,n){var i=[];if(e.plugins)for(var u=0;u<e.plugins.length;u+=1)a.AMapUI.plugins.indexOf(e.plugins[u])==-1&&i.push(e.plugins[u]);if(t.AMapUI===o.failed)n("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");else if(t.AMapUI===o.notload){t.AMapUI=o.loading,a.AMapUI.version=e.version||a.AMapUI.version,u=a.AMapUI.version;var d=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/ui/"+u+"/main.js",l.onerror=function(p){t.AMapUI=o.failed,n("\u8BF7\u6C42 AMapUI \u5931\u8D25")},l.onload=function(){if(t.AMapUI=o.loaded,i.length)window.AMapUI.loadUI(i,function(){for(var p=0,M=i.length;p<M;p++){var v=i[p].split("/").slice(-1)[0];window.AMapUI[v]=arguments[p]}for(s();f.AMapUI.length;)f.AMapUI.splice(0,1)[0]()});else for(s();f.AMapUI.length;)f.AMapUI.splice(0,1)[0]()},d.appendChild(l)}else t.AMapUI===o.loaded?e.version&&e.version!==a.AMapUI.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):i.length?window.AMapUI.loadUI(i,function(){for(var p=0,M=i.length;p<M;p++){var v=i[p].split("/").slice(-1)[0];window.AMapUI[v]=arguments[p]}s()}):s():e.version&&e.version!==a.AMapUI.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):f.AMapUI.push(function(p){p?n(p):i.length?window.AMapUI.loadUI(i,function(){for(var M=0,v=i.length;M<v;M++){var L=i[M].split("/").slice(-1)[0];window.AMapUI[L]=arguments[M]}s()}):s()})})}function w(e){return new Promise(function(s,n){if(t.Loca===o.failed)n("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");else if(t.Loca===o.notload){t.Loca=o.loading,a.Loca.version=e.version||a.Loca.version;var i=a.Loca.version,u=a.AMap.version.startsWith("2"),d=i.startsWith("2");if(u&&!d||!u&&d)n("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");else{u=a.key,d=document.body||document.head;var l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/loca?v="+i+"&key="+u,l.onerror=function(p){t.Loca=o.failed,n("\u8BF7\u6C42 AMapUI \u5931\u8D25")},l.onload=function(){for(t.Loca=o.loaded,s();f.Loca.length;)f.Loca.splice(0,1)[0]()},d.appendChild(l)}}else t.Loca===o.loaded?e.version&&e.version!==a.Loca.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):s():e.version&&e.version!==a.Loca.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):f.Loca.push(function(p){p?n(p):n()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(o||(o={}));var a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},f={AMap:[],AMapUI:[],Loca:[]},m=[],y=function(e){typeof e=="function"&&(t.AMap===o.loaded?e(window.AMap):m.push(e))};return{load:function(e){return new Promise(function(s,n){if(t.AMap==o.failed)n("");else if(t.AMap==o.notload){var i=e.key,u=e.version,d=e.plugins;i?(window.AMap&&location.host!=="lbs.amap.com"&&n("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"),a.key=i,a.AMap.version=u||a.AMap.version,a.AMap.plugins=d||a.AMap.plugins,t.AMap=o.loading,u=document.body||document.head,window.___onAPILoaded=function(p){if(delete window.___onAPILoaded,p)t.AMap=o.failed,n(p);else for(t.AMap=o.loaded,c(e).then(function(){s(window.AMap)}).catch(n);m.length;)m.splice(0,1)[0]()},d=document.createElement("script"),d.type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+a.AMap.version+"&key="+i+"&plugin="+a.AMap.plugins.join(","),d.onerror=function(p){t.AMap=o.failed,n(p)},u.appendChild(d)):n("\u8BF7\u586B\u5199key")}else if(t.AMap==o.loaded)if(e.key&&e.key!==a.key)n("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==a.AMap.version)n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{if(i=[],e.plugins)for(u=0;u<e.plugins.length;u+=1)a.AMap.plugins.indexOf(e.plugins[u])==-1&&i.push(e.plugins[u]);i.length?window.AMap.plugin(i,function(){c(e).then(function(){s(window.AMap)}).catch(n)}):c(e).then(function(){s(window.AMap)}).catch(n)}else if(e.key&&e.key!==a.key)n("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==a.AMap.version)n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{var l=[];if(e.plugins)for(u=0;u<e.plugins.length;u+=1)a.AMap.plugins.indexOf(e.plugins[u])==-1&&l.push(e.plugins[u]);y(function(){l.length?window.AMap.plugin(l,function(){c(e).then(function(){s(window.AMap)}).catch(n)}):c(e).then(function(){s(window.AMap)}).catch(n)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},f={AMap:[],AMapUI:[],Loca:[]}}}})})(b);var G=b.exports;const E={id:"GaoDe-Container",class:"w-full h-full m-0 p-0"},S=h({__name:"GaodeMapCom",setup(g){const A=k(),c=async()=>{const r=await G.load({key:"601078ac96aca51f00997aee8d495a49",version:"2.0",plugins:[""]}),w={viewMode:"3D",zoom:12,mapStyle:"amap://styles/blue"};A.value=new r.Map("GaoDe-Container",w),r.plugin(["AMap.ToolBar","AMap.Scale","AMap.HawkEye","AMap.MapType"],()=>{A.value.addControl(new r.ToolBar),A.value.addControl(new r.Scale),A.value.addControl(new r.HawkEye({isOpen:!0})),A.value.addControl(new r.MapType)})};return P(()=>{c()}),(r,w)=>(_(),U("div",E))}});var j=I(S,[["__file","/home/runner/work/vue-plus-admin/vue-plus-admin/src/components/GaodeMapCom.vue"]]);const B={class:"!p-0"},O=h({__name:"GaodeMapPlugin",setup(g){return(A,c)=>(_(),U("div",B,[C(j)]))}});var T=I(O,[["__file","/home/runner/work/vue-plus-admin/vue-plus-admin/src/views/plugins/GaodeMapPlugin.vue"]]);export{T as default};
