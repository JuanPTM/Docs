"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4342],{24179:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(74848),t=i(28453);const a={title:"Gnocchi as database for metering",type:"Decision Record",status:"Draft",track:"Ops"},o=void 0,r={id:"scs-0410-v1-gnocchi-as-metering-database",title:"Gnocchi as database for metering",description:"for more info. --\x3e",source:"@site/standards/scs-0410-v1-gnocchi-as-metering-database.md",sourceDirName:".",slug:"/scs-0410-v1-gnocchi-as-metering-database",permalink:"/standards/scs-0410-v1-gnocchi-as-metering-database",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Gnocchi as database for metering",type:"Decision Record",status:"Draft",track:"Ops"},sidebar:"standards",previous:{title:"scs-0410: Gnocchi as database for metering",permalink:"/standards/ops/scs-0410"},next:{title:"scs-0411: Push-based approach for providing usage data",permalink:"/standards/ops/scs-0411"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Options",id:"options",level:3},{value:"Using Gnocchi",id:"using-gnocchi",level:4},{value:"Using Prometheus",id:"using-prometheus",level:4},{value:"Using InfluxDB",id:"using-influxdb",level:4},{value:"Creating a custom TSDB implementation",id:"creating-a-custom-tsdb-implementation",level:4},{value:"Decision",id:"decision",level:2},{value:"Open questions",id:"open-questions",level:2},{value:"Related Documents",id:"related-documents",level:2},{value:"Conformance Tests",id:"conformance-tests",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"In the past we noticed missing events in the telemetry stack of OpenStack.\nThis results in situations where the Cloud Service Provider (CSP)\nmay think that a resource is still in use while the owner shut it down,\nor may not be aware of a resource which has been created."}),"\n",(0,s.jsx)(n.p,{children:"Such inaccurate data is a problem,\nwhen it is supposed to be used for billing purposes."}),"\n",(0,s.jsx)(n.p,{children:"This document discusses how such metering data should be stored\nwithin the SCS.\nIn particular,\nit provides rationale for the choice of Gnocchi\nas time-series database for metering data\nwithin SCS."}),"\n",(0,s.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TSDB, time-series database:\nDatabase which is specialised for storing data which is keyed by a timestamp.\nPopular examples are InfluxDB, Graphite, rrd, and Prometheus."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Metering:\nCollection of usage data of a cloud,\nfor the specific purpose of creating invoices\nto bill customers for the resources they have allocated."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"backfilling:\nThe process of adding and modifying data in the past\nwithin a time-series database."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Metric:\nA single time-series vector.\nTypically, a metric represents a single property of a resource,\nsuch as CPU usage of an instance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Resource metrics:\nA group of metrics belonging to a single resource.\nA compute instance, for instance,\nmay have a metric indicating the number of CPUs allocated,\nanother metric indicating the amount of RAM allocated,\netc."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"Being able to hold users accountable\nfor the resources they use\nis a prerequisite for commercially operating a cloud.\nThe SCS project wants to deliver a cloud stack\nwhich can be used for that purpose,\nhence providing reliable metering data is a requirement."}),"\n",(0,s.jsx)(n.p,{children:"As metering data is inherently keyed by time,\na time-series database is required.\nThe choice of time-series database is an important one\nas different databases come with different trade-offs.\nNot all databases are suitable for the kind of data\nwhich is collected in a metering context."}),"\n",(0,s.jsx)(n.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,s.jsx)(n.p,{children:"The following requirements for a time-series database exist:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MUST support backfilling:\nAs we need to catch up on changes to resources\nwhich may have happened during a brief network interruption,\nwe need to be able to modify data after it has been written to the TSDB."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MUST be able to handle lots of resources:\nAs billing should happen with a resource-level granularity,\nwe expect a lot of different metrics inside the TSDB."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MUST scale to different timescales:\nWe expect to have metrics which change frequently (e.g. object store usage)\nand metrics which change rarely (e.g. cinder volume sizes).\nThe TSDB must be able to cope with both types of metrics efficiently."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SHOULD provide an efficient way to query all currently alive resources."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SHOULD allow truncation of storage to remove old data."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MUST be available under an appropriate Open Source license,\neven for productive use cases."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h4,{id:"using-gnocchi",children:"Using Gnocchi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://gnocchi.osci.io/",children:"Gnocchi"})," is a time-series database\nwhich has its origins in the OpenStack ecosystem."]}),"\n",(0,s.jsx)(n.p,{children:"It supports all requirements except truncation,\nwhich might have to be implemented."}),"\n",(0,s.jsx)(n.h4,{id:"using-prometheus",children:"Using Prometheus"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://prometheus.io",children:"Prometheus"})," is a widely used time-series database\nwith its focus on monitoring and incident response.\nWhile it is considered efficient for this use-case,\nit has shortcomings which make it unsuitable for the metering use case:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Explicit recommendation ",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/practices/instrumentation/#do-not-overuse-labels",children:"against high-cardinality metrics"}),":\nAs we would have to label metrics by resource IDs and project IDs,\nwe have to expect a very high cardinality,\nalso with a significant amount of metric churn."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Backfilling, ",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/storage/#backfilling-from-openmetrics-format",children:"albeit possible"}),", is not well-supported."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"using-influxdb",children:"Using InfluxDB"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.influxdata.com/",children:"InfluxDB"})," is a widely used time-series database\nwith its focus on monitoring."]}),"\n",(0,s.jsxs)(n.p,{children:["In contrast to Prometheus, it does support backfilling.\nHowever, like Prometheus,\nit seems to run ",(0,s.jsx)(n.a,{href:"https://docs.influxdata.com/influxdb/cloud/write-data/best-practices/resolve-high-cardinality/",children:"into scalability issues in high-cardinality scenarios"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In addition,\nclustering is only available in commercial licensing options."}),"\n",(0,s.jsx)(n.h4,{id:"creating-a-custom-tsdb-implementation",children:"Creating a custom TSDB implementation"}),"\n",(0,s.jsx)(n.p,{children:"A custom TSDB implementation\nis a non-trivial project to pursue."}),"\n",(0,s.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(n.p,{children:"We use Gnocchi.\nAccording to research,\nit mostly fulfills the requirements.\nWhile some small development efforts may be needed,\nto make it fully usable,\nthe amount of work is anticipated much less\nthan making Prometheus or Influx fit the bill\n(due to backfilling / cardinality scaling constraints),\nlet alone rolling a custom implementation."}),"\n",(0,s.jsx)(n.h2,{id:"open-questions",children:"Open questions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"What will be the granularity of the events meta information?"}),"\n",(0,s.jsx)(n.p,{children:"If we decide to use resource metadata\nas a place to store slow-changing information\n(e.g. instance flavors, volume sizes),\nwe need to know what the granularity of that is."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SCS-0411-v1"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conformance-tests",children:"Conformance Tests"}),"\n",(0,s.jsx)(n.p,{children:"None (this is a decision record)."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);