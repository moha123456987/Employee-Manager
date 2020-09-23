import * as firebase from "firebase";


 var firebaseConfig = {
    apiKey: "AIzaSyBOpOJJzQkIH1nix4AgldNRzI7b5mASzWI",
    authDomain: "reactcurd.firebaseapp.com",
    databaseURL: "https://reactcurd.firebaseio.com",
    projectId: "reactcurd",
    storageBucket: "reactcurd.appspot.com",
    messagingSenderId: "932666924141",
    appId: "1:932666924141:web:82a944d4747c76672eb364"
  };
  // Initialize Firebase
  let FireDB = firebase.initializeApp(firebaseConfig);


  export default FireDB.database().ref();