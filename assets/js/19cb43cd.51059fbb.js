"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1572],{88211:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(74848),t=n(28453);const a={},i="Upgrade",s={id:"container/components/container-registry/docs/upgrade",title:"Upgrade",description:"This page aims at providing additional information for upgrading Harbor",source:"@site/docs/03-container/components/container-registry/docs/upgrade.md",sourceDirName:"03-container/components/container-registry/docs",slug:"/container/components/container-registry/docs/upgrade",permalink:"/docs/container/components/container-registry/docs/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/container-registry/docs/upgrade.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rate limit",permalink:"/docs/container/components/container-registry/docs/rate_limit"},next:{title:"Backup and restore",permalink:"/docs/container/components/container-registry/docs/backup_and_restore"}},c={},d=[];function p(e){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"upgrade",children:"Upgrade"}),"\n",(0,o.jsxs)(r.p,{children:["This page aims at providing additional information for upgrading ",(0,o.jsx)(r.a,{href:"https://goharbor.io/",children:"Harbor"}),"\ncontainer registry, which operates in the Kubernetes environment and is deployed with Helm.\nIt extends the official ",(0,o.jsx)(r.a,{href:"https://goharbor.io/docs/main/administration/upgrade/helm-upgrade/",children:"Upgrading Harbor Deployed with Helm page"}),",\nwhere the upgrade process is well described. See the following upgrade hints:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Always ",(0,o.jsx)(r.a,{href:"/docs/container/components/container-registry/docs/backup_and_restore",children:"backup"})," your Harbor instance before upgrade"]}),"\n",(0,o.jsxs)(r.li,{children:["Normally Harbor helm upgrade from 2 minor versions lower should be ",(0,o.jsx)(r.a,{href:"https://github.com/goharbor/harbor-helm/issues/500#issuecomment-647029797",children:"tested"}),", but always\nvalidate your planned upgrade path with recommendations in the official ",(0,o.jsx)(r.a,{href:"https://goharbor.io/docs/main/administration/upgrade/",children:"docs"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["The step-by-step upgrade is needed because of possible DDL changes in the Harbor database.\nHarbor core service executes the ",(0,o.jsx)(r.a,{href:"https://github.com/goharbor/harbor/tree/main/make/migrations/postgresql",children:"migrations scripts"})," automatically.\nThe helm upgrade process may fail in the case of the failure of migration scripts.\nHence, it is a good idea to run migration scripts with a pre-upgrade job. Harbor Helm\nhas an option ",(0,o.jsx)(r.code,{children:"enableMigrateHelmHook"})," which separates the database migration from Harbor core\nand runs the migration job as a pre-upgrade hook."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var o=n(96540);const t={},a=o.createContext(t);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);