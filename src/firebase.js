import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDl7Vec3i0mnWNsYjMi_1nvTD2vOeLgByo",
    authDomain: "clone-5dbe3.firebaseapp.com",
    projectId: "clone-5dbe3",
    storageBucket: "clone-5dbe3.appspot.com",
    messagingSenderId: "922308449688",
    appId: "1:922308449688:web:8ef39285778f8ba445c7ed",
    measurementId: "G-MEDKRKK2Y2"
});


const auth = firebase.auth();

export { auth };