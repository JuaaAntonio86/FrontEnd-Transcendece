export default function createUser() {
	return `<div class="app" style="background-color: white;">
				<div class="bar_nav_flex">
					<div class="bar_nav">
						<button type="button" class="btn btn-primary">My Profile</button>
						<button type="button" class="btn btn-primary">Game Statistics</button>
						<button type="button" class="btn btn-primary">Friends</button>
						<button type="button" class="btn btn-primary">High Scores</button>
						<button type="button" class="btn btn-primary">Chat</button>
					</div>
				</div>
					<div class="container">
					<h1>Contact Us</h1>
					<form id="contactForm">
						<div class="mb-3">
							<label for="name" class="form-label">Name</label>
							<input type="text" class="form-control" id="name" name="name" required>
						</div>
						<div class="mb-3">
							<label for="email" class="form-label">Email</label>
							<input type="email" class="form-control" id="email" name="email" required>
						</div>
						<div class="mb-3">
							<label for="message" class="form-label">Message</label>
							<textarea class="form-control" id="message" name="message" rows="3" required></textarea>
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
					</div>
				</div>`;
}