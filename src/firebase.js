import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyD69O1yocV-vY2oj6Gro_RRvAf4gt8FglU",
  authDomain: "nerdstagram-82961.firebaseapp.com",
  projectId: "nerdstagram-82961",
  storageBucket: "nerdstagram-82961.appspot.com",
  messagingSenderId: "21279120529",
  appId: "1:21279120529:web:16381626894097e2e97330",
  measurementId: "G-H737BRWTRP"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
