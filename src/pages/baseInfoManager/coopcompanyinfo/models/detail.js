import * as usersService from '../services/index';

export default {
  namespace: 'coopdetail',
  state: {
    list: [
        ],
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
        //获取路由携带参数 请求详情数据
        console.log("pathname",pathname)
        if (pathname==='/baseinfomanager/coopcompanyinfo/detail' ) {
          dispatch({ type: 'updateList', payload: query });
        }
      });
    },
  },
};