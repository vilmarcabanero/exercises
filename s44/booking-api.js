$(document).ready(function () {
	console.log('Document ready!');

	$('#alert').hide();
});

let myAlert = document.querySelector('#alert');
const url = 'https://vc-booking-api.herokuapp.com/api';

const showAlert = msg => {
	myAlert.innerHTML = msg;
	$('#alert').show(200);
	setTimeout(function () {
		$('#alert').hide(500);
	}, 2000);
};

let fName = document.querySelector('#firstNameInput');
let lName = document.querySelector('#lastNameInput');
let email = document.querySelector('#emailInput');
let mobile = document.querySelector('#mobileNoInput');
let password = document.querySelector('#passwordInput');
let confirmPassword = document.querySelector('#confirmPWInput');

let emailInputLogin = document.querySelector('#emailInputLogin');
let passwordInputLogin = document.querySelector('#passwordInputLogin');

// console.log(fName, lName, email, mobile, password, confirmPassword);

document.querySelector('#register-form').addEventListener('submit', e => {
	e.preventDefault();
	console.log(
		fName.value,
		lName.value,
		email.value,
		mobile.value,
		password.value,
		confirmPassword.value
	);

	fetch(`${url}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			firstName: fName.value,
			lastName: lName.value,
			email: email.value,
			password: password.value,
			confirmPassword: confirmPassword.value,
			mobileNo: mobile.value,
		}),
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
      showAlert(data.message);
		})
		.catch(err => {
			console.log(err.message);
			showAlert(err.message);
		});
});

document.querySelector('#login-form').addEventListener('submit', e => {
	e.preventDefault();
	console.log(emailInputLogin.value, passwordInputLogin.value);

	fetch(`${url}/users/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: emailInputLogin.value,
			password: passwordInputLogin.value,
		}),
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			showAlert(data.message);
		})
		.catch(err => {
			console.log(err.message);
			showAlert(err.message);
		});
});
