import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from '../testData'
interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number,
}
export interface GlobalDataProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false },
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'dragonPeng' }
    }
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter(column => column.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id);
    },
    getPostById: (state) => (cid: number) => {
      return state.posts.filter(post => post.id === cid);
    }
  }
})


export default store