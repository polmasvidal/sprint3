// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');
var email = document.querySelector('.email');
var lastName = document.querySelector('.lastName');
var address = document.querySelector('.address');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');
var errorAddress = document.getElementById('errorAddress'); 
var errorEmail = document.getElementById('errorEmail');    

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    var letters = /^[A-Za-z]+$/;
    if (name.value !== letters || name.value == '' || name.value.length < 3) {
        name.style.borderColor = "red";
        errorName.style.display = 'block';
    }
    if (lastName.value !== letters || lastName.value == '' || lastName.value.length < 3) {
        lastName.style.borderColor = "red";
        errorName.style.display = 'block';
    }
    var numbersLetters = /[^A-Za-z0-9]+/;
    if (password.value !== numbersLetters || password.value == '' || password.value.length < 3) {
        password.style.borderColor = "red";
        errorPassword.style.display = 'block';
    }
    var numbers = /^[0-9]+$/;
    if (phone.value !== numbers || phone.value == '' || phone.value.length < 3) {
        phone.style.borderColor = "red";
        errorPhone.style.display = 'block';
    }
    var emailCharacters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value !== emailCharacters || email.value == '' || email.value.length < 3) {
        email.style.borderColor = "red";
        errorEmail.style.display = 'block';
    }
    if (address.value !== numbersLetters || address.value == '' || address.value.length < 3) {
        address.style.borderColor = "red";
        errorAddress.style.display = 'block';
    }
}
