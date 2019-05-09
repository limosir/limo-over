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
          redirect: '/baseinfomanager/coopcompanyinfo',
        },
        {
          path: '/baseinfomanager',
          icon: 'smile',
          name:"基础信息管理",
          routes: [
            {
              name:"合作公司信息",
              path: '/baseinfomanager/coopcompanyinfo',
              icon: 'smile',
              component: './baseInfoManager/coopCompanyInfo'
            },
            {
              name:"个人开发者信息",
              path: '/baseInfoManager/aloneDeveloperInfor',
              icon: 'smile',
              component: './baseInfoManager/aloneDeveloperInfor'
            },
            {
              name:"游戏基础信息",
              path: '/baseInfoManager/gameBasics',
              icon: 'smile',
              component: './baseInfoManager/gameBasics'
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
