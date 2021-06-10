$(document).ready(function () {
	console.log('Document ready!');

	$('#alert').hide();
	checkPost();
});

let posts = [];
let count = 1;
let myAlert = document.querySelector('#alert');
let titleInput = document.querySelector('#txt-title');
let bodyInput = document.querySelector('#txt-body');

const showAlert = msg => {
	myAlert.innerHTML = msg;
	$('#alert').show(200);
	setTimeout(function () {
		$('#alert').hide(500);
	}, 2000);
};

const checkPost = () => {
	if (
		document.querySelector('#div-post-entries').innerHTML.trim('').length === 0
	) {
		document.getElementById('posts').innerHTML = 'Please add a new post.';
	} else {
		document.getElementById('posts').innerHTML = 'Posts';
	}
};

document.querySelector('#form-add-post').addEventListener('submit', e => {
	e.preventDefault();

	if (!titleInput.value.trim('').length || !bodyInput.value.trim('').length) {
		showAlert('Please input a title and body of the post.');
	} else {
		posts.push({
			id: count,
			title: titleInput.value,
			body: bodyInput.value,
		});
		count++;
		showPosts(posts);

		showAlert('Successfully added a post.')
		checkPost();

		titleInput.value = '';
		bodyInput.value = '';
	}
});

const showPosts = posts => {
	let postEntries = '';

	posts.forEach(post => {
		postEntries += `
		
		<div id='post-${post.id}'>
		<hr>
			<h3 id='post-title-${post.id}'>${post.title}</h3>
			<p id='post-body-${post.id}'> ${post.body}</p>
			
			<div class='row'>
				<div class='col'>
				<button data-toggle="modal" data-target="#updateModal" class="btn btn-primary w-100" onclick='editPost(${post.id})'>Edit</button>
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

const editPost = id => {
	console.log(id);
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	document.querySelector('#txt-edit-id').value = id;
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;
};

document.querySelector(`#form-edit-post`).addEventListener('submit', e => {
	e.preventDefault();

	posts.forEach(post => {
		if (post.id.toString() === document.querySelector('#txt-edit-id').value) {
			post.title = document.querySelector('#txt-edit-title').value;
			post.body = document.querySelector('#txt-edit-body').value;

			showPosts(posts);
			showAlert('Post successfully updated.');

			return;
		}
	});
});

document.getElementById('delete-all-btn').addEventListener('click', () => {
	posts = [];
	showPosts(posts);
	checkPost();
	showAlert('Successfully deleted all posts.');
});

document.getElementById('delete-last-btn').addEventListener('click', e => {
	posts.pop();
	showPosts(posts);
	checkPost();
	showAlert('Successfully deleted the last post.');
});

const deletePost = id => {
	posts = posts.filter(item => item.id !== id);
	showPosts(posts);
	checkPost();
	showAlert('Post successfully deleted.');
};
