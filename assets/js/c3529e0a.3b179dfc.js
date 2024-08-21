"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6871],{72270:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(74848),o=s(28453);const r={title:"Using Sonobuoy for KaaS conformance tests",type:"Decision Record",status:"Draft",track:"KaaS"},i=void 0,a={id:"scs-0200-v1-using-sonobuoy-for-kaas-conformance-tests",title:"Using Sonobuoy for KaaS conformance tests",description:"Motivation",source:"@site/standards/scs-0200-v1-using-sonobuoy-for-kaas-conformance-tests.md",sourceDirName:".",slug:"/scs-0200-v1-using-sonobuoy-for-kaas-conformance-tests",permalink:"/standards/scs-0200-v1-using-sonobuoy-for-kaas-conformance-tests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Using Sonobuoy for KaaS conformance tests",type:"Decision Record",status:"Draft",track:"KaaS"},sidebar:"standards",previous:{title:"scs-0200: Using Sonobuoy for KaaS conformance tests",permalink:"/standards/kaas/scs-0200"},next:{title:"scs-0210: SCS K8S Version Policy",permalink:"/standards/kaas/scs-0210"}},h={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Short Sonobuoy Introduction",id:"short-sonobuoy-introduction",level:3},{value:"Design Considerations",id:"design-considerations",level:2},{value:"<em>Option 1</em> Golang based approach 1: Pick a framework from the Sonobuoy plugin examples",id:"option-1-golang-based-approach-1-pick-a-framework-from-the-sonobuoy-plugin-examples",level:3},{value:"<em>Option 2</em> Golang based approach 2: Reuse the Kubernetes own e2e test infrastructure and framework",id:"option-2-golang-based-approach-2-reuse-the-kubernetes-own-e2e-test-infrastructure-and-framework",level:3},{value:"<em>Option 3</em> Write Python scripts for tests",id:"option-3-write-python-scripts-for-tests",level:3},{value:"Approaches to providing a Sonobuoy plugin image",id:"approaches-to-providing-a-sonobuoy-plugin-image",level:2},{value:"<em>Option 1</em> Public container registry",id:"option-1-public-container-registry",level:3},{value:"<em>Option 2</em> Local image upload",id:"option-2-local-image-upload",level:3},{value:"Decision",id:"decision",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsxs)(t.p,{children:["With the ",(0,n.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider",children:"k8s-cluster-api-provider"}),", the SCS provides a tool to generate\nand manage k8s clusters on top of its IaaS infrastructure. As part of\nthe application, ",(0,n.jsx)(t.a,{href:"https://sonobuoy.io/",children:"Sonobuoy"})," is used as a test suite to execute the\nofficial ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes e2e tests"}),".\nWe expect that current and future tests derived from SCS standards\nwill benefit from (or even require) the testing mechanisms that Sonobuoy provides."]}),"\n",(0,n.jsxs)(t.p,{children:["Apart from running the Kubernetes e2e tests, Sonobuoy also allows users to write\ntheir own tests and apply them as a self-managed ",(0,n.jsx)(t.a,{href:"https://sonobuoy.io/docs/main/plugins/",children:"plugin"}),".\nAll tests not provided by the ",(0,n.jsx)(t.a,{href:"https://sonobuoy.io/docs/main/e2eplugin/",children:"e2e test plugin"})," could therefore\nbe written by the respective SCS teams responsible for the standards or tests and\nthen be made executable with Sonobuoy. Hence, Sonobuoy could provide both a pre-done\ntest suite and a framework to write additional conformance tests required for SCS."]}),"\n",(0,n.jsx)(t.h3,{id:"short-sonobuoy-introduction",children:"Short Sonobuoy Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["The main objective of ",(0,n.jsx)(t.a,{href:"https://sonobuoy.io/docs/main/plugins/",children:"Sonobuoy plugins"}),' is to present test\nresults in a consolidated way. To do this, Sonobuoy integrates the test into a pod,\nwhich is then applied to the K8s cluster under test. A Sonobuoy worker supervises\nthis pod and forwards all test results to the aggregator module. It does this by\nwaiting for a specific "Done" file to be created. Once this file is recognized,\nthe worker forwards the results to the aggregator, using a predefined location\nfor the results file within a folder, as seen in following image:\n',(0,n.jsx)(t.img,{src:"https://sonobuoy.io/img/plugin-contract.png",alt:"image search api"})]}),"\n",(0,n.jsx)(t.p,{children:"In order to use the existing conformance tests as a Sonobuoy plugin, a wrapper\naround the individual test scripts would be required. This wrapper would need to\nhave the following effects:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"gathers all test results and provides them in the results file"}),"\n",(0,n.jsx)(t.li,{children:'run tests in sequence and signal the worker when it\'s finished by generating a "Done" file'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Apart from providing the test results, a plugin container must also forward the\nstatus of each test by setting a status flag in the results file.\nAdditionally, the tests would need to be able to run inside a pod in the K8s cluster under test."}),"\n",(0,n.jsx)(t.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,n.jsx)(t.p,{children:"There are different approaches to create a Sonobuoy plugin, which are discussed\nbelow in order to find a best practice for the SCS project. The documented approaches\nshow one example each in order to give a better representation to the reader."}),"\n",(0,n.jsxs)(t.p,{children:["Sonobuoy provides plugin examples in the ",(0,n.jsx)(t.a,{href:"https://github.com/vmware-tanzu/sonobuoy-plugins",children:"plugins repository"}),",\nwhich are referenced throughout this section."]}),"\n",(0,n.jsxs)(t.h3,{id:"option-1-golang-based-approach-1-pick-a-framework-from-the-sonobuoy-plugin-examples",children:[(0,n.jsx)(t.em,{children:"Option 1"})," Golang based approach 1: Pick a framework from the Sonobuoy plugin examples"]}),"\n",(0,n.jsxs)(t.p,{children:["The seemingly most interesting plugin is the ",(0,n.jsx)(t.a,{href:"https://github.com/vmware-tanzu/sonobuoy-plugins/tree/main/examples/e2e-skeleton",children:"e2e-skeleton"}),", which uses\nthe ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework",children:"kubernetes-sigs/e2e-framework"}),". The ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework",children:"kubernetes-sigs/e2e-framework"}),"\nis a stand-alone project that is separate from the official ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes e2e tests"}),'.\nThe framework provides proper documentation as well as helper functions that abstract\nclient functionalities, similar to those found in "kubernetes/kubernetes/test/e2e/framework" repository.']}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned in the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework/blob/main/docs/design/README.md#motivations",children:"motivation"})," of the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework",children:"e2e-framework"}),",\nthe project was created to circumvent the disadvantages of ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes' own e2e-tests"}),",\nwhich are described in more detail in the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework/blob/main/docs/design/README.md#goals",children:"goals"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"PROS:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["arguments in favor of this framework can also be found under the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework/blob/main/docs/design/README.md#goals",children:"goals description"})," of the documentation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework",children:"e2e-framework"})," is a well-defined framework, that allows the handling of resource creation and deletion"]}),"\n",(0,n.jsx)(t.li,{children:'official framework provided by "Kubernetes-sigs"'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"CONS:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["arguments not in favor of this framework can be derived from the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework/blob/main/docs/design/README.md#non-goals",children:"Non-Goals"})," description of the documentation:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"no responsibility for bootstrapping or the execution of the tests themselves" can be ignored, as this is partly taken over by Sonobuoy'}),"\n",(0,n.jsx)(t.li,{children:'"no mock or fake cluster components" can be ignored, since the e2e tests of SCS should be used to test real clusters and their functionality'}),"\n",(0,n.jsx)(t.li,{children:"for this test procedure, the Sonobuoy e2e plugin should be run in addition to the SCS KaaS conformance tests"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["proof of concept: ",(0,n.jsx)(t.code,{children:"../Tests/kaas/kaas-sonobuoy-go-example-e2e-framework/"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"option-2-golang-based-approach-2-reuse-the-kubernetes-own-e2e-test-infrastructure-and-framework",children:[(0,n.jsx)(t.em,{children:"Option 2"})," Golang based approach 2: Reuse the Kubernetes own e2e test infrastructure and framework"]}),"\n",(0,n.jsx)(t.p,{children:"The existing Sonobuoy e2e plugin already provides a vast number of tests that could\nbe adapted or reused for the SCS project."}),"\n",(0,n.jsxs)(t.p,{children:["If these e2e tests are to be reused in a customized structure, a framework like ",(0,n.jsx)(t.a,{href:"https://onsi.github.io/ginkgo/",children:"ginkgo"}),"\nmust be used as it is used by the Kubernetes e2e test infrastructure.\nThis could use the implementation of the build process responsible for the Docker\nimage containing the e2e tests. The setup could be copied from ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/conformance/image",children:"kubernetes/test/conformance/image"}),"\nand adapted to the projects requirements. The mentioned build process must use the\nfiles of the following directories from the Kubernetes repository:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cluster",children:"kubernetes/cluster"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"kubernetes/test/e2e/framework"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/conformance/image/go-runner",children:"kubernetes/test/conformance/image/go-runner"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/hack/conformance",children:"kubernetes/hack/conformance"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/hack/make-rules",children:"kubernetes/hack/make-rules"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"PROS:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes' own e2e tests"})," already provide a vast amount of examples, which could be reused to develop specific SCS tests"]}),"\n",(0,n.jsxs)(t.li,{children:["compared to ",(0,n.jsx)(t.em,{children:"option 1"}),", the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework/blob/main/docs/design/README.md#non-goals",children:"non-goals"})," of the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework",children:"e2e-framework"})," can be seen as the advantages of using ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes' own e2e-tests"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"CONS:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"not easy to implement, as we would have to copy part of the Kubernetes repository and track the changes from the upstream"}),"\n",(0,n.jsxs)(t.li,{children:["according to ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cluster#readme",children:"README.md"}),", part of it seems to be outdated and might change with a future version","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["compared to ",(0,n.jsx)(t.em,{children:"option 1"}),", the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework/blob/main/docs/design/README.md#goals",children:"goals"})," of the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/e2e-framework",children:"e2e-framework"})," can be seen as the disadvantages of using ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes' own e2e-tests"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["TODO: provide proof of concept: ",(0,n.jsx)(t.em,{children:"kaas-sonobuoy-go-example-k8s-e2e"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"option-3-write-python-scripts-for-tests",children:[(0,n.jsx)(t.em,{children:"Option 3"})," Write Python scripts for tests"]}),"\n",(0,n.jsx)(t.p,{children:"Sonobuoy makes it possible to write tests in Python and execute them like other\ntests in a pod on the K8s cluster. It would therefore be possible to keep on writing\nconformance tests in Python."}),"\n",(0,n.jsx)(t.p,{children:'This option would require a wrapper in order to make the tests scripts executable\nas Sonobuoy plugins. This wrapper, as mentioned earlier, would need to capture\nthe collection of test results as well as the generation of the "Done" file after\nthe test execution is finished. This could be managed by executing each test script\nin a sequential order.'}),"\n",(0,n.jsx)(t.p,{children:"The wrapper as well as the python tests and test framework could then be stored\nin a container image and uploaded to a registry in order to be usable by Sonobuoy\nwithin the k8s-cluster-api-provider."}),"\n",(0,n.jsx)(t.p,{children:"This approach also leaves the decision open as to which test framework should be\nused for Python, which should be decided in a secondary Decision Record."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["proof of work: ",(0,n.jsx)(t.code,{children:"../Tests/kaas/k8s-default-storage-class"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"PROS:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["continue using the already available Python tests","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"only a small number of tests is implemented thus far"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"CONS:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'no "native" support in Sonobuoy, a wrapper is needed'}),"\n",(0,n.jsx)(t.li,{children:"decision for a framework is still not done"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"approaches-to-providing-a-sonobuoy-plugin-image",children:"Approaches to providing a Sonobuoy plugin image"}),"\n",(0,n.jsxs)(t.p,{children:["The following section showcases both ways to provide a Sonobuoy plugin image.\n",(0,n.jsx)(t.em,{children:"Option 1"})," would most likely be used, if an image is published to be used by an end user.\n",(0,n.jsx)(t.em,{children:"Option 2"})," is the expected way for local development and testing."]}),"\n",(0,n.jsxs)(t.h3,{id:"option-1-public-container-registry",children:[(0,n.jsx)(t.em,{children:"Option 1"})," Public container registry"]}),"\n",(0,n.jsx)(t.p,{children:"The image can be made available via a public container registry, which would require\na regular job (e.g. CI/CD) to build and publish the image."}),"\n",(0,n.jsxs)(t.h3,{id:"option-2-local-image-upload",children:[(0,n.jsx)(t.em,{children:"Option 2"})," Local image upload"]}),"\n",(0,n.jsx)(t.p,{children:'Create the image locally on the "clusterctl admin control node" and then upload\nit manually to the Kubernetes cluster under test.'}),"\n",(0,n.jsx)(t.p,{children:'Both approaches are useful in different ways. While the usage of a container registry\nallows easy distribution of tests and guarantees new images through the usage of a\nCI/CD job, it also makes it harder to test changes quickly, since a wait time could be\nnecessary to let the CI/CD job run through and access the image. This can be solved\nby using the "Local image upload" or a combination of both approaches.'}),"\n",(0,n.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsx)(t.p,{children:"The KaaS conformance test MUST be provided as a test suite holding the\ntest cases for the Kubernetes clusters to be checked.\nFurthermore, the test cases themselves MUST be wrapped by a test framework to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"handle the creation and deletion of resources"}),"\n",(0,n.jsx)(t.li,{children:"collect and present results"}),"\n",(0,n.jsx)(t.li,{children:"consolidate redundant code across test cases"}),"\n",(0,n.jsx)(t.li,{children:"support the creation of test cases through predefined structures"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As with the ",(0,n.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider",children:"k8s-cluster-api-provider"})," the SCS provides a tooling to generate\nits KaaS infrastructure. Part of the ",(0,n.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider",children:"k8s-cluster-api-provider"})," is the usage\nof Sonobuoy as a test suite to execute the ",(0,n.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/test/e2e",children:"Kubernetes own e2e tests"}),".\nInvestigating those e2e test lead to the conclusion that they are not always reusable.\nThe main purpose of Kubernetes own e2e tests is to test the functionality of\nthe Kubernetes code itself and not the resources and setup of a specific KaaS infrastructure\nas it is the aim of the SCS KaaS conformance test."]}),"\n",(0,n.jsx)(t.p,{children:"However, considering that the SCS has an ongoing process of defining standards and\nimplementing test cases to check their compliance, that means in some cases future standards\nmight already be covered by the e2e test inside the Kubernetes repository.\nHence, before writing tests, a developer SHOULD check the Kubernetes e2e tests for\nexisting test cases that might cover conformance of a standard currently being worked on."}),"\n",(0,n.jsx)(t.p,{children:"As described above, Sonobuoy offers the possibility to generate custom plugins\nthat provide self-created test cases. Therefore, future conformance tests MUST\nbe executable by Sonobuoy by wrapping them in a Sonobuoy plugin.\nMoreover, three options for the implementation of the SCS KaaS compliance test\ncases are described above so that it can be decided within this decision record which\noptions should be used."}),"\n",(0,n.jsxs)(t.p,{children:['As a first decision, "',(0,n.jsx)(t.em,{children:"Option 2"})," Go Approach 2: Reuse Kubernetes' own e2e test infrastructure and framework\"\nis the least viable, as it would mean copying almost all the files used from\nthe Kubernetes e2e tests. This framework is closely linked to the development of\nthe Kubernetes code. Therefore, changes to its structure mainly are in line with its usage\nin the Kubernetes repository itself and is most likely not relevant for other parties.\nChanges in the framework cloud have a greater impact on our side as they are\npredictable. The development effort gained by reusing these examples could be\noutweighed by the investment necessary to adapt tests to the corresponding framework changes."]}),"\n",(0,n.jsxs)(t.p,{children:['This leaves "',(0,n.jsx)(t.em,{children:"Option 1"}),' Go approach 1: Pick framework from the Sonobuoy plugin examples"\nand "',(0,n.jsx)(t.em,{children:"Option 3"})," Write Python scripts for tests\" as methods for implementing test cases.\nIt is possible to use both approaches in parallel, which would enable usage of both Python\nand Go code. This could possibly generate two Sonobuoy plugins, but this isn't a necessity."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);