var config =
        {
            apiKey: "AIzaSyC2osH-rZMfx51oWiiJO1V7xdjBaXmEqrY",
            authDomain: "example-f9b36.firebaseapp.com",
            databaseURL: "https://example-f9b36.firebaseio.com",
            projectId: "example-f9b36",
            storageBucket: "example-f9b36.appspot.com",
            messagingSenderId: "633166907004"
        };

        firebase.initializeApp(config);
        
        var storage = firebase.storage();
        var storageRef = storage.ref();
        const db = firebase.firestore();
      
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");
const t5 = document.querySelector("#t5");
const t6 = document.querySelector("#t6");
;

        
       
       
 
db.collection('items').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

const accountList = document.querySelector('#tbl_item_list') ;
function renderAccount(doc){
    console.log('data',doc.id);
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_price = document.createElement('td');
    let td_qty = document.createElement('td');
    let td_btnup= document.createElement('button');
    let td_btndel= document.createElement('button');

    tr.setAttribute('data-id', doc.id);
    
    td_name.textContent = doc.data().name;
    td_price.textContent = doc.data().price;
    td_qty.textContent = doc.data().qty;
     td_btnup.innerHTML="Update";
     td_btndel.innerHTML=" Delete ";




    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_qty);
    tr.appendChild(td_btnup).style.backgroundColor='yellowgreen';
    tr.appendChild(td_btndel).style.backgroundColor='pink';

    accountList.appendChild(tr).style.height='70px';
    
    td_btnup.addEventListener ("click", function() {
       
       var washingtonRef = db.collection("items").doc(doc.id);

    // Set the "capital" field of the city 'DC'
    alert("update "+doc.data().name);
     window.location="UpdateDetails.html?doc=" +doc.id + "&name="+doc.data().name;
    /*return washingtonRef.update({
        name: 'books'
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });*/
       
      });
      td_btndel.addEventListener ("click", function() {
        alert("Do you want to delete  "+ doc.data().name);
        db.collection("items").doc(doc.id).delete().then(function() {
            var cityRef = db.collection('items').doc(doc.id);

// Remove the 'capital' field from the document
var removeCapital = cityRef.update({
    name: firebase.firestore.FieldValue.delete(),
    price: firebase.firestore.FieldValue.delete(),
    qty: firebase.firestore.FieldValue.delete()
});
            console.log("Document successfully deleted!");
            location.reload();
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      });
}
