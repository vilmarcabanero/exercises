const themeSwitch = document.querySelector('.button')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const checkHeight = () => {
	if (document.form.height.value < 150) {
		console.log('Did not pass the minimum requirement')
		alert(`Did not pass the minimum requirement`)
	} else {
		console.log('Passed the minimum requirement.')
		alert('Passed the minimum requirement.')
	}
}

//pure console.

const heightRequirement = height => {
	if (height < 150) console.log('Did not pass the minimum requirement')
	else console.log('Passed the minimum requirement.')
}

heightRequirement(150)
heightRequirement(149)
