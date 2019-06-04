import * as usersService from '../services/index';

export default {
  namespace: 'carddetail',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(
      state,
      {
        payload: { data: list, total },
      }
    ) {
      return { ...state, list, total };
    },
  },
  effects: {
    *updateList(
      {
        payload: { page },
      },
      { call, put }
    ) {
      const { data, headers } = yield call(usersService.fetchList, { page });
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        //获取路由携带参数 请求详情数据
        if (pathname === '/reportQueryManager/resetCardTotal/detail') {
          dispatch({ type: 'updateList', payload: query });
        }
      });
    },
  },
};
