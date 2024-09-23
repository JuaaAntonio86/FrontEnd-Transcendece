export default function loginView() {
	const loginViewHTML= `<div class="form_div">
				<div class="form_container">
					<div class="mt-3">
						<a href="#" class="btn btn-secondary btn-with-bg">
							Sign in with
							<img src="../images/42_Logo.svg" alt="Service Logo" style="width: 80px; height: 60px; margin-right: 5px; margin-left: 10px;">
						</a>
					</div>
					<form id="loginForm">
						<br>
						<div class="form_separator">
							--------------- or ----------------
						</div>
						<br>
						<div class="mb-3">
							<label for="email" class="form-label">Email address</label>
							<input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Password</label>
							<input type="password" class="form-control" id="password" required>
						</div>
						<button type="submit" class="btn btn-primary">Sign In</button>
					</form>
						<div class="mt-3">
							<a href="/Signup" class="link-primary">Don't have an account? Sign up</a>
						</div>
				</div>
			</div>`;
			
			document.getElementById('app').innerHTML = loginViewHTML;

			// Add event listener after the view is rendered
			document.getElementById('loginForm').addEventListener('submit', function(event) {
				event.preventDefault(); // Prevent the default form submission
		
				// Collect the form data
				const email = document.getElementById('email').value;
				const password = document.getElementById('password').value;
		
				// Create a JSON object
				const formData = {
					email: email,
					password: password
				};
		
				// Convert the JSON object to a string
				const jsonString = JSON.stringify(formData);
		
				// Log the JSON string to the console (or send it to a server)
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
		}
		
		// function handleRouteChange() {
		// 	// Your route handling logic
		// 	loginView(); // Call the function to render the login view
		// }
		
		// document.addEventListener('DOMContentLoaded', function() {
		// 	handleRouteChange();
		// 	console.log("Hello");
		// });

