"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[783],{63435:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>a});var i=t(74848),l=t(28453);const n={sidebar_label:"Developer Guide"},o="Developer Guide",r={id:"iaas/guides/other-guides/developer-guide/index",title:"Developer Guide",description:"How to add a new service",source:"@site/docs/02-iaas/guides/other-guides/developer-guide/index.md",sourceDirName:"02-iaas/guides/other-guides/developer-guide",slug:"/iaas/guides/other-guides/developer-guide/",permalink:"/docs/iaas/guides/other-guides/developer-guide/",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/other-guides/developer-guide/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Developer Guide"},sidebar:"docs",previous:{title:"Contributor Guide",permalink:"/docs/iaas/guides/other-guides/contributor-guide"},next:{title:"Releases",permalink:"/docs/iaas/guides/other-guides/developer-guide/releases"}},d={},a=[{value:"How to add a new service",id:"how-to-add-a-new-service",level:2},{value:"How to add a new container image",id:"how-to-add-a-new-container-image",level:2},{value:"How service deployment works",id:"how-service-deployment-works",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"developer-guide",children:"Developer Guide"}),"\n",(0,i.jsx)(s.h2,{id:"how-to-add-a-new-service",children:"How to add a new service"}),"\n",(0,i.jsxs)(s.p,{children:["If you want to add a new service to OSISM, this is done via an Ansible role and (most often)\na container image. The following steps are necessary and are demonstrated using the example\nof ",(0,i.jsx)(s.code,{children:"osism.services.cgit"}),"."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Example"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add the Ansible role in one of the Ansible collection repositories"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/ansible-collection-services/pull/578/files",children:"https://github.com/osism/ansible-collection-services/pull/578/files"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add the Ansible playbook"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/ansible-playbooks/pull/215/files",children:"https://github.com/osism/ansible-playbooks/pull/215/files"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add the Ansible inventory group"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/cfg-generics/pull/225/files",children:"https://github.com/osism/cfg-generics/pull/225/files"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add the used container image(s) to the release repository"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/release/pull/278/files",children:"https://github.com/osism/release/pull/278/files"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add the container images(s) to osism-ansible container image"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/container-image-osism-ansible/pull/215/files",children:"https://github.com/osism/container-image-osism-ansible/pull/215/files"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add the container image registry/registries and host(s) to the defaults repository"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/defaults/pull/54/files",children:"https://github.com/osism/defaults/pull/54/files"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Add a sample deployment to the testbed"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://github.com/osism/testbed/pull/1043/files",children:"https://github.com/osism/testbed/pull/1043/files"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-add-a-new-container-image",children:"How to add a new container image"}),"\n",(0,i.jsxs)(s.p,{children:["If required, add a new container image in the ",(0,i.jsx)(s.a,{href:"https://github.com/osism/container-images",children:"osism/container-images"}),"\nrepository. The example here is from the ",(0,i.jsx)(s.code,{children:"osism.services.keycloak"})," role: ",(0,i.jsx)(s.a,{href:"https://github.com/osism/container-images/pull/34/files",children:"https://github.com/osism/container-images/pull/34/files"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Whenever possible, upstream container images should be used. If only minor customizations are necessary,\nalways work with overlay container images based on upstream container images."}),"\n",(0,i.jsx)(s.h2,{id:"how-service-deployment-works",children:"How service deployment works"}),"\n",(0,i.jsx)(s.h3,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Service deployment with Docker",src:t(44601).A+"",width:"281",height:"892"})}),"\n",(0,i.jsx)(s.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Service deployment with Kubernetes",src:t(31469).A+"",width:"281",height:"902"})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},44601:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/service-with-docker.drawio-21d9ff770c727c43ab477f857b5017e2.png"},31469:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/service-with-kubernetes.drawio-9500d1fb61ca22792d8277f9f06e58ce.png"},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var i=t(96540);const l={},n=i.createContext(l);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);