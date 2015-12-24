function setNoPlayers() {
var players = document.getElementById("noOfPlayers").value;
var input = (document.createElement("input"))*players;
console.log(players);
if (players != 0) {
	input.type = "text";
	input.className = "archer_input"; // set the CSS class
	container.appendChild(input);
}
};
