let username = prompt("Enter your username:");

let containsSpecialSymbol = /[,@.!]/.test(username);

if (containsSpecialSymbol) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  alert("Username accepted: " + username);
}
