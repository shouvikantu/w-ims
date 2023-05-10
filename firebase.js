import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDtrZoq5QHjGqo1gIygIaZLeOzs6jCsxfA",
  authDomain: "w-ims-bd218.firebaseapp.com",
  projectId: "w-ims-bd218",
  storageBucket: "w-ims-bd218.appspot.com",
  messagingSenderId: "520180357409",
  appId: "1:520180357409:web:09b1df65533283ed1b4660",
  measurementId: "G-VFYDT5ETN6"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider()



export {

  db,
  provider
};
