"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8897],{63259:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(74848),r=s(28453);const i={title:"Container registry for SCS standard implementation",type:"Decision Record",status:"Draft",track:"KaaS"},o=void 0,a={id:"scs-0218-v1-container-registry-for-scs-standard-implementation",title:"Container registry for SCS standard implementation",description:"Introduction",source:"@site/standards/scs-0218-v1-container-registry-for-scs-standard-implementation.md",sourceDirName:".",slug:"/scs-0218-v1-container-registry-for-scs-standard-implementation",permalink:"/standards/scs-0218-v1-container-registry-for-scs-standard-implementation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Container registry for SCS standard implementation",type:"Decision Record",status:"Draft",track:"KaaS"},sidebar:"standards",previous:{title:"scs-0218: Container registry for SCS standard implementation",permalink:"/standards/kaas/scs-0218"},next:{title:"IAM Standards",permalink:"/standards/iam/"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Evaluated projects",id:"evaluated-projects",level:3},{value:"Deeper look into selected projects",id:"deeper-look-into-selected-projects",level:3},{value:"Decision",id:"decision",level:2},{value:"Related Documents",id:"related-documents",level:2}];function l(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"A container registry is an infrastructure service to enable storing and accessing container\nimages. Images can be pushed to the registry by e.g. Continuous integration pipelines and\nbe pulled from by runtime environments like Kubernetes clusters."}),"\n",(0,t.jsx)(n.p,{children:'In the standard document ["Requirements for container registries"], requirements for a\nregistry in the context of SCS were introduced. These are based on the principals, that\na usable project should be open source, active and feature-rich, especially with regard\nto security.'}),"\n",(0,t.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Service Provider (abbr. CSP)\nEntity that provides scalable computing resources"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Native Computing Foundation (abbr. CNCF)\nOrganization that hosts and develops open source projects for cloud native computing"}),"\n",(0,t.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsxs)(n.p,{children:['In order to provide a usable, complete experience for the SCS reference implementation, it must be decided\non a registry in accordance with requirements set by the ["Requirements for container registries"] standard\nas well as other dependencies set by the SCS project, including the ',(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Drafts/OSS-Health.md",children:"OSS requirements"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This document should finally lead to a decision about the container registry used as a reference implementation of the SCS container registry."}),"\n",(0,t.jsx)(n.h3,{id:"evaluated-projects",children:"Evaluated projects"}),"\n",(0,t.jsxs)(n.p,{children:["A few open source projects were evaluated for this document in order to find suitable candidates\nfor the SCS reference implementation. These projects can be found in the following list of\nevaluated projects with their classified categories and comments. An initial assessment was\ndone with the checks for ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Drafts/OSS-Health.md",children:"OSS healthiness"}),'\nand a general overview of the features described in ["Requirements for container registries"], which enables\nclassifying the projects into one of three categories as follows:']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2714\ufe0f"," The project passed all OSS health checks and will be considered\nfurther as a valid candidate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2754"," The project passed almost all OSS health checks.\nThere is place for improvement, but the missing points are not crucial from the OSS\nhealth check perspective. The project will be considered further as a valid candidate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u274c"," The project does not pass the OSS health checks. Some OSS health check\nshowstoppers have been found (e.g. open core software, not actively maintained).\nThe project is filtered at this stage and won't be considered further."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following list contains these projects with a small assessment listed below them:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2714\ufe0f"," ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor",children:"Harbor"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Harbor project meets all "four opens"',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Source code is open and available under the ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/blob/main/LICENSE",children:"Apache 2 license"})]}),"\n",(0,t.jsxs)(n.li,{children:["Community is ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor#community",children:"open"}),", structured and\nwell organized via ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/community",children:"workgroups"})," and\nvarious communications channels e.g. Slack, mailing lists, etc.\n(#harbor Slack channel contains 3k+ members)"]}),"\n",(0,t.jsxs)(n.li,{children:["The development process is open via GitHub issues and well described in the\n",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/blob/main/CONTRIBUTING.md",children:"contributing"}),"\ndocument"]}),"\n",(0,t.jsxs)(n.li,{children:["The design process is open via GitHub issues. Proposals are ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/community/tree/main/proposals",children:"public"}),".\nThe decision process is well described as well. The project's roadmap is\navailable in the ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/blob/main/ROADMAP.md",children:"roadmap"})," document"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Maturity is on the CNCF ",(0,t.jsx)(n.a,{href:"https://www.cncf.io/projects/harbor/",children:"graduation"})," level.\nCNCF graduated projects are considered to be stable, widely adopted and production-ready"]}),"\n",(0,t.jsxs)(n.li,{children:["Security","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The security disclosure and response policy is well described in the project's\n",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/blob/main/SECURITY.md",children:"security"})," document"]}),"\n",(0,t.jsx)(n.li,{children:"The code is reviewed within a standard PR process"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Activity","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"250+ contributors, 4k+ forks, 13k+ GitHub stars"}),"\n",(0,t.jsxs)(n.li,{children:["The project has been ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/blob/main/ADOPTERS.md",children:"adopted"}),"\nby many companies that run Harbor in their production environments"]}),"\n",(0,t.jsxs)(n.li,{children:["The project collaborates with other communities and projects\n(see ",(0,t.jsx)(n.a,{href:"https://goharbor.io/community/",children:"Partners of Harbor"})," section of the\nproject's website)"]}),"\n",(0,t.jsxs)(n.li,{children:["The project is visible and actively contributes to various conferences, e.g.\n",(0,t.jsx)(n.a,{href:"https://goharbor.io/blog/harbor-at-fosdem-2022/",children:"FOSDEM 22"}),",\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=REgvBPH369M",children:"KubeCon Europe"}),", etc."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Lock-in risk assessment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The project's ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/community/blob/main/MAINTAINERS.md",children:"maintainers"}),"\ndocument shows that there are a sufficient number of core\nmaintainers/contributors that differ over various companies, we therefore deem\nthe lock-in risk arising from a single point of failure to be low"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2714\ufe0f"," ",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2",children:"Dragonfly"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Dragonfly project meets all "four opens"',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Source code is open and available under the ",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2/blob/main/LICENSE",children:"Apache 2 license"})]}),"\n",(0,t.jsxs)(n.li,{children:["Community is ",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2#community",children:"open"}),"\norganized via multiple channels e.g. Slack, mailing lists, etc.\n(#dragonfly Slack channel contains ~50 members)"]}),"\n",(0,t.jsxs)(n.li,{children:["The development process is open via GitHub issues and well described in the\n",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2/blob/main/CONTRIBUTING.md",children:"contributing"})," document"]}),"\n",(0,t.jsxs)(n.li,{children:["The design process is open via GitHub issues. The project's roadmap is available in\nthe project's ",(0,t.jsx)(n.a,{href:"https://d7y.io/docs/others/roadmap/#2022-roadmap",children:"webpage"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Maturity is on the CNCF ",(0,t.jsx)(n.a,{href:"https://www.cncf.io/projects/dragonfly/",children:"incubating"})," level\nCNCF incubating project is considered stable and used in production by users with\nthe healthy pool of contributors"]}),"\n",(0,t.jsxs)(n.li,{children:["Security","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The security disclosure is handled via a dedicated email address"}),"\n",(0,t.jsx)(n.li,{children:"The code is reviewed within a standard PR process"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Activity","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"30+ contributors, 100+ forks, 1k+ GitHub stars"}),"\n",(0,t.jsxs)(n.li,{children:["The project has been ",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2/blob/main/ADOPTERS.md",children:"adopted"}),"\nby many companies that run Harbor in their production environments"]}),"\n",(0,t.jsxs)(n.li,{children:["The project is visible and actively contributes to various conferences,\ne.g. ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=LcxBgmmeA80",children:"KubeCon North America"}),",\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=MGNtPHQYP14",children:"KubeCon Europe"}),", etc."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Lock-in risk assessment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The list of the project's ",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2/blob/main/MAINTAINERS.md",children:"maintainers"}),"\nincludes contributors from various companies and the ",(0,t.jsx)(n.a,{href:"https://dragonfly.devstats.cncf.io/d/7/companies-contributing-in-repository-groups",children:"companies contributing dashboard"}),"\nshows that ~10 companies are actively contributing to a repository group"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2754"," ",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay",children:"Project Quay"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Project Quay meets all "four opens"',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Source code is open and available under the ",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay/blob/master/LICENSE",children:"Apache 2 license"})]}),"\n",(0,t.jsxs)(n.li,{children:["Community is ",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay#community",children:"open"})," organized via mailing\nlist and IRC"]}),"\n",(0,t.jsxs)(n.li,{children:["Development process is open via ",(0,t.jsx)(n.a,{href:"https://issues.redhat.com/projects/PROJQUAY/issues",children:"JBoss JIRA"}),"\nissues and well described in the ",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay/blob/master/GOVERNANCE.md",children:"governance"})," document"]}),"\n",(0,t.jsxs)(n.li,{children:["Design process is open via ",(0,t.jsx)(n.a,{href:"https://issues.redhat.com/projects/PROJQUAY/issues",children:"JBoss JIRA"}),"\nissues. The project's roadmap is available on the project's ",(0,t.jsx)(n.a,{href:"https://www.projectquay.io/#contribute",children:"webpage"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Maturity","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Project Quay is an open-source project that started ",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay/commit/0349af754204375d74ac5833713b607398981ff7",children:"~9 years ago"}),".\nIt powers Red Hat enterprise products Red Hat Quay and Quay.io, which are used in\na productive way by many. Therefore, the project's maturity is at the good level"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Security","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The security disclosure is handled via a dedicated email address"}),"\n",(0,t.jsx)(n.li,{children:"The code is reviewed within a standard PR process"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Activity","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"50+ contributors, 200+ forks, 2k+ GitHub stars"}),"\n",(0,t.jsxs)(n.li,{children:["The project has been used by many ",(0,t.jsx)(n.a,{href:"https://www.projectquay.io",children:"companies"})," that\nrun Quay in their production environments"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Lock-in risk assessment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The project's owners/maintainers list is not publicly available and is stored in\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay-docs#how-do-i-set-up",children:"downstream repository"}),".\nTherefore, it is hard to distinguish the risk of project failure caused by low\ndiversity across the companies. This should be improved."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u274c"," ",(0,t.jsx)(n.a,{href:"https://github.com/sapcc/keppel",children:"Keppel"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The project seems to be not widely used in a productive way and also the activity\naround is currently not on a good level (5+ contributors). The development\nprocess as well as the design process seem to be open, but neither of them are\ndocumented yet."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u274c"," ",(0,t.jsx)(n.a,{href:"https://github.com/sonatype/nexus-public",children:"Nexus"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Nexus is an ",(0,t.jsx)(n.strong,{children:"open core"})," software that offers paid ",(0,t.jsx)(n.a,{href:"https://www.sonatype.com/products/repository-oss-vs-pro-features",children:"pro version"})," with advanced features"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u274c"," ",(0,t.jsx)(n.a,{href:"https://jfrog.com/community/open-source/",children:"JFrog"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["JFrog Artifactory is shipped as an ",(0,t.jsx)(n.strong,{children:"open core"})," ",(0,t.jsx)(n.a,{href:"https://jfrog.com/community/open-source/",children:"software"}),"\nwith limited features. The software is primarily offered as a paid ",(0,t.jsx)(n.a,{href:"https://jfrog.com/pricing/#devops-onprem",children:"pro version"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u274c"," ",(0,t.jsx)(n.a,{href:"https://github.com/uber/kraken",children:"Kraken"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It seems that the project is not actively maintained as is discussed in the related\nproject's ",(0,t.jsx)(n.a,{href:"https://github.com/uber/kraken/issues/313",children:"issue"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u274c"," ",(0,t.jsx)(n.a,{href:"https://github.com/SUSE/Portus",children:"Portus"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It seems that the project is not actively maintained as is discussed in the related\nproject's ",(0,t.jsx)(n.a,{href:"https://github.com/SUSE/Portus/issues/2352",children:"issue"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deeper-look-into-selected-projects",children:"Deeper look into selected projects"}),"\n",(0,t.jsx)(n.p,{children:"In the previous section, a wide range of open-source container registry projects (Quay, Harbor, Dragonfly,\nKeppel, Portus, Kraken, etc.) has been carefully evaluated based on the two main\nfactors: the open-source health and range of supported features."}),"\n",(0,t.jsx)(n.p,{children:"The open-source software health is crucial and container registry implementation should\npass it. It evaluates several important metrics of an open source software like whether the code/community/development/design\nis fully open or whether the project's maturity, security, and activity are on the desired\nlevel. This check also evaluates the lock-in risk due to possible single points of\nfailure or internal project conflicts and several other aspects.\nOverall, three projects passed the OSS health checks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor",children:"Harbor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/quay/quay",children:"Project Quay"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/quay/quay",children:"Dragonfly"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The above projects were then evaluated from the "supported features" perspective.\nThe document ["Requirements for container registries"] provides a "Required and desirable features check", which\nprovides desired feature sets for open-source container registry implementations according to\nSCS requirements (and nice-to-haves). The list of required features is quite long and contains\nfeatures that are primarily focused on security (authentication, vulnerability scanning, content trust, and validation, etc.),\nscalability (HA mode, registry replication, p2p integration, etc.) and visibility (monitoring).\nThese requirements should ensure that the selected container registry implementation\ncould be offered by CSPs as a secure and enterprise-ready solution.'}),"\n",(0,t.jsx)(n.p,{children:"The following section compares the selected projects Dragonfly, Quay, and Harbor."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2",children:"Dragonfly"}),' is a healthy open-source project with a growing community\nand CNCF incubating maturity level. It is considered stable, and widely used by many\ncompanies in their production environments. We currently see that it is not as\nfeature-rich as Harbor or Quay, hence it is not considered the best choice here.\nIt seems, that its main aim (currently) is to offer (an efficient, stable, and secure)\ncontainer distribution solution based on p2p technology. This improves download\nefficiency and saves bandwidth across CSPs. It also offers integration possibilities\nthat allow one to use it as a p2p distribution network via a "preheat" API. This\nintegration was implemented in the Harbor project via Dragonfly "preheat" adapter, and\nboth parties may benefit from the integration. Harbor profits from Dragonfly\'s p2p\ndistribution capabilities and on the other hand the Dragonfly project profits from\nHarbor\'s feature-rich container registry "frontend".']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/quay/quay",children:"Quay"})," is an open-source project maintained by Red Hat. Its OSS health is\non a good level, the surrounding community is growing, and we consider it to be quite\nmature as it powers enterprise solutions like Red Hat Quay and Quay.io.\nBesides this, there is still a place for OSS health improvement. It is hard to\ndistinguish the risk of project failure caused by low diversity across the companies\nbecause the project's owners/maintainers list is not publicly available and is stored in\nthe Red Hat private repository.\nIts feature set is impressive and this project fulfills all must-haves defined in\nthis document. Quay gives you security over your repositories with image\nvulnerability scanning (Clair integration), content validation (Cosign integration),\nand access controls. Harbor stands out here as it allows users to use also project Trivy\nfor vulnerability scanning. Project Quay also provides a scalable open-source\nplatform to host container images across any size organization. One drawback in\ncomparison to Harbor is that the proxy cache feature is still marked as a\n",(0,t.jsx)(n.a,{href:"https://docs.projectquay.io/use_quay.html#quay-as-cache-proxy",children:"Technology Preview"}),",\nhence this feature may not be completely production-ready yet. On the other hand,\nthe project Quay supports ",(0,t.jsx)(n.a,{href:"https://docs.projectquay.io/use_quay.html#build-support",children:"building Dockerfiles"}),"\nusing a set of workers on e.g. Kubernetes. Build triggers, such as GitHub webhooks\ncan be configured to automatically build new versions of repositories when new code is\ncommitted. This feature is not supported by the ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/issues/6235",children:"Harbor project"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor",children:"Harbor"})," is an outstanding open-source, community-led project with fully open and\nwell-documented processes. Its large and thriving community powers the fast-growing\nfeature set and attracts more and more developers and companies to active contributions.\nHarbor's CNCF graduation in 2020 made it one of the best choices for enterprise\ncustomers that want to operate container registries securely and in a large scale.\nIts community size, landscape, and CNCF graduation make a significant difference in\ncomparison to Quay's open-source health capabilities.\nThe list of supported features is also impressive. This project fulfills all must-haves\ndefined in this document and overcome project Quay with a production-ready proxy cache\nfeature and more options that the user may use in case of image vulnerability scanning.\nIn addition, Harbor profits from p2p distribution capabilities via integration of p2p\nsolutions like Kraken and Dragonfly. It is worth mentioning that Harbor, by design,\noperates on a single storage backend (e.g. S3). It means that the storage of container\nimages is shared even when the Harbor instance serves multiple tenants. The same\napproach is used in Quay and Dragonfly projects, but e.g. Keppel uses multi-tenant-aware\nstorage drivers instead so that each customer gets their own separate storage backend.\nCSP that considers offering container registry \"as a service\" solution based on Harbor\nshould be aware of this shared storage backend architecture."]}),"\n",(0,t.jsx)(n.p,{children:"In the following table, the feature sets of the evaluated projects that passed the OSS health state\nare listed and matched against. This enables a better understanding of the decision-making for this document."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Features"}),(0,t.jsx)(n.th,{children:"Harbor"}),(0,t.jsx)(n.th,{children:"Quay"}),(0,t.jsx)(n.th,{children:"Dragonfly"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Audit Logs"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Authentication of system identities"}),(0,t.jsx)(n.td,{children:"\u2713 Robot Accounts"}),(0,t.jsx)(n.td,{children:"\u2713 Robot Accounts"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Authentication of users"}),(0,t.jsx)(n.td,{children:"\u2713 Local database, LDAP, OIDC, UAA"}),(0,t.jsx)(n.td,{children:"\u2713 Local database, LDAP, Keystone, JWT"}),(0,t.jsx)(n.td,{children:"\u2713 Local database"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Authorization"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Automation"}),(0,t.jsx)(n.td,{children:"\u2713 Webhooks (HTTP, Slack)"}),(0,t.jsx)(n.td,{children:"\u2713 Webhooks (HTTP, Slack, E-mail ...), building images"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vulnerability scanning"}),(0,t.jsx)(n.td,{children:"\u2713 Trivy, Clair"}),(0,t.jsx)(n.td,{children:"\u2713 Clair"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Content Trust and Validation"}),(0,t.jsx)(n.td,{children:"\u2713 Cosign"}),(0,t.jsx)(n.td,{children:"\u2713 Cosign"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Multi-tenancy"}),(0,t.jsx)(n.td,{children:"\u2713 (not on the storage level)"}),(0,t.jsx)(n.td,{children:"\u2713 (not on the storage level)"}),(0,t.jsx)(n.td,{children:"\u2713 (not on the storage level)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Backup and restore"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Monitoring"}),(0,t.jsx)(n.td,{children:"\u2713 Prometheus metrics, Tracing"}),(0,t.jsx)(n.td,{children:"\u2713 Prometheus metrics, Tracing (only for Clair)"}),(0,t.jsx)(n.td,{children:"\u2713 Prometheus metrics, Tracing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HA mode"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Registry replication"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Proxy cache"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713 Feature is in the technology preview stage (non production ready)"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Quota management"}),(0,t.jsx)(n.td,{children:"\u2713 Based on storage consumption"}),(0,t.jsx)(n.td,{children:"\u2713 Based on storage consumption"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Garbage collection"}),(0,t.jsx)(n.td,{children:"\u2713 Non-blocking"}),(0,t.jsx)(n.td,{children:"\u2713 Non-blocking"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Retention policy"}),(0,t.jsx)(n.td,{children:"\u2713 Multiple tag retention rules"}),(0,t.jsx)(n.td,{children:"\u2713 Only tag expiration rules"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Additional supported artifacts"}),(0,t.jsx)(n.td,{children:"\u2717 (only OCI artifacts)"}),(0,t.jsx)(n.td,{children:"\u2717 (only OCI artifacts)"}),(0,t.jsx)(n.td,{children:"\u2713 Maven, YUM"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Integration possibilities"}),(0,t.jsx)(n.td,{children:"\u2713 Dragonfly (P2P), Kraken (P2P)"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2713 Harbor, Nydus, eStargz"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deployment capabilities"}),(0,t.jsx)(n.td,{children:"\u2713 Docker-compose, Helm chart, Operator"}),(0,t.jsx)(n.td,{children:"\u2713 Docker-compose, Operator"}),(0,t.jsx)(n.td,{children:"\u2713 Docker-compose, Helm chart"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Administration capabilities"}),(0,t.jsx)(n.td,{children:"\u2713 Terraform, CRDs, Client libraries"}),(0,t.jsx)(n.td,{children:"\u2713 Ansible, Client libraries"}),(0,t.jsx)(n.td,{children:"\u2713 Client libraries"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Automation: Harbor should support webhooks following CloudEvents spec in the ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/issues/17748",children:"next release"})]}),"\n",(0,t.jsxs)(n.li,{children:["Content Trust and Validation: Harbor announced the deprecation of ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/discussions/16612",children:"Notary"}),"\nintegration, hence it is not mentioned in the table"]}),"\n",(0,t.jsx)(n.li,{children:"Multi-tenancy: Harbor, Quay, as well as Dragonfly, operates on a single storage\nbackend (e.g. S3), i.e. the storage of container images is shared between tenants"}),"\n",(0,t.jsxs)(n.li,{children:["Additional supported artifacts: Harbor announced the deprecation of ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor/discussions/15057",children:"Chartmuseum"}),"\nintegration, hence it is not mentioned in the table"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsxs)(n.p,{children:['Based on the requirements laid out in ["Requirements for container registries"], the OSS health check\nand the possible software solutions presented in this document, it was decided to use the ',(0,t.jsx)(n.strong,{children:"Harbor"})," project\nas the container registry for the SCS reference implementation."]}),"\n",(0,t.jsx)(n.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/standards/scs-0212-v1-requirements-for-container-registries",children:'"Requirements for container registries"'}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/harbor",children:"harbor"}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/dragonflyoss/Dragonfly2",children:"dragonfly"}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/quay/quay",children:"projectquay"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);