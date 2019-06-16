import firebase from '../../utils/firebase'

export const user = {
  state: {
    user: {},
    isAuth: false,
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        user: payload,
      }
    },
    setAuth(state, payload) {
      return {
        ...state,
        isAuth: payload,
      }
    },
  },
  effects: dispatch => ({
    async onAuthStateChangedObserver() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setUser(user)
          this.setAuth(true)
          dispatch.account.onSnapshotAccount(user.uid)
        } else {
          this.setUser({})
          this.setAuth(false)
        }
      })
    },
  }),
}
