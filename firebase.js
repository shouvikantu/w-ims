import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {
getAuth, GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUjHBGBIxS_DO-KzdaOiPPR06mJ-O67I0",
  authDomain: "wu-ims.firebaseapp.com",
  projectId: "wu-ims",
  storageBucket: "wu-ims.appspot.com",
  messagingSenderId: "223098381155",
  appId: "1:223098381155:web:cda0e8f0219e2df1b1a956",
  measurementId: "G-77YE96796E"
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
