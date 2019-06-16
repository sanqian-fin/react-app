import firebase from '../../utils/firebase'

const db = firebase.firestore()

export const account = {
  state: {
    list: [],
  },
  reducers: {
    setList(state, payload) {
      return {
        ...state,
        list: payload,
      }
    },
  },
  effects: () => ({
    async onSnapshotAccount(userId) {
      db.collection('accounts')
        .where('userId', '==', userId)
        .onSnapshot(querySnapshot => {
          const list = []
          querySnapshot.forEach(doc => {
            list.push({ id: doc.id, ...doc.data() })
          })
          this.setList(list)
        })
    },
  }),
}
