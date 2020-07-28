import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyA-nGQ6q2TALIhSarHc2YCTp80KEBlEfBc",
  authDomain: "svelte-todo-1.firebaseapp.com",
  databaseURL: "https://svelte-todo-1.firebaseio.com",
  projectId: "svelte-todo-1",
  storageBucket: "svelte-todo-1.appspot.com",
  messagingSenderId: "160243442320",
  appId: "1:160243442320:web:f8eda0092a249f9f072e15"
};



if (firebase.apps.length === 0)
  firebase.initializeApp(firebaseConfig);

function addTodo (uid) {
    if (event.target["todo"].value === "") return false;
    firebase.firestore().collection("users").doc(uid).set({
      todos: firebase.firestore.FieldValue.arrayUnion(event.target["todo"].value)
    },{merge: true})
    event.target["todo"].value = ""
    return false;
}
function deleteTodo (uid) {
  firebase.firestore().collection("users").doc(uid).set({
      todos: firebase.firestore.FieldValue.arrayRemove(event.target.id)
  },{merge: true})
}
function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
}
function logout () {
  firebase.auth().signOut()
}

export {firebase, addTodo, deleteTodo, googleSignIn, logout}