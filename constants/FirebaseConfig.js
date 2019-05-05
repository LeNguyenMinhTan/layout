import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB5LmbPWlsiA4XeXLzmzN7jqtrjHsG77uc",
    authDomain: "mydemo-61034.firebaseapp.com",
    databaseURL: "https://mydemo-61034.firebaseio.com",
    projectId: "mydemo-61034",
    storageBucket: "mydemo-61034.appspot.com",
    messagingSenderId: "380558521447"
  };

firebase.initializeApp(config);

export default firebase;

