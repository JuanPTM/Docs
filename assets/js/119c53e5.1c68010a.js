"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8407],{91136:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),o=n(28453);const i={sidebar_label:"User"},t="User",a={id:"iaas/guides/configuration-guide/commons/user",title:"User",description:"With the osism.commons.user role, it is possible to manage additional",source:"@site/docs/02-iaas/guides/configuration-guide/commons/user.md",sourceDirName:"02-iaas/guides/configuration-guide/commons",slug:"/iaas/guides/configuration-guide/commons/user",permalink:"/docs/iaas/guides/configuration-guide/commons/user",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/configuration-guide/commons/user.md",tags:[],version:"current",frontMatter:{sidebar_label:"User"},sidebar:"docs",previous:{title:"Timezone",permalink:"/docs/iaas/guides/configuration-guide/commons/timezone"},next:{title:"Services",permalink:"/docs/iaas/guides/configuration-guide/services/"}},c={},d=[];function u(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"user",children:"User"}),"\n",(0,r.jsxs)(s.p,{children:["With the ",(0,r.jsx)(s.code,{children:"osism.commons.user"})," role, it is possible to manage additional\nuser accounts on a node."]}),"\n",(0,r.jsxs)(s.p,{children:["Users are managed via the ",(0,r.jsx)(s.code,{children:"user_list"})," parameter."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"user_list:\n  - name: testing\n    key: ssh-rsa AAAAB...\n    # default for groups is user_groups\n    # groups:\n    groups:\n      - docker\n    # default is a group with the name of the user\n    # or user_primary_group if set\n    # primary_group: dragon\n  - name: testing_github\n    key: https://github.com/testing.keys\n"})}),"\n",(0,r.jsxs)(s.p,{children:["By default a new group with the name of a user will be created and assigned as\nprimary group. It is possible to use an already existing group as primary group\nfor all users. Can be overwritten with the user specific ",(0,r.jsx)(s.code,{children:"primary_group"})," key."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"user_primary_group: dragon\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If all users should be added to other specific groups by default, the ",(0,r.jsx)(s.code,{children:"user_groups"}),"\nparameter can be used. Can be overwritten with the user specific ",(0,r.jsx)(s.code,{children:"groups"})," key."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"user_groups:\n  - docker\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If users should be deleted, they are added to the ",(0,r.jsx)(s.code,{children:"user_delete"})," list."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"user_delete:\n  - user_to_delete_1\n  - user_to_delete_2\n"})})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);