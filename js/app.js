var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

window.addEventListener("load", function() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
});

var addAttributeButton = document.getElementById("add-attribute");
addAttributeButton.addEventListener("click", addAttribute);

function addAttribute() {
  var keyContainer = document.getElementById("attribute-key");
  var valueContainer = document.getElementById("attribute-value");
  var input = document.createElement("input");
  var labelInput = document.createElement("input");
  input.setAttribute("type", "text");
  labelInput.setAttribute("type", "text");
  labelInput.setAttribute("placeholder", "Add a field, e.g expiry date...");
  keyContainer.appendChild(labelInput);
  valueContainer.appendChild(input);
}
