const themeSwitch = document.querySelector('.button')
const message = document.getElementById('message')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const checkHeight = () => {
	if (document.form.height.value < 150) {
		message.innerHTML = `Did not pass the minimum requirement`
		message.style.padding = '1rem'

		setTimeout(() => {
			message.style.padding = '0'
			message.style.transition = 'all 0.7s ease'
			message.innerHTML = ''
		}, 3000)
	} else {
		message.innerHTML = `Passed the minimum requirement.`
		setTimeout(() => {
			message.style.padding = '0'
			message.style.transition = 'all 0.7s ease'
			message.innerHTML = ''
		}, 3000)
	}
}

const checkName = () => {
	if (document.form.name.value.toLowerCase() === 'romeo') {
		message.innerHTML = `Your new name is Juliet`
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	} else {
		message.innerHTML = `Your new name is Hamlet`
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	}
}

//pure console.

const heightRequirement = height => {
	if (height < 150) console.log('Did not pass the minimum requirement')
	else console.log('Passed the minimum requirement.')
}

heightRequirement(150)
heightRequirement(149)

const checkWindspeed = () => {
	if (document.form.name.value <= 30 && !isNaN(document.form.name.value)) {
		message.innerHTML = `Windspeed of ${document.form.name.value} is not a typhoon yet. `
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	} else if (document.form.name.value <= 61 && !isNaN(document.form.name.value)) {
		message.innerHTML = `For windspeed of ${document.form.name.value}, a tropical depression is detected.`
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	} else if (document.form.name.value <= 88 && !isNaN(document.form.name.value)) {
		message.innerHTML = `For windspeed of ${document.form.name.value}, a tropical storm is detected.`
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	} else if (document.form.name.value <= 117 && !isNaN(document.form.name.value)) {
		message.innerHTML = `For windspeed of ${document.form.name.value}, a severe tropical storm is detected.`
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	} else {
		message.innerHTML = `${document.form.name.value}, is not a valid number.`
		message.style.padding = '1rem'
		setTimeout(() => {
			message.innerHTML = ''
		}, 3000)
	}
}
