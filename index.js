// Write Javascript code!

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDP2SPU_WoeCAPxccOiR195VDmthDHpM2M",
    authDomain: "marchage-13415.firebaseapp.com",
    databaseURL: "https://marchage-13415.firebaseio.com",
    projectId: "marchage-13415",
    storageBucket: "marchage-13415.appspot.com",
    messagingSenderId: "696000549067"
});

const saveToFirebase = function (email) {
    const emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function (snapshot) {
            console.log('success!'); // some success method
        }, function (error) {
            console.log('error' + error); // some error method
        });
}
