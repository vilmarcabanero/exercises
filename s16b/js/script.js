const themeSwitch = document.querySelector('.button')
let divMsg = document.getElementById('divMsg')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const evenEvenChecker = () => {
	let num = document.form.number.value

	for (let i = 0; i <= num; i++) {
		if (i % 2 === 0 && !isNaN(i)) {
			console.log(`${i} is even`)
			let msg = document.createElement('center')
			msg.style.padding = '0.5rem'
			msg.innerHTML = `${i} is even`
			divMsg.appendChild(msg)
		} else if (i % 2 !== 0 && !isNaN(i)) {
			console.log(`${i} is odd`)
			let msg = document.createElement('center')
			msg.style.padding = '0.5rem'
			msg.innerHTML = `${i} is odd`
			divMsg.appendChild(msg)
		}
	}

	if (isNaN(num)) {
		console.log(`${num} is invalid number.`)
		let msg = document.createElement('center')
		msg.style.padding = '0.5rem'
		msg.innerHTML = `${num} is invalid number.`
		divMsg.appendChild(msg)
	}
}
