const themeSwitch = document.querySelector('.button')
let divMsg = document.getElementById('divMsg')

themeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme')
})

const display = () => {
	const favArtists = [
		'Moira Dela Torre',
		'Parokya ni Edgar',
		'Davichi',
		'IU',
		'Ed Sheeran',
		'Hyun Bin',
		'Howl',
		'Kiss',
	]

	console.log(`The first band in my array is ${favArtists[0]}`)
	console.log(`The third band in my array is ${favArtists[2]}`)
	console.log(`The number of bands in my array is ${favArtists.length}`)
	console.log(
		`The last band in my array is ${favArtists[favArtists.length - 1]}`
	)

	let msg = document.createElement('center')
	msg.style.padding = '0.5rem'
	msg.innerHTML = `The first band in my array is ${
		favArtists[0]
	}<br> <br>The third band in my array is ${
		favArtists[2]
	} <br><br> The number of bands in my array is ${
		favArtists.length
	} <br><br> The last band in my array is ${favArtists[favArtists.length - 1]}`
	divMsg.appendChild(msg)
}
