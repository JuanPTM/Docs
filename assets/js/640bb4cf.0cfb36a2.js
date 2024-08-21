"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6358],{23243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(74848),s=t(28453);const i={title:"SCS Flavor Naming Standard: Implementation and Testing Notes",type:"Supplement",track:"IaaS",status:"Proposal",supplements:["scs-0100-v1-flavor-naming.md","scs-0100-v2-flavor-naming.md","scs-0100-v3-flavor-naming.md"]},o=void 0,r={id:"scs-0100-w1-flavor-naming-implementation-testing",title:"SCS Flavor Naming Standard: Implementation and Testing Notes",description:"Introduction",source:"@site/standards/scs-0100-w1-flavor-naming-implementation-testing.md",sourceDirName:".",slug:"/scs-0100-w1-flavor-naming-implementation-testing",permalink:"/standards/scs-0100-w1-flavor-naming-implementation-testing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SCS Flavor Naming Standard: Implementation and Testing Notes",type:"Supplement",track:"IaaS",status:"Proposal",supplements:["scs-0100-v1-flavor-naming.md","scs-0100-v2-flavor-naming.md","scs-0100-v3-flavor-naming.md"]},sidebar:"standards",previous:{title:"SCS Flavor Naming Standard",permalink:"/standards/scs-0100-v3-flavor-naming"},next:{title:"scs-0101: SCS Entropy",permalink:"/standards/iaas/scs-0101"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation Notes",id:"implementation-notes",level:2},{value:"Operational Tooling",id:"operational-tooling",level:3},{value:"Syntax Check",id:"syntax-check",level:4},{value:"Flavor Creation",id:"flavor-creation",level:4},{value:"Automated Tests",id:"automated-tests",level:2},{value:"Errors",id:"errors",level:3},{value:"Warnings",id:"warnings",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Manual Tests",id:"manual-tests",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"The three major versions of the standard that exist so far are very similar, and deliberately so.\nTherefore, the procedures needed to implement or test them are very similar as well. Yet, this document\nwill only cover v3, because v1 and v2 are already obsolete by the time of writing."}),"\n",(0,a.jsx)(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,a.jsxs)(n.p,{children:["Every flavor whose name starts with ",(0,a.jsx)(n.code,{children:"SCS-"})," must conform with the naming scheme laid down in the standard."]}),"\n",(0,a.jsx)(n.h3,{id:"operational-tooling",children:"Operational Tooling"}),"\n",(0,a.jsx)(n.h4,{id:"syntax-check",children:"Syntax Check"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/tree/main/Tests/iaas/flavor-naming",children:"test suite"}),"\ncomes with a handy\n",(0,a.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/tree/main/Tests/iaas/flavor-naming/cli.py",children:"command-line utility"}),"\nthat can be used to validate flavor names, to\ninteractively construct a flavor name via a questionnaire, and to generate prose descriptions for given\nflavor names. See the\n",(0,a.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/tree/main/Tests/iaas/flavor-naming/README.md",children:"README"}),"\nfor more details."]}),"\n",(0,a.jsxs)(n.p,{children:["The functionality of this script is also (partially) exposed via the web page\n",(0,a.jsx)(n.a,{href:"https://flavors.scs.community/",children:"https://flavors.scs.community/"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["With the OpenStack tooling (",(0,a.jsx)(n.code,{children:"python3-openstackclient"}),", ",(0,a.jsx)(n.code,{children:"OS_CLOUD"}),") in place, you can call\n",(0,a.jsx)(n.code,{children:"cli.py -v parse v3 $(openstack flavor list -f value -c Name)"})," to get a report\non the syntax compliance of the flavor names of the cloud environment."]}),"\n",(0,a.jsx)(n.h4,{id:"flavor-creation",children:"Flavor Creation"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/osism/openstack-flavor-manager",children:"OpenStack Flavor Manager"})," will create a whole set\nof flavors in one go, given a YAML description of this set."]}),"\n",(0,a.jsx)(n.h2,{id:"automated-tests",children:"Automated Tests"}),"\n",(0,a.jsx)(n.h3,{id:"errors",children:"Errors"}),"\n",(0,a.jsx)(n.p,{children:"The following items MUST be detected and reported as an error:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["any syntax error in a name starting with ",(0,a.jsx)(n.code,{children:"SCS-"}),","]}),"\n",(0,a.jsx)(n.li,{children:"any mismatch between any immediately discoverable property of a flavor (currently, CPU, RAM and disk size)\nand the meaning of its name (which is usually a lower bound), such as the CPU generation or hypervisor."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In addition, the following items MAY be reported as an error:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"any mismatch between any non-immediately discoverable property of flavor and the meaning of its name."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"warnings",children:"Warnings"}),"\n",(0,a.jsx)(n.p,{children:"None so far."}),"\n",(0,a.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(n.p,{children:["The script ",(0,a.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/tree/main/Tests/iaas/flavor-naming/flavor-names-openstack.py",children:(0,a.jsx)(n.code,{children:"flavor-names-openstack.py"})}),"\ntalks to the OpenStack API of the cloud specified by the ",(0,a.jsx)(n.code,{children:"OS_CLOUD"})," environment and queries properties and\nchecks the names for standards compliance."]}),"\n",(0,a.jsx)(n.h2,{id:"manual-tests",children:"Manual Tests"}),"\n",(0,a.jsx)(n.p,{children:"To be determined."})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);