"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2621],{95818:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(74848),r=s(28453);const i={},a="Release Notes for SCS Release 3",o={id:"releases/Release3",title:"Release Notes for SCS Release 3",description:"(Release Date: 2022-09-21)",source:"@site/docs/06-releases/Release3.md",sourceDirName:"06-releases",slug:"/releases/Release3",permalink:"/docs/releases/Release3",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/06-releases/Release3.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Release Notes for SCS Release 2",permalink:"/docs/releases/Release2"},next:{title:"Release Notes for SCS Release 4",permalink:"/docs/releases/Release4"}},l={},d=[{value:"Scope",id:"scope",level:2},{value:"Component Versions and User-visible improvements (highlights)",id:"component-versions-and-user-visible-improvements-highlights",level:2},{value:"New Features (Highlights)",id:"new-features-highlights",level:2},{value:"Operator focused improvements",id:"operator-focused-improvements",level:3},{value:"SCS Developer focused improvements (testbed and k8s cluster management)",id:"scs-developer-focused-improvements-testbed-and-k8s-cluster-management",level:3},{value:"Upgrade/Migration notes",id:"upgrademigration-notes",level:2},{value:"Cluster Management",id:"cluster-management",level:3},{value:"OSISM",id:"osism",level:3},{value:"Removals",id:"removals",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Resolved Issues",id:"resolved-issues",level:2},{value:"Standards Conformance",id:"standards-conformance",level:2},{value:"Release Tagging",id:"release-tagging",level:2},{value:"List of known issues &amp; restrictions in R3",id:"list-of-known-issues--restrictions-in-r3",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Thanks",id:"thanks",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"release-notes-for-scs-release-3",children:"Release Notes for SCS Release 3"}),"\n",(0,t.jsx)(n.p,{children:"(Release Date: 2022-09-21)"}),"\n",(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),"\n",(0,t.jsx)(n.p,{children:"Main goals for Release 3 (R3) were user federation, increase in deployment and upgrade\nvelocity by improving automated test coverage as well as bringing disk encryption based on\ntang from the state of a technical preview to be fully supported."}),"\n",(0,t.jsx)(n.h2,{id:"component-versions-and-user-visible-improvements-highlights",children:"Component Versions and User-visible improvements (highlights)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We support the latest ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.25.md",children:"Kubernetes 1.25"}),"\nreleases."]}),"\n",(0,t.jsxs)(n.li,{children:["The Kubernetes Cluster API is now available in a stable v1beta1\n",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api/releases",children:"release 1.2.x"}),"\nwith the corresponding ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api/releases",children:"cluster-api-provider-openstack 0.6.x"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/",children:"Kubernetes Cluster API cluster management service"}),"\nhas seen major managability improvements.\nPlease consult the\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/Release-Notes-R3.md",children:"k8s cluster api provider release notes"}),"\nfor more details."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://releases.openstack.org/yoga/highlights.html",children:"OpenStack Yoga release"})}),"\n",(0,t.jsx)(n.li,{children:"Ceph Quincy is available, the default release of Ceph is still Pacific."}),"\n",(0,t.jsxs)(n.li,{children:["The base infrastructure is provided by\n",(0,t.jsx)(n.a,{href:"https://release.osism.tech/notes/4.0.0.html",children:"OSISM 4.0.0"}),"\nwhich in turn builds on top of kolla and kolla-ansible."]}),"\n",(0,t.jsx)(n.li,{children:"Disk encryption based on Network bound disk encryption (NBDE) is available."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"new-features-highlights",children:"New Features (Highlights)"}),"\n",(0,t.jsx)(n.h3,{id:"operator-focused-improvements",children:"Operator focused improvements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Work is underway to supersede ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/openstack-health-monitor",children:"openstack-health-monitor"}),"\nwith a comprehensive approach using scenarios with ansible playbooks\nthat has been developed and used by T-Systems for their Open Telekom Cloud.\nMeanwhile, openstack-health-monitor has seen the addition of data\ncollection with telegraf and influxdb as well as a good dashboard\nwith grafana."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["We have used our keystone to keycloak federation to use keycloak as identity\nbroker to federate identities from other (SCS) clouds' keycloaks.\nThis works well for the Web-Interface; we have still some work to do to also make it smooth\nalso for API/CLI usage. We have ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/IAM-federation/keystone-keycloak-federation.md",children:"documented the current status"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["We believe that Gaia-X self-descriptions should also contain a description of\ntechnical properties of services; higher-level services and workloads can than\ndeclare their requirements and be matched against lower level services / platforms.\nIn good platforms, most (or all) technical properties are discoverable. In the\nGaia-X Hackathon #4, we have worked on a demonstrator that characterizes some\naspects of an OpenStack-based IaaS platform and which produces self-descriptions\nthat can be submitted to the Gaia-X trust service, pass the tests and you can\nbe awared a verifiable credential. Code is available in the\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/gx-self-description-generator",children:"gx-self-description-generator repo"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scs-developer-focused-improvements-testbed-and-k8s-cluster-management",children:"SCS Developer focused improvements (testbed and k8s cluster management)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Following significant discussions on how to standardize our cluster management solution,\nthere is a draft concept as part of R3 now, which will be further worked on during\nthe R4 cycle. See ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/Release-Notes-R3.md#cluster-standardization",children:"Cluster standardization"}),"\nsection of the release notes from k8s-cluster-api-provider.\nWhile our reference implementation uses the concepts and code from k8s cluster API on\ntop of our SCS reference implementation (OpenStack automated by OSISM), we want to\nassure that non-OpenStack IaaS and solutions that diverge from cluster-API have the possibility\nto be SCS compliant."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Workload clusters managed by our SCS cluster management solutions can now much\nmore easily receive k8s version upgrades, ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/Release-Notes-R3.md#simplified-rolling-node-upgrades-223",children:"as the cluster-template no longer needs\nto be touched for this"}),". There is an ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/doc/Upgrade-Guide.md",children:"Upgrade Guide"})," available now."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"LUKS encryption is now documented and enabled in the testbed by default."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Further noteworthy improvements to testbed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Public DNS for testbed is now available (",(0,t.jsx)(n.code,{children:"testbed.osism.xyz"}),"), allowing to access services\nvia TLS protected by a wildcard CA certificate."]}),"\n",(0,t.jsx)(n.li,{children:"The wireguard VPN service is deployed in the testbed by default."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["An overview over the used software versions is available from the\n",(0,t.jsx)(n.a,{href:"https://github.com/osism/release",children:"OSISM release"})," repository as input\nfor a complete SBOM. This allows to e.g. investigate the contents of the\nused (v4.0.0) images."]}),"\n",(0,t.jsx)(n.h2,{id:"upgrademigration-notes",children:"Upgrade/Migration notes"}),"\n",(0,t.jsx)(n.h3,{id:"cluster-management",children:"Cluster Management"}),"\n",(0,t.jsxs)(n.p,{children:["Upgrade from R2 to R3 for cluster management and clusters:\nSee ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/Release-Notes-R3.md#incompatible-changes",children:"k8s-cluster-api-provider Release Notes"}),"\nfor more details. There is an Upgrade Guide written specifically to address the steps needed for upgrading\nyour cluster management and the workload clusters."]}),"\n",(0,t.jsx)(n.h3,{id:"osism",children:"OSISM"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"environments/kolla/secrets.yml"})," the parameter ",(0,t.jsx)(n.code,{children:"neutron_ssh_key"})," must be\nadded."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"neutron_ssh_key:\n  private_key:\n  public_key:\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ssh key can be generated as follows: ",(0,t.jsx)(n.code,{children:'ssh-keygen -t rsa -b 4096 -N "" -f id_rsa.neutron -C "" -m PEM'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"removals",children:"Removals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Cockpit service has been removed."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deprecations",children:"Deprecations"}),"\n",(0,t.jsxs)(n.p,{children:["Deprecations happen according to our ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/Release-Policies.md#deprecation",children:"deprecation policy"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Linux bridge support has been deprecated by the Neutron team and marked as experimental.\nIf Linux bridge is used in deployments, migrating to OpenVSwitch is recommended."}),"\n",(0,t.jsxs)(n.li,{children:["Debian dropped hddtemp (",(0,t.jsx)(n.a,{href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1002484",children:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1002484"}),"),\ntherefore the ",(0,t.jsx)(n.code,{children:"hddtemp"})," service will be removed from the next OSISM release, as there is\nno package available for Ubuntu 22.04."]}),"\n",(0,t.jsx)(n.li,{children:"Heat will no longer be offered by default in the testbed in the future"}),"\n",(0,t.jsx)(n.li,{children:"The following services are currently not used and are deprecated and scheduled for removal as of now: Falco, Jenkins, Rundeck, Lynis, Trivy"}),"\n",(0,t.jsx)(n.li,{children:"The docker-compose CLI will be removed and replaced by the new compose plugin for Docker.\ndocker-compose is then no longer available and docker compose must be used instead"}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"cleanup-elasticsearch"})," playbook is deprecated. In the future,\nthe ",(0,t.jsx)(n.code,{children:"elasticsearch-curator"})," service (part of Kolla) has to be used\nfor Elasticsearch cleanup."]}),"\n",(0,t.jsx)(n.li,{children:"All osism- scripts on the manager are deprecated and will be replaced by the new OSISM CLI. The scripts will be removed in the next release"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,t.jsx)(n.p,{children:"No severe security issues need to be highlighted since Release 2. However, by updating to the latest stable version of\nthe integrated open source components, we benefit from the upstream security fixes and thus recommend to upgrade all\nSCS environments. Please note that Release 2 maintenance by the SCS project team will end by the end of October."}),"\n",(0,t.jsx)(n.h2,{id:"resolved-issues",children:"Resolved Issues"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Certificates in k8s clusters are subject to expiration - typically after one year.\nWe ensure these are renewed on control-plane upgrades, but operators may need manual attention\nin case upgrades are not performed for extended periods of time. This is documented in\nthe k8s-cluster-api-provider's\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/doc/Maintenance_and_Troubleshooting.md",children:"Maintenance and Troubleshooting Guide"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"standards-conformance",children:"Standards Conformance"}),"\n",(0,t.jsxs)(n.p,{children:["The clusters created with our cluster-API cluster management solution pass\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/Image-Properties-Spec.md",children:"CNCF conformance tests"}),"\nas reported by ",(0,t.jsx)(n.a,{href:"https://sonobuoy.io/",children:"sonobuoy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://openstack.org/",children:"OpenStack"})," layer passes the\n",(0,t.jsx)(n.a,{href:"https://openinfra.dev/",children:"OIF"})," trademark tests, so cloud providers\nleveraging the stack should easily be able to achieve the\n",(0,t.jsx)(n.a,{href:"https://www.openstack.org/brand/interop/",children:'"OpenStack powered compute"'}),"\ntrademark certification."]}),"\n",(0,t.jsxs)(n.p,{children:["Our partner plusserver has ",(0,t.jsx)(n.a,{href:"https://www.openstack.org/brand/interop/",children:"achieved"}),"\na ",(0,t.jsx)(n.a,{href:"https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/kriterienkatalog-c5_node.html",children:"BSI C5"}),"\nsecurity certification for their SCS implementation pluscloud open."]}),"\n",(0,t.jsxs)(n.p,{children:["We are working within ",(0,t.jsx)(n.a,{href:"https://gaia-x.eu/",children:"Gaia-X"})," to further the power\nof Gaia-X self-descriptions and are closely working with the\n",(0,t.jsx)(n.a,{href:"https://gxfs.de/",children:"GXFS project"}),"\nto jointly deliver a standard toolbox for Gaia-X compliant\ninfrastructure and service offerings."]}),"\n",(0,t.jsxs)(n.p,{children:["The SCS standards for ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/flavor-naming.md",children:"flavor naming"})," and\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/Image-Properties-Spec.md",children:"image metadata"}),"\nare largely unchanged since R1. We have however\nmade progress in our reference implementation fully implementing\nthem without any further tweaks. The\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/tools/flavor-name-check.py",children:"conformance test for the flavor naming"}),"\nhas seen minor improvements; a\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/tools/image-md-check.py",children:"conformance test for the image metadata"}),"\nhas been added."]}),"\n",(0,t.jsx)(n.h2,{id:"release-tagging",children:"Release Tagging"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/Release-Numbering-Scheme.md",children:"Release Numbering scheme"})," -- unchanged from R0.\nWe have added the tag ",(0,t.jsx)(n.code,{children:"v4.0.0"})," to the relevant repositories to designate the ",(0,t.jsx)(n.code,{children:"SCS_RELEASE_R3"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Note that we will release R4 (v5.0.0) in March 2023 and stop providing maintenance\nupdates for R3 at the end of April 2023."}),"\n",(0,t.jsx)(n.h2,{id:"list-of-known-issues--restrictions-in-r3",children:"List of known issues & restrictions in R3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Distributed Virtual Routing (DVR) is not officially supported by OSISM, not tested and not recommended."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(n.p,{children:["We appreciate contribution to strategy and implementation, please join\nour community -- or just leave input on the github issues and PRs.\nHave a look at our ",(0,t.jsx)(n.a,{href:"https://scs.community/contribute/",children:"How to contribute page"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"thanks",children:"Thanks"}),"\n",(0,t.jsx)(n.p,{children:"The work for R3 has been done by many contributors from our community.\nWe have not collected detailed stats that would split out the individual contributor's\nand companies shares ... we may do so in the future. We are grateful to have such an\nactive and engaged community that has done so much work! Thanks to our contributors!"}),"\n",(0,t.jsx)(n.p,{children:"Of course we are leveraging a huge amount of open source technology that has been\ncreated by our friends in other communities, many of which are part of the\nCNCF, Linux Foudation, OIF, and others. We participate and contribute where\nwe can and definitely want to acknowledge the great work that we build upon."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);