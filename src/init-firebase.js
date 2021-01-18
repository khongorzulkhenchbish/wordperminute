import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDPyFN9_u9-FqfWpQAUehftoDHLm9YprZI",
  authDomain: "writeonme-c4042.firebaseapp.com",
  databaseURL: "https://writeonme-c4042.firebaseio.com/",
  projectId: "writeonme",
  storageBucket: "writeonme.appspot.com",
  messagingSenderId: "271318331074",
  appId: "1:271318331074:web:c7cf9416a2306fb1d7d55b"
};
firebase.initializeApp(config);



export default firebase;