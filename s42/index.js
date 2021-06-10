// console.log(document)

//  .querySelector()

$(document).ready(function () {
	console.log('ready!');

	$('#alert').hide();
});

let firstNameLabel = document.querySelector('#label-firstName');

// console.log(firstNameLabel.innerHTML);

// let city = 'New York';

// if (city === 'New York') {
// 	firstNameLabel.innerHTML = `I like <br> <strong> ${city} </strong>`;
// } else {
// 	firstNameLabel.innerHTML = `I'm not a fan of New York, I like ${city}`;
// }

let lastNameLabel = document.querySelector('#label-lastName');

let myAlert = document.querySelector('#alert');

// lastNameLabel.innerHTML = 'My favorite food is Salad.';

let firstNameInput = document.querySelector('#txt-first-name');

let lastNameInput = document.querySelector('#txt-last-name');

let spanFullName = document.querySelector('#span-full-name');

// let spanFirstName = document.querySelector('#span-first-name');

// let spanLastName = document.querySelector('#span-last-name');

let firstName = firstNameInput.value;
let lastName = lastNameInput.value;

firstNameLabel.addEventListener('click', e => {
	firstNameLabel.innerHTML = `I've been clicked!`;
	firstNameLabel.style.color = 'green';
	// console.log(e.target.style.color);
});

lastNameLabel.addEventListener('click', () => {
	if (lastNameLabel.style.color !== 'red') {
		lastNameLabel.style.color = 'red';
		lastNameLabel.style.fontSize = '10vh';
	} else if (lastNameLabel.style.color === 'red') {
		lastNameLabel.style.color = 'black';
		lastNameLabel.style.fontSize = '16px';
	}
});

// firstNameInput.addEventListener('keyup', e => {
// 	spanFullName.innerHTML = e.target.value;
// });

const showFirstName = e => {
	// console.log(e.target.value);
	firstName = e.target.value;
	spanFullName.innerHTML = `: ${firstName} ${lastName}.`;
};

const showLastName = e => {
	// console.log(e.target.value);
	lastName = e.target.value;
	spanFullName.innerHTML = `: ${firstName} ${lastName}.`;
};

// const showFirstName = e => {
// 	console.log(e.target.value);
// 	spanFirstName.innerHTML = e.target.value;
// };

// const showLastName = e => {
// 	console.log(e.target.value);
// 	spanLastName.innerHTML = e.target.value;
// };

firstNameInput.addEventListener('keyup', showFirstName);
lastNameInput.addEventListener('keyup', showLastName);

const submit = e => {
	e.preventDefault();
	if (!firstName.trim('').length || !lastName.trim('').length) {
		myAlert.innerHTML = `Please input a first and last name.`;
		$('#alert').show();
	} else {
		myAlert.innerHTML = `Thank you for registering, ${firstName} ${lastName}.`;
		$('#alert').show();
		firstNameInput.value = '';
		lastNameInput.value = '';
	}
};

document.querySelector('#form').addEventListener('submit', submit);
