function rollDice() {
    let a = Math.round(Math.random()*6) + 1;
    let b = Math.round(Math.random()*6) + 1;
    console.log(a +  " -" + b);
    let str1 = "./images/dice"+a+".png"
    let str2 = "./images/dice"+b+".png"
    document.querySelector(".player-1 img").setAttribute("src",str1);
    document.querySelector(".player-2 img").setAttribute("src",str2);
    if(a > b) {
        document.querySelector(".result-text").textContent="Player 1 won the game";
    } else if(a < b) {
        document.querySelector(".result-text").textContent="Player 2 won the game";
    } else {
        document.querySelector(".result-text").textContent="Hmmm. Its a  tie.";
    }

}

