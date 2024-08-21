"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6646],{48647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const o={},r="Overview",a={id:"operating-scs/components/central-api/overview",title:"Overview",description:"Premise",source:"@site/docs/04-operating-scs/components/central-api/overview.md",sourceDirName:"04-operating-scs/components/central-api",slug:"/operating-scs/components/central-api/overview",permalink:"/docs/operating-scs/components/central-api/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/central-api/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Central API",permalink:"/docs/category/central-api"},next:{title:"Central API MVP",permalink:"/docs/operating-scs/components/central-api/poc-setup"}},c={},l=[{value:"Premise",id:"premise",level:2},{value:"Challenge",id:"challenge",level:2},{value:"The chosen approach to pursue",id:"the-chosen-approach-to-pursue",level:2},{value:"Kubernetes API",id:"kubernetes-api",level:3},{value:"Crossplane tooling",id:"crossplane-tooling",level:3},{value:"Cluster stacks / Cluster API",id:"cluster-stacks--cluster-api",level:3},{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h2,{id:"premise",children:"Premise"}),"\n",(0,s.jsx)(n.p,{children:"By embracing existing open source solutions and bundling them, SCS provides a viable\nalternative to widely adopted proprietary cloud offerings, including\nInfrastructure-as-a-Service offerings, Kubernetes-as-a-Service offerings and other\nX-as-a-Service offerings."}),"\n",(0,s.jsx)(n.p,{children:"The choice to embrace existing technology has huge advantages over starting from\nscratch.\nBy not reinventing wheels, a lot of effort is saved and existing communities are\nstrengthened. The adoption of existing open standards is supported, reducing\nmarket fragmentation and increasing interoperability."}),"\n",(0,s.jsx)(n.h2,{id:"challenge",children:"Challenge"}),"\n",(0,s.jsx)(n.p,{children:"The challenge: Using popular open source components at cloud service providers\ndoes not result in a consistent experience for their users, yet."}),"\n",(0,s.jsxs)(n.p,{children:["Each part of the stack is consistent within its own scope: E.g. The\n",(0,s.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/network/v2/",children:"OpenStack Networking API"})," is sort of\nconsistent with the\n",(0,s.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/load-balancer/v2/",children:"OpenStack Load Balancer API"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The OpenStack API's share API idioms like the used AuthN/AuthZ\n(Authentication/Authorization) mechanisms. But these are not applicable beyond\nOpenStack services."}),"\n",(0,s.jsxs)(n.p,{children:["Entering general IAM (Identity and Access Management), Keycloak has its own set of\nAPI endpoints and authentication flows.\nEntering Kubernetes, CAPI (",(0,s.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/",children:"Kubernetes Cluster API"}),")\nuses the Kubernetes API with its own authentication configuration, RBAC (Role Based\nAccess Control) and opinionated resource management idioms."]}),"\n",(0,s.jsx)(n.p,{children:"So, without a central API harmonizing at least the semantics of AuthN/AuthZ and\nresource management, users are left with a bunch of semantically incompatible API's.\nIf resources in different API's are somehow interconnected, the users have to take\ncare of bridging these differences themselves."}),"\n",(0,s.jsx)(n.p,{children:"Providing a consistent API across many different offerings with sort of consistent\nAPI idioms is something that primarily the big proprietary cloud providers manage to\ndo. And while that serves users well in that regard, it also serves as an effective\nvendor lock-in feature."}),"\n",(0,s.jsx)(n.h2,{id:"the-chosen-approach-to-pursue",children:"The chosen approach to pursue"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart TB\n    subgraph "With central API (simplified)"\n        User2{"User"}\n        subgraph "provider responsibility"\n            CentralAPI["Central API"]\n            OpenStack2["OpenStack API"]\n            Keycloak2["Keycloak API"]\n            CAPI2["Cluster API"]\n        end\n\n        User2\n            -- uses --\x3e K8sTooling2["kubectl/\\nargocd/flux/..."]\n        K8sTooling2 -- calls --\x3e CentralAPI\n        CentralAPI -- calls --\x3e OpenStack2\n        CentralAPI -- calls --\x3e Keycloak2\n        CentralAPI -- calls --\x3e CAPI2\n    end\n    subgraph "Without central API (simplified)"\n        User1{"User"}\n        subgraph "provider responsibility"\n            OpenStack1["OpenStack API"]\n            Keycloak1["Keycloak API"]\n        end\n        CAPI1["Cluster API"]\n\n        User1\n            -- uses --\x3e OpenStackCLI1["OpenStackCLI/OpenStackUI/\\nTerraform/Ansible/..."]\n            -- calls --\x3e OpenStack1\n        User1\n            -- uses --\x3e KeycloakCLI1["KeycloakCLI/KeycloakUI/\\nTerraform/Ansible/..."]\n            -- calls --\x3e Keycloak1\n        User1\n            -- uses --\x3e K8sTooling1["kubectl/\\nargocd/flux/..."]\n            -- calls --\x3e CAPI1\n    end'}),"\n",(0,s.jsxs)(n.p,{children:["Goal: ",(0,s.jsx)(n.strong,{children:'Provide a "semantically" consistent API modelling most cloud resources\nthat are in scope for SCS'}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In other words: Bring each cloud resource type - as it is - into the central API."}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.code,{children:"OpenStack Compute Instance"})," continues to be as-is with all of its usual\nproperties and implementation details.\nA ",(0,s.jsx)(n.code,{children:"Keycloak Realm"})," continues to be as-is with all of its usual properties\nand implementation details."]}),"\n",(0,s.jsxs)(n.p,{children:["That is not to say that abstractions are absolutely not planned as further steps.\nThere were discussions happening about that already: Regarding IAM management ",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\nand Kubernetes management ",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["However, the ",(0,s.jsx)(n.strong,{children:"main"})," benefit is that all offered API objects can be managed\nusing the same API idioms (AuthN/AuthZ/REST) with the same client tooling ",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"kubernetes-api",children:"Kubernetes API"}),"\n",(0,s.jsx)(n.p,{children:'Instead of creating SCS-specific API idioms and building the implementation\nfrom scratch, the Kubernetes API will be "reused". Essentially, the Kubernetes\nAPI is just an opinionated REST API which has opinions on how a resource\nis defined, how it looks like, how it is reconciled/handled, how AuthN/AuthZ\ncan be implemented. The Kubernetes ecosystem provides much tooling for working\nwith such (custom) resource definitions: For creating the definitions\nthemselves, building controllers, making them discoverable and deployable.'}),"\n",(0,s.jsx)(n.p,{children:"As such, Kubernetes is a great choice for building any sort of resource\nmanagement API - with some caveats regarding its deployment and the legacy\nof starting off as container orchestration tooling."}),"\n",(0,s.jsx)(n.h3,{id:"crossplane-tooling",children:"Crossplane tooling"}),"\n",(0,s.jsxs)(n.p,{children:['Crossplane even extends the Kubernetes API with\n"',(0,s.jsx)(n.a,{href:"https://docs.crossplane.io/v1.14/concepts/compositions/",children:"Compositions"}),'" and\n"',(0,s.jsx)(n.a,{href:"https://docs.crossplane.io/v1.14/concepts/composite-resource-definitions/",children:"Composite Resource Definitions"}),'"\n(XRD) to make Kubernetes the base for platform engineering within organizations.']}),"\n",(0,s.jsx)(n.p,{children:'Secondly, it provides an API machinery to bring any cloud resource into Kubernetes\nusing backend-specific "providers" (roughly comparable with Terraform providers).\nAs such, Crossplane with its provider ecosystem actually already did most of\nthe heavy lifting for providing e.g. OpenStack or Keycloak resources inside of Kubernetes.'}),"\n",(0,s.jsxs)(n.p,{children:["On top, the platform engineering concepts in Crossplane make building multi-tenancy\nsystems pretty straight-forward, even for\n",(0,s.jsx)(n.a,{href:"https://docs.crossplane.io/knowledge-base/guides/multi-tenant/#single-cluster-multi-tenancy",children:"single clusters"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Alright. Crossplane takes care of exposing OpenStack resources and does some\nfancy stuff regarding multi-tenancy. What about providing actual Kubernetes\n",(0,s.jsx)(n.strong,{children:"workload"})," clusters?"]}),"\n",(0,s.jsx)(n.h3,{id:"cluster-stacks--cluster-api",children:"Cluster stacks / Cluster API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/cluster-stacks",children:"Cluster stacks"})," do\n",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/cluster-stack-operator/blob/adb648ceaebddca04a015fbea0319110ca99a5cc/docs/architecture/user-flow.md#recap---how-do-cluster-api-and-cluster-stacks-work-together",children:"not replace the use of Cluster API"}),".\nInstead, they are complementing Cluster API by providing ",(0,s.jsx)(n.code,{children:"ClusterClasses"}),", node\nimages (if required) and workload cluster addons."]}),"\n",(0,s.jsx)(n.p,{children:"It is still to be determined how to bring multi-tenancy concepts from Crossplane\ninto ClusterStacks/CAPI, if even required."}),"\n",(0,s.jsxs)(n.p,{children:["Should the provider be responsible for creating ",(0,s.jsx)(n.code,{children:"ClusterClasses"}),"?\nIf yes, enforcing some parameters inside via a ",(0,s.jsx)(n.code,{children:"ClusterClass"})," may be enough\nto provide multi-tenancy, already. That is to be determined, though."]}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsxs)(n.p,{children:["Disregarding any potential further abstractions, most work in automation for\nthe providers will be about installing the central API and securely distributing\ncredentials for backing services like OpenStack or Keycloak.\nFor that, there is no production implementation yet. See\n",(0,s.jsx)(n.a,{href:"/docs/operating-scs/components/central-api/poc-setup",children:"the POC for inspiration"})," for now. It includes access to an OpenStack API\nthrough Kubernetes/Crossplane."]}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(n.p,{children:['There were discussions to build a generic SCS API to support\nSCS installations powered by Zitadel. Approaching the issue a little\nbit like the "Abstract all the things!" consideration above, but focusing\non two basic use cases (Firstly, setting up an identity federation to some\nexisting identity provider; Secondly, managing users without remote identity\nprovider). While not in scope for the first steps, this probably could be\nelegantly implemented as one generic Crossplane "Composite Resource Definition"\nbacked by a Crossplane "Composition" defining either Keycloak objects OR\nZitadel objects (given that Zitadel gets a Crossplane provider or a similar\nKubernetes controller before). ',(0,s.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(n.p,{children:['In order to cover providers that use Gardnener, a generic Crossplane\n"Composite Resource Definition" like in ',(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),' may be created. Alternatively,\nGardnener CRD\'s could maybe just be mirrored in their Central API instance,\nstill creating an interoperability benefit through "semantic" compatibility. ',(0,s.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,s.jsxs)(n.p,{children:["Which is also not to say that it will be suggested to providers to disable\ntheir public OpenStack/Keycloak/... API's, preventing use of native\nOpenStack/Keycloak/... tooling and breaking existing solutions.\nExtensively using these API's together with the central API may compromise\nthe benefits of its uniform AuthZ, though. ",(0,s.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);