"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6443],{81084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),o=t(28453);const s={},a="Introduction on Identity Management and Federation in SCS",r={id:"iam/index",title:"Introduction on Identity Management and Federation in SCS",description:"Sovereign Cloud Stack wants to make it possible for operators to delegate",source:"@site/docs/05-iam/index.md",sourceDirName:"05-iam",slug:"/iam/",permalink:"/docs/iam/",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/05-iam/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Metering Configuration",permalink:"/docs/operating-scs/metering/meter_configuration"},next:{title:"Guides",permalink:"/docs/category/guides-2"}},l={},d=[{value:"Deployment",id:"deployment",level:2},{value:"Accessing Keycloak",id:"accessing-keycloak",level:2},{value:"Identity Mapping",id:"identity-mapping",level:2},{value:"SCS to SCS federation",id:"scs-to-scs-federation",level:2},{value:"Prerequisites and Requirements",id:"prerequisites-and-requirements",level:3},{value:"Features",id:"features",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Current state and future Outlook",id:"current-state-and-future-outlook",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction-on-identity-management-and-federation-in-scs",children:"Introduction on Identity Management and Federation in SCS"}),"\n",(0,i.jsx)(n.p,{children:"Sovereign Cloud Stack wants to make it possible for operators to delegate\nadministration of user identities to the organizational entities that the\nusers are part of. Usually that's customer organizations but it could also\nbe the operator itself. Federation protocols like OpenID Connect can be used\nto achieve that goal. To simplify connecting the different parts of SCS\nto customer owned IAM solutions, the SCS reference implementation offers\nKeycloak as central Identity Provider (IdP) service."}),"\n",(0,i.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(n.p,{children:"Keycloak can be deployed by running"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply keycloak\n"})}),"\n",(0,i.jsx)(n.p,{children:"The required Keycloak client configuration that allows Keystone to obtain\nOIDC token from Keycloak needs to be deployed by running"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply keycloak-oidc-client-config\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After these steps Keystone should be able to obtain token using the\nDevice Authorization Grant with PKCE, which is configured by default in the\n",(0,i.jsx)(n.code,{children:"wsgi-keystone.conf"})," deployed in SCS."]}),"\n",(0,i.jsx)(n.h2,{id:"accessing-keycloak",children:"Accessing Keycloak"}),"\n",(0,i.jsxs)(n.p,{children:["Currently deployed on the manager node, by default under ",(0,i.jsx)(n.code,{children:"https://keycloak.<yourdomain>"}),".\nDetails TODO."]}),"\n",(0,i.jsx)(n.h2,{id:"identity-mapping",children:"Identity Mapping"}),"\n",(0,i.jsxs)(n.p,{children:["The idea is that customer can create groups with specific names in their own IAM.\nThese shall be mapped to a claim ",(0,i.jsx)(n.code,{children:"groups"})," to be included in the OIDC token.\nVia the Keystone ",(0,i.jsx)(n.a,{href:"https://docs.openstack.org/keystone/latest/admin/federation/mapping_combinations.html",children:"mapping"}),"\nthey shall be mapped to roles on OpenStack projects.\n",(0,i.jsx)(n.a,{href:"https://docs.scs.community/contributor-docs/operations/iam/identity-federation-in-scs",children:"The corresponding section for Developers"})," may be interesting for more technical details.\nPlease be aware that currently there are still some technical challenges to be solved\nwithin the OpenStack Keystone mapping engine and the mapping rules to make this work\nseamlessly."]}),"\n",(0,i.jsx)(n.h2,{id:"scs-to-scs-federation",children:"SCS to SCS federation"}),"\n",(0,i.jsxs)(n.p,{children:["Federation between separate deployments of SCS is possible via the IdP by\nmeans of OpenID Connect.\nThe section on ",(0,i.jsx)(n.a,{href:"https://docs.scs.community/docs/iam/intra-SCS-federation-setup-description-for-osism-doc-operations",children:"inter SCS federation setup"})," explains the required steps in some detail."]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites-and-requirements",children:"Prerequisites and Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Knowledge: Familiarity with Keycloak, OIDC federation, and basic SSL and web security principles is pivotal."}),"\n",(0,i.jsx)(n.li,{children:"Software: The core software component is the OpenID-Connect identity provider, configured to function optimally with OpenStack environments. While the SCS reference implementation focusses on Keycloak as IdP, with appropriate configuration adjustments any OAuth 2.0 compliant IdP should be suitable as an alternative. Each implemntation may have its own pros and cons."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Horizon Web SSO"}),"\n",(0,i.jsx)(n.li,{children:"OpenStack CLI use via the Device Authorization Grant"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Keystone currently still has limitations in its mapping engine, which are addressed by the SCS development team as we\nsee possibilities and alignement with upstream OpenDev development plans. Automatically creating ",(0,i.jsx)(n.code,{children:"ephemeral"})," users in\ntheir specific OpenStack domains, as specified in their OIDC token is one example, currently beeing worked on. Please\ncheck carefully if the technical results meet the security demands of your specific environment."]}),"\n",(0,i.jsxs)(n.li,{children:["Keystone currently has another limitation which is being addressed by the SCS development team aligned\nwith upstream OpenDev development plans: The roles for federated users are stored on the database for the ",(0,i.jsx)(n.code,{children:"ephemeral"})," users\ncreated during a federated login. This limits the ability to modify users roles from the identity source directly, as roles of\nthe ",(0,i.jsx)(n.code,{children:"epehemeral"})," users do not get cleaned up or updated based on changes in the claims contained in the  OpenID-Connect token."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"current-state-and-future-outlook",children:"Current state and future Outlook"}),"\n",(0,i.jsx)(n.p,{children:"Currently SCS exemplifies deploying Keycloak on the management plane. This shall be moved to a Kubernetes based\nmanagement plane to improve scalability and architecture."}),"\n",(0,i.jsx)(n.p,{children:"In the near future, the Container layer shall be able to make use of the IdP to allow federated users to access Kubernetes.\nIn the mid term, workloads on Kubernetes shall be able to make use of OAuth tokens to access resources on the IaaS layer."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);