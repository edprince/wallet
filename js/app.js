var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    alert("You are logged in");
  } else {
    // No user is signed in.
    googleSignIn();
  }
});

var addAttributeButton = document.getElementById("add-attribute");
var saveButton = document.getElementById("save-button");
addAttributeButton.addEventListener("click", addAttribute);
saveButton.addEventListener("click", write);

function addAttribute() {
  var keyContainer = document.getElementById("key-attribute");
  var valueContainer = document.getElementById("value-attribute");
  var input = document.createElement("input");
  var labelInput = document.createElement("input");
  input.setAttribute("type", "text");
  labelInput.setAttribute("type", "text");
  labelInput.setAttribute("placeholder", "Add a field, e.g expiry date...");
  keyContainer.appendChild(labelInput);
  valueContainer.appendChild(input);
}

function googleSignIn() {
  firebase.auth().signInWithRedirect(provider).catch(function(error) {
    //Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function getData() {
  /**
   * Function retrieves all data from the fields
   * @return {result} object - data retrieved from form
   */
  var result;
  result = {
    natwest: {
      "account number": "18485748",
      "sort code": "42-44-09",
      "card number": "9857-4838-2949-0981",
      name: "Mr Edward G Prince"
    }
  };
  var keys;
  return result;
}

function write(key, data) {
  /**
   * Function writes data to database
   * @param {string} key: The key of the data, e.g "card name"
   * @param {string} data: The data to be stored, e.g "Ed Prince"
   */
  var data = getData();
  var userId = firebase.auth().currentUser.uid;
  var database = firebase.database();
  firebase.database().ref("users/" + userId).set(data);

