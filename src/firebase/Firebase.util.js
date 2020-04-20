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

export const createUserProfilDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const shapShot = await userRef.get()

    if (!shapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        console.log(shapShot)
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error created user', error)
        }
    }
    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const firestore = firebase.firestore()

provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
