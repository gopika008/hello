var config ={
    apiKey: "AIzaSyC2osH-rZMfx51oWiiJO1V7xdjBaXmEqrY",
  authDomain: "example-f9b36.firebaseapp.com",
  databaseURL: "https://example-f9b36.firebaseio.com",
  projectId: "example-f9b36",
  storageBucket: "example-f9b36.appspot.com",
  messagingSenderId: "633166907004"
};
firebase.initializeApp(config);
const db = firebase.firestore();
//const docRef =firestore.doc("items/laptops");
const outputHeader = document.querySelector("#view");
const inputHeader = document.querySelector("#name");
const inputHeader1 = document.querySelector("#price");
const inputHeader2 = document.querySelector("#qty");
const saveButton = document.querySelector("#saveButton");



const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
saveButton.addEventListener("click",function () {
    const textToSave= inputHeader.value;
    const textToSave1= inputHeader1.value;
    const textToSave2= inputHeader2.value;
    console.log("iam going to  save "+textToSave+ "to firestore");
    db.collection("items").add({
        name: textToSave,
        price: textToSave1,
        qty: textToSave2
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
})


    
