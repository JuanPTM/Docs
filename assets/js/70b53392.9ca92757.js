"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9110],{24139:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(74848),r=s(28453);const i={title:"Architecture for the Cloud Service provider Observability System for the KaaS Layer",type:"Decision Record",status:"Draft",track:"Ops"},a=void 0,o={id:"scs-0403-v1-csp-kaas-observability-stack",title:"Architecture for the Cloud Service provider Observability System for the KaaS Layer",description:"Introduction",source:"@site/standards/scs-0403-v1-csp-kaas-observability-stack.md",sourceDirName:".",slug:"/scs-0403-v1-csp-kaas-observability-stack",permalink:"/standards/scs-0403-v1-csp-kaas-observability-stack",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Architecture for the Cloud Service provider Observability System for the KaaS Layer",type:"Decision Record",status:"Draft",track:"Ops"},sidebar:"standards",previous:{title:"scs-0403: Architecture for the Cloud Service provider Observability System for the KaaS Layer",permalink:"/standards/ops/scs-0403"},next:{title:"scs-0410: Gnocchi as database for metering",permalink:"/standards/ops/scs-0410"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Options considered",id:"options-considered",level:3},{value:"Use of the dNation Observability Stack as a base",id:"use-of-the-dnation-observability-stack-as-a-base",level:4},{value:"Pull-based Architecture",id:"pull-based-architecture",level:4},{value:"Push-based Archtitecture",id:"push-based-archtitecture",level:4},{value:"Scope of the Observability Architecture",id:"scope-of-the-observability-architecture",level:4},{value:"Observing the Observability Infrastructure",id:"observing-the-observability-infrastructure",level:4},{value:"Alerting Rulesets",id:"alerting-rulesets",level:4},{value:"Decisions",id:"decisions",level:2},{value:"Reference",id:"reference",level:2},{value:"Outcome of the CSP Survey about Requirements for KaaS Observability",id:"outcome-of-the-csp-survey-about-requirements-for-kaas-observability",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Cloud Service Providers offer a variety of products to a customer. Those can include compute resources like virtual machines, networking, and identity and access management. As customers of those services build their applications upon those offered services the service provider needs to ensure a certain quality level of their offerings. This is done by observing the infrastructure. Observability systems leverage different types of telemetry data which include:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Metrics: Usually time series data about different parameters of a system which can include e.g. CPU usage, number of active requests, health status, etc."}),"\n",(0,n.jsx)(t.li,{children:"Logs: Messages of software events during runtime"}),"\n",(0,n.jsx)(t.li,{children:"Traces: A more developer-oriented form of logging to provide insights into an application or to analyze request flows in distributed systems."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Based on those data, an alerting system can be used to send out notifications to an Operations Team if a system behaves abnormally. Based on the telemetry data the Operations Team can find the issue, work on it, and mitigate future incidents."}),"\n",(0,n.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsx)(t.p,{children:"Currently, only the IaaS Layer of the SCS Reference Implementation has an Observability Stack consisting of tools like Prometheus, Grafana, and Alertmanager as well as several Exporters to extract monitoring data from the several OpenStack components and additional software that is involved in the Reference Implementation. As the Kubernetes as a Service Layer becomes more and more important and the work on the Cluster API approach to create customer clusters progresses further, an observability solution for this layer is also needed. CSP should be able to watch over customer clusters and intervene if a cluster gets in a malfunctioning state. For this, a toolset and architecture are needed which is proposed in this ADR."}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"A survey was conducted to gather the needs and requirements of a CSP when providing Kubernetes as a Service. The feedback of the survey led to the following requirement on a Kubernetes as a Service Observability System:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Telemetry Data that MUST be fetched:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CPU, RAM, Disk, Network"}),"\n",(0,n.jsx)(t.li,{children:"HTTP Connectivity Metrics"}),"\n",(0,n.jsx)(t.li,{children:"Control Plane and Pod metrics (States, Ready, etc.)"}),"\n",(0,n.jsx)(t.li,{children:"K8s certs metrics"}),"\n",(0,n.jsx)(t.li,{children:"Metrics of underlying node"}),"\n",(0,n.jsx)(t.li,{children:"Logs of control plane, kubelet and containerd"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Telemetry Data that MAY be fetched:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"K8s resources (exporters, kubestate metrics, cadvisor, parts of the kubelet)"}),"\n",(0,n.jsx)(t.li,{children:"Ingress controller exporter (http error rate, cert metrics like expiration date)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Telemetry Data that SHOULD NOT BE fetched:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Any metrics or logs a CSP does not need to provide support with respect to their SLA with a Customer."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Telemetry Data that MUST NOT be fetched:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Secrets"}),"\n",(0,n.jsx)(t.li,{children:"Customer Specific Workload Metrics"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"The Alerting Mechanism MUST include a default ruleset"}),"\n",(0,n.jsx)(t.li,{children:"The Observability Stack MUST run on the CSP Infrastructure"}),"\n",(0,n.jsx)(t.li,{children:"The Observability Stack MUST be High Available"}),"\n",(0,n.jsx)(t.li,{children:"The Observability Stack MUST be able to observe itself"}),"\n",(0,n.jsx)(t.li,{children:"Observed Clusters SHOULD have a low resource impact on the used software to provide telemetry data for the Observability Stack"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"options-considered",children:"Options considered"}),"\n",(0,n.jsx)(t.h4,{id:"use-of-the-dnation-observability-stack-as-a-base",children:"Use of the dNation Observability Stack as a base"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/dNationCloud/kubernetes-monitoring",children:"dNation monitoring stack"})," offers a lot of basic capabilities needed on an observability stack for Kubernetes like Prometheus Operator, Grafana, Alertmanager, Loki, Promtail and Thanos."]}),"\n",(0,n.jsx)(t.h4,{id:"pull-based-architecture",children:"Pull-based Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Each customer cluster has Thanos and Prometheus installed in addition to Thanos and Prometheus on the Observer Cluster. Metrics of a customer cluster are pulled from Thanos (Customer Cluster) for short term queries, as for long term queries the data of all Thanos instances is stored in an external Object Store of the CSP."}),"\n",(0,n.jsx)(t.h4,{id:"push-based-archtitecture",children:"Push-based Archtitecture"}),"\n",(0,n.jsx)(t.p,{children:"Here, Thanos and Prometheus are only used on the CSP side to store and manage all observability data. For the customer clusters only the Prometheus Agent will be used. Prometheus Agent will push all metrics of a Customer Cluster to the central Thanos instance and is preserved in an external Object Store. This introduces less complexity and resource consumption on the customer workload clusters."}),"\n",(0,n.jsx)(t.h4,{id:"scope-of-the-observability-architecture",children:"Scope of the Observability Architecture"}),"\n",(0,n.jsx)(t.p,{children:"The Observability Cluster and Architecture SHOULD be defined in a modular way so that it can be used to not only observe the Kubernetes Layer of an SCS Stack, but every aspect of an SCS Stack."}),"\n",(0,n.jsx)(t.h4,{id:"observing-the-observability-infrastructure",children:"Observing the Observability Infrastructure"}),"\n",(0,n.jsx)(t.p,{children:"For usage in production, it needs to be possible to observe the Observability Cluster itself."}),"\n",(0,n.jsx)(t.h4,{id:"alerting-rulesets",children:"Alerting Rulesets"}),"\n",(0,n.jsxs)(t.p,{children:["Use a mix of ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-monitoring/kubernetes-mixin/tree/master/alerts",children:"kubernetes-mixin alerts"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/dNationCloud/kubernetes-monitoring/tree/main/jsonnet/rules",children:"dNation Alerts Ruleset"}),", as they offer an extensive and well reviewed set of default Alerts covering the important Parts of a Kubernetes Deployment (Nodes, Controlplane, K8s Resources, etc.)"]}),"\n",(0,n.jsx)(t.h2,{id:"decisions",children:"Decisions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Base the MVP-0 Implementation on the dNation Kubernetes Monitoring Stack."}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Push-based"})," Architecture was chosen over the Pull-based Approach."]}),"\n",(0,n.jsx)(t.li,{children:"The Observability Stack will be created based on the dNation observability stack"}),"\n",(0,n.jsx)(t.li,{children:"The Observability Stack can be used as a standalone component to use with the Kubernetes Layer. It should be possible to observe other parts of an SCS Stack like the status of the OpenStack components, but this will not be mandatory."}),"\n",(0,n.jsx)(t.li,{children:"The Observability Stack should be designed that it is possible to provision two observer clusters side by side, observing each other. To do this is only a recommendation for production usage."}),"\n",(0,n.jsxs)(t.li,{children:["The MVP-0 will consist of the following features:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Observability data from KaaS Clusters is scraped","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"K8s cluster that hosts observer deployment is deployed"}),"\n",(0,n.jsx)(t.li,{children:"S3 compatible bucket as a storage for long term metrics is configured"}),"\n",(0,n.jsx)(t.li,{children:"thanos query-frontend is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"thanos query is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"thanos receiver is deployed and configured (simple deployment, non HA, without router)"}),"\n",(0,n.jsx)(t.li,{children:"thanos ruler is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"thanos compactor is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"thanos bucket-web is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"thanos storegateway is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"prometheus server is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"prometheus alertmanager is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"prometheus black-box exporter is deployed and configured"}),"\n",(0,n.jsx)(t.li,{children:"kaas-metric-importer is deployed and configured (service aims to differentiate between intentional deletion of KaaS instances and failures in the KaaS monitoring agent)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Alerts are defined on the KaaS Clusters metrics","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"all prometheus alerts are working as expected"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["There exist Dashboards for KaaS Cluster Health","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"KaaS L0 dashboard counters are working correctly"}),"\n",(0,n.jsx)(t.li,{children:"Dedicated L0 dashboards are deployed for KaaS and for IaaS monitoring layers"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"There exist Dashboards for SCS services endpoints health (BlackBox exporter)"}),"\n",(0,n.jsx)(t.li,{children:"There exist Dashboards for IaaS layer health"}),"\n",(0,n.jsxs)(t.li,{children:["Automatic Setup of Exporters for Observability of managed K8s clusters","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"KaaS service is mocked"}),"\n",(0,n.jsx)(t.li,{children:"VM that will host a mock of KaaS service is deployed"}),"\n",(0,n.jsx)(t.li,{children:"a script that deploys a multiple KinD clusters and register them in observer is created"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Automatic Setup of Thanos sidecar for Observability of IaaS layer (testbed)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"IaaS service is mocked"}),"\n",(0,n.jsx)(t.li,{children:"OSISM testbed is deployed"}),"\n",(0,n.jsx)(t.li,{children:"implement an option to deploy thanos sidecar with some simple config in OSISM testbed"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"There exist Dashboards for Harbor Registry Health"}),"\n",(0,n.jsx)(t.li,{children:"Alerts are defined on the Harbor Registry metrics"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.h3,{id:"outcome-of-the-csp-survey-about-requirements-for-kaas-observability",children:"Outcome of the CSP Survey about Requirements for KaaS Observability"}),"\n",(0,n.jsx)(t.p,{children:"A survey was conducted to gather the needs and requirements of a CSP when providing Kubernetes as a Service. The results of the Survey (Questions with answers) were the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"What is your understanding of a managed Kubernetes Offering:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hassle-Free Installation and Maintenance (customer viewpoint); Providing control plane and worker nodes and responsibility for correct function but agnostic to workload"}),"\n",(0,n.jsx)(t.li,{children:"Day0, 1 and 2 (~planning, provisioning, operations) full lifecycle management or let customer manages some parts of that, depending on customer contract"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"What Type and Depth of observability is needed"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CPU, RAM, HDD and Network usage, Health and Function of Cluster Nodes, control plane and if desired Customer Workload"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Do you have an observability infrastructure, if yes, how it is built"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Grafana/Thanos/Prometheus/Loki/Promtail/Alertmanger Stack, i.e. ",(0,n.jsx)(t.a,{href:"https://raw.githubusercontent.com/dNationCloud/kubernetes-monitoring-stack/main/thanos-deployment-architecture.svg",children:"Example Infrastructure"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Data Must haves"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CPU, RAM, Disk, Network"}),"\n",(0,n.jsx)(t.li,{children:"HTTP Connectivity Metrics"}),"\n",(0,n.jsx)(t.li,{children:"Control Plane and Pod metrics (States, Ready, etc.)"}),"\n",(0,n.jsx)(t.li,{children:"Workload specific metrics"}),"\n",(0,n.jsx)(t.li,{children:"Node Stats"}),"\n",(0,n.jsx)(t.li,{children:"K8s resources (exporters, kubestate metrics, cadvisor, parts of the kubelet)"}),"\n",(0,n.jsx)(t.li,{children:"Ingress controller exporter (http error rate, cert metrics like expiration date)"}),"\n",(0,n.jsx)(t.li,{children:"K8s certs metrics"}),"\n",(0,n.jsx)(t.li,{children:"Metrics of underlying node"}),"\n",(0,n.jsx)(t.li,{children:"Logs of control plane, kubelet and containerd"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Must Not haves"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Secrets, otherwise as much as possible for anomaly detection over long time data"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Must have Alerts"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Dependent on SLAs and SLA Types, highly individual"}),"\n",(0,n.jsxs)(t.li,{children:["Use of ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-monitoring/kubernetes-mixin/tree/master/alerts",children:"kubernetes-mixin alerts"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/dNationCloud/kubernetes-monitoring/tree/main/jsonnet/rules",children:"dNation Alerts Ruleset"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Must NOT Alert on"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Should not wake people, nothing that does not lead to Action items"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Observability from Within Or Outside KaaS. How does the architecture look like?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Monitoring Infra on CSP Side"}),"\n",(0,n.jsx)(t.li,{children:"Data from Customer Clusters and Mon Infra on CSP and KaaS, get both data. KaaS Monitoring can also be used by customer"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Special Constraints"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"HA Setup in different Clusters on Different Sites"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);