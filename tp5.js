let secret=Math.floor(Math.random()*10)+1;
let attempts=0;
let guess;

do{
    guess=parseInt(prompt("donner un nombre enter 1 et 10"));
    attempts++;
    if(guess>secret ){
        alert("nombre pleus grounde ");
        attempts++;
    }else if (guess<secret);{
        alert("nombre plus  putite");
        attempts++;
    }
}while(guess!==secret);
alert("score"+ attempts);
