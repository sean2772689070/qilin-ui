import{i as V,o as w,t as I,c as S}from"./index-D_aWI4Ht.js";import{d as k,m as $,b as T,e as j,o as E,f as Q,g as m,n as d,u as s,j as u,k as h,w as z,l as H,t as L,T as O,p as A,q as F,s as P,v as G,x as J,y as K,z as M,A as R}from"./vue.esm-bundler-QuvZlvi5.js";import{v as U}from"./icon-BIAgXRnL-DD2Iq3_v.js";const B=Symbol("collapseContext"),W=V(k({name:"QiCollapse",__name:"collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:l}){const c=I("collapse"),i=e,r=l,n=A(i.modelValue),a=t=>{n.value=t,r("update:modelValue",t),r("change",t)};return F(()=>{i.accordion&&n.value.length>1&&S()}),P(()=>i.modelValue,t=>a(t)),G(B,{activeNames:n,handleItemClick:t=>{let o=[...n.value];if(i.accordion)return o=[o[0]===t?"":t],void a(o);const v=o.indexOf(t);v>-1?o.splice(v,1):o.push(t),a(o)}}),(t,o)=>(E(),Q("div",{class:d(s(c).b())},[u(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-a5023cfd"]]),X={name:"",title:"",disabled:!1},b=e=>e.style.height="0px",f=e=>e.style.height=`${e.scrollHeight}px`,g=e=>e.style.height="",q=e=>e.style.overflow="hidden",C=e=>e.style.overflow="",Y={beforeEnter(e){b(e),q(e)},enter:e=>f(e),afterEnter(e){g(e),C(e)},beforeLeave(e){f(e),q(e)},leave:e=>b(e),afterLeave(e){g(e),C(e)}},Z=["id"],ee=["id"],ae=V(k({name:"QiCollapseItem",__name:"collapse-item",props:$({name:{},title:{},disabled:{type:Boolean}},X),setup(e){const l=I("collapse-item"),c=e,i=T(B,void 0),r=j(()=>{var a;return(a=i==null?void 0:i.activeNames.value)==null?void 0:a.includes(c.name)}),n=()=>{c.disabled||(i==null||i.handleItemClick(c.name))};return(a,t)=>(E(),Q("div",{class:d([s(l).b(),s(l).is("disabled",a.disabled)])},[m("div",{id:`item-header-${a.name}`,class:d([s(l).e("header"),s(l).is("disabled",a.disabled),s(l).is("active",r.value)]),onClick:n},[m("span",{class:d(s(l).e("title"))},[u(a.$slots,"title",{},()=>[J(K(a.title),1)],!0)],2),h(U,{icon:"angle-right",class:"header-angle"})],10,Z),h(O,H({name:"slide"},L(s(Y))),{default:z(()=>[M(m("div",{class:d(s(l).e("wrapper"))},[m("div",{id:`item-content-${a.name}`,class:d(s(l).e("content"))},[u(a.$slots,"default",{},void 0,!0)],10,ee)],2),[[R,r.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-0056701b"]]),D=w(W),N=w(ae),ie={title:"Example/Collapse",component:D,subcomponents:{QiCollapseItem:N},tags:["autodocs"]},p={render:e=>({components:{QiCollapse:D,QiCollapseItem:N},setup(){return{args:e}},template:`
    <qi-collapse v-bind="args">
      <qi-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </qi-collapse-item>
      <qi-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </qi-collapse-item>
      <qi-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </qi-collapse-item>
    </qi-collapse>
    `}),args:{accordion:!0,modelValue:["a"]}};var _,x,y;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      QiCollapse,
      QiCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <qi-collapse v-bind="args">
      <qi-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </qi-collapse-item>
      <qi-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </qi-collapse-item>
      <qi-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </qi-collapse-item>
    </qi-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ['a']
  }
}`,...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const oe=["Default"];export{p as Default,oe as __namedExportsOrder,ie as default};
