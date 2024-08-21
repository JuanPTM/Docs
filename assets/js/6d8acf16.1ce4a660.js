"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3374],{3938:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=o(74848),t=o(28453);const s={},i="Tuning",a={id:"operating-scs/components/monitoring/docs/tuning",title:"Tuning",description:"This page contains recommended parameters to set for the Thanos components to improve performance in terms of query time.",source:"@site/docs/04-operating-scs/components/monitoring/docs/tuning.md",sourceDirName:"04-operating-scs/components/monitoring/docs",slug:"/operating-scs/components/monitoring/docs/tuning",permalink:"/docs/operating-scs/components/monitoring/docs/tuning",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/monitoring/docs/tuning.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Traces",permalink:"/docs/operating-scs/components/monitoring/docs/tracing"},next:{title:"Central API",permalink:"/docs/category/central-api"}},c={},l=[{value:"Query Frontend",id:"query-frontend",level:2},{value:"Compactor",id:"compactor",level:2},{value:"Query",id:"query",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tuning",children:"Tuning"}),"\n",(0,r.jsx)(n.p,{children:"This page contains recommended parameters to set for the Thanos components to improve performance in terms of query time.\nThe following parameters have already been incorporated into the upstream dNation monitoring repositories,\nand therefore are already included in the SCS observability deployment."}),"\n",(0,r.jsx)(n.h2,{id:"query-frontend",children:"Query Frontend"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'queryFrontend:\n  extraFlags:\n  - --query-range.split-interval=12h \n  - --query-frontend.log-queries-longer-than=10s\n  - --query-frontend.compress-responses\n  - |-\n    --query-range.response-cache-config="config":\n      "max_size": "500MB"\n      "max_size_items": 0\n      "validity": 0s\n    "type": "in-memory"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Notes on the parameters for query frontend:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query-range.split-interval"})," - splits a long query into multiple short queries to improve query time. Default=24h."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query-frontend.log-queries-longer-than=10s"})," - log queries running longer than 10s, which helps to identify new querries, which should be improved)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query-frontend.compress-responses"})," - compress HTTP responses, helps with query time"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query-range.response-cache-config"})," - cahcing is common solution to speed up response time(",(0,r.jsx)(n.a,{href:"https://zapier.com/blog/five-recommendations-when-running-thanos-and-prometheus/",children:"https://zapier.com/blog/five-recommendations-when-running-thanos-and-prometheus/"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compactor",children:"Compactor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"compactor:\n  retentionResolutionRaw: 2d\n  retentionResolution5m: 10d\n  retentionResolution1h: 15d\n  extraFlags:\n  - --compact.concurrency=3\n  - --downsample.concurrency=3\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Notes on the parameters for compactor:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"retentionResolutionRaw"})," - how long to retain raw samples in bucket. Minimum is two days, because just after 40 hours 5m downsampled data are created."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"retentionResolution5m"})," - how long to retain samples of resolution 1 (5 minutes) in bucket. Setting this to 0d will retain samples of this resolution forever. One hour downsampled data are created only after 10 days, so this is minimum if you want also 1h downsampled data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"retentionResolution1h"})," -  how long to retain samples of resolution 2 hour) in bucket."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"delete-delay"})," - make sure you have set this parameter. It is time before a block marked for deletion is deleted from bucket. Note that deleting blocks immediately can cause query failures, if store gateway still has the block loaded, or compactor is ignoring the deletion because it's compacting the block at the same time. Default=48h."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"compact.concurrency"})," - number of goroutines to use when compacting groups(",(0,r.jsx)(n.a,{href:"https://zapier.com/blog/five-recommendations-when-running-thanos-and-prometheus/",children:"https://zapier.com/blog/five-recommendations-when-running-thanos-and-prometheus/"}),"). Default=1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"downsample.concurrency"})," - number of goroutines to use when downsampling block(",(0,r.jsx)(n.a,{href:"https://zapier.com/blog/five-recommendations-when-running-thanos-and-prometheus/",children:"https://zapier.com/blog/five-recommendations-when-running-thanos-and-prometheus/"}),"). Default=1."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"query:\n  extraFlags:\n  - --query.auto-downsampling\n  - --query.replica-label=prometheus_replica\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Notes on the parameters for query:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query.auto-downsampling"})," - enable automatic adjustment (step / 5) to what source of data should be used in store gateways if no ",(0,r.jsx)(n.code,{children:"max_source_resolution"})," param is specified. Default step for range queries is equal to 1s and it is only used when step is not set in UI. Can be changed by setting ",(0,r.jsx)(n.code,{children:"--query.default-step"})," parameter. Hovewer, when you are using ",(0,r.jsx)(n.strong,{children:"Grafana"})," as your UI, the step is taken from ",(0,r.jsx)(n.code,{children:"min_step"}),". The preferred options is to set HTTP URL/FORM parameter ",(0,r.jsx)(n.code,{children:"max_source_resolution"})," to ",(0,r.jsx)(n.code,{children:"auto"}),", which selects downsample resolution automatically based on the query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query.replica-label"})," - labels to treat as a replica indicator along which data is deduplicated."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);