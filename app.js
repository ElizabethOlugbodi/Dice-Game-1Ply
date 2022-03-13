let images = ["dice_1.png",
"dice_2.png",
"dice_3.png",
"dice_4.png",
"dice_5.png",
"dice_6.png"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6)
        ;
        // let dieTwoValue = Math.floor(Math.random()*6)
        // ;
        console.log(dieOneValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        // document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your Roll is" + ( (dieOneValue +1) );
        // document.querySelector("#total").innerHTML = "You Won" + (dieOneValue +1 >=20);
        // document.querySelector("#total").innerHTML = "You Loose" + (dieOneValue +1 <=1);
    if (dieOneValue >= 6) {
        document.querySelector ("#total").innerHTML = "You Won, Congratulations";
    } else if (dieOneValue < 1) {
        document.querySelector ("#total").innerHTML = "You Loose, Try Again";
    }
    },
    1000
    );
}
roll();

