// const themeSwitch = document.querySelector('.button')
// let divMsg = document.getElementById('divMsg')

// themeSwitch.addEventListener('click', () => {
// 	document.body.classList.toggle('dark-theme')
// })

// const evenEvenChecker = () => {
// 	let num = document.getElementById('number').value

// 	if(num.trim('').length !== 0) {
// 		for (let i = 0; i <= num; i++) {
// 			if (i % 2 === 0 && !isNaN(i)) {
// 				console.log(`${i} is even`)
// 				let msg = document.createElement('center')
// 				msg.style.padding = '0.5rem'
// 				msg.innerHTML = `${i} is even`
// 				divMsg.appendChild(msg)
// 			} else if (i % 2 !== 0 && !isNaN(i)) {
// 				console.log(`${i} is odd`)
// 				let msg = document.createElement('center')
// 				msg.style.padding = '0.5rem'
// 				msg.innerHTML = `${i} is odd`
// 				divMsg.appendChild(msg)
// 			}
// 		}

// 		if (isNaN(num)) {
// 			console.log(`${num} is invalid number.`)
// 			let msg = document.createElement('center')
// 			msg.style.padding = '0.5rem'
// 			msg.innerHTML = `${num} is invalid number.`
// 			divMsg.appendChild(msg)
// 		}
// 	} else {
// 		console.log(`Please input a number.`)
// 			let msg = document.createElement('center')
// 			msg.style.padding = '0.5rem'
// 			msg.innerHTML = `Please input a number.`
// 			divMsg.appendChild(msg)
// 	}

// }

const studentGrades = [
	{ studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
	{ studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
	{ studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
	{ studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
	{ studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 },
]

studentGrades.forEach(student => {
	let sum = student.Q1 + student.Q2 + student.Q3 + student.Q4

	let average = sum / 4

	student.average = Number(parseFloat(average).toFixed(1))
})

console.log(studentGrades)

const average = () => {
	studentGrades.forEach(student => {
		let sum = student.Q1 + student.Q2 + student.Q3 + student.Q4

		let average = sum / 4

		student.average = Number(parseFloat(average).toFixed(1))
	})

	console.log(studentGrades)
	let msg = document.createElement('div')
	msg.style.padding = '0.5rem'
	msg.innerHTML = `<table class="table">
	<thead>
		<tr>
			<th scope="col">Student</th>
			<th scope="col">Q1 Grade</th>
			<th scope="col">Q2 Grade</th>
			<th scope="col">Q3 Grade</th>
			<th scope="col">Q4 Grade</th>
			
			<th scope="col">Average</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Student 1</th>
			<td>${studentGrades[0].Q1}</td>
			<td>${studentGrades[0].Q2}</td>
			<td>${studentGrades[0].Q3}</td>
			<td>${studentGrades[0].Q4}</td>
			<td>${studentGrades[0].average}</td>
		</tr>
		<tr>
			<th scope="row">Student 2</th>
			<td>${studentGrades[1].Q1}</td>
			<td>${studentGrades[1].Q2}</td>
			<td>${studentGrades[1].Q3}</td>
			<td>${studentGrades[1].Q4}</td>
			<td>${studentGrades[1].average}</td>
		</tr>
		<tr>
			<th scope="row">Student 3</th>
			<td>${studentGrades[2].Q1}</td>
			<td>${studentGrades[2].Q2}</td>
			<td>${studentGrades[2].Q3}</td>
			<td>${studentGrades[2].Q4}</td>
			<td>${studentGrades[2].average}</td>
		</tr>
		<tr>
			<th scope="row">Student 4</th>
			<td>${studentGrades[3].Q1}</td>
			<td>${studentGrades[3].Q2}</td>
			<td>${studentGrades[3].Q3}</td>
			<td>${studentGrades[3].Q4}</td>
			<td>${studentGrades[3].average}</td>
		</tr>
		<tr>
			<th scope="row">Student 5</th>
			<td>${studentGrades[4].Q1}</td>
			<td>${studentGrades[4].Q2}</td>
			<td>${studentGrades[4].Q3}</td>
			<td>${studentGrades[4].Q4}</td>
			<td>${studentGrades[4].average}</td>
		</tr>
	</tbody>
</table>`
	divMsg.appendChild(msg)


}
