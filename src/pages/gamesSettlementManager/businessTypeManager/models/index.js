import * as usersService from '../services/index';

export default {
  namespace: 'businesstypemanager',
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
        // console.log("触发",pathname)
        if (pathname === '/gamesSettlementManager/businessTypeManager') {
          dispatch({ type: 'updateList', payload: query });
        }
      });
    },
  },
};
