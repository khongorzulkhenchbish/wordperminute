import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
var config = {
  apiKey: "AIzaSyDPyFN9_u9-FqfWpQAUehftoDHLm9YprZI",
  authDomain: "writeonme-c4042.firebaseapp.com",
  databaseURL: "https://writeonme-c4042.firebaseio.com/",
  projectId: "writeonme",
  storageBucket: "writeonme.appspot.com",
  messagingSenderId: "271318331074",
  appId: "1:271318331074:web:c7cf9416a2306fb1d7d55b"
};

const app = initializeApp(config);
export const db = getFirestore(app);
