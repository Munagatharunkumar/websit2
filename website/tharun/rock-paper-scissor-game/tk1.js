let userscore = 0;
let  computerscore = 0;
let user_score_span = document.getElementById("user-score");
let comp_score_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

let result = document.getElementById("fresult");



function getcomputerchoice()
{
    const choices = ['r','p','s'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices[randomnumber];
}


function converttoword(letter)
{
    if (letter === "r")return "Rock";
    if(letter === "p")return "paper";
    return "Scissor";

}

function  win(userchoice,computerchoice)
{
    userscore++;
    user_score_span.innerHTML = userscore;
    comp_score_span.innerHTML = computerscore;
    result.innerHTML = converttoword(userchoice) +"  beats " + converttoword(computerchoice)+"  . you win 😁";

}
function  loss(userchoice,computerchoice)
{
    computerscore++;
    comp_score_span.innerHTML = computerscore;
    user_score_span.innerHTML = userscore;
    result.innerHTML = converttoword(userchoice) +"  loses to  " + converttoword(computerchoice)+"  . you loss 😭🥶";


    
}
function  draw(userchoice,computerchoice)
{
    comp_score_span.innerHTML = computerscore;
    user_score_span.innerHTML = userscore;
    result.innerHTML = converttoword(userchoice) +"  draws to  " + converttoword(computerchoice)+"  . draw ayyindii oh no 🤕🤕";

}
function game(userchoice)
{
  
    const computerchoice = getcomputerchoice();
    switch(userchoice + computerchoice)
    {
        case "rs":
        case "sp":
        case "pr":
            win(userchoice,computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userchoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computerchoice);
            break;

    }
    
    

}
function main()
{


rock_div.addEventListener('click',function()
{
    game("r")
})

paper_div.addEventListener('click',function()
{
    game("p")
})
scissor_div.addEventListener('click',function()
{
    game("s")
})
}
main();