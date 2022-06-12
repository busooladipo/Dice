const comnt = document.getElementById("comment")
const p1ScoreBrd = document.getElementById("p1sB")
const p2ScoreBrd = document.getElementById("p2sB")
const p1Score = document.getElementById("p1Score")
const p2Score = document.getElementById("p2Score")
const rollBtn = document.getElementById("roll")
const resetBtn = document.getElementById("reset")


const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")


let player1 = true
let player2 = false
let tScore1 = 0
let tScore2 = 0

resetBtn.addEventListener("click", function(){
    player1 = true
    player2 = false
    tScore1 = 0
    tScore2 = 0
    p1Score.textContent = "0"
    p2Score.textContent = "0"
    p1ScoreBrd.textContent = "0"
    p2ScoreBrd.textContent = "0"
    comnt.textContent = "Player1! CLICK ON 'ROLL DICE' TO START AGAIN!"
    rollBtn.classList.add("show")
    resetBtn.classList.remove("show")
})

rollBtn.addEventListener("click", function(){
    swap()
    won()
})


function swap(){
    let randnumb = Math.floor(Math.random()*6) + 1;
    
    if(player1){
    
    const score1 = randnumb
    p1Score.textContent = score1
    tScore1+= score1
    p1ScoreBrd.textContent = tScore1
    comnt.textContent = "PLAYER 2's turn"
    p1ScoreBrd.classList.remove("shadow")
    p1Score.classList.remove("shadow")
    p2ScoreBrd.classList.add("shadow")
    p2Score.classList.add("shadow")
    player1 = false
      
    }else{
        const score2 = randnumb
        p2Score.textContent = score2
        tScore2+= score2
        p2ScoreBrd.textContent = tScore2
        comnt.textContent = "PLAYER 1's turn"
        p1ScoreBrd.classList.add("shadow")
        p1Score.classList.add("shadow")
        p2Score.classList.remove("shadow")
        p2ScoreBrd.classList.remove("shadow")
        player1 = true
    }


    if (randnumb === 1){
        img1.classList.add("show")
    }else{
        img1.classList.remove("show")
    };
    if (randnumb === 2){
        img2.classList.add("show")
    }else{
        img2.classList.remove("show")
    };
    if (randnumb === 3){
        img3.classList.add("show")
    }else{
        img3.classList.remove("show")
    };
    if (randnumb === 4){
        img4.classList.add("show")
    }else{
        img4.classList.remove("show")
    };
    if (randnumb === 5){
        img5.classList.add("show")
    }else{
        img5.classList.remove("show")
    };
    if (randnumb === 6){
        img6.classList.add("show")
    }else{
        img6.classList.remove("show")
    };
}


function won(){
    if (player1 === true && tScore1 >= 30 && tScore1 > tScore2){
        comnt.textContent = "PLAYER 1 has WON!!!"
        rollBtn.classList.remove("show")
        resetBtn.classList.add("show")
    }else if(player2 = true && tScore2 >= 30 && tScore2 > tScore1){
        comnt.textContent = "PLAYER 2 has WON!!!"
        rollBtn.classList.remove("show")
        resetBtn.classList.add("show")
    }
}

