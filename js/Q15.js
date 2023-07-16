let password = prompt("Enter your password:"); 
let containsAlphabets = /[a-zA-Z]/.test(password);
let containsNumbers = /[0-9]/.test(password);
let startsWithLetter = /^[a-zA-Z]/.test(password);
let isLengthValid = password.length >= 6;

if (
  containsAlphabets && containsNumbers && startsWithLetter && isLengthValid) {
  alert("Password accepted.");
}
else {
  alert(
    "Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long."
  );
}
