"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3530],{21435:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(74848),r=s(28453);const o={sidebar_label:"Infrastructure",sidebar_position:10},t="Infrastructure",d={id:"iaas/guides/deploy-guide/services/infrastructure",title:"Infrastructure",description:"Common issues with deploying infrastructure services required by OpenStack",source:"@site/docs/02-iaas/guides/deploy-guide/services/infrastructure.md",sourceDirName:"02-iaas/guides/deploy-guide/services",slug:"/iaas/guides/deploy-guide/services/infrastructure",permalink:"/docs/iaas/guides/deploy-guide/services/infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/deploy-guide/services/infrastructure.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Infrastructure",sidebar_position:10},sidebar:"docs",previous:{title:"Services",permalink:"/docs/iaas/guides/deploy-guide/services/"},next:{title:"Kubernetes",permalink:"/docs/iaas/guides/deploy-guide/services/kubernetes"}},c={},l=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,i.jsxs)(n.p,{children:["Common issues with deploying infrastructure services required by OpenStack\nare documented in the ",(0,i.jsx)(n.a,{href:"/docs/iaas/guides/troubleshooting-guide/openstack",children:"OpenStack Troubleshooting Guide"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Optional: In order to reduce the active observation time for the deployment of the components,\nthe container images for the following services can be downloaded in advance with the argument ",(0,i.jsx)(n.code,{children:"-a pull"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull common\nosism apply -a pull loadbalancer\nosism apply -a pull redis\nosism apply -a pull memcached\nosism apply -a pull rabbitmq\nosism apply -a pull mariadb\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cron, Fluentd & Kolla Toolbox"}),"\n",(0,i.jsxs)(n.p,{children:["The common role of Kolla is used to manage the services ",(0,i.jsx)(n.code,{children:"cron"}),", ",(0,i.jsx)(n.code,{children:"fluentd"}),"\nand ",(0,i.jsx)(n.code,{children:"kolla-toolbox"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It is important to do this deployment before any other deployements in the Kolla\nenvironment, as parts of the other deployments depend on the ",(0,i.jsx)(n.code,{children:"kolla-toolbox"}),"\nservice."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply common\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Loadbalancer"}),"\n",(0,i.jsxs)(n.p,{children:["Have a look to the ",(0,i.jsx)(n.a,{href:"/docs/iaas/guides/configuration-guide/loadbalancer",children:"loadbalancer documentation"})," and configure it before deploying the service."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply loadbalancer\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is important to do this deployment before any other deployements in the Kolla\nenvironment, as parts of the other deployments depend on the loadbalancer\nservice."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Redis"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply redis\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Memcached"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply memcached\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"RabbitMQ"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply rabbitmq\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"MariaDB"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply mariadb\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(96540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);