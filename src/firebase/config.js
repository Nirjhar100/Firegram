import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDWUSpLQHsOTn_1sio-0FuG8yZCzx77zLQ",
    authDomain: "firegram-73671.firebaseapp.com",
    databaseURL: "https://firegram-73671.firebaseio.com",
    projectId: "firegram-73671",
    storageBucket: "firegram-73671.appspot.com",
    messagingSenderId: "66959642875",
    appId: "1:66959642875:web:1293c0b5b671214fc5e05e"
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};