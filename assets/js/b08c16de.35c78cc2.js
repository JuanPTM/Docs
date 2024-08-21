"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9390],{87333:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=s(74848),i=s(28453);const l={},o="Ansible Style Guide",a={id:"contribute/styleguides/ansible_styleguide",title:"Ansible Style Guide",description:"We use nearly all default rules of ansible lint. A listing of all these rules can be found in the Ansible Lint documentation:",source:"@site/community/contribute/styleguides/ansible_styleguide.md",sourceDirName:"contribute/styleguides",slug:"/contribute/styleguides/ansible_styleguide",permalink:"/community/contribute/styleguides/ansible_styleguide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},r={},d=[{value:"Task naming",id:"task-naming",level:2},{value:"Key Order",id:"key-order",level:2},{value:"Positioning and use of the become directive",id:"positioning-and-use-of-the-become-directive",level:3},{value:"Position of the when condition",id:"position-of-the-when-condition",level:3},{value:"Usage of collections",id:"usage-of-collections",level:2},{value:"Usage of roles from other collections",id:"usage-of-roles-from-other-collections",level:2},{value:"Parameters that offer lists",id:"parameters-that-offer-lists",level:2},{value:"Usage of changed_when",id:"usage-of-changed_when",level:2},{value:"Disable linting rules",id:"disable-linting-rules",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ansible-style-guide",children:"Ansible Style Guide"}),"\n",(0,t.jsxs)(n.p,{children:["We use nearly all default rules of ansible lint. A listing of all these rules can be found in the Ansible Lint documentation:\n",(0,t.jsx)(n.a,{href:"https://ansible.readthedocs.io/projects/lint/rules/",children:"https://ansible.readthedocs.io/projects/lint/rules/"}),".\nPlease always use the ansible linting to check if the code complies with the default linting rules.\nHowever, since in most cases we always use the latest version of packages and Ansible lint does not provide this, we decided to\ndisable the package_latest rule."]}),"\n",(0,t.jsx)(n.h2,{id:"task-naming",children:"Task naming"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tasks must always have names. The only exception allowed is for forked playbooks."}),"\n",(0,t.jsx)(n.li,{children:"A name never starts with a small letter"}),"\n",(0,t.jsx)(n.li,{children:"Names are written in present tense"}),"\n",(0,t.jsx)(n.li,{children:"No punctuation is used in names"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"key-order",children:"Key Order"}),"\n",(0,t.jsxs)(n.p,{children:["To check the key order we use our own rule. This can be found ",(0,t.jsx)(n.a,{href:"https://github.com/osism/zuul-jobs/tree/main/roles/ansible-lint/files",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"positioning-and-use-of-the-become-directive",children:"Positioning and use of the become directive"}),"\n",(0,t.jsx)(n.p,{children:"The become directive is only set when needed and is always set explicitly for each task that needs it."}),"\n",(0,t.jsx)(n.p,{children:"Blocks, roles or playbooks are never executed in a privileged mode."}),"\n",(0,t.jsxs)(n.p,{children:["We always insert the become directive between the name of a task and the task itself. This also applies to related directives\nlike ",(0,t.jsx)(n.em,{children:"become_user"})," or ",(0,t.jsx)(n.em,{children:"become_flags"}),". This is for better visibility if a task is privileged or not."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- name: Copy hddtemp configuration file\n    become: true\n      ansible.builtin.copy:\n      src: "{{ ansible_os_family }}/hddtemp"\n      dest: "{{ hddtemp_conf_file }}"\n      owner: root\n      group: root\n      mode: 0644\n    notify: Restart hddtemp service\n'})}),"\n",(0,t.jsx)(n.h3,{id:"position-of-the-when-condition",children:"Position of the when condition"}),"\n",(0,t.jsx)(n.p,{children:"If you need to use the when condition please add this at the end-section from the task where it is needed. This makes the code\neasier to understand for others. Ansible lint provides the when condition under the task name for blocks. To keep the code clear\nwe decided against it. Please disable this with a noqa if necessary. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- name: "Archive existing {{ resolvconf_file }} file"\n    become: true\n    ansible.posix.synchronize:\n      src: "/etc/resolv.conf"\n      dest: "/etc/resolv.conf.{{ ansible_date_time.date }}"\n      archive: true\n    delegate_to: "{{ inventory_hostname }}"\n    when: stat_resolvconf_file.stat.islnk is defined and not stat_resolvconf_file.stat.islnk\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usage-of-collections",children:"Usage of collections"}),"\n",(0,t.jsx)(n.p,{children:"Collections are always defined as in the following example."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"netbox.netbox"})," is here the collection that is used."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- name: Configure netbox manufacturers\n  netbox.netbox.netbox_manufacturer:\n    netbox_url: '{{ netbox_url }}'\n    netbox_token: '{{ netbox_token }}'\n    data:\n      name: '{{ item.value.name }}'\n      slug: '{{ item.value.slug }}'\n      description: \"{{ item.value.description | default('') }}\"\n    state: present\n  with_dict: '{{ netbox_data_manufacturers }}'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Please don\xb4t declare it in this way!:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'collections:\n    - netbox.netbox\n\n  tasks:\n    - name: Manage Discworld site\n      netbox_site:\n        netbox_url: "{{ netbox_url }}"\n        netbox_token: "{{ netbox_token }}"\n        validate_certs: false\n        data:\n          name: Discworld\n          slug: discworld\n        state: present\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you have to use collections please define them in a requirements.yml."}),"\n",(0,t.jsx)(n.p,{children:"Example yaml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"roles:\n  - name: geerlingguy.certbot\n    version: master\n    type: git\n    src: git+https://github.com/geerlingguy/ansible-role-certbot.git\n---\ncollections:\n  - name: ansible.netcommon\n    source: https://galaxy.ansible.com\n\n  - name: https://github.com/ansible-collections/ansible.posix.git\n    type: git\n    version: main\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage-of-roles-from-other-collections",children:"Usage of roles from other collections"}),"\n",(0,t.jsx)(n.p,{children:"If you want to reuse roles please do it in the following way:"}),"\n",(0,t.jsx)(n.p,{children:"First you have to declare the role or collection in the requirements.yml like shown in the example before."}),"\n",(0,t.jsx)(n.p,{children:"Than you can use it in playbooks like this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"roles:\n  - role: osism.services.auditd\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters-that-offer-lists",children:"Parameters that offer lists"}),"\n",(0,t.jsx)(n.p,{children:"Parameters that provide a list are always defined as in the following example."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"docker_hosts_defaults"})," sets the defaults in the role. Overriding is only possible with the ",(0,t.jsx)(n.strong,{children:"ansible-defaults"})," repository."]}),"\n",(0,t.jsx)(n.p,{children:"In the configuration repository, docker_hosts_extra is then used to add additional items to the list."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"docker_hosts"})," itself is never modified from the outside."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"docker_hosts_defaults:\n  - 'unix:///var/run/docker.sock'\ndocker_hosts_extra: []\ndocker_hosts: '{{ docker_hosts_defaults + docker_hosts_extra }}'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage-of-changed_when",children:"Usage of changed_when"}),"\n",(0,t.jsx)(n.p,{children:"Please think twice before turning off changed_when. It's a fairly simple yet safety-relevant linting rule and is quite easy to\nimplement."}),"\n",(0,t.jsx)(n.h2,{id:"disable-linting-rules",children:"Disable linting rules"}),"\n",(0,t.jsxs)(n.p,{children:["In principle, it is only allowed to disable rules if there is really no other possibility.\nPlease do not disable rules in general but only in individual cases via Noqa. Please use in this case the full rulename and not\nthe numbers, because them are depricated. If it makes sense to ignore a rule, please open up an issue in the\n",(0,t.jsx)(n.a,{href:"https://github.com/osism/issues",children:"https://github.com/osism/issues"})," repository with a label discussion."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);