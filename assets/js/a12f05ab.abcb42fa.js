"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3453],{71290:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var d=s(74848),i=s(28453);const o={sidebar_label:"Cinder"},r="Cinder",c={id:"iaas/guides/operations-guide/openstack/cinder",title:"Cinder",description:"Remove service",source:"@site/docs/02-iaas/guides/operations-guide/openstack/cinder.md",sourceDirName:"02-iaas/guides/operations-guide/openstack",slug:"/iaas/guides/operations-guide/openstack/cinder",permalink:"/docs/iaas/guides/operations-guide/openstack/cinder",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/operations-guide/openstack/cinder.md",tags:[],version:"current",frontMatter:{sidebar_label:"Cinder"},sidebar:"docs",previous:{title:"OpenStack Health Monitor",permalink:"/docs/iaas/guides/operations-guide/openstack/tools/openstack-health-monitor"},next:{title:"Keystone",permalink:"/docs/iaas/guides/operations-guide/openstack/keystone"}},t={},l=[{value:"Remove service",id:"remove-service",level:2},{value:"Sync quota",id:"sync-quota",level:2},{value:"Quality of Service (QoS)",id:"quality-of-service-qos",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"cinder",children:"Cinder"}),"\n",(0,d.jsx)(n.h2,{id:"remove-service",children:"Remove service"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume service list\n+------------------+-----------------------------------+----------+---------+-------+----------------------------+\n| Binary           | Host                              | Zone     | Status  | State | Updated At                 |\n+------------------+-----------------------------------+----------+---------+-------+----------------------------+\n| cinder-scheduler | testbed-node-0                    | internal | enabled | up    | 2023-10-01T08:53:14.000000 |\n| cinder-scheduler | testbed-node-1                    | internal | enabled | up    | 2023-10-01T08:53:15.000000 |\n| cinder-scheduler | testbed-node-2                    | internal | enabled | up    | 2023-10-01T08:53:15.000000 |\n| cinder-volume    | testbed-node-0@rbd-1              | nova     | enabled | down  | 2023-09-30T18:50:05.000000 |\n| cinder-volume    | testbed-node-2@rbd-1              | nova     | enabled | down  | 2023-09-30T18:50:05.000000 |\n| cinder-volume    | testbed-node-1@rbd-1              | nova     | enabled | down  | 2023-09-30T18:50:08.000000 |\n+------------------+-----------------------------------+----------+---------+-------+----------------------------+\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ docker exec -it cinder_api cinder-manage service remove cinder-volume testbed-node-0@rbd-1\nService cinder-volume on host testbed-node-0@rbd-1 removed.\n$ docker exec -it cinder_api cinder-manage service remove cinder-volume testbed-node-1@rbd-1\nService cinder-volume on host testbed-node-1@rbd-1 removed.\n$ docker exec -it cinder_api cinder-manage service remove cinder-volume testbed-node-2@rbd-1\nService cinder-volume on host testbed-node-2@rbd-1 removed.\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume service list\n+------------------+-----------------------------------+----------+---------+-------+----------------------------+\n| Binary           | Host                              | Zone     | Status  | State | Updated At                 |\n+------------------+-----------------------------------+----------+---------+-------+----------------------------+\n| cinder-scheduler | testbed-node-0                    | internal | enabled | up    | 2023-10-01T08:56:24.000000 |\n| cinder-scheduler | testbed-node-1                    | internal | enabled | up    | 2023-10-01T08:56:25.000000 |\n| cinder-scheduler | testbed-node-2                    | internal | enabled | up    | 2023-10-01T08:56:25.000000 |\n+------------------+-----------------------------------+----------+---------+-------+----------------------------+\n"})}),"\n",(0,d.jsx)(n.h2,{id:"sync-quota",children:"Sync quota"}),"\n",(0,d.jsxs)(n.p,{children:["It can happen that more block storage usage is stored in the database for a project than\nis actually used. This can be corrected using ",(0,d.jsx)(n.a,{href:"https://docs.openstack.org/cinder/latest/cli/cinder-manage.html",children:"cinder-manage"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"For all projects:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ docker exec -it cinder_api cinder-manage quota sync\n"})}),"\n",(0,d.jsx)(n.p,{children:"Only for a specific project:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ docker exec -it cinder_api cinder-manage quota sync --project-id PROJECT_ID\n"})}),"\n",(0,d.jsx)(n.h2,{id:"quality-of-service-qos",children:"Quality of Service (QoS)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://docs.openstack.org/cinder/latest/admin/basic-volume-qos.html",children:"https://docs.openstack.org/cinder/latest/admin/basic-volume-qos.html"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Create ",(0,d.jsx)(n.code,{children:"default"})," volume QoS policy that allows 1000 read IOPS and 1000 write IOPS."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume qos create \\\n    --consumer both \\\n    --property read_iops_sec=1000 \\\n    --property write_iops_sec=1000 \\\n    default\n+------------+---------------------------------------------+\n| Field      | Value                                       |\n+------------+---------------------------------------------+\n| consumer   | both                                        |\n| id         | 48920d26-e85f-4920-8ed4-ff8d322c77b9        |\n| name       | testing                                     |\n| properties | read_iops_sec='1000', write_iops_sec='1000' |\n+------------+---------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume qos list\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n| ID                                   | Name    | Consumer | Associations | Properties                                  |\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n| 48920d26-e85f-4920-8ed4-ff8d322c77b9 | default | both     |              | read_iops_sec='1000', write_iops_sec='1000' |\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Assign the ",(0,d.jsx)(n.code,{children:"default"})," volume QoS policy to the ",(0,d.jsx)(n.code,{children:"__DEFAULT"})," volume type."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume qos associate default __DEFAULT__\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume qos list\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n| ID                                   | Name    | Consumer | Associations | Properties                                  |\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n| 48920d26-e85f-4920-8ed4-ff8d322c77b9 | default | both     | __DEFAULT__  | read_iops_sec='1000', write_iops_sec='1000' |\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Change the read IOPS from 1000 to 2000 and the write IOPS from 1000 to 2000 of the ",(0,d.jsx)(n.code,{children:"default"})," volume QoS policy."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume qos set \\\n    --property read_iops_sec=2000 \\\n    --property write_iops_sec=2000 \\\n    default\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"$ openstack --os-cloud admin volume qos list\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n| ID                                   | Name    | Consumer | Associations | Properties                                  |\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n| 48920d26-e85f-4920-8ed4-ff8d322c77b9 | default | both     | __DEFAULT__  | read_iops_sec='2000', write_iops_sec='2000' |\n+--------------------------------------+---------+----------+--------------+---------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"The following properties are available."}),"\n",(0,d.jsx)(n.p,{children:"For Fixed IOPS per volume:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"read_iops_sec"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"write_iops_sec"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"total_iops_sec"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"For Burst IOPS per volume:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"read_iops_sec_max"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"write_iops_sec_max"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"total_iops_sec_max"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"For Fixed bandwidth per volume:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"read_bytes_sec"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"write_bytes_sec"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"total_bytes_sec"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"For Burst bandwidth per volume:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"read_bytes_sec_max"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"write_bytes_sec_max"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"total_bytes_sec_max"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"For burst bucket size:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"size_iops_sec"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var d=s(96540);const i={},o=d.createContext(i);function r(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);