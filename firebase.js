import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {
getAuth, GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAi2syMqmCSUOFIK-mu_dqYJBAa3Au8Pck",
    authDomain: "intramural-tms.firebaseapp.com",
    projectId: "intramural-tms",
    storageBucket: "intramural-tms.appspot.com",
    messagingSenderId: "811305905269",
    appId: "1:811305905269:web:6def0b63591e8cb5e4dc3c",
    measurementId: "G-KZB5MRWNLW"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth  = getAuth(app)
  const provider = new GoogleAuthProvider()



export {
  auth,
  db,
  provider
};
