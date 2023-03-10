var C=Object.defineProperty;var c=(e,n)=>C(e,"name",{value:n,configurable:!0});import{a as b,F as P,j as F}from"./jsx-runtime-47f248ae.js";import{a as z}from"./index-9149dbd5.js";import{r as d,R as t}from"./index-21806a79.js";import"./index-8311e6c8.js";import"./iframe-17ab268d.js";var _=d.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),B=c(function(n,o,i){var r=i.get(n);return r?r(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function k(e,n){if(e==null)return{};var o={},i=Object.keys(e),r,l;for(l=0;l<i.length;l++)r=i[l],!(n.indexOf(r)>=0)&&(o[r]=e[r]);return o}c(k,"_objectWithoutPropertiesLoose");var y=d.forwardRef(function(e,n){var o=e.alt,i=e.color,r=e.size,l=e.weight,x=e.mirrored,w=e.children,E=e.renderPath,v=k(e,["alt","color","size","weight","mirrored","children","renderPath"]),s=d.useContext(_),u=s.color,m=u===void 0?"currentColor":u,h=s.size,f=s.weight,L=f===void 0?"regular":f,g=s.mirrored,j=g===void 0?!1:g,W=k(s,["color","size","weight","mirrored"]);return t.createElement("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r??h,height:r??h,fill:i??m,viewBox:"0 0 256 256",transform:x||j?"scale(-1, 1)":void 0},W,v),!!o&&t.createElement("title",null,o),w,t.createElement("rect",{width:"256",height:"256",fill:"none"}),E(l??L,i??m))});y.displayName="IconBase";const R=y;var a=new Map;a.set("bold",function(e){return t.createElement(t.Fragment,null,t.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});a.set("duotone",function(e){return t.createElement(t.Fragment,null,t.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});a.set("fill",function(){return t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});a.set("light",function(e){return t.createElement(t.Fragment,null,t.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});a.set("thin",function(e){return t.createElement(t.Fragment,null,t.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});a.set("regular",function(e){return t.createElement(t.Fragment,null,t.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var A=c(function(n,o){return B(n,o,a)},"renderPath"),p=d.forwardRef(function(e,n){return t.createElement(R,Object.assign({ref:n},e,{renderPath:A}))});p.displayName="ArrowRight";const I=p,N={title:"Form/Button",component:z,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"clicked"}}},V={},H={args:{variant:"secondary",children:"Create new"}},K={args:{variant:"tertiary",children:"Cancel"}},U={args:{size:"sm"}},Z={args:{children:b(P,{children:["Próximo passo",F(I,{weight:"bold"})]})}},q={args:{disabled:!0}},G=["Primary","Secondary","Tertiary","Small","WithIcon","Disabled"];export{q as Disabled,V as Primary,H as Secondary,U as Small,K as Tertiary,Z as WithIcon,G as __namedExportsOrder,N as default};
//# sourceMappingURL=Button.stories-a8492fc0.js.map
