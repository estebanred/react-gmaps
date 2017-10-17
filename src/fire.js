import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC5FqM-azlMmZxYlshHvDMdKQSPRLauHAY",
    authDomain: "intec-74d1b.firebaseapp.com",
    databaseURL: "https://intec-74d1b.firebaseio.com",
    projectId: "intec-74d1b",
    storageBucket: "",
    messagingSenderId: "371108649438"
  };

  const fire = firebase.initializeApp(config);

  export default fire