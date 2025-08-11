import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as m,c as g}from"./index-lnR2ABT4.js";const v=g("ds-card",{variants:{variant:{elevated:"ds-card--elevated",outlined:"ds-card--outlined",ghost:"ds-card--ghost"},radius:{none:"ds-card--radius-none",sm:"ds-card--radius-sm",md:"ds-card--radius-md",lg:"ds-card--radius-lg"},padding:{sm:"ds-card--p-sm",md:"ds-card--p-md",lg:"ds-card--p-lg"},interactive:{true:"ds-card--interactive",false:""}},defaultVariants:{variant:"elevated",radius:"md",padding:"md"}});function a({header:o,footer:l,children:c,className:p,...u}){return e.jsxs("section",{className:m(v(u),p),role:"group",children:[o?e.jsx("div",{className:"ds-card__header",children:o}):null,e.jsx("div",{className:"ds-card__body",children:c}),l?e.jsx("div",{className:"ds-card__footer",children:l}):null]})}try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"ghost" | "elevated" | "outlined" | null'}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:'"sm" | "md" | "lg" | "none" | null'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},interactive:{defaultValue:null,description:"",name:"interactive",required:!1,type:{name:"boolean | null"}}}}}catch{}const h={title:"Components/Card",component:a,parameters:{layout:"centered"},args:{header:"Título",children:"Contenido del card. Puedes colocar cualquier JSX.",footer:"Acciones o metadatos",variant:"elevated",radius:"md",padding:"md"},argTypes:{variant:{options:["elevated","outlined","ghost"],control:"select"},radius:{options:["none","sm","md","lg"],control:"inline-radio"},padding:{options:["sm","md","lg"],control:"inline-radio"},interactive:{control:"boolean"}}},r={},d={args:{variant:"outlined"}},n={args:{variant:"ghost"}},s={args:{interactive:!0}},t={render:()=>e.jsxs("div",{style:{display:"grid",gap:12,gridTemplateColumns:"repeat(3, 280px)"},children:[e.jsx(a,{header:"Elevated",children:"Elevated"}),e.jsx(a,{variant:"outlined",header:"Outlined",children:"Outlined"}),e.jsx(a,{variant:"ghost",header:"Ghost",children:"Ghost"})]})},i={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Variantes"}),e.jsxs("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:"repeat(3, 1fr)"},children:[e.jsx(a,{variant:"elevated",header:"Elevated",children:"Contenido"}),e.jsx(a,{variant:"outlined",header:"Outlined",children:"Contenido"}),e.jsx(a,{variant:"ghost",header:"Ghost",children:"Contenido"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Tamaños de Padding"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{padding:"sm",header:"Small",children:"Contenido"}),e.jsx(a,{padding:"md",header:"Medium",children:"Contenido"}),e.jsx(a,{padding:"lg",header:"Large",children:"Contenido"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(3, 280px)"
  }}>
      <Card header="Elevated">Elevated</Card>
      <Card variant="outlined" header="Outlined">
        Outlined
      </Card>
      <Card variant="ghost" header="Ghost">
        Ghost
      </Card>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "24px"
  }}>
      <div>
        <h4 style={{
        margin: "0 0 12px 0"
      }}>Variantes</h4>
        <div style={{
        display: "grid",
        gap: "12px",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}>
          <Card variant="elevated" header="Elevated">
            Contenido
          </Card>
          <Card variant="outlined" header="Outlined">
            Contenido
          </Card>
          <Card variant="ghost" header="Ghost">
            Contenido
          </Card>
        </div>
      </div>
      <div>
        <h4 style={{
        margin: "0 0 12px 0"
      }}>Tamaños de Padding</h4>
        <div style={{
        display: "flex",
        gap: "12px"
      }}>
          <Card padding="sm" header="Small">
            Contenido
          </Card>
          <Card padding="md" header="Medium">
            Contenido
          </Card>
          <Card padding="lg" header="Large">
            Contenido
          </Card>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const C=["Playground","Outlined","Ghost","Interactive","Layouts","VariantsGrid"],f=Object.freeze(Object.defineProperty({__proto__:null,Ghost:n,Interactive:s,Layouts:t,Outlined:d,Playground:r,VariantsGrid:i,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{f as C,s as I,t as L,i as V};
