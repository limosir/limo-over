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
          path: '/baseinfomanager',
          icon: 'smile',
          name:"基础信息管理",
          routes: [
            {
              path: '/baseinfomanager',
              redirect: '/baseinfomanager/coopcompanyinfo',
            },
            {
              name:"合作公司信息",
              path: '/baseinfomanager/coopcompanyinfo',
              icon: 'smile',
              // component: './baseinfomanager/coopcompanyinfo',
              routes: [
                    {
                      path: '/baseinfomanager/coopcompanyinfo/detail',
                      component: './baseinfomanager/coopcompanyinfo/detail/index',
                    },
                    {
                      path: '/baseinfomanager/coopcompanyinfo',
                      component: './baseinfomanager/coopcompanyinfo',
                    },
                  ],
            },
            {
              name:"个人开发者信息",
              path: '/baseinfomanager/aloneDeveloperInfor',
              icon: 'smile',
              component: './baseinfomanager/aloneDeveloperInfor'
            },
            {
              name:"游戏基础信息",
              path: '/baseinfomanager/1',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            }
          ]
        },
        {//reportquerymanager
          path: '/reportquerymanager',
          icon: 'smile',
          name:"报表查询管理",
          routes: [
            {
              path: '/reportquerymanager',
              redirect: '/reportquerymanager/estimatewaterform',
            },
            {
              name:"预估流水明细表",
              path: '/reportquerymanager/estimatewaterform',
              icon: 'smile',
              component: './reportquerymanager/estimatewaterform'
              // routes: [
              //       {
              //         path: '/baseinfomanager/coopcompanyinfo/detail',
              //         component: './baseinfomanager/coopcompanyinfo/detail/index',
              //       },
              //       {
              //         path: '/baseinfomanager/coopcompanyinfo',
              //         component: './baseinfomanager/coopcompanyinfo',
              //       },
              //     ],
            },
            {
              name:"结算流水明细表",
              path: '/baseinfomanager/4',
              icon: 'smile',
              component: './baseinfomanager/aloneDeveloperInfor'
            },
            {
              name:"结算流水汇总表",
              path: '/baseinfomanager/5',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"零钱体现汇总表",
              path: '/baseinfomanager/6',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"会员卡重置汇总表",
              path: '/baseinfomanager/7',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"金钻重置汇总表",
              path: '/baseinfomanager/8',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"计算状态查询表",
              path: '/baseinfomanager/9',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"扣项金额查询表",
              path: '/baseinfomanager/0',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"应付账龄分析表",
              path: '/baseinfomanager/11',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"应收账龄分析表",
              path: '/baseinfomanager/12',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"应收坏账计提表",
              path: '/baseinfomanager/13',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"进项发票查询表",
              path: '/baseinfomanager/gameBasics',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
            },
            {
              name:"消项发票查询表",
              path: '/baseinfomanager/14',
              icon: 'smile',
              component: './baseinfomanager/gameBasics'
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
