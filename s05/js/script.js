function submitForm() {
	let submit = document.getElementById('submit')

	submit.innerHTML = 'Inquiry sent! Thank you.'

  event.preventDefault()

  setTimeout(() => {
		refresh('')
	}, 2000)
}

function refresh() {
  window.location.reload()
}

