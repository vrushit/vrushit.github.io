
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDbzEQCQTCz6YE65If7iyM-riLcOkbJhYI",
    authDomain: "personal-website-6c0fa.firebaseapp.com",
    databaseURL: "https://personal-website-6c0fa.firebaseio.com",
    projectId: "personal-website-6c0fa",
    storageBucket: "personal-website-6c0fa.appspot.com",
    messagingSenderId: "828316402027",
    appId: "1:828316402027:web:aa13717d31ce63fce60c2e",
    measurementId: "G-JV04VTF08T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  document.getElementById('buttonC').addEventListener("click", () => {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNo = document.getElementById('phoneNo').value;
    var desc = document.getElementById('Description').value;

    let databaseref = firebase.database();
    databaseref.ref('Entries').push(
        {
            Name: name,
            Email: email,
            MobileNo: phoneNo,
            Description: desc
        }


    );

  });