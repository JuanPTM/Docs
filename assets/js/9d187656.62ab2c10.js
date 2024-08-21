"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6805],{9930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(74848),i=n(28453);const o={},a="Overview",r={id:"operating-scs/components/status-page/docs/overview",title:"Overview",description:"Service providers often times want to communicate the status of their systems transparently to their users.",source:"@site/docs/04-operating-scs/components/status-page/docs/overview.md",sourceDirName:"04-operating-scs/components/status-page/docs",slug:"/operating-scs/components/status-page/docs/overview",permalink:"/docs/operating-scs/components/status-page/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/status-page/docs/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Status Page API",permalink:"/docs/category/status-page-api"},next:{title:"Component Overview",permalink:"/docs/operating-scs/components/status-page/docs/component_overview"}},c={},l=[{value:"The SCS status page <strong>API</strong>",id:"the-scs-status-page-api",level:2},{value:"Reference implementation",id:"reference-implementation",level:3},{value:"The SCS status page <strong>frontend</strong>",id:"the-scs-status-page-frontend",level:2},{value:"Reference implementation",id:"reference-implementation-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:'Service providers often times want to communicate the status of their systems transparently to their users.\nA commonly used pattern is to provide a "status page" web application, where the current system health as well as recent incidents are made available.'}),"\n",(0,s.jsx)(t.p,{children:"SCS strives to implement a status page that works well, while being interoperable with other systems."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["How was the decision to implement a new status page application made? What were the requirements? See the ",(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/1fb174da1ee906f0da6a8bbefbd3d95884df5669/Standards/scs-0400-v1-status-page-create-decision.md",children:"decision record"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:['To be easily interoperable with other software, being "API-first" is a priority.\nAs such, the status page should not ',(0,s.jsx)(t.em,{children:"need to"})," be a typical monolithic web application (even though it could be), hence making it possible to split functionality into an API server and a frontend component."]}),"\n",(0,s.jsxs)(t.h2,{id:"the-scs-status-page-api",children:["The SCS status page ",(0,s.jsx)(t.strong,{children:"API"})]}),"\n",(0,s.jsxs)(t.p,{children:["The SCS status page ",(0,s.jsx)(t.strong,{children:"API"})," (as opposed to actual implementations) is supposed to be as un-opinionated as possible regarding deployment, user management, persistence and tech stack, to allow operators/developers (1) to make their own decisions regarding these topics and (2) to quickly implement the API with their own tech stack opinions, if the reference implementation does not fit theirs."]}),"\n",(0,s.jsxs)(t.p,{children:["In particular, the ",(0,s.jsx)(t.strong,{children:"API"})," has no opinion about:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["How authentication/authorization is done (apart from splitting Read-only from Read-write ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"; See below)"]}),"\n",(0,s.jsx)(t.li,{children:"Server implementation, used database, deployment automation, high availability"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"However, as un-opinionated the API (in its first iteration) strives to be, it is...:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a REST API (no GRPC/GraphQL/...)"}),"\n",(0,s.jsx)(t.li,{children:"defined using an OpenAPI file to make use of OpenAPI tooling"}),"\n",(0,s.jsxs)(t.li,{children:["split in two parts ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),":","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Read-only anonymous access"}),"\n",(0,s.jsx)(t.li,{children:"Read-write authenticated access"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"reference-implementation",children:"Reference implementation"}),"\n",(0,s.jsxs)(t.p,{children:["It is envisioned to have a well-maintained reference implementation of the status page API with some basic tech stack decisions made, to not ",(0,s.jsx)(t.em,{children:"require"})," anyone to implement the API themselves:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Programming Language: Go"}),"\n",(0,s.jsx)(t.li,{children:"Persistence: Postgres compatible database"}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"the-scs-status-page-frontend",children:["The SCS status page ",(0,s.jsx)(t.strong,{children:"frontend"})]}),"\n",(0,s.jsxs)(t.p,{children:["The SCS status page ",(0,s.jsx)(t.strong,{children:"frontend"})," is supposed to be an application which uses the status page API to get information. This could be an CLI tool as well as an web application."]}),"\n",(0,s.jsx)(t.h3,{id:"reference-implementation-1",children:"Reference implementation"}),"\n",(0,s.jsx)(t.p,{children:"It is envisioned to have a well-maintained reference implementation of an status page frontend with some basic tech stack decisions made:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Platform: Web (HTML/JS/...)"}),"\n",(0,s.jsx)(t.li,{children:"Framework: VueJS, Vuetify"}),"\n"]}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["In the future ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-1-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"2"})]})]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);