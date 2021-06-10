$(document).ready(function () {
	console.log('Document ready!');

	$('#alert').hide();
	if (
		document.querySelector('#div-post-entries').innerHTML.trim('').length === 0
	) {
		document.getElementById('posts').innerHTML = 'Please add a new post.';
	} else {
		document.getElementById('posts').innerHTML = 'Posts';
	}
});

let posts = [];
let count = 1;
let myAlert = document.querySelector('#alert');
let titleInput = document.querySelector('#txt-title');
let bodyInput = document.querySelector('#txt-body');

// console.log($('#form-add-post'));
// console.log(document.querySelector('#form-add-post'));

document.querySelector('#form-add-post').addEventListener('submit', e => {
	e.preventDefault();

	if (!titleInput.value.trim('').length || !bodyInput.value.trim('').length) {
		myAlert.innerHTML = 'Please input a title and body of the post.';
		$('#alert').show(200);
		setTimeout(function () {
			$('#alert').hide(500);
		}, 2000);
	} else {
		posts.push({
			id: count,
			title: titleInput.value,
			body: bodyInput.value,
		});
		count++;
		showPosts(posts);

		if (
			document.querySelector('#div-post-entries').innerHTML.trim('').length ===
			0
		) {
			document.getElementById('posts').innerHTML = 'Please add a new post.';
		} else {
			document.getElementById('posts').innerHTML = 'Posts';
		}

		titleInput.value = '';
		bodyInput.value = '';
	}

	// myAlert.innerHTML = 'Successfully added a post.';
	// $('#alert').show(200);
	// setTimeout(function () {
	// 	$('#alert').hide(500);
	// }, 2000);
});

const showPosts = posts => {
	let postEntries = '';

	posts.forEach(post => {
		postEntries += `
		<hr>
		<div id='post-${post.id}'>
			<h3 id='post-title-${post.id}'>${post.title}</h3>
			<p id='post-body-${post.id}'> ${post.body}</p>
			
			<div class='row'>
				<div class='col'>
				<button class="btn btn-primary w-100" onclick='editPost(${post.id})'>Edit</button>
				</div>

				<div class='col'>
				<button class="btn btn-primary w-100" onclick='deletePost(${post.id})'>Delete</button>
				</div>
			</div>
		</div>
		
	`;
	});

	// console.log(postEntries);

	document.querySelector('#div-post-entries').innerHTML = postEntries;
};
