import{E as g,bg as F,an as h,a1 as B,F as t,G as o,H as l,ac as U,ap as V,N as $,ao as x,M as s,a9 as C,af as _,bh as L,ae as w,bi as S,ai as T,aP as E,aY as I,bj as P}from"./vendor_1698644854046-89bb1d9d.js";const j={class:"space-x-2"},D=g({name:"BaseTableSearch",__name:"BaseTableSearch",props:{searchFormList:{type:Array,default:()=>[]}},emits:["update:searchFormList","search","reset"],setup(m,{emit:d}){const i=m,v=d,{searchFormList:f}=F(i),u=h(f.value);return B(u,n=>{v("update:searchFormList",n)},{deep:!0}),(n,p)=>{const y=E,b=I,k=P,r=L,c=w,N=S;return t(),o(N,{"label-placement":"left","label-width":"auto"},{default:l(()=>[(t(!0),U(x,null,V($(u),e=>(t(),o(r,{key:e.key,label:e.label},{default:l(()=>[e.type==="input"?(t(),o(y,{key:0,value:e.value,"onUpdate:value":a=>e.value=a,placeholder:e.placeholder},null,8,["value","onUpdate:value","placeholder"])):e.type==="select"?(t(),o(b,{key:1,value:e.value,"onUpdate:value":a=>e.value=a,placeholder:e.placeholder,options:e.options},null,8,["value","onUpdate:value","placeholder","options"])):e.type==="date"?(t(),o(k,{key:2,"formatted-value":e.value,"onUpdate:formattedValue":a=>e.value=a,type:"date",class:"w-full",placeholder:e.placeholder},null,8,["formatted-value","onUpdate:formattedValue","placeholder"])):T("",!0)]),_:2},1032,["label"]))),128)),s(r,null,{default:l(()=>[C("div",j,[s(c,{type:"primary",class:"px-6",onClick:p[0]||(p[0]=e=>n.$emit("search"))},{default:l(()=>[_(" 搜索 ")]),_:1}),s(c,{type:"primary",class:"px-6",ghost:"",onClick:p[1]||(p[1]=e=>n.$emit("reset"))},{default:l(()=>[_(" 重置 ")]),_:1})])]),_:1})]),_:1})}}});export{D as _};
