import{o as y,i as h,t as _}from"./index-D_aWI4Ht.js";import{d as L,m as Q,o as a,f as s,B as v,C as i,n as l,u as t,j as c}from"./vue.esm-bundler-QuvZlvi5.js";import{v as B,b as x}from"./icon-BIAgXRnL-DD2Iq3_v.js";const C={type:"",underline:!0,disabled:!1,href:"",target:"_blank",icon:""},I=["href","target"],u=y(h(L({name:"QiLink",inheritAttrs:!1,__name:"link",props:Q({type:{},underline:{type:Boolean},disabled:{type:Boolean},href:{},target:{},icon:{}},C),emits:["click"],setup(r,{emit:k}){const n=_("link"),f=r,g=k,b=e=>{f.disabled||g("click",e)};return(e,$)=>(a(),s("a",{class:l([t(n).b(),t(n).m(e.type),t(n).is("underline",e.underline),t(n).is("disabled",e.disabled)]),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:b},[e.icon?(a(),v(B,{key:0,icon:e.icon},null,8,["icon"])):i("",!0),e.$slots.default?(a(),s("span",{key:1,class:l(t(n).e("inner"))},[c(e.$slots,"default",{},void 0,!0)],2)):i("",!0),e.$slots.icon?c(e.$slots,"icon",{key:2},void 0,!0):i("",!0)],10,I))}}),[["__scopeId","data-v-3961c756"]])),S={title:"Example/Link",component:u,subcomponents:{QiIcon:x},tags:["autodocs"],argTypes:{icon:{control:{type:"text"}},type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},underline:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},href:{control:{type:"text"}},target:{control:{type:"select"},options:["_blank","_parent","_self","_top"]}}},o={render:r=>({components:{QiLink:u},setup(){return{args:r}},template:`
      <QiLink v-bind="args">
        <template #icon>
          <QiIcon name="arrow-right" />
        </template>
        Link
      </QiLink>
    `})};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      QiLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <QiLink v-bind="args">
        <template #icon>
          <QiIcon name="arrow-right" />
        </template>
        Link
      </QiLink>
    \`
  })
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,S as default};
