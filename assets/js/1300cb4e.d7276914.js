"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6273],{57037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(74848),a=t(28453);const i={title:"SCS Standard Images: Implementation Notes",type:"Supplement",track:"IaaS",status:"Proposal",supplements:["scs-0104-v1-standard-images.md"]},r=void 0,o={id:"scs-0104-w1-standard-images-implementation",title:"SCS Standard Images: Implementation Notes",description:"Introduction",source:"@site/standards/scs-0104-w1-standard-images-implementation.md",sourceDirName:".",slug:"/scs-0104-w1-standard-images-implementation",permalink:"/standards/scs-0104-w1-standard-images-implementation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SCS Standard Images: Implementation Notes",type:"Supplement",track:"IaaS",status:"Proposal",supplements:["scs-0104-v1-standard-images.md"]},sidebar:"standards",previous:{title:"SCS Standard Images",permalink:"/standards/scs-0104-v1-standard-images"},next:{title:"scs-0110: SSD Flavors",permalink:"/standards/iaas/scs-0110"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Step-by-step walkthrough",id:"step-by-step-walkthrough",level:2},{value:"Option A: pragmatic",id:"option-a-pragmatic",level:3},{value:"Option B: principled",id:"option-b-principled",level:3},{value:"Operational Tooling",id:"operational-tooling",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:'The SCS standard on standard images does not in itself lay down what images are actually\nrequired or recommended; rather it specifies the format of a YAML file that in turn serves\nsaid purpose. The particular YAML file that an implementer (a cloud service provider or operator)\nhas to comply with is given in the respective version of the certificate scope "SCS-compatible IaaS"\nas a parameter to the standard. This document is intended to give implementers a\nstep-by-step guide on how to comply with the SCS certificate scope.'}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step-walkthrough",children:"Step-by-step walkthrough"}),"\n",(0,s.jsx)(n.h3,{id:"option-a-pragmatic",children:"Option A: pragmatic"}),"\n",(0,s.jsx)(n.p,{children:"Run the test script on your environment and check the error messages :)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards",children:"standards repository"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/SovereignCloudStack/standards.git\ncd standards\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install requirements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"python3 -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure that your ",(0,s.jsx)(n.code,{children:"OS_CLOUD"})," environment variable is set."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the main check script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"python3 ./Tests/scs-compliance-check.py ./Tests/scs-compatible-iaas.yaml -t standard-images-check \\\n  -s $OS_CLOUD -a os_cloud=$OS_CLOUD -o report.yaml -C\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Inspect console output (stderr) for error messages."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"option-b-principled",children:"Option B: principled"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Find your intended version of the certificate scope in the ",(0,s.jsx)(n.a,{href:"https://docs.scs.community/standards/scs-compatible-iaas",children:"overview table"}),". It will most likely be one whose 'State' is 'Effective' or 'Stable'."]}),"\n",(0,s.jsxs)(n.li,{children:["In (or below) the row labeled 'scs-0104: Standard images', you find a link to the YAML file that lists mandatory and recommended images, such as ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Tests/iaas/scs-0104-v1-images.yaml",children:"scs-0104-v1-images.yaml"})," for v4 of the certificate scope."]}),"\n",(0,s.jsxs)(n.li,{children:["For each entry under ",(0,s.jsx)(n.code,{children:"images"}),', ensure the following (either manually or by using the OpenStack Image Manager described in the section "Operational Tooling"):',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["if the entry says ",(0,s.jsx)(n.code,{children:"status: mandatory"}),", your environment MUST provide this image, i.e., an image whose name matches the ",(0,s.jsx)(n.code,{children:"name_scheme"})," or (in absence of a name scheme) the ",(0,s.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["every actual image in your environment ",(0,s.jsxs)(n.em,{children:["that matches the ",(0,s.jsx)(n.code,{children:"name_scheme"})," or (in absence of a name scheme) the ",(0,s.jsx)(n.code,{children:"name"})]})," has the correct ",(0,s.jsx)(n.code,{children:"image_source"})," property: its value MUST start with one of the prefixes listed under ",(0,s.jsx)(n.code,{children:"source"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"operational-tooling",children:"Operational Tooling"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/osism/openstack-image-manager",children:"openstack-image-manager"})," is able to\ncreate all standard, mandatory SCS images for you given image definitions from a YAML file.\nPlease see ",(0,s.jsx)(n.a,{href:"https://docs.scs.community/docs/iaas/components/image-manager/",children:"its documentation"})," for details."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);