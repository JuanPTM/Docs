"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7560],{21674:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(74848),s=n(28453);const r={sidebar_label:"Logging & Monitoring",sidebar_position:40},t="Logging & Monitoring",d={id:"iaas/guides/deploy-guide/services/logging-monitoring",title:"Logging & Monitoring",description:"Common issues with deploying logging & monitoring services provided by Kolla",source:"@site/docs/02-iaas/guides/deploy-guide/services/logging-monitoring.md",sourceDirName:"02-iaas/guides/deploy-guide/services",slug:"/iaas/guides/deploy-guide/services/logging-monitoring",permalink:"/docs/iaas/guides/deploy-guide/services/logging-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/deploy-guide/services/logging-monitoring.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"Logging & Monitoring",sidebar_position:40},sidebar:"docs",previous:{title:"Network",permalink:"/docs/iaas/guides/deploy-guide/services/network"},next:{title:"Ceph",permalink:"/docs/iaas/guides/deploy-guide/services/ceph"}},l={},c=[];function a(e){const i={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"logging--monitoring",children:"Logging & Monitoring"}),"\n",(0,o.jsxs)(i.p,{children:["Common issues with deploying logging & monitoring services provided by Kolla\nare documented in the ",(0,o.jsx)(i.a,{href:"/docs/iaas/guides/troubleshooting-guide/openstack",children:"OpenStack Troubleshooting Guide"}),"."]}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"OpenSearch"}),"\n",(0,o.jsxs)(i.p,{children:["OpenSearch dashboards is also deployed with the ",(0,o.jsx)(i.code,{children:"opensearch"})," role."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"osism apply -a pull opensearch\nosism apply opensearch\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Prometheus"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"osism apply -a pull prometheus\nosism apply prometheus\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Grafana"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"osism apply -a pull grafana\nosism apply grafana\n"})}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>d});var o=n(96540);const s={},r=o.createContext(s);function t(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);