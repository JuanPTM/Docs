"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7861],{51810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(74848),o=t(28453);const r={sidebar_label:"Network"},a="Network",i={id:"iaas/guides/operations-guide/network",title:"Network",description:"OpenStack, OVN, and Open vSwitch all really like UUIDs.",source:"@site/docs/02-iaas/guides/operations-guide/network.md",sourceDirName:"02-iaas/guides/operations-guide",slug:"/iaas/guides/operations-guide/network",permalink:"/docs/iaas/guides/operations-guide/network",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/operations-guide/network.md",tags:[],version:"current",frontMatter:{sidebar_label:"Network"},sidebar:"docs",previous:{title:"Infrastructure",permalink:"/docs/iaas/guides/operations-guide/infrastructure"},next:{title:"OpenStack",permalink:"/docs/iaas/guides/operations-guide/openstack/"}},d={},c=[{value:"Open vSwitch (OVS)",id:"open-vswitch-ovs",level:2},{value:"Open Virtual Network (OVN)",id:"open-virtual-network-ovn",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"network",children:"Network"}),"\n",(0,s.jsx)(n.p,{children:"OpenStack, OVN, and Open vSwitch all really like UUIDs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ openstack --os-cloud admin image list -f yaml\n- ID: d64f0b9d-0ea1-40b0-b879-b98e46fc7bcf\n  Name: Cirros 0.6.0\n  Status: active\n- ID: ee842bc5-dd29-4de5-a5db-1c9be759fe85\n  Name: Cirros 0.6.1\n  Status: active\n- ID: cd28d95c-bd12-4e1e-8155-b9bf5ecbcb2f\n  Name: Cirros 0.6.2\n  Status: active\n"})}),"\n",(0,s.jsx)(n.p,{children:"These UUIDs are great for uniqueness, but 36-character strings are terrible\nfor readability. Statistically, just the first few characters are enough for\nuniqueness in small environments, so let\u2019s define a helper to make things more\nreadable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"abbrev() { a='[0-9a-fA-F]' b=$a$a c=$b$b; sed \"s/$b-$c-$c-$c-$c$c$c//g\"; }\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can use this as a filter to abbreviate UUIDs. For example, use it to abbreviate\nthe above image list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ openstack --os-cloud admin image list -f yaml | abbrev\n- ID: d64f0b\n  Name: Cirros 0.6.0\n  Status: active\n- ID: ee842b\n  Name: Cirros 0.6.1\n  Status: active\n- ID: cd28d9\n  Name: Cirros 0.6.2\n  Status: active\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Source: ",(0,s.jsx)(n.a,{href:"https://docs.ovn.org/en/stable/tutorials/ovn-openstack.html#shortening-uuids",children:"https://docs.ovn.org/en/stable/tutorials/ovn-openstack.html#shortening-uuids"})]}),"\n",(0,s.jsx)(n.h2,{id:"open-vswitch-ovs",children:"Open vSwitch (OVS)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://gist.github.com/djoreilly/c5ea44663c133b246dd9d42b921f7646",children:"https://gist.github.com/djoreilly/c5ea44663c133b246dd9d42b921f7646"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Open vSwitch on a network node with external network ",(0,s.jsx)(n.code,{children:"vxlan0"})," and integration\nwith the Octavia service via ",(0,s.jsx)(n.code,{children:"ohm0"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ docker exec -it openvswitch_vswitchd ovs-vsctl show\n2e6227aa-33f1-4762-8831-ab678ce7272d\n    Bridge br-int\n        fail_mode: secure\n        datapath_type: system\n        Port ovn-testbe-0\n            Interface ovn-testbe-0\n                type: geneve\n                options: {csum="true", key=flow, remote_ip="192.168.16.12"}\n        Port br-int\n            Interface br-int\n                type: internal\n        Port ovn-testbe-1\n            Interface ovn-testbe-1\n                type: geneve\n                options: {csum="true", key=flow, remote_ip="192.168.16.11"}\n        Port tap8fe7d09b-90\n            Interface tap8fe7d09b-90\n        Port ohm0\n            Interface ohm0\n                type: internal\n    Bridge br-ex\n        Port vxlan0\n            Interface vxlan0\n        Port br-ex\n            Interface br-ex\n                type: internal\n'})}),"\n",(0,s.jsx)(n.h2,{id:"open-virtual-network-ovn",children:"Open Virtual Network (OVN)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.ovn.org/en/stable/tutorials/ovn-openstack.html",children:"https://docs.ovn.org/en/stable/tutorials/ovn-openstack.html"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Get OVN NB and OVN SB connection information from the ",(0,s.jsx)(n.code,{children:"/etc/kolla/neutron-server/ml2_conf.ini"}),"\nfile."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'ovn_nb_connection=$(sudo grep -P -o -e "(?<=^ovn_nb_connection = ).*" "/etc/kolla/neutron-server/ml2_conf.ini")\novn_sb_connection=$(sudo grep -P -o -e "(?<=^ovn_sb_connection = ).*" "/etc/kolla/neutron-server/ml2_conf.ini")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The following examples are from a fresh ",(0,s.jsx)(n.a,{href:"https://github.com/osism/testbed",children:"osism/testbed"}),"\ndeployment with no payload running yet."]}),"\n",(0,s.jsx)(n.p,{children:"OVN NB DB entries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ docker exec ovn_northd ovn-nbctl --db "$ovn_nb_connection" show | abbrev\nswitch b5139b (neutron-8fe7d0) (aka lb-mgmt-net)\n    port 45a49e\n        type: localport\n        addresses: ["fa:16:3e:fa:99:ea 10.1.0.2"]\n    port 4d39a5 (aka octavia-listen-port-testbed-node-2)\n        addresses: ["fa:16:3e:dc:11:e4 10.1.0.45"]\n    port 8df1b7 (aka octavia-listen-port-testbed-node-0)\n        addresses: ["fa:16:3e:4d:63:a9 10.1.0.43"]\n    port ddb6aa (aka octavia-listen-port-testbed-node-1)\n        addresses: ["fa:16:3e:67:f3:3d 10.1.0.40"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"OVN SB DB entries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ docker exec ovn_northd ovn-sbctl --db "$ovn_sb_connection" show | abbrev\nChassis testbed-node-0\n    hostname: testbed-node-0\n    Encap geneve\n        ip: "192.168.16.10"\n        options: {csum="true"}\n    Port_Binding "8df1b7"\nChassis testbed-node-2\n    hostname: testbed-node-2\n    Encap geneve\n        ip: "192.168.16.12"\n        options: {csum="true"}\n    Port_Binding "4d39a5"\nChassis testbed-node-1\n    hostname: testbed-node-1\n    Encap geneve\n        ip: "192.168.16.11"\n        options: {csum="true"}\n    Port_Binding "ddb6aa\n'})}),"\n",(0,s.jsx)(n.p,{children:"OVN NB status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ docker exec ovn_nb_db ovs-appctl -t /var/run/ovn/ovnnb_db.ctl cluster/status OVN_Northbound | abbrev\n6d15\nName: OVN_Northbound\nCluster ID: f5eb (f5ebd8)\nServer ID: 6d15 (6d159e)\nAddress: tcp:192.168.16.10:6643\nStatus: cluster member\nRole: follower\nTerm: 5\nLeader: 87d6\nVote: 87d6\n\nLast Election started 41049332 ms ago, reason: timeout\nElection timer: 1000\nLog: [2, 54]\nEntries not yet committed: 0\nEntries not yet applied: 0\nConnections: ->21d7 ->87d6 <-87d6 <-21d7\nDisconnections: 6\nServers:\n    6d15 (6d15 at tcp:192.168.16.10:6643) (self)\n    87d6 (87d6 at tcp:192.168.16.11:6643) last msg 266 ms ago\n    21d7 (21d7 at tcp:192.168.16.12:6643) last msg 41048563 ms ago\n"})}),"\n",(0,s.jsx)(n.p,{children:"OVN SB status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ docker exec ovn_sb_db ovs-appctl -t /var/run/ovn/ovnsb_db.ctl cluster/status OVN_Southbound | abbrev\nbe29\nName: OVN_Southbound\nCluster ID: bd0c (bd0c26)\nServer ID: be29 (be2932)\nAddress: tcp:192.168.16.10:6644\nStatus: cluster member\nRole: follower\nTerm: 6\nLeader: dfdf\nVote: unknown\n\nLast Election started 41063820 ms ago, reason: timeout\nElection timer: 1000\nLog: [2, 62]\nEntries not yet committed: 0\nEntries not yet applied: 0\nConnections: ->dfdf ->085c <-dfdf <-085c\nDisconnections: 7\nServers:\n    be29 (be29 at tcp:192.168.16.10:6644) (self)\n    dfdf (dfdf at tcp:192.168.16.11:6644) last msg 146 ms ago\n    085c (085c at tcp:192.168.16.12:6644) last msg 41063293 ms ago\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);