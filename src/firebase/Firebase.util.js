import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
    apiKey: 'AIzaSyCYWRWHI0TNuNsTv4bOn1wPjzBpFmVssfQ',
    authDomain: 'clothing-48780.firebaseapp.com',
    databaseURL: 'https://clothing-48780.firebaseio.com',
    projectId: 'clothing-48780',
    storageBucket: 'clothing-48780.appspot.com',
    messagingSenderId: '255108583181',
    appId: '1:255108583181:web:8d66b41d49771ed65a6a44',
    measurementId: 'G-LK1R5JCT2Q',
}

firebase.initializeApp(Config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
