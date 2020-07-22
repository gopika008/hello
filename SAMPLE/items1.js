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
        const docRef =db.doc("items/books");
       
        const docRef1 =db.doc("items/laptops");
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");
const t5 = document.querySelector("#t5");
const t6 = document.querySelector("#t6");
;

        
       
       
       
      docRef.get().then(function (doc) {
            if( doc && doc.exists){
                const mydata= doc.data();
                t1.innerText=  mydata.name;
                t2.innerText=  mydata.price;
                t3.innerText=  mydata.qty;
                    }           
                 }) .catch(function (error) {
            console.log("go an error", error);
        })
        docRef1.get().then(function (doc) {
            if( doc && doc.exists){
                const mydata= doc.data();
                t4.innerText=  mydata.name;
                t5.innerText=  mydata.price;
                t6.innerText=  mydata.qty;
                    }           
                 }) .catch(function (error) {
            console.log("go an error", error);
        })
        