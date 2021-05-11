const themeSwitch = document.querySelector('.button');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

function displayUserInfo() {
	DisplayWindow = window.open(
		'',
		'NewWin',
		'toolbar=no,status=no,width=400,height=200,left=400'
	)


	let message = '<ul><li><b>First Name: </b>' + document.form1.firstname.value
	message += '<li><b>Last Name: </b>' + document.form1.lastname.value
	message += '<li><b>Email Address: </b>' + document.form1.email.value
	message += '<li><b>Mobile Number: </b>' + document.form1.phone.value + '</ul>'

  //For window pop up
	DisplayWindow.document.write(message)


  //For activity requirement, dynamic data
  console.log(`First name: ${document.form1.firstname.value} \n`)
  console.log(`First name: ${document.form1.lastname.value} \n`)
  console.log(`First name: ${document.form1.email.value} \n`)
  console.log(`First name: ${document.form1.phone.value} \n`)
}

//For activity requirement, hard coded data.
const userInfo = (firstName, lastName, email, mobileNumber) => {
	console.log(`First name: ${firstName} \n`)
	console.log(`Last name: ${lastName} \n`)
	console.log(`Email address: ${email} \n`)
	console.log(`Mobile Number: ${mobileNumber} \n`)
}

console.log('For activity requirement, hard coded data. \n \n')
userInfo('Vilmar', 'Cabañero', 'vilmarcabanero@gmail.com', '09278479060')

