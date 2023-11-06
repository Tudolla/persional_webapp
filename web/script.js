document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
    document.getElementById('message').textContent = 'Login successfully!';
    document.getElementById('message').className = 'success';
  } else {
    document.getElementById('message').textContent = 'Incorrect name!';
    document.getElementById('message').className = 'error';
  }
});

var registerButton = document.getElementById("register_button");
registerButton.addEventListener("click", function() {window.location.href = "register.html";});

var loginLabel = document.getElementById("login_label");
loginLabel.addEventListener("click", function() {window.location.href = "index.html";});


var cartButton = document.getElementById("cart-button");
var popupContent = document.querySelector(".popup-content");

cartButton.addEventListener("click", function() {
   popupContent.classList.toggle("show");
});
