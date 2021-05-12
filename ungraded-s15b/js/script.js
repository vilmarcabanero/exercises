const themeSwitch = document.querySelector('.button')
const message = document.getElementById('message')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const checkHeight = () => {
	if (document.form.height.value < 150) {
		console.log('Did not pass the minimum requirement')
		// alert(`Did not pass the minimum requirement`)
		message.innerHTML = `Did not pass the minimum requirement`
	} else {
		// console.log('Passed the minimum requirement.')
		// alert('Passed the minimum requirement.')
		message.innerHTML = `Passed the minimum requirement.`
		message.style.padding = '1rem'
	}
}

const checkName = () => {
	if (document.form.name.value.toLowerCase() === 'romeo') {
		message.innerHTML = `Your new name is Juliet`
		message.style.padding = '1rem'
	} else {
		message.innerHTML = `Your new name is Hamlet`
		message.style.padding = '1rem'
	}
}

//pure console.

const heightRequirement = height => {
	if (height < 150) console.log('Did not pass the minimum requirement')
	else console.log('Passed the minimum requirement.')
}

heightRequirement(150)
heightRequirement(149)
