"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1001],{22185:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(74848),o=s(28453);const r={title:"Standards, Docs and Organisation",type:"Procedural",status:"Stable",stabilized_at:new Date("2023-02-06T00:00:00.000Z"),track:"Global"},i=void 0,c={id:"scs-0002-v1-standards-docs-org",title:"Standards, Docs and Organisation",description:"Introduction",source:"@site/standards/scs-0002-v1-standards-docs-org.md",sourceDirName:".",slug:"/scs-0002-v1-standards-docs-org",permalink:"/standards/scs-0002-v1-standards-docs-org",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Standards, Docs and Organisation",type:"Procedural",status:"Stable",stabilized_at:"2023-02-06T00:00:00.000Z",track:"Global"},sidebar:"standards",previous:{title:"scs-0002: Standards, Docs and Organisation",permalink:"/standards/global/scs-0002"},next:{title:"SCS Documentation structure",permalink:"/standards/scs-0002-v2-standards-docs-org"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Suggested cleanup (step 1)",id:"suggested-cleanup-step-1",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The old Docs repository had a subdirectory ",(0,t.jsx)(n.code,{children:"Design-Docs/"})," which holds Docs on\nDesign Considerations, older Architecture Decision Records (ADRs) and even\nStandards. It also has a ",(0,t.jsx)(n.code,{children:"Design-Docs/tools/"})," subdirectory with conformance\nchecks and our overall conformance check driver (from PR#182)."]}),"\n",(0,t.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(n.p,{children:"This directory structure is confusing in a number of ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The conformance checks are hard to find."}),"\n",(0,t.jsx)(n.li,{children:"The mixture of document types requires searching at two or three places."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We want to improve this (while avoiding unnecessary churn)."}),"\n",(0,t.jsx)(n.h2,{id:"suggested-cleanup-step-1",children:"Suggested cleanup (step 1)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Move ",(0,t.jsx)(n.code,{children:"Design-Docs/tools/"})," contents to ",(0,t.jsx)(n.code,{children:"Tests/"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Also create subdirectories then for layers and test, while the overall\nconformance check tool, certification specs and README remain in ",(0,t.jsx)(n.code,{children:"Tests/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Rename ",(0,t.jsx)(n.code,{children:"Design-Docs/"})," to ",(0,t.jsx)(n.code,{children:"Drafts/"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use individual PRs to rewrite existing ADRs and Standards there to conform\nto our standards and move them over to ",(0,t.jsx)(n.code,{children:"Standards/"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Some documents with findings will remain in the ",(0,t.jsx)(n.code,{children:"Drafts"})," directory.\nWe may want to categorize these and have a folder e.g. for research results."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);