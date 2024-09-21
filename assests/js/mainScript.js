import aboutView from './views/highScores.js';
import createUser from './views/createUser.js';

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
	default:
		view = '<h1>404</h1>';
	}
	document.getElementById('app').innerHTML = view;
}

function homeView() {
	return '<h1>Home Page</h1>';
}

window.addEventListener('popstate', handleRouteChange);

document.querySelectorAll('.route').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		history.pushState(null, '', this.href);
		handleRouteChange();
	});
});

handleRouteChange();