// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCA7_xKMf6oNW8WpiLc77rqCfgULyIoW-I",
    authDomain: "collaborative-sketch-a815a.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-a815a.firebaseio.com",
    projectId: "collaborative-sketch-a815a",
    storageBucket: "",
    messagingSenderId: "848954033921"
  };
  firebase.initializeApp(config);
  
  var pointsData = firebase.database().ref();