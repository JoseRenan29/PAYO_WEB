import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCzhJ-N6enUptrVdmMpip7clMPTitcc3jI",
    authDomain: "payo-32076.firebaseapp.com",
    databaseURL: "https://payo-32076-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "payo-32076",
    storageBucket: "payo-32076.appspot.com",
    messagingSenderId: "171205901355",
    appId: "1:171205901355:web:d0b7dd06d16eb46e593e6e",
    measurementId: "G-JT4WSD6Q50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

var EMAIL = document.getElementById("email");
var PASSWORD = document.getElementById("password");

var createbtn = document.getElementById("Insbtn");


function InsertData() {
    auth = getAuth();
    createUserWithEmailAndPassword(auth, EMAIL, PASSWORD)
        .then(() => {
            // Signed in 
            alert("dataStored successfully");

            // ...
        })
        .catch((error) => {
            alert("unsuccessfully, error" + error);

            // ..
        });
}

createbtn.addEventListener('click', InsertData);