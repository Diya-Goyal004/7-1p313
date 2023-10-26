import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB95TwlL5PoFra93FRAXrX7Q4dMvRwcM_Y",
    authDomain: "login7-1p.firebaseapp.com",
    projectId: "login7-1p",
    storageBucket: "login7-1p.appspot.com",
    messagingSenderId: "853244120214",
    appId: "1:853244120214:web:13c7819d07612c7e3286b7"
  };
  
  initializeApp(firebaseConfig); // Remove the assignment to 'app'
  // Google Auth Provider
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export { provider };


provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();
export const createuserdocfromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapShots = await getDoc(userDocRef);
  console.log(userSnapShots)
  console.log(userSnapShots.exists())

  if (!userSnapShots.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log('error in creating', error.message)
    }
  }
  return userDocRef;
}
export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function signinAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return
  return await signInWithEmailAndPassword(auth, email, password)
}