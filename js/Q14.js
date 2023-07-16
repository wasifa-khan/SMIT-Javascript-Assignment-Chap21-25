let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Enter an item to search for:");

let found = false;

for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert("The item '" + userInput + "' is found in the list.");
} else {
  alert("The item '" + userInput + "' is not found in the list.");
}
