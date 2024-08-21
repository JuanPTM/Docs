"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2151],{10665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=a(74848),r=a(28453);const o={sidebar_label:"Flavor Manager",sidebar_position:51},i="Flavor Manager",t={id:"iaas/components/flavor-manager",title:"Flavor Manager",description:"Overview",source:"@site/docs/02-iaas/components/flavor-manager.md",sourceDirName:"02-iaas/components",slug:"/iaas/components/flavor-manager",permalink:"/docs/iaas/components/flavor-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/components/flavor-manager.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_label:"Flavor Manager",sidebar_position:51},sidebar:"docs",previous:{title:"Automated updates",permalink:"/docs/iaas/components/image-manager/update"},next:{title:"Container Layer Introduction",permalink:"/docs/container/"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Name parser and generator",id:"name-parser-and-generator",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"flavor-manager",children:"Flavor Manager"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The OpenStack Flavor Manager manages the creation, modification, and removal of flavors.\nIt operates as a facilitator that orchestrates compute flavors in alignment\nwith the standard ",(0,s.jsx)(n.a,{href:"https://docs.scs.community/standards/iaas/scs-0100",children:"SCS-0100: Flavor Naming"}),"\nby utilizing YAML files provided by the SCS project."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["The OpenStack Flavor Manager can be used via the OSISM CLI. This is the preferred way to use it.\nNo installation is then required. It is used via ",(0,s.jsx)(n.code,{children:"osism manage flavors"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For use independent of OSISM install the ",(0,s.jsx)(n.code,{children:"openstack-flavor-manager"})," package with pip. It is likely\nthat additional dependencies such as ",(0,s.jsx)(n.code,{children:"pkg-config"})," or ",(0,s.jsx)(n.code,{children:"libssl-dev"})," must be installed in advance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ pip install openstack-flavor-manager\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or clone the repository ",(0,s.jsx)(n.a,{href:"https://github.com/osism/openstack-flavor-manager",children:"osism/openstack-flavor-manager"}),"\nand use the OpenStack Flavor Manager from source with tox."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ tox -- --help\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["There must be a ",(0,s.jsx)(n.code,{children:"clouds.yml"})," and a ",(0,s.jsx)(n.code,{children:"secure.yml"})," file in the directory where the OpenStack Flavor Manager\nwill be executed. When using the OSISM CLI, the files are expected in ",(0,s.jsx)(n.code,{children:"environments/openstack"}),"\nin your configuration repository."]}),"\n",(0,s.jsxs)(n.p,{children:["The cloud profile to be used can be specified via the optional ",(0,s.jsx)(n.code,{children:"--cloud"})," parameter.\nBy default the cloud profile with the name ",(0,s.jsx)(n.code,{children:"admin"})," is used. It must be possible to create and delete\nflavors with the used cloud credentials."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ openstack-flavor-manager --help\n\n Usage: openstack-flavor-manager [OPTIONS]\n\n\u256d\u2500 Options \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502 --name               TEXT  Name of flavor definitions. [default: scs]                        \u2502\n\u2502 --debug                    Enable debug logging.                                             \u2502\n\u2502 --cloud              TEXT  Cloud name in clouds.yaml. [default: admin]                       \u2502\n\u2502 --recommended              Create recommended flavors.                                       \u2502\n\u2502 --help                     Show this message and exit.                                       \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To create the mandatory flavors by the ",(0,s.jsx)(n.a,{href:"https://docs.scs.community/standards/iaas/scs-0100",children:"SCS-0100: Flavor Naming"}),"\nstandard, you run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ openstack-flavor-manager\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create the recommended flavors by the SCS Flavor Naming Standard, you run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ openstack-flavor-manager --recommended\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2023-09-20 13:03:14 | INFO     | Flavor SCS-1V-4 created\n2023-09-20 13:03:14 | INFO     | Flavor SCS-2V-8 created\n2023-09-20 13:03:14 | INFO     | Flavor SCS-4V-16 created\n2023-09-20 13:03:14 | INFO     | Flavor SCS-8V-32 created\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"All recommended flavors are now be available in your OpenStack environment.\nCheck yourself by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ openstack --os-cloud admin flavor list\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ openstack --os-cloud admin flavor show SCS-2V-4-20s\n+----------------------------+---------------------------------------------------------------------------------------------------------------------------------+\n| Field                      | Value                                                                                                                           |\n+----------------------------+---------------------------------------------------------------------------------------------------------------------------------+\n| OS-FLV-DISABLED:disabled   | False                                                                                                                           |\n| OS-FLV-EXT-DATA:ephemeral  | 0                                                                                                                               |\n| access_project_ids         | None                                                                                                                            |\n| description                | None                                                                                                                            |\n| disk                       | 20                                                                                                                              |\n| id                         | 652e3a6c-330e-4ee3-922b-b49c3c093062                                                                                            |\n| name                       | SCS-2V-4-20s                                                                                                                    |\n| os-flavor-access:is_public | True                                                                                                                            |\n| properties                 | hw_rng:allowed='true', scs:cpu-type='shared-core', scs:disk0-type='ssd', scs:name-v1='SCS-2V:4:20s', scs:name-v2='SCS-2V-4-20s' |\n| ram                        | 4096                                                                                                                            |\n| rxtx_factor                | 1.0                                                                                                                             |\n| swap                       | 0                                                                                                                               |\n| vcpus                      | 2                                                                                                                               |\n+----------------------------+---------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,s.jsxs)(n.p,{children:["There are two flavor definitions available by default. One for\n",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/SovereignCloudStack/standards/main/Tests/iaas/SCS-Spec.MandatoryFlavors.verbose.yaml",children:"SCS"}),"\nand one for ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/osism/openstack-flavor-manager/main/flavors.yaml",children:"OSISM"}),".\nEach definition has its own set of mandatory and recommended flavors. The definition of OSISM contains\nall definitions of SCS as well as some others."]}),"\n",(0,s.jsxs)(n.p,{children:["To run the OpenStack Flavor Manager with a specific definition, either ",(0,s.jsx)(n.code,{children:"scs"})," or ",(0,s.jsx)(n.code,{children:"osism"}),",\nuse the optional ",(0,s.jsx)(n.code,{children:"--name"})," parameter. By default the ",(0,s.jsx)(n.a,{href:"https://docs.scs.community/standards/iaas/scs-0100",children:"SCS-0100: Flavor Naming"}),"\nstandard definition will be used."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ openstack-flavor-manager --name osism\n"})}),"\n",(0,s.jsx)(n.h2,{id:"name-parser-and-generator",children:"Name parser and generator"}),"\n",(0,s.jsxs)(n.p,{children:["A generator and parser for flavor names according to the SCS standard is available on\n",(0,s.jsx)(n.a,{href:"https://flavors.scs.community",children:"flavors.scs.community"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The flavor name ",(0,s.jsx)(n.code,{children:"SCS-2V-4-20s"})," is inserted in field ",(0,s.jsx)(n.code,{children:"Flavor name"}),":"]}),"\n",(0,s.jsx)("img",{src:a(77215).A,width:"50%"}),"\n",(0,s.jsxs)(n.p,{children:["The flavor ",(0,s.jsx)(n.code,{children:"SCS-2V-4-20s"})," translated is\n",(0,s.jsx)(n.code,{children:"2 generic x86-64 vCPUs with 4.0 GiB RAM and SSD 20GB root volume"}),":"]}),"\n",(0,s.jsx)("img",{src:a(91940).A,width:"50%"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},77215:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/flavors-1-bd8d085759b264b3e58020d1390803fd.png"},91940:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/flavors-2-d9a87ab2a63ed62ace4303facc069b8b.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>t});var s=a(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);