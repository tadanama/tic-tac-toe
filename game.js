// First player has the 'X' marker
let marker = "X";

// Select all buttons
const buttons = document.querySelectorAll("button");

// Add click event listeners to all buttons to mark the board
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		makeMove(this);
	});
}

function makeMove(currentButton) {
	// Check if the tic tac toe cell is empty
	if (currentButton.textContent === "") {
		// Mark the board
		currentButton.textContent = marker;

		// Check if the user won
		// Else change the marker
		changeMarker();
	} else {
		// Create a p element to display message
		const message = document.createElement("p");
		// Set the message
		message.textContent = "Select an empty cell.";
		// Append the message element to the h1
		document.querySelector("h1").appendChild(message);
	}
}

// Change the marker to alternate the player's turn
function changeMarker() {
	if (marker === "X") {
		marker = "O";
	} else {
		marker = "X";
	}
}