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
              path: '/baseinfomanager/gameBasics',
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
