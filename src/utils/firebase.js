import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'sanqian-f42cb.firebaseapp.com',
  databaseURL: 'https://sanqian-f42cb.firebaseio.com',
  projectId: 'sanqian-f42cb',
  storageBucket: 'sanqian-f42cb.appspot.com',
  messagingSenderId: '69469755450',
  appId: '1:69469755450:web:1da77ebc6bec54b8',
}

const app = firebase.initializeApp(firebaseConfig)

export default app
