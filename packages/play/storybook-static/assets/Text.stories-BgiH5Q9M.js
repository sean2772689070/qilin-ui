import{o as x,i as y,t as g}from"./index-D_aWI4Ht.js";import{d as f,m as v,e as T,o as B,B as Q,w as F,n as D,u as a,G as w,H as E,j as b}from"./vue.esm-bundler-QuvZlvi5.js";const z={type:"default",size:"default",truncated:!1,lineClamp:"",tag:"span"},u=x(y(f({name:"QiText",__name:"text",props:v({type:{},size:{},truncated:{type:Boolean},lineClamp:{},tag:{}},z),setup(t){const n=g("text"),o=t,C=T(()=>!(o.lineClamp===""||isNaN(o.lineClamp)));return(e,_)=>(B(),Q(E(e.tag),{class:D([a(n).b(),a(n).m(`${e.type}-type`),a(n).m(`${e.size}-size`),a(n).is("truncated",e.truncated),a(n).is("line-clamp",C.value)]),style:w({"-webkit-line-clamp":e.lineClamp})},{default:F(()=>[b(e.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),[["__scopeId","data-v-5977d1c0"]])),k={title:"Example/Text",component:u,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["large","default","small",""]},type:{control:{type:"select"},options:["primary","success","warning","danger","info","default",""]},truncated:{control:{type:"boolean"}},lineClamp:{control:{type:"text"}},tag:{control:{type:"text"}}}},s={render:t=>({components:{QiText:u},setup(){return{args:t}},template:`
      <div style="width: 300px">
        <QiText v-bind="args" >
          这是一段单行测试文本，调整truncated属性，查看效果。
        </QiText>
      </div>

    `})},r={render:t=>({components:{QiText:u},setup(){return{args:t}},template:`
      <div style="width: 100px;">
        <QiText v-bind="args" >
          这是一段多行测试文本，调整lineClamp属性，查看效果。
        </QiText>
      </div>

    `})};var l,i,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      QiText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 300px">
        <QiText v-bind="args" >
          这是一段单行测试文本，调整truncated属性，查看效果。
        </QiText>
      </div>

    \`
  })
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      QiText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 100px;">
        <QiText v-bind="args" >
          这是一段多行测试文本，调整lineClamp属性，查看效果。
        </QiText>
      </div>

    \`
  })
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const $=["Default","LineClamp"];export{s as Default,r as LineClamp,$ as __namedExportsOrder,k as default};
