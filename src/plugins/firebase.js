import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDGYRWVFMRYvUC1Z6U9rVi4VkkCsk3WDsQ",
  authDomain: "brasil-jobs.firebaseapp.com",
  projectId: "brasil-jobs",
  storageBucket: "brasil-jobs.appspot.com",
  messagingSenderId: "25749216127",
  appId: "1:25749216127:web:9169c08e8c2f3fa7d5584a"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth,  profileCollection, tasksCollection
}