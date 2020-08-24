import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD9XsxDdQHnSna5xBTQlQvWFYrNQV9axzI",
        authDomain: "facebook-messenger-clone-36a50.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-36a50.firebaseio.com",
        projectId: "facebook-messenger-clone-36a50",
        storageBucket: "facebook-messenger-clone-36a50.appspot.com",
        messagingSenderId: "714725381365",
        appId: "1:714725381365:web:2cd04cef0645ac8ed2a1bc",
        measurementId: "G-R5N25TLXB1"
    });

const db = firebaseApp.firestore();

export default db;