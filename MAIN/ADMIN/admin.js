
var stdNo = 0;
var tbody = document.getElementById("tbody1");


// Start of Auto Create ID
function idAutuoprovide() {
    let num = '';
    for (let i = 0; i < 10; i++) {
        num = num.concat((Math.floor(1 + Math.random() * (9 - 0))));
    }
    const input = document.querySelector('#autoProdivde');
    input.value = num;

}
var crudID = document.getElementById("autoID");
crudID.addEventListener('click', idAutuoprovide);
//End of Auto Create ID


function AddItemToTable(UserID, USERNAME, FIRSTNAME, LASTNAME, EMAIL, PASSWORD) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");


    td1.innerHTML = ++stdNo;
    td2.innerHTML = UserID;
    td3.innerHTML = USERNAME;
    td4.innerHTML = FIRSTNAME;
    td5.innerHTML = LASTNAME;
    td6.innerHTML = EMAIL;
    td7.innerHTML = PASSWORD;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    tbody.appendChild(trow);
}


function AddAllItemsToTable(User) {
    stdNo = 0;
    tbody.innerHTML = "";
    User.forEach(element => {
        AddItemToTable(element.UserID, element.USERNAME, element.FIRSTNAME, element.LASTNAME, element.EMAIL, element.PASSWORD);
    });
}

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
    const dbRef = ref(db, "PAYO_USERS");
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
var UserID = document.getElementById("autoProdivde");
var USERNAME = document.getElementById("Uname");
var FIRSTNAME = document.getElementById("fname");
var LASTNAME = document.getElementById("lName");
var EMAIL = document.getElementById("email");
var PASSWORD = document.getElementById("password");



// Button
var createbtn = document.getElementById("Insbtn");
var deletebtn = document.getElementById("Delbtn");
var updatebtn = document.getElementById("Updbtn");
var searchbtn = document.getElementById("Serchbtn");

//<!-- SelectData -->

//<!-- Insert Data Function  -->
function InsertData() {
    set(ref(db, "PAYO_USERS/" + UserID.value), {
        UserID: UserID.value,
        USERNAME: USERNAME.value,
        FIRSTNAME: FIRSTNAME.value,
        LASTNAME: LASTNAME.value,
        EMAIL: EMAIL.value,
        PASSWORD: PASSWORD.value
    })
        .then(() => {
            alert("dataStored successfully");
        })
        .catch((error) => {
            alert("unsuccessfully, error" + error);
        });




}


function SelectData() {
    const dbref = ref(db);
    get(child(dbref, "PAYO_USERS/" + UserID.value)).then((snapshot) => {
        if (snapshot.exists()) {
            USERNAME.value = snapshot.val().USERNAME;
            FIRSTNAME.value = snapshot.val().FIRSTNAME;
            LASTNAME.value = snapshot.val().LASTNAME;
            EMAIL.value = snapshot.val().EMAIL;
            PASSWORD.value = snapshot.val().PASSWORD;
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
function UpdateData() {
    update(ref(db, "PAYO_USERS/" + UserID.value), {
        USERNAME: USERNAME.value,
        FIRSTNAME: FIRSTNAME.value,
        LASTNAME: LASTNAME.value,
        EMAIL: EMAIL.value,
        PASSWORD: PASSWORD.value
    })
        .then(() => {
            alert("data Stored Succesdfully");
        })

        .catch((error) => {
            alert("Unsuccessfully, error" + error);
        });
}

// <!--  Delete Data  -->
function DeleteData() {
    remove(ref(db, "PAYO_USERS/" + UserID.value))
        .then(() => {
            alert("data Stored Succesdfully");
        })
        .catch((error) => {
            alert("Unsuccessfully, error" + error);
        });
}



// btn
createbtn.addEventListener('click', InsertData);
deletebtn.addEventListener('click', DeleteData);
searchbtn.addEventListener('click', SelectData);
updatebtn.addEventListener('click', UpdateData);


