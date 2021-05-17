const themeSwitch = document.querySelector('.button')
let divMsg = document.getElementById('divMsg')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const students = [
	'Vil',
	'Rica',
	'Mark',
	'Roy',
	'Ariel',
	'Aldin',
	'Aliza',
	'Gisell',
	'Ian',
]

const addStudent = () => {
	let name = document.form.student.value
	students.push(name)
	console.log(`${students[students.length - 1]} is added.`)
	let msg = document.createElement('center')
	msg.style.padding = '0.5rem'
	msg.innerHTML = `${students[students.length - 1]} is added.`
	divMsg.appendChild(msg)
}

const deleteStudent = () => {
	console.log(`${students[students.length - 1]} is removed.`)

	let msg = document.createElement('center')
	msg.style.padding = '0.5rem'
	msg.innerHTML = `${students[students.length - 1]} is removed.`
	divMsg.appendChild(msg)

	students.pop()
}

const countStudent = () => {
	console.log(`There are ${students.length} students in the class.`)
	let msg = document.createElement('center')
	msg.style.padding = '0.5rem'
	msg.innerHTML = `There are ${students.length} students in the class.`
	divMsg.appendChild(msg)
}
