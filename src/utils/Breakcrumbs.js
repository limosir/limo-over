import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
  { path: '/baseinfomanager', breadcrumb: '基础信息管理' },
  { path: '/baseinfomanager/coopcompanyinfo', breadcrumb: '合作公司信息' },
  { path: '/baseinfomanager/coopcompanyinfo/detail', breadcrumb: '详情页' },
  { path: '/baseinfomanager/aloneDeveloperInfor', breadcrumb: '个人开发者信息' },
  { path: '/baseinfomanager/aloneDeveloperInfor/detail', breadcrumb: '详情页' },
  { path: '/baseinfomanager/gameBasics', breadcrumb: '游戏基础信息' },
  { path: '/reportquerymanager', breadcrumb: '报表查询管理' },
  { path: '/reportquerymanager/estimatewaterform', breadcrumb: '预估流水明细单' },
];

const DefaultBreadcrumb = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map(({breadcrumb,match}, index) => (
      <span key={breadcrumb.key}>
        <NavLink to={match.url || ''}>
          { index === 0 ? null : breadcrumb }
        </NavLink>
        {(index < breadcrumbs.length - 1 && index !== 0) && <i> / </i>}
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
export default DefaultBreadcrumb