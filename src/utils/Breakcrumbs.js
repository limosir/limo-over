import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
  { path: '/baseInfoManager', breadcrumb: '基础信息管理' },
  { path: '/baseInfoManager/coopCompanyInfo', breadcrumb: '合作公司信息' },
  { path: '/baseInfoManager/coopCompanyInfo/detail', breadcrumb: '详情页' },
  { path: '/baseInfoManager/aloneDeveloperInfor', breadcrumb: '个人开发者信息' },
  { path: '/baseInfoManager/aloneDeveloperInfor/detail', breadcrumb: '详情页' },
  { path: '/baseInfoManager/gameBasics', breadcrumb: '游戏基础信息' },
  { path: '/reportQueryManager', breadcrumb: '报表查询管理' },
  { path: '/reportQueryManager/estimateWaterForm', breadcrumb: '预估流水明细表' },
  { path: '/reportQueryManager/settlementWaterDetail', breadcrumb: '结算流水明细表' },
  { path: '/reportQueryManager/settlementWaterTotal', breadcrumb: '结算流水汇总表' },
  { path: '/reportQueryManager/changeWithdrawalTotal', breadcrumb: '零钱提现汇总表' },
  { path: '/reportQueryManager/resetCardTotal', breadcrumb: '会员卡重置汇总表' },
  { path: '/reportQueryManager/resetDiamondTotal', breadcrumb: '金钻重置汇总表' },
  { path: '/reportQueryManager/settlementStateQuery', breadcrumb: '结算状态查询表' },
  { path: '/reportQueryManager/deductMoneyQuery', breadcrumb: '扣项金额查询表' },
  { path: '/reportQueryManager/copeAgeAnalyse', breadcrumb: '应付账龄分析表' },
  { path: '/reportQueryManager/accountsAgeAnalyse', breadcrumb: '应收账龄分析表' },
  { path: '/reportQueryManager/accountsBadForm', breadcrumb: '应收坏账计提表' },
  { path: '/reportQueryManager/incomeInvoiceQuery', breadcrumb: '进项发票查询表' },
  { path: '/reportQueryManager/clearInvoiceQuery', breadcrumb: '消项发票查询表' },
];

const DefaultBreadcrumb = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <span key={breadcrumb.key}>
        <NavLink to={match.url || ''}>{index === 0 ? null : breadcrumb}</NavLink>
        {index < breadcrumbs.length - 1 && index !== 0 && <i> / </i>}
      </span>
    ))}
  </div>
));
// const DefaultBreadcrumb = withBreadcrumbs(routes)(({ breadcrumbs }) => (
//     <div>
//       {breadcrumbs.map((breadcrumb, index) => (
//         <span key={breadcrumb.key}>
//           <NavLink
//             to={{
//               pathname: breadcrumb.props.match.url,
//               state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
//               query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
//             }}
//           >
//             {breadcrumb}
//           </NavLink>
//           {index < breadcrumbs.length - 1 && <i> / </i>}
//         </span>
//       ))}
//     </div>
//   ));
export default DefaultBreadcrumb;
