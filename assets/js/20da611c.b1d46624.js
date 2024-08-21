"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7491],{57432:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),o=s(28453);const r={},i="K3s support",a={id:"operating-scs/components/monitoring/docs/k3s",title:"K3s support",description:"K3s is a certified Kubernetes distribution optimized for production environments, particularly in remote locations",source:"@site/docs/04-operating-scs/components/monitoring/docs/k3s.md",sourceDirName:"04-operating-scs/components/monitoring/docs",slug:"/operating-scs/components/monitoring/docs/k3s",permalink:"/docs/operating-scs/components/monitoring/docs/k3s",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/monitoring/docs/k3s.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SCS deployment",permalink:"/docs/operating-scs/components/monitoring/docs/scs-deployment"},next:{title:"Infrastructure service endpoints",permalink:"/docs/operating-scs/components/monitoring/docs/infrastructure_services"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare K3s Kubernetes cluster via K3d",id:"prepare-k3s-kubernetes-cluster-via-k3d",level:2},{value:"Deploy Observer monitoring solution",id:"deploy-observer-monitoring-solution",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"k3s-support",children:"K3s support"}),"\n",(0,t.jsx)(n.p,{children:"K3s is a certified Kubernetes distribution optimized for production environments, particularly in remote locations\nor resource-constrained environments. Within the OSISM IaaS distribution, it serves as the management cluster,\naccommodating various management software. Our aim is to integrate the SCS Observability platform as an observer solution\nfor the IaaS layer. To achieve this, we deploy the SCS Observability solution within the IaaS k3s management cluster.\nThis setup enables us to monitor not only the management k3s cluster itself but also the surrounding IaaS control\nplane components."}),"\n",(0,t.jsx)(n.p,{children:"This page contains information on how to develop and/or test the Observer solution as a monitoring solution for a k3s\ncluster. It guides the user to create an HA k3s cluster via k3d (a wrapper to run k3s in Docker) and bootstrap\nit with the Observer solution."}),"\n",(0,t.jsxs)(n.p,{children:["Note that the following tutorial guides you to deploy an HA K3s cluster consisting of 3 control plane nodes (servers)\nand one worker node (agent). The reason is that the HA K3s cluster utilizes an embedded etcd cluster as cluster storage\n(refer to ",(0,t.jsx)(n.a,{href:"https://docs.k3s.io/datastore/ha-embedded",children:"https://docs.k3s.io/datastore/ha-embedded"}),") and the HA mode is also used in OSISM Testbed and productive bare\nmetal deployments.\nUsing a single-node K3s cluster that uses the SQLite database (default) requires additional tweaks of monitoring values,\nwhich are not covered in this guide."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://k3d.io/#installation",children:"K3d"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://helm.sh/",children:"helm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubectl/",children:"kubectl"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-k3s-kubernetes-cluster-via-k3d",children:"Prepare K3s Kubernetes cluster via K3d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"k3d cluster create --config k3s-config.yaml --image rancher/k3s:v1.28.8-k3s1 observer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you opt not to use K3D with the custom config we provided here, and prefer utilizing another Kubernetes cluster,\nensure that the metric endpoints for various control plane components are properly exposed.\nRefer to the ",(0,t.jsx)(n.a,{href:"https://dnationcloud.github.io/kubernetes-monitoring/helpers/FAQ/#kubernetes-monitoring-shows-or-0-state-for-some-control-plane-components-are-control-plane-components-working-correctly",children:"docs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-observer-monitoring-solution",children:"Deploy Observer monitoring solution"}),"\n",(0,t.jsxs)(n.p,{children:["K3s consolidates all Kubernetes control plane components into a single process, which means that the metrics for these\ncontrol plane components are exposed on the K3d hosts rather than through individual Kubernetes Services/PODs.\nTo customize monitoring values for K3s, refer to the specific custom HELM values file ",(0,t.jsx)(n.code,{children:"values-observer-k3s.yaml"}),".\nThis file contains the necessary configurations and adjustments needed to monitor K3s.\nNote that list of control plane node IPs (endpoints) should be overridden."]}),"\n",(0,t.jsx)(n.p,{children:"Get and store the K3d control plane node IPs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NODE_IPS=$(kubectl get nodes -l node-role.kubernetes.io/control-plane=true -o jsonpath='{.items[*].status.addresses[?(@.type==\"InternalIP\")].address}' | tr ' ' ',' | sed 's/^/{&/;s/$/}/')\n"})}),"\n",(0,t.jsx)(n.p,{children:"Install the monitoring stack and set the control plane component endpoints"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm repo add dnationcloud https://dnationcloud.github.io/helm-hub/\nhelm repo update dnationcloud\nhelm upgrade --install dnation-kubernetes-monitoring-stack dnationcloud/dnation-kubernetes-monitoring-stack -f values-observer-k3s.yaml \\\n  --set "kube-prometheus-stack.kubeEtcd.endpoints=$NODE_IPS" \\\n  --set "kube-prometheus-stack.kubeProxy.endpoints=$NODE_IPS" \\\n  --set "kube-prometheus-stack.kubeControllerManager.endpoints=$NODE_IPS" \\\n  --set "kube-prometheus-stack.kubeScheduler.endpoints=$NODE_IPS"\n'})}),"\n",(0,t.jsx)(n.h1,{id:"access-the-observer-monitoring-uis",children:"Access the Observer monitoring UIs"}),"\n",(0,t.jsx)(n.p,{children:"At this point, you should have the ability to access the Grafana, Alertmanager and Prometheus UIs\nwithin the Observer monitoring cluster."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Grafana UI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:30000\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the following credentials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["username: ",(0,t.jsx)(n.code,{children:"admin"})]}),"\n",(0,t.jsxs)(n.li,{children:["password: ",(0,t.jsx)(n.code,{children:"pass"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Visit the Layer 0 dashboard, ",(0,t.jsx)(n.code,{children:"infrastructure-services-monitoring"}),", and drill down to explore cluster metrics"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://localhost:30000/d/monitoring/infrastructure-services-monitoring",children:"http://localhost:30000/d/monitoring/infrastructure-services-monitoring"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alertmanager UI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:30001\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Prometheus UI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:30002\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);