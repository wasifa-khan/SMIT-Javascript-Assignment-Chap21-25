let string = "The quick brown fox jumps over the lazy dog";
string = string.toLowerCase();
let count = 0;
for(let i = 0 ; i<string.length ; i ++){
    if(string.slice(i,i+3) === "the"){
        count += 1;
    }
}
if(count >= 1){
    document.write("the word 'the' has occured : " + count + " times in given string");
}
else{
    document.write("there is no occurrennce of the word 'the'");
}