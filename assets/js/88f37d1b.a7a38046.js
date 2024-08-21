"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6734],{87999:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>r});var t=n(74848),i=n(28453);const c={},a="Proposal for documentation for Keycloak to Keycloak Federation (WebSSO)",s={id:"iam/intra-SCS-federation-setup-description-for-osism-doc-operations",title:"Proposal for documentation for Keycloak to Keycloak Federation (WebSSO)",description:"The followig section is a reasonably detailed hands on description of how",source:"@site/docs/05-iam/intra-SCS-federation-setup-description-for-osism-doc-operations.md",sourceDirName:"05-iam",slug:"/iam/intra-SCS-federation-setup-description-for-osism-doc-operations",permalink:"/docs/iam/intra-SCS-federation-setup-description-for-osism-doc-operations",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/05-iam/intra-SCS-federation-setup-description-for-osism-doc-operations.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Domain Manager setup and usage",permalink:"/docs/iam/domain-manager-setup-and-usage"},next:{title:"Releases",permalink:"/docs/category/releases"}},d={},r=[{value:"Detailed tutorial on how to configure Federation (OpenID Connect) between two Keycloak instances in two separate SCS domains",id:"detailed-tutorial-on-how-to-configure-federation-openid-connect-between-two-keycloak-instances-in-two-separate-scs-domains",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"proposal-for-documentation-for-keycloak-to-keycloak-federation-websso",children:"Proposal for documentation for Keycloak to Keycloak Federation (WebSSO)"}),"\n",(0,t.jsxs)(o.p,{children:["The followig section is a reasonably detailed hands on description of how\nto configure a federation between two separate SCS compliant domains by means\nof Keycloak ",(0,t.jsx)(o.code,{children:"Identity Brokering"}),". If we decide to use Keycloak as a component\nto allow self service by tenants, then this documentation may be a useful addition\nto some tenant facing documentation (or for the SCS operators too)."]}),"\n",(0,t.jsx)(o.p,{children:"OTOH one could probably also script pretty much everything of this to allow\ntenants to use a CLI tool to automate the setup. For that purpose the documentation\nmay be useful to guide the implementation of such a scripted solution."}),"\n",(0,t.jsx)(o.h2,{id:"detailed-tutorial-on-how-to-configure-federation-openid-connect-between-two-keycloak-instances-in-two-separate-scs-domains",children:"Detailed tutorial on how to configure Federation (OpenID Connect) between two Keycloak instances in two separate SCS domains"}),"\n",(0,t.jsxs)(o.p,{children:['Assume you have two CSPs using SCS. The first one wants to grant access to users of the other.\nSo let\'s call the first domain "resource domain" and the second one "accounts domain".\nBoth domains need to agree upon a name for the "OIDC RP" (which Keycloak calls ',(0,t.jsx)(o.code,{children:"Clients"}),').\nThe Keycloak in the "resource domain" will be the OIDC RP and the Keycloak in the "accounts domain" will be the OIDC OP.\nAssuming the "resource domain" is called ',(0,t.jsx)(o.code,{children:"foo"}),' and the "accounts domain" is called bar, the name for the "OIDC RP" could be ',(0,t.jsx)(o.code,{children:"oidc-rp-foo"}),"."]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["In the accounts domain (",(0,t.jsx)(o.code,{children:"bar"}),") open Keycloak realm ",(0,t.jsx)(o.code,{children:"osism"}),", click on ",(0,t.jsx)(o.code,{children:"Clients"})," in the sidebar and click on ",(0,t.jsx)(o.code,{children:"Create client"}),".\nLeave the client type as ",(0,t.jsx)(o.code,{children:"OpenID Connect"})," and enter the ",(0,t.jsx)(o.code,{children:"Client ID"}),", e.g. ",(0,t.jsx)(o.code,{children:"oidc-rp-foo"}),".\nTurn on ",(0,t.jsx)(o.code,{children:"Client authentication"})," for it and click ",(0,t.jsx)(o.code,{children:"Save"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["On the ",(0,t.jsx)(o.code,{children:"Client details"})," page open the tab ",(0,t.jsx)(o.code,{children:"Credentials"})," and copy the ",(0,t.jsx)(o.code,{children:"Client secret"}),'. Communicate this to the operato of the "resource domain" ',(0,t.jsx)(o.code,{children:"foo"})," via a secure channel."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["In the resource domain (",(0,t.jsx)(o.code,{children:"foo"}),") open Keycloak realm ",(0,t.jsx)(o.code,{children:"osism"}),", click on ",(0,t.jsx)(o.code,{children:"Identity providers"}),"\nand create a new provider definition of type ",(0,t.jsx)(o.code,{children:"OpenID Connect v1.0"}),". As ",(0,t.jsx)(o.code,{children:"Alias"})," choose a name,\ne.g. ",(0,t.jsx)(o.code,{children:"oidc-op-bar"}),". Don't copy the ",(0,t.jsx)(o.code,{children:"Redirect URI"})," given at the top yet, because is will change depending\non the chosen ",(0,t.jsx)(o.code,{children:"Alias"}),". Instead, scroll down to the mandatory field ",(0,t.jsx)(o.code,{children:"Discovery endpoint"})," and paste\nthe OpenID Connect metadata URL of the KEycloak realm ",(0,t.jsx)(o.code,{children:"osism"}),' in the "accounts domain" (',(0,t.jsx)(o.code,{children:"bar"}),').\nThe operator of the "accounts domain" (',(0,t.jsx)(o.code,{children:"bar"}),") may easily copy that URL from the ",(0,t.jsx)(o.code,{children:"Realm Settins"})," in the\nsidebar of his Keycloak instance, where the ",(0,t.jsx)(o.code,{children:"Endpoints"})," are listed on the bottom of that form.\nThe URL may have the format ",(0,t.jsx)(o.code,{children:"https://bar.com/auth/realms/osism/.well-known/openid-configuration"}),".\nOnce you leave that input field, Keycloak will attempt to fetch the metadata and extract the required\ndetails about protocol enspoints from the retrieved document. If this shows an error, it will give you\nan HTTP status code. If this shows an error code of 500, then this may be caused by a failure in\ncertificate verification. In that case you may want to check the output of ",(0,t.jsx)(o.code,{children:"docker logs keycloak"})," for\njava stack traces. If you find any, the top of those stack traces may indicate what kind of problem\noccurred to the java code. From here we will assume that the emtadata URL could be fecthed without\nany issues."]}),"\n",(0,t.jsxs)(o.p,{children:["Now, go to the bottom of that form and insert tjhe ",(0,t.jsx)(o.code,{children:"Client ID"})," (",(0,t.jsx)(o.code,{children:"oidc-rp-foo"}),") and the\n",(0,t.jsx)(o.code,{children:"Client secret"}),' that was provided by the operator of the "accounts domain" (',(0,t.jsx)(o.code,{children:"bar"}),").\nFinally click on ",(0,t.jsx)(o.code,{children:"Add"}),". From the ",(0,t.jsx)(o.code,{children:"Provider Details"})," page on the top for the ",(0,t.jsx)(o.code,{children:"Settings"})," tab copy the value of the\n",(0,t.jsx)(o.code,{children:"Redirect URI"}),' and communicate it back to the operator of the "accounts domain" (',(0,t.jsx)(o.code,{children:"bar"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["In the accounts domain (",(0,t.jsx)(o.code,{children:"bar"}),") open Keycloak realm ",(0,t.jsx)(o.code,{children:"osism"}),", click on ",(0,t.jsx)(o.code,{children:"Clients"})," in the sidebar and click\non the name of the OIDC RP clinent that you created for domain ",(0,t.jsx)(o.code,{children:"foo"})," (e.g. ",(0,t.jsx)(o.code,{children:"oidc-rp-foo"}),").\nOn the ",(0,t.jsx)(o.code,{children:"Client details"})," page on the tab ",(0,t.jsx)(o.code,{children:"Settings"})," fill in the field ",(0,t.jsx)(o.code,{children:"Valid redirect URIs"})," with the value\nobtained from the resource domain (",(0,t.jsx)(o.code,{children:"foo"}),"), which should look similar to\n",(0,t.jsx)(o.code,{children:"https://foo.com/auth/realms/osism/broker/oidc-op-bar/endpoint"}),". Additionally the\n",(0,t.jsx)(o.code,{children:"Valid post logout redirect URIs"})," need to be set to something like ",(0,t.jsx)(o.code,{children:"https://foo.com/auth/realms/osism/*"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:['To test federated login in the "resource domain" (',(0,t.jsx)(o.code,{children:"foo"}),") open the URL of the Keycloak admin console for\nthe realm ",(0,t.jsx)(o.code,{children:"osism"}),": ",(0,t.jsx)(o.code,{children:"https://foo.com/auth/admin/osism/console"})," (or ",(0,t.jsx)(o.code,{children:"https://foo.com/auth/realms/osism/protocol/openid-connect/auth?client_id=security-admin-console"}),").\nIgnore the top section of the login form titled\n",(0,t.jsx)(o.code,{children:"Sign in to your account"})," and choose one of the OIDC OP federation choises below the line ",(0,t.jsx)(o.code,{children:"Or sign in with"}),".\nIn this example it would be ",(0,t.jsx)(o.code,{children:"oidc-op-bar"}),'. This should redirect your browser to the authentication endpoint\nof the "accounts domain" (',(0,t.jsx)(o.code,{children:"https://bar.com/auth/realms/osism/protocol/openid-connect/auth?scope=openid&..."}),')\nwhere you should be able to log in with credentials that are valid in the "accounts domain" (',(0,t.jsx)(o.code,{children:"bar"}),').\nAfter successull authentication your broser should be redirected to admin console of the "resource domain",\nwhich may offer you a "first login flow" form where you can choose a username, email, firstname and lastname.\nThe details depend on the ',(0,t.jsx)(o.code,{children:"Mappers"})," that have been configured for the Identity Provider ",(0,t.jsx)(o.code,{children:"oidc-op-bar"}),".\nAfter that you will be presented with a Keycloak themed page with the error message ",(0,t.jsx)(o.code,{children:"Request failed with status code 403"}),",\nwhich is normal because the test account is not authorized to access any elements of the Keycloak admin console."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>s});var t=n(96540);const i={},c=t.createContext(i);function a(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);