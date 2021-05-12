const themeSwitch = document.querySelector('.button')
const message = document.getElementById('message')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const getInfo = () => {
	let firstname = document.form.firstname.value
	let lastname = document.form.lastname.value
	let email = document.form.email.value
	let password = document.form.password.value
	let confirmpassword = document.form.confirmpassword.value

	if (
		firstname.length !== 0 &&
		lastname.length !== 0 &&
		email.length !== 0 &&
		password.length !== 0 &&
		confirmpassword.length !== 0 &&
		password.length >= 8 &&
		password === confirmpassword
	) {
		message.innerHTML = `Thanks for logging your information.`
		message.style.padding = '1rem'
	} else if (password.length < 8 && password !== confirmpassword) {
		message.innerHTML = `Password does not match, and password should be at least 8 characters in length.`
		message.style.padding = '1rem'
	} else if (password.length < 8 && password.length > 0) {
		message.innerHTML = `Password should be at least 8 characters in length.`
		message.style.padding = '1rem'
	} else if (password !== confirmpassword) {
		message.innerHTML = `Password does not match`
		message.style.padding = '1rem'
	} else {
		message.innerHTML = `Please fill in your Information.`
		message.style.padding = '1rem'
	}
}
