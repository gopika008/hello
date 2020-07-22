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
//const outputHeader = document.querySelector("#view");
const inputHeader = document.querySelector("#uname");
const inputHeader1 = document.querySelector("#uprice");
const inputHeader2 = document.querySelector("#uqty");
const updateButton = document.querySelector("#btn_update");
var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('doc'));


updateButton.addEventListener ("click", function() {
    alert("Do you want to update ");
    
    const textToSave= inputHeader.value;
    const textToSave1= inputHeader1.value;
    const textToSave2= inputHeader2.value;
   
    var washingtonRef = db.collection("items").doc(urlParams.get('doc'));

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    name: textToSave,
    price: textToSave1,
    qty: textToSave2
})
.then(function() {
    console.log("Document successfully updated!" + urlParams.get('doc'));
    window.location="democreate.html"
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
   
  });
 