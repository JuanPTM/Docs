// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsDocs = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      items: [
        // 'getting-started/overview',
        // 'getting-started/virtualization',
        // 'getting-started/containerization'
      ]
    },
    {
      type: 'category',
      label: 'IaaS Layer',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: 'Guides',
          items: [
            {
              type: 'autogenerated',
              dirName: '02-iaas/guides'
            }
          ]
        },
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Openstack Image Manager',
              link: {
                id: 'iaas/components/image-manager/index',
                type: 'doc'
              },
              items: [
                {
                  type: 'doc',
                  id: 'iaas/components/image-manager/update'
                }
              ]
            },
            {
              type: 'doc',
              label: 'Openstack Flavor Manager',
              id: 'iaas/components/flavor-manager'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Container Layer',
      link: {
        type: 'doc',
        id: 'container/index'
      },
      items: [
        {
          type: 'category',
          label: 'Overview',
          link: {
            type: 'generated-index'
          },
          items: [
            // 'container/overview/architecture',
            // 'container/overview/knowledge'
          ]
        },
        {
          type: 'category',
          label: 'Deployment Examples',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Deployment A',
              link: {
                type: 'generated-index'
              },
              items: [
                // 'container/deployment-examples/a/index',
                // 'container/deployment-examples/a/hardware',
                // 'container/deployment-examples/a/software'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index'
          },
          items: [
            // 'container/guides/guide1'
          ]
        },
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'K8s Cluster API Provider',
              link: {
                type: 'generated-index'
              },
              items: [
                'container/components/k8s-cluster-api-provider/doc/overview',
                'container/components/k8s-cluster-api-provider/doc/requirements',
                'container/components/k8s-cluster-api-provider/doc/quickstart',
                'container/components/k8s-cluster-api-provider/doc/make-reference',
                'container/components/k8s-cluster-api-provider/doc/application-credentials',
                'container/components/k8s-cluster-api-provider/doc/configuration',
                'container/components/k8s-cluster-api-provider/doc/Maintenance_and_Troubleshooting',
                'container/components/k8s-cluster-api-provider/doc/LoadBalancer-ExtTrafficLocal',
                'container/components/k8s-cluster-api-provider/doc/Upgrade-Guide',
                'container/components/k8s-cluster-api-provider/doc/continuous-integration',
                'container/components/k8s-cluster-api-provider/doc/roadmap',
                {
                  type: 'category',
                  label: 'Usage',
                  items: [
                    'container/components/k8s-cluster-api-provider/doc/usage/usage',
                    'container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster',
                    'container/components/k8s-cluster-api-provider/doc/usage/managing-many-clusters',
                    'container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node',
                    'container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments',
                    'container/components/k8s-cluster-api-provider/doc/usage/testing',
                    'container/components/k8s-cluster-api-provider/doc/usage/containter-registry-configuration',
                    'container/components/k8s-cluster-api-provider/doc/usage/custom-ca',
                    'container/components/k8s-cluster-api-provider/doc/usage/gateway-api',
                    'container/components/k8s-cluster-api-provider/doc/usage/harbor',
                    'container/components/k8s-cluster-api-provider/doc/usage/migrate-to-cluster-class'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Cluster Stacks',
              link: {
                type: 'generated-index'
              },
              items: [
                {
                  type: 'category',
                  label: 'Cluster Stack Provider OpenStack',
                  items: [
                    'container/components/cluster-stacks/components/cluster-stack-provider-openstack/docs/overview',
                    'container/components/cluster-stacks/components/cluster-stack-provider-openstack/docs/quickstart',
                    'container/components/cluster-stacks/components/cluster-stack-provider-openstack/docs/controllers',
                    'container/components/cluster-stacks/components/cluster-stack-provider-openstack/docs/develop'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Container Registry',
              link: {
                type: 'generated-index'
              },
              items: [
                'container/components/container-registry/docs/quickstart',
                'container/components/container-registry/docs/scs-deployment',
                'container/components/container-registry/docs/rate_limit',
                'container/components/container-registry/docs/upgrade',
                'container/components/container-registry/docs/backup_and_restore',
                'container/components/container-registry/docs/migration',
                'container/components/container-registry/docs/persistence',
                'container/components/container-registry/docs/ha-deployment'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Operating SCS',
      link: {
        type: 'generated-index'
      },
      items: [
        // 'operating-scs/overview',
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Status Page API',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/status-page/docs/overview',
                'operating-scs/components/status-page/docs/component_overview',
                'operating-scs/components/status-page/docs/components',
                'operating-scs/components/status-page/docs/levels_of_consensus'
              ]
            },
            {
              type: 'category',
              label: 'Monitoring',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/monitoring/docs/overview',
                'operating-scs/components/monitoring/docs/quickstart',
                'operating-scs/components/monitoring/docs/scs-deployment',
                'operating-scs/components/monitoring/docs/k3s',
                'operating-scs/components/monitoring/docs/infrastructure_services',
                'operating-scs/components/monitoring/docs/iaas',
                'operating-scs/components/monitoring/docs/kaas',
                'operating-scs/components/monitoring/docs/zuul',
                'operating-scs/components/monitoring/docs/alertmanager',
                'operating-scs/components/monitoring/docs/oauth',
                'operating-scs/components/monitoring/docs/tracing',
                'operating-scs/components/monitoring/docs/tuning'
              ]
            },
            {
              type: 'category',
              label: 'Central API',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/central-api/overview',
                'operating-scs/components/central-api/poc-setup'
              ]
            },
            {
              type: 'category',
              label: 'Automated Pentesting',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/automated-pentesting/overview',
                'operating-scs/components/automated-pentesting/tools'
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index'
          },
          items: [
            'operating-scs/guides/openstack-health-monitor/Debian12-Install'
          ]
        },
        // {
        //   type: 'category',
        //   label: 'Monitoring',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/monitoring/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Incident Management',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/incident-management/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Audits',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/audits/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Lifecycle Management',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/lifecycle-management/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Logging',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/logging/index'
        //   ]
        // },
        {
          type: 'category',
          label: 'Metering',
          link: {
            type: 'generated-index'
          },
          items: ['operating-scs/metering/meter_configuration']
        }
      ]
    },
    {
      type: 'category',
      label: 'Identity and Access Management (IAM)',
      link: {
        type: 'doc',
        id: 'iam/index'
      },
      items: [
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index'
          },
          items: ['iam/domain-manager-setup-and-usage', 'iam/SCS-example-setup-configuration-description']
        },
        'iam/intra-SCS-federation-setup-description-for-osism-doc-operations'
      ]
    },
    {
      type: 'category',
      label: 'Releases',
      link: {
        type: 'generated-index'
      },
      items: [
        'releases/Release0',
        'releases/Release1',
        'releases/Release2',
        'releases/Release3',
        'releases/Release4',
        'releases/Release5',
        'releases/Release6'
      ]
    },
    // {
    //   type: 'category',
    //   label: 'Standards',
    //   link: {
    //     type: 'generated-index'
    //   },
    //   items: [
    //     'standards/index'
    //   ]
    // },
    {
      type: 'doc',
      id: 'faq/index',
      label: 'FAQ'
    },
    'glossary'
  ]
}

module.exports = sidebarsDocs
