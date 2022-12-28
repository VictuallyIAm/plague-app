import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBeQpJ4kmzH5EWjVaqjnpyEx716kf6AgcQ',
  authDomain: 'plags-ecomm.firebaseapp.com',
  projectId: 'plags-ecomm',
  storageBucket: 'plags-ecomm.appspot.com',
  messagingSenderId: '986455241936',
  appId: '1:986455241936:web:0a1441a4e5d61a90135ad5',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
