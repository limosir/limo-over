// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: { hmr: true },
        // targets: { ie: 11 },
        // locale: {
        //   enable: false,
        //   // default false
        //   default: 'zh-CN',
        //   // default zh-CN
        //   baseNavigator: true,
        // },
        // default true, when it is true, will use `navigator.language` overwrite default
        // dynamicImport: { loadingComponent: './components/PageLoading/index' },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  /**
   * 代理配置
   */
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  targets: { ie: 11 },

  /**
   * 路由相关配置
   */
  routes: [
    // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     {
    //       path: '/user',
    //       component: './Welcome',
    //     },
    //   ],
    // },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          redirect: '/login',
        },
        {
          path: '/login',
          component: './login',
        },
        {
          path: '/baseInfoManager',
          icon: 'smile',
          name:"基础信息管理",
          routes: [
            {
              path: '/baseInfoManager',
              redirect: '/baseInfoManager/coopCompanyInfo',
            },
            {
              name:"合作公司信息",
              path: '/baseInfoManager/coopCompanyInfo',
              icon: 'smile',
              // component: './baseInfoManager/coopCompanyInfo',
              routes: [
                    {
                      path: '/baseInfoManager/coopCompanyInfo/detail',
                      component: './baseInfoManager/coopCompanyInfo/detail/index',
                    },
                    {
                      path: '/baseInfoManager/coopCompanyInfo',
                      component: './baseInfoManager/coopCompanyInfo',
                    },
                  ],
            },
            {
              name:"个人开发者信息",
              path: '/baseInfoManager/aloneDeveloperInfor',
              icon: 'smile',
              // component: './baseInfoManager/aloneDeveloperInfor',
              routes: [
                {
                  path: '/baseInfoManager/aloneDeveloperInfor/detail',
                  component: './baseInfoManager/aloneDeveloperInfor/detail/index',
                },
                {
                  path: '/baseInfoManager/aloneDeveloperInfor',
                  component: './baseInfoManager/aloneDeveloperInfor',
                },
              ],
            },
            {
              name:"游戏基础信息",
              path: '/baseInfoManager/gameBasics',
              icon: 'smile',
              component: './baseInfoManager/gameBasics'
            }
          ]
        },
        {//reportQueryManager
          path: '/reportQueryManager',
          icon: 'smile',
          name:"报表查询管理",
          routes: [
            {
              path: '/reportQueryManager',
              redirect: '/reportQueryManager/estimateWaterForm',
            },
            {
              name:"预估流水明细表",
              path: '/reportQueryManager/estimateWaterForm',
              icon: 'smile',
              component: './reportQueryManager/estimateWaterForm'
              // routes: [
              //       {
              //         path: '/baseInfoManager/coopCompanyInfo/detail',
              //         component: './baseInfoManager/coopCompanyInfo/detail/index',
              //       },
              //       {
              //         path: '/baseInfoManager/coopCompanyInfo',
              //         component: './baseInfoManager/coopCompanyInfo',
              //       },
              //     ],
            },
            {
              name:"结算流水明细表",
              path: '/reportQueryManager/settlementWaterDetail',
              icon: 'smile',
              component: './reportQueryManager/settlementWaterDetail'
            },
            {
              name:"结算流水汇总表",
              path: '/reportQueryManager/settlementWaterTotal',
              icon: 'smile',
              component: './reportQueryManager/settlementWaterTotal'
            },
            {
              name:"零钱提现汇总表",
              path: '/reportQueryManager/changeWithdrawalTotal',
              icon: 'smile',
              // component: './reportQueryManager/changeWithdrawalTotal'
              routes: [
                {
                  path: '/reportQueryManager/changeWithdrawalTotal/detail',
                  component: './reportQueryManager/changeWithdrawalTotal/detail/index',
                },
                {
                  path: '/reportQueryManager/changeWithdrawalTotal',
                  component: './reportQueryManager/changeWithdrawalTotal',
                },
              ],
            },
            {
              name:"会员卡充值汇总表",
              path: '/reportQueryManager/resetCardTotal',
              icon: 'smile',
              routes: [
                {
                  path: '/reportQueryManager/resetCardTotal/detail',
                  component: './reportQueryManager/resetCardTotal/detail/index',
                },
                {
                  path: '/reportQueryManager/resetCardTotal',
                  component: './reportQueryManager/resetCardTotal',
                }]
            },
            {
              name:"金钻充值汇总表",
              path: '/reportQueryManager/resetDiamondTotal',
              icon: 'smile',
              component: './reportQueryManager/resetDiamondTotal'
            },
            {
              name:"结算状态查询表",
              path: '/reportQueryManager/settlementStateQuery',
              icon: 'smile',
              component: './reportQueryManager/settlementStateQuery'
            },
            {
              name:"扣项金额查询表",
              path: '/reportQueryManager/deductMoneyQuery',
              icon: 'smile',
              component: './reportQueryManager/deductMoneyQuery'
            },
            {
              name:"应付账龄分析表",
              path: '/reportQueryManager/copeAgeAnalyse',
              icon: 'smile',
              component: './reportQueryManager/copeAgeAnalyse'
            },
            {
              name:"应收账龄分析表",
              path: '/reportQueryManager/accountsAgeAnalyse',
              icon: 'smile',
              component: './reportQueryManager/accountsAgeAnalyse'
            },
            {
              name:"应收坏账计提表",
              path: '/reportQueryManager/accountsBadForm',
              icon: 'smile',
              component: './reportQueryManager/accountsBadForm'
            },
            {
              name:"进项发票查询表",
              path: '/reportQueryManager/incomeInvoiceQuery',
              icon: 'smile',
              component: './reportQueryManager/incomeInvoiceQuery'
            },
            {
              name:"消项发票查询表",
              path: '/reportQueryManager/clearInvoiceQuery',
              icon: 'smile',
              component: './reportQueryManager/clearInvoiceQuery'
            }
          ]
        },
        {
          path: '/estimateWaterManager',
          icon: 'aliwangwang',
          name:"预估流水管理",
          routes: [
            {
              path: '/estimateWaterManager',
              redirect: '/estimateWaterManager/periodEstimateWater',
            },
            {
              name:"本期预估流水核对",
              path: '/estimateWaterManager/periodEstimateWater',
              icon: 'smile',
              component: './estimateWaterManager/periodEstimateWater',
              // routes: [
              //       // {
              //       //   path: '/estimateWaterManager/periodEstimateWater/detail',
              //       //   component: './estimateWaterManager/periodEstimateWater/detail/index',
              //       // },
              //       {
              //         path: '/estimateWaterManager/periodEstimateWater',
              //         component: './estimateWaterManager/periodEstimateWater',
              //       },
              //     ],
            },
            {
              name:"往期预估流水补录",
              path: '/estimateWaterManager/previousEstimateWater',
              icon: 'smile',
              component: './estimateWaterManager/previousEstimateWater',
            },
            {
              name:"预估流水推送SAP",
              path: '/estimateWaterManager/estimateWaterSAP',
              icon: 'smile',
              component: './estimateWaterManager/estimateWaterSAP'
            }
          ]
        },
        {
          path: '/gamesSettlementManager',
          icon: 'smile',
          name:"游戏结算管理",
          routes: [
            {
              path: '/gamesSettlementManager',
              redirect: '/gamesSettlementManager/businessTypeManager',
            },
            {
              name:"业务类型管理",
              path: '/gamesSettlementManager/businessTypeManager',
              icon: 'smile',
              component: './gamesSettlementManager/businessTypeManager',
              // routes: [
              //       // {
              //       //   path: '/estimateWaterManager/periodEstimateWater/detail',
              //       //   component: './estimateWaterManager/periodEstimateWater/detail/index',
              //       // },
              //       {
              //         path: '/estimateWaterManager/periodEstimateWater',
              //         component: './estimateWaterManager/periodEstimateWater',
              //       },
              //     ],
            },
            {
              name:"结算状态管理",
              path: '/gamesSettlementManager/settlementStatusManager',
              icon: 'smile',
              component: './gamesSettlementManager/settlementStatusManager',
            },
            {
              name:"扣项信息管理",
              path: '/gamesSettlementManager/deductInfoManager',
              icon: 'smile',
              component: './gamesSettlementManager/deductInfoManager'
            }
          ]
        },
        {
          path: '/prepaidBillingManager',
          icon: 'smile',
          name:"预付账单管理",
          routes: [
            {
              path: '/prepaidBillingManager',
              redirect: '/prepaidBillingManager/outstandingMgr',
            },
            {
              name:"未结预付款管理",
              path: '/prepaidBillingManager/outstandingMgr',
              icon: 'smile',
              routes: [
                {
                  path: '/prepaidBillingManager/outstandingMgr/createstatement',
                  component: './prepaidBillingManager/outstandingMgr/createStatement/index',
                },
                {
                  path: '/prepaidBillingManager/outstandingMgr',
                  component: './prepaidBillingManager/outstandingMgr',
                },
              ],
            },
            {
              name:"预付结算单管理",
              path: '/prepaidBillingManager/prepaymentStatementMgr',
              icon: 'smile',
              component: './prepaidBillingManager/prepaymentStatementMgr',
            },
            {
              name:"BPM审批单管理",
              path: '/prepaidBillingManager/BPM',
              icon: 'smile',
              component: './prepaidBillingManager/BPM',
            },
            {
              name:"SAP付款单管理",
              path: '/prepaidBillingManager/SAP',
              icon: 'smile',
              component: './prepaidBillingManager/SAP',
            },
          ]
        },
        {
          path: '/billPayableManager',
          icon: 'smile',
          name:"应付账单管理",
          routes: [
            {
              path: '/billPayableManager',
              redirect: '/billPayableManager/outstandingCurrentMgr',
            },
            {
              name:"未结算流水管理",
              path: '/billPayableManager/outstandingCurrentMgr',
              icon: 'smile',
              component: './billPayableManager/outstandingCurrentMgr',
            },
            {
              name:"应付结算单管理",
              path: '/billPayableManager/accountsPayableMgr',
              icon: 'smile',
              component: './billPayableManager/accountsPayableMgr',
            },
            {
              name:"BPM审批单管理",
              path: '/billPayableManager/BPM',
              icon: 'smile',
              component: './billPayableManager/BPM',
            },
            {
              name:"SAP付款单管理",
              path: '/billPayableManager/SAP',
              icon: 'smile',
              component: './billPayableManager/SAP',
            },
          ]
        },
        {
          path: '/accountReceivableManager',
          icon: 'smile',
          name:"应收账单管理",
          routes: [
            {
              path: '/accountReceivableManager',
              redirect: '/accountReceivableManager/outstandingCurrentMgr',
            },
            {
              name:"未结算流水管理",
              path: '/accountReceivableManager/outstandingCurrentMgr',
              icon: 'smile',
              component: './accountReceivableManager/outstandingCurrentMgr',
            },
            {
              name:"应收结算单管理",
              path: '/accountReceivableManager/accountsReceivableMgr',
              icon: 'smile',
              component: './accountReceivableManager/accountsReceivableMgr',
            },
            {
              name:"收款单管理",
              path: '/accountReceivableManager/receiptMgr',
              icon: 'smile',
              component: './accountReceivableManager/receiptMgr',
            },
            {
              name:"回款单管理",
              path: '/accountReceivableManager/returnMoneyMgr',
              icon: 'smile',
              component: './accountReceivableManager/returnMoneyMgr',
            },
          ]
        },
        {
          path: '/complaintRefundManager',
          icon: 'smile',
          name:"客诉退款管理",
          routes: [
            {
              path: '/complaintRefundManager',
              redirect: '/complaintRefundManager/refundOrderMgr',
            },
            {
              name:"退款单管理",
              path: '/complaintRefundManager/refundOrderMgr',
              icon: 'smile',
              component: './complaintRefundManager/refundOrderMgr',
            },
            {
              name:"BPM审批单管理",
              path: '/complaintRefundManager/BPM',
              icon: 'smile',
              component: './complaintRefundManager/BPM',
            },
            {
              name:"SAP付款单管理",
              path: '/complaintRefundManager/SAP',
              icon: 'smile',
              component: './complaintRefundManager/SAP',
            }
          ]
        },
         // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     {
    //       path: '/user',
    //       component: './Welcome',
    //     },
    //   ],
    // },
        // dashboard
        // {
        //   path: '/welcome',
        //   name: '欢迎',
        //   icon: 'smile',
        //   component: './Welcome',
        // },
        // {
        //   path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
        //   name: 'more-blocks',
        //   icon: 'block',
        // },
      ],
    },
  ],
  disableRedirectHoist: true,
  /**
   * webpack 相关配置
   */
  define: { APP_TYPE: process.env.APP_TYPE || '' },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: { 'primary-color': primaryColor },
  externals: { '@antv/data-set': 'DataSet' },
  ignoreMomentLocale: true,
  lessLoaderOptions: { javascriptEnabled: true },
};
