import{_,d as x,r as p,Q as k,C as u,v as b,O as s,R as g,T as B,J as m,x as h,F as T,y as N,U as F,V,w as E,t as H,u as $,W as L,X as U,Y as W,$ as R}from"./index.7ba8ee57.js";/* empty css                        */const Y=x({__name:"VAdmireTableCom",props:{isStripe:{type:Boolean,required:!1,default:!0},isBorder:{type:Boolean,required:!1,default:!0},isLoading:{type:Boolean,required:!1,default:!1},isNeedCheckbox:{type:Boolean,required:!1,default:!1},tableHeader:{type:Array,required:!0},tableContent:{type:Array,required:!1},tableWidth:{type:String,required:!1,default:"100%"},tableHeight:{type:[String,Number,null],required:!1,default:void 0},sectionContent:{type:Array,required:!1},defaultPage:{type:Number,required:!1,default:1},defaultPageSize:{type:Number,required:!1,default:10},defaultPageSizes:{type:Array,required:!1,default:()=>[5,10,15,20,25]},handlePagination:{type:String,required:!1,default:"web"}},emits:["update:sectionContent","update:defaultPage","update:defaultPageSize"],setup(n,{emit:c}){const t=n,y=p(t.tableHeader||[]),f=p([]),v=e=>{c("update:sectionContent",e)},i=p(t.defaultPage),d=p(t.defaultPageSize),C=e=>{i.value=e,c("update:defaultPage",e)},P=e=>{d.value=e,c("update:defaultPageSize",e)},S=(e,l)=>{const r=W.cloneDeep(t.tableContent||[]);let o=[];return e===1?o=r==null?void 0:r.slice(0,l):o=r==null?void 0:r.slice((e-1)*l,e*l),o};return k(()=>{t.handlePagination==="web"?f.value=S(i.value,d.value):f.value=t.tableContent||[]}),(e,l)=>{const r=H,o=$,w=L,q=U;return u(),b("div",null,[s(" \u641C\u7D22\u6A21\u5757 "),g(e.$slots,"table-searchs"),s(" \u76F8\u5173\u6309\u94AE\u6A21\u5757 "),g(e.$slots,"table-buttons"),s(" \u8868\u683C\u6A21\u677F "),B((u(),m(o,{"element-loading-text":"\u52A0\u8F7D\u4E2D...",height:t.tableHeight,style:V({width:n.tableWidth,marginTop:"15px"}),data:f.value,stripe:t.isStripe,border:t.isBorder,onSelectionChange:v},{default:h(()=>[t.isNeedCheckbox?(u(),m(r,{key:0,type:"selection"})):s("v-if",!0),(u(!0),b(T,null,N(y.value,(a,z)=>(u(),m(r,{key:z,fixed:a.columnFixed,prop:a.columnProp,label:a.columnTitle,width:a.columnWidth},F({_:2},[a.columnCustom?{name:"default",fn:h(A=>[g(e.$slots,a.columnProp,{content:A.row})])}:void 0]),1032,["fixed","prop","label","width"]))),128))]),_:3},8,["height","style","data","stripe","border"])),[[q,t.isLoading]]),s(" \u5206\u9875\u6A21\u5757 "),E(w,{style:{"margin-top":"20px"},background:"",currentPage:i.value,"onUpdate:currentPage":l[0]||(l[0]=a=>i.value=a),"page-size":d.value,"onUpdate:page-size":l[1]||(l[1]=a=>d.value=a),layout:"->, total, sizes, prev, pager, next, jumper","page-sizes":t.defaultPageSizes,total:t.tableContent.length,onCurrentChange:C,onSizeChange:P},null,8,["currentPage","page-size","page-sizes","total"])])}}});var J=_(Y,[["__file","/home/runner/work/vue-admire-plus/vue-admire-plus/src/components/VAdmireTableCom.vue"]]);const O=async()=>{const n=await R.YPlusRequest({url:"/user/list",method:"post"});if(n.code===200)return n.data};export{J as V,O as g};
