import * as usersService from '../services/index';

export default {
  namespace: 'alonedeveloperinfor',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, { payload: { data: list, total } }) {
      return { ...state, list, total };
    },
  },
  effects: {
    *updateList({ payload: { page } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetchList, { page });
      console.log("出发了")
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/baseinfomanager/aloneDeveloperInfor') {
          dispatch({ type: 'updateList', payload: query });
        }
      });
    },
  },
};