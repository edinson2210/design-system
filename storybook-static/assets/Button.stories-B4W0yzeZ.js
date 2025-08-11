import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as E}from"./iframe-Czu76S4H.js";import{c as F,a as M}from"./index-lnR2ABT4.js";const T=F("ds-btn",{variants:{variant:{solid:"ds-btn--variant-solid",bordered:"ds-btn--variant-bordered",light:"ds-btn--variant-light",flat:"ds-btn--variant-flat",faded:"ds-btn--variant-faded",shadow:"ds-btn--variant-shadow",ghost:"ds-btn--variant-ghost"},color:{default:"ds-btn--color-default",primary:"ds-btn--color-primary",secondary:"ds-btn--color-secondary",success:"ds-btn--color-success",warning:"ds-btn--color-warning",danger:"ds-btn--color-danger"},size:{sm:"ds-btn--sm",md:"ds-btn--md",lg:"ds-btn--lg"},radius:{none:"ds-btn--radius-none",sm:"ds-btn--radius-sm",md:"ds-btn--radius-md",lg:"ds-btn--radius-lg",full:"ds-btn--radius-full"},fullWidth:{true:"ds-btn--full",false:""},isIconOnly:{true:"ds-btn--icon-only",false:""},disableAnimation:{true:"ds-btn--no-anim",false:""}},compoundVariants:[{variant:"shadow",class:"ds-btn--with-shadow"}],defaultVariants:{variant:"solid",color:"primary",size:"md",radius:"md",fullWidth:!1,isIconOnly:!1}});function G(){return e.jsx("span",{className:"ds-spinner","aria-hidden":!0})}const $=(y,g)=>{const{as:a,children:s,className:S,variant:V="solid",color:L="primary",size:O="md",radius:D="md",fullWidth:q=!1,isIconOnly:P=!1,isDisabled:W=!1,isLoading:h=!1,disableRipple:C=!1,disableAnimation:R=!1,spinner:N,spinnerPlacement:B="start",...j}=y,x=a||"button",k=T({variant:V,color:L,size:O,radius:D,fullWidth:q,isIconOnly:P,disableAnimation:R}),r=W||h,b=h?N||e.jsx(G,{}):null,_=e.jsxs(e.Fragment,{children:[b&&B==="start"?e.jsx("span",{className:"ds-btn__spinner ds-btn__spinner--start",children:b}):null,e.jsx("span",{className:"ds-btn__content",children:s}),b&&B==="end"?e.jsx("span",{className:"ds-btn__spinner ds-btn__spinner--end",children:b}):null]}),{onClick:z,...w}=j,A=v=>{if(r){v.preventDefault(),v.stopPropagation();return}typeof z=="function"&&z(v)},I={ref:g,className:M(k,S,C&&"ds-btn--no-ripple"),"data-loading":h?"true":void 0,"data-disabled":r?"true":void 0,onClick:A};return x==="button"?e.jsx("button",{...w,...I,disabled:r,children:_}):e.jsx(x,{...w,...I,ref:g,"aria-disabled":r||void 0,role:x==="a"?"button":void 0,tabIndex:r?-1:j?.tabIndex,children:_})},n=E.forwardRef($);try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:null,description:"",name:"disableRipple",required:!1,type:{name:"boolean"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},spinner:{defaultValue:null,description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},spinnerPlacement:{defaultValue:null,description:"",name:"spinnerPlacement",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | null'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"default" | "primary" | "secondary" | "success" | "warning" | "danger" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:'"sm" | "md" | "lg" | "none" | "full" | null'}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | null"}},isIconOnly:{defaultValue:null,description:"",name:"isIconOnly",required:!1,type:{name:"boolean | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const H={title:"Components/Button",component:n,parameters:{layout:"centered"},args:{children:"Button",variant:"solid",color:"primary",size:"md",radius:"md",fullWidth:!1,isIconOnly:!1,isDisabled:!1,isLoading:!1,disableRipple:!1,disableAnimation:!1,spinnerPlacement:"start"},argTypes:{variant:{options:["solid","bordered","light","flat","faded","shadow","ghost"],control:{type:"select"}},color:{options:["default","primary","secondary","tertiary","success","warning","danger"],control:{type:"select"}},size:{options:["sm","md","lg"],control:{type:"inline-radio"}},radius:{options:["none","sm","md","lg","full"],control:{type:"inline-radio"}},fullWidth:{control:"boolean"},isIconOnly:{control:"boolean"},isDisabled:{control:"boolean"},isLoading:{control:"boolean"},disableRipple:{control:"boolean"},disableAnimation:{control:"boolean"},spinnerPlacement:{options:["start","end"],control:{type:"inline-radio"}}}},t={},l={render:()=>{const y=["solid","bordered","light","flat","faded"],g=["default","primary","secondary","tertiary","success","warning","danger"];return e.jsx("div",{style:{display:"grid",gap:"16px"},children:y.map(a=>e.jsxs("div",{style:{display:"grid",gap:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",textTransform:"capitalize"},children:a}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:g.map(s=>e.jsx(n,{variant:a,color:s,size:"md",children:s},`${a}-${s}`))})]},a))})}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{size:"sm",children:"SM"}),e.jsx(n,{size:"md",children:"MD"}),e.jsx(n,{size:"lg",children:"LG"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{radius:"none",children:"none"}),e.jsx(n,{radius:"sm",children:"sm"}),e.jsx(n,{radius:"md",children:"md"}),e.jsx(n,{radius:"lg",children:"lg"}),e.jsx(n,{radius:"full",children:"full"})]})},d={render:()=>e.jsx(n,{as:"a",href:"#",variant:"bordered",children:"Como enlace"})},c={args:{isLoading:!0,children:"Cargando"}},u={args:{isLoading:!0,spinnerPlacement:"end",children:"Cargando"}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{isIconOnly:!0,"aria-label":"estrella",children:"★"}),e.jsx(n,{isIconOnly:!0,color:"secondary","aria-label":"corazón",children:"♥"}),e.jsx(n,{isIconOnly:!0,variant:"bordered","aria-label":"check",children:"✓"})]})},m={args:{isDisabled:!0,children:"Deshabilitado"}},f={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(n,{fullWidth:!0,children:"Full width"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["solid", "bordered", "light", "flat", "faded"] as const;
    const colors = ["default", "primary", "secondary", "tertiary", "success", "warning", "danger"] as const;
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
        {variants.map(variant => <div key={variant} style={{
        display: "grid",
        gap: "8px"
      }}>
            <h4 style={{
          margin: "0 0 8px 0",
          textTransform: "capitalize"
        }}>
              {variant}
            </h4>
            <div style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap"
        }}>
              {colors.map(color => <Button key={\`\${variant}-\${color}\`} variant={variant} color={color as any} size="md">
                  {color}
                </Button>)}
            </div>
          </div>)}
      </div>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <Button radius="none">none</Button>
      <Button radius="sm">sm</Button>
      <Button radius="md">md</Button>
      <Button radius="lg">lg</Button>
      <Button radius="full">full</Button>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Button as="a" href="#" variant="bordered">
      Como enlace
    </Button>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: "Cargando"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    spinnerPlacement: "end",
    children: "Cargando"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <Button isIconOnly aria-label="estrella">
        ★
      </Button>
      <Button isIconOnly color="secondary" aria-label="corazón">
        ♥
      </Button>
      <Button isIconOnly variant="bordered" aria-label="check">
        ✓
      </Button>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: "Deshabilitado"
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Button fullWidth>Full width</Button>
    </div>
}`,...f.parameters?.docs?.source}}};const J=["Playground","VariantsGrid","Sizes","Radius","AsLink","Loading","LoadingEnd","IconOnly","Disabled","FullWidth"],X=Object.freeze(Object.defineProperty({__proto__:null,AsLink:d,Disabled:m,FullWidth:f,IconOnly:p,Loading:c,LoadingEnd:u,Playground:t,Radius:o,Sizes:i,VariantsGrid:l,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{d as A,X as B,p as I,c as L,o as R,i as S,l as V};
