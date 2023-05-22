import{_ as S,a as w,b,c as k}from"./shield-lock-outline-c1114db7.js";import{g as C,K as I,L as N,M as A,r as p,N as T,w as B,x as L,H as e,C as n,O as D,B as U,y as s,z as o,P as F,t as H,Q as M,R as P,S as R}from"./index-2c49b2f9.js";import V from"./SystemPlatformAuth-2d1e7828.js";const j={class:"flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},z={class:"max-w-md w-full space-y-4"},E=["src"],K=e("h2",{class:"text-center text-2xl font-bold"}," Sign in ",-1),O={class:"mt-2 text-center text-sm text-primary"},Q={class:"shadow px-8 py-6 rounded-md"},W=e("div",{class:"text-right cursor-pointer text-primary hover:text-primaryHover mb-2"},[e("span",{class:"cursor-pointer"},"Forgot your password")],-1),$={class:"space-y-3"},q=e("span",null,"Sign in",-1),G=e("span",null,"Sign up",-1),ee=C({__name:"SystemLogin",setup(J){const r=I(),d=N(),g=A(),a=p({username:"",password:""}),c=p(!1),f=async()=>{c.value=!0;const{statusCode:u,statusText:t,data:i}=await F(a.value);if(u!==200){r.error(t);return}r.success(t),H(M,i.accessToken),c.value=!1,setTimeout(()=>{d.push({name:"SystemAboutIndex"})},1e3)},x=T("switchSign");return(u,t)=>{const i=P,_=S,h=w,m=R,y=b,v=k;return B(),L("div",j,[e("div",z,[e("div",null,[e("img",{src:n(D),class:"mx-auto h-10 w-auto",alt:"System Logo"},null,8,E),K,e("p",O," Welcome to "+U(n(g).name),1)]),e("div",Q,[s(v,{ref:"signInRef",size:"medium","label-width":"auto",model:n(a)},{default:o(()=>[s(_,{label:"Username"},{default:o(()=>[s(i,{value:n(a).username,"onUpdate:value":t[0]||(t[0]=l=>n(a).username=l),placeholder:"Default account: admin | user"},null,8,["value"])]),_:1}),s(_,{label:"Password"},{default:o(()=>[s(i,{value:n(a).password,"onUpdate:value":t[1]||(t[1]=l=>n(a).password=l),placeholder:"Default account admin | user"},null,8,["value"])]),_:1}),W,e("div",$,[s(m,{block:"",type:"primary",loading:n(c),onClick:f},{icon:o(()=>[s(h)]),default:o(()=>[q]),_:1},8,["loading"]),s(m,{block:"",secondary:"",type:"primary",onClick:t[2]||(t[2]=l=>n(x)(!1))},{icon:o(()=>[s(y)]),default:o(()=>[G]),_:1}),s(V)])]),_:1},8,["model"])])])])}}});export{ee as _};
