import aboutView from './views/highScores.js';
import createUser from './views/createUser.js';
import loginView from './views/loginView.js';

function handleRouteChange() {
	const path = window.location.pathname;
	let view;
	switch (path) {
		case '/Profile':
			view = aboutView();
			break;
		case '/Signup':
			view = createUser();
			break;
		case '/login':
			view = loginView();
			break;
		default:
			view = '<h1>404</h1>';
	}
	document.getElementById('app').innerHTML = view;
}

function homeView() {
	return '<h1>Home Page</h1>';
}

// Call handleRouteChange when the page loads
window.addEventListener('load', handleRouteChange);
// 'popstate': This is the event type being listened for. The popstate event is triggered when the active history entry changes.
window.addEventListener('popstate', handleRouteChange);

window.addEventListener('submit', function(event) {
	event.preventDefault(); 
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const formData = {
		email: email,
		password: password
	};
	const jsonString = JSON.stringify(formData);
	console.log(jsonString);
	// Optionally, you can send the JSON to a server using fetch
	// fetch('/your-endpoint', {
	//     method: 'POST',
	//     headers: {
	//         'Content-Type': 'application/json'
	//     },
	//     body: jsonString
	// }).then(response => response.json())
	//   .then(data => console.log(data))
	//   .catch(error => console.error('Error:', error));
});

document.querySelectorAll('.route').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		history.pushState(null, '', this.href);
		handleRouteChange();
	});
});

handleRouteChange();

