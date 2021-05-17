const themeSwitch = document.querySelector('.button')
let divMsg = document.getElementById('divMsg')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

function display() {
	for (let i = 0; i <= 1000; i++) {
		if (i % 5 === 0) {
			console.log(i)
			let msg = document.createElement('span')
			msg.style.padding = '0.5rem'
			msg.innerHTML = i
			divMsg.appendChild(msg)
		}
	}
}

//For the requirement
for (let i = 0; i <= 1000; i++) {
	if (i % 5 === 0) {
		console.log(i)
	}
}
