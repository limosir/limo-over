// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: { hmr: true },
        targets: { ie: 11 },
        locale: {
          enable: false,
          // default false
          default: 'zh-CN',
          // default zh-CN
          baseNavigator: true,
        },
        // default true, when it is true, will use `navigator.language` overwrite default
        dynamicImport: { loadingComponent: './components/PageLoading/index' },
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
              path: '/baseInfoManager/1',
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
              name:"会员卡重置汇总表",
              path: '/reportQueryManager/resetCardTotal',
              icon: 'smile',
              component: './reportQueryManager/resetCardTotal'
            },
            {
              name:"金钻重置汇总表",
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
        {
          name: '基础表单',
          icon: 'smile',
          path: '/basic-form',
          component: './basic-form',
        },
        {
          name: '基础详情',
          icon: 'smile',
          path: '/basic-profile',
          component: './basic-profile',
        },
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
