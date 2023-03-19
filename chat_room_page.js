var firebaseConfig = {
    apiKey: "AIzaSyA1e5HdCZBcxTuYgFbD3ejcf4uMtm4BteA",
    authDomain: "project-c101-ed83a.firebaseapp.com",
    databaseURL: "https://project-c101-ed83a-default-rtdb.firebaseio.com",
    projectId: "project-c101-ed83a",
    storageBucket: "project-c101-ed83a.appspot.com",
    messagingSenderId: "735902270584",
    appId: "1:735902270584:web:8ade9456f308e46f66998d",
    measurementId: "G-C8SPCWVPM0"
  };

  firebase.intializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebaseConfig.databaseURL().ref(room_name).push({name:user_name, message : msg, like:0});
    document.getElementById("msg").value="";
  }