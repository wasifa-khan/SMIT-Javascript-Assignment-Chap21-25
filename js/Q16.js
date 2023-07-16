let university = "University of Karachi";
let spl;

for(let i = 0; i<university.length ; i++){
    spl =  university[i].split(" ");
    spl = spl.toString();
    if(spl === ","){
        spl = " ";
    }
    document.write(spl);
}