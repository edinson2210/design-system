import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as W,a as v}from"./index-lnR2ABT4.js";const q=W("ds-input",{variants:{size:{sm:"ds-input--sm",md:"ds-input--md",lg:"ds-input--lg"},radius:{none:"ds-input--radius-none",sm:"ds-input--radius-sm",md:"ds-input--radius-md",lg:"ds-input--radius-lg",full:"ds-input--radius-full"},fullWidth:{true:"ds-input--full",false:""},isInvalid:{true:"ds-input--invalid",false:""},isSuccess:{true:"ds-input--success",false:""},isDisabled:{true:"ds-input--disabled",false:""}},defaultVariants:{size:"md",radius:"md",fullWidth:!1}});function s(p){const{as:I,className:S,label:m,helperText:u,startContent:h,endContent:g,size:j="md",radius:z="md",fullWidth:f=!1,isInvalid:c=!1,isSuccess:x=!1,isDisabled:y=!1,...N}=p,T=I||"input",V=q({size:j,radius:z,fullWidth:f,isInvalid:c,isSuccess:x,isDisabled:y}),b=u?"ds-input-desc-"+Math.random().toString(36).slice(2,8):void 0;return e.jsxs("label",{className:v("ds-input-field",f&&"ds-input-field--full",S),children:[m?e.jsx("span",{className:"ds-input-label",children:m}):null,e.jsxs("div",{className:"ds-input-wrapper",children:[h?e.jsx("span",{className:"ds-input-icon ds-input-icon--start",children:h}):null,e.jsx(T,{className:V,"aria-invalid":c||void 0,"aria-describedby":b,disabled:y,...N}),g?e.jsx("span",{className:"ds-input-icon ds-input-icon--end",children:g}):null]}),u?e.jsx("span",{id:b,className:v("ds-input-helper",c&&"is-error",x&&"is-success"),children:u}):null]})}try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},startContent:{defaultValue:null,description:"",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"",name:"endContent",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:'"sm" | "md" | "lg" | "none" | "full" | null'}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean | null"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean | null"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}}}}}catch{}const C={title:"Components/Input",component:s,parameters:{layout:"centered"},args:{placeholder:"Escribe algo…",size:"md",radius:"md",fullWidth:!1},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},radius:{options:["none","sm","md","lg","full"],control:{type:"inline-radio"}},fullWidth:{control:"boolean"},isInvalid:{control:"boolean"},isSuccess:{control:"boolean"},isDisabled:{control:"boolean"}}},a={},l={args:{label:"Nombre"}},r={args:{label:"Email",helperText:"Formato inválido",isInvalid:!0}},n={args:{label:"Email",helperText:"Todo OK",isSuccess:!0}},i={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(s,{size:"sm",placeholder:"sm"}),e.jsx(s,{size:"md",placeholder:"md"}),e.jsx(s,{size:"lg",placeholder:"lg"})]})},d={args:{startContent:"🔎",endContent:"⌫",placeholder:"Buscar"}},t={args:{fullWidth:!0,label:"Búsqueda"}},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Tamaños"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(s,{size:"sm",placeholder:"Small"}),e.jsx(s,{size:"md",placeholder:"Medium"}),e.jsx(s,{size:"lg",placeholder:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Estados"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(s,{placeholder:"Normal"}),e.jsx(s,{placeholder:"Error",isInvalid:!0,helperText:"Campo requerido"}),e.jsx(s,{placeholder:"Success",isSuccess:!0,helperText:"Válido"}),e.jsx(s,{placeholder:"Disabled",isDisabled:!0})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Nombre"
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    helperText: "Formato inválido",
    isInvalid: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    helperText: "Todo OK",
    isSuccess: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    startContent: "🔎",
    endContent: "⌫",
    placeholder: "Buscar"
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    label: "Búsqueda"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "24px"
  }}>
      <div>
        <h4 style={{
        margin: "0 0 12px 0"
      }}>Tamaños</h4>
        <div style={{
        display: "flex",
        gap: "12px",
        alignItems: "center"
      }}>
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </div>
      <div>
        <h4 style={{
        margin: "0 0 12px 0"
      }}>Estados</h4>
        <div style={{
        display: "flex",
        gap: "12px",
        alignItems: "center"
      }}>
          <Input placeholder="Normal" />
          <Input placeholder="Error" isInvalid helperText="Campo requerido" />
          <Input placeholder="Success" isSuccess helperText="Válido" />
          <Input placeholder="Disabled" isDisabled />
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const E=["Playground","WithLabel","HelperError","HelperSuccess","Sizes","WithIcons","FullWidth","VariantsGrid"],B=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:t,HelperError:r,HelperSuccess:n,Playground:a,Sizes:i,VariantsGrid:o,WithIcons:d,WithLabel:l,__namedExportsOrder:E,default:C},Symbol.toStringTag,{value:"Module"}));export{r as H,B as I,i as S,d as W,n as a};
