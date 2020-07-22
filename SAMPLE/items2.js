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
       

;

        
       
       
db.collection('items').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

const accountList = document.querySelector('#tbl_item_list') ;
function renderAccount(doc){
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_price = document.createElement('td');
    let td_qty = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    
    td_name.textContent = doc.data().name;
    td_price.textContent = doc.data().price;
    td_qty.textContent = doc.data().qty;
    if(td_qty.textContent>4){
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_qty);

    accountList.appendChild(tr);
    }
}