
var stdNo = 0;
var tbody2 = document.getElementById("tbody2");



function AddItemToTable(Assessment_Type, Assessment_Question) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");


    td1.innerHTML = ++stdNo;
    td2.innerHTML = Assessment_Type;
    td3.innerHTML = Assessment_Question;


    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);


    tbody2.appendChild(trow);
}


function AddAllItemsToTable(Assessment) {
    stdNo = 0;
    tbody2.innerHTML = "";
    Assessment.forEach(element => {
        AddItemToTable(element.Assessment_Type, element.Assessment_Question);
    });
}

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);



import { getDatabase, ref, get, child, set, update, remove, onValue }
    from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const db = getDatabase();



function GetAllDataRealtime() {
    const dbRef = ref(db, "ASSESMENT_TEST");
    onValue(dbRef, (snapshot) => {
        var students = [];

        snapshot.forEach(childSnapshot => {
            students.push(childSnapshot.val());
        });

        AddAllItemsToTable(students);
    })

}
window.onload = GetAllDataRealtime;



// Referrencess 
var Assessment_Type = document.getElementById("AssessmentT");
var Assessment_Question = document.getElementById("AssessmentQ");


// Button
var createbtn1 = document.getElementById("Insbtn1");
var deletebtn1 = document.getElementById("Delbtn1");
var updatebtn1 = document.getElementById("Updbtn1");
var searchbtn1 = document.getElementById("Serchbtn1");

//<!-- SelectData -->

//<!-- Insert Data Function  -->
function InsertData1() {
    set(ref(db, "ASSESMENT_TEST/" + Assessment_Type.value), {
        Assessment_Type: Assessment_Type.value,
        Assessment_Question: Assessment_Question.value,

    })
        .then(() => {
            alert("dataStored successfully");
        })
        .catch((error) => {
            alert("unsuccessfully, error" + error);
        });
}


function SelectData1() {
    const dbref = ref(db);
    get(child(dbref, "ASSESMENT_TEST/" + Assessment_Type.value)).then((snapshot) => {
        if (snapshot.exists()) {
            Assessment_Question.value = snapshot.val().Assessment_Question;
        }
        else {
            alert("No data Found");
        }
    })
        .catch((error) => {
            alert("unsuccessfully, error" + error);
        });
}


//<!-- Update -->
function UpdateData1() {
    update(ref(db, "ASSESMENT_TEST/" + Assessment_Type.value), {
        Assessment_Question: Assessment_Question.value,

    })
        .then(() => {
            alert("data Stored Succesdfully");
        })

        .catch((error) => {
            alert("Unsuccessfully, error" + error);
        });
}

// <!--  Delete Data  -->
function DeleteData1() {
    remove(ref(db, "ASSESMENT_TEST/" + Assessment_Type.value))
        .then(() => {
            alert("data Stored Succesdfully");
        })
        .catch((error) => {
            alert("Unsuccessfully, error" + error);
        });
}



// btn
createbtn1.addEventListener('click', InsertData1);
deletebtn1.addEventListener('click', DeleteData1);
searchbtn1.addEventListener('click', SelectData1);
updatebtn1.addEventListener('click', UpdateData1);


