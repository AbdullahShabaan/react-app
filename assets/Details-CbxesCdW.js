const __vite__fileDeps=["assets/Modal-DlhRdHou.js","assets/index-BCDLOhh2.js","assets/index-DtxPCrtM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var m=Object.defineProperty;var u=(a,t,e)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var l=(a,t,e)=>(u(a,typeof t!="symbol"?t+"":t,e),e);import{r as n,j as s,_ as x,u as h,a as j,A as p,L as v}from"./index-BCDLOhh2.js";import{u as g}from"./useQuery-DqdM_JF9.js";const f=async({queryKey:a})=>{const[,t]=a;return(await fetch(`https://pets-v2.dev-apis.com/pets?id=${t}`)).json()},y=a=>g({queryKey:["pet",a],queryFn:f});class C extends n.Component{constructor(){super(...arguments);l(this,"state",{active:0})}render(){return s.jsxs("div",{className:"carousel",children:[s.jsx("img",{src:this.props.images[this.state.active],alt:"Animal"}),s.jsx("div",{className:"carousel-smaller",children:this.props.images.map((e,r)=>s.jsx("img",{src:e,alt:"Animal","data-index":r,className:r===this.state.active?"active":"",onClick:c=>{this.setState({active:+c.target.dataset.index})}},e))})]})}}const A=n.lazy(()=>x(()=>import("./Modal-DlhRdHou.js"),__vite__mapDeps([0,1,2]))),k=()=>{var o;const{id:a}=h(),t=j(),e=y(a),[r,c]=n.useState(!1);let i=(o=e==null?void 0:e.data)==null?void 0:o.pets[0];const[,d]=n.useContext(p);return s.jsxs("div",{className:"details",style:{textAlign:"center"},children:[!e.data&&s.jsx(v,{}),e.isError&&s.jsx("span",{children:e.error.message}),e.data&&s.jsxs("div",{children:[s.jsxs("h2",{style:{fontSize:"40px"},children:["Name: ",i.name]}),s.jsx(C,{images:i==null?void 0:i.images}),s.jsx("h2",{children:`${i.animal} — ${i.breed} — ${i.city}, ${i.state}`}),s.jsxs("button",{onClick:()=>c(!0),children:["Adopt ",i.name]}),s.jsx("p",{children:i.description}),s.jsx("button",{onClick:()=>{t(-1)},children:"Back"}),r&&s.jsx(n.Suspense,{fallback:s.jsx("h2",{children:"Loading"}),children:s.jsxs(A,{children:[s.jsxs("h2",{children:["Are you sure to adopt ",i.name,"?"]}),s.jsxs("div",{className:"buttons",children:[s.jsx("button",{onClick:()=>{d(i),t(-1)},children:"Yes"}),s.jsx("button",{onClick:()=>c(!1),children:"No"})]})]})})]})]})};export{k as default};