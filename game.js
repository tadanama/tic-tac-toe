// Variable to track the board state
let board = ["", "", "", "", "", "", "", "", ""];

// First player has the 'X' marker
let marker = "X";

// Select all buttons
const buttons = document.querySelectorAll("button");

// Add click event listeners to all buttons to mark the board
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		// Pass the current button node and its index
		makeMove(this, i);
	});
}

function makeMove(currentButton, currentButtonIndex) {
	// Select the paragraph that display error message
	const errorMessage = document.querySelector("p");

	// Remove the paragraph from DOM
	if (errorMessage) {
		errorMessage.remove();
	}

	// Check if the tic tac toe cell is empty
	if (currentButton.textContent === "") {
		// Mark the board
		currentButton.textContent = marker;

		// Update the board state
		board[currentButtonIndex] = marker;
		console.log(board);

		// Check if the user won
		const winner = checkWin();

		if (winner) {
			console.log(winner + " wins.");
			displayWinner(winner);

			setTimeout(() => {
				document.querySelector("p").textContent = "";
				resetGame();
			}, 3000);
		} else if (checkDraw()) {
			alert("it is a draw");
		} else {
			changeMarker();
		}
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
