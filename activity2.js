var score = localStorage.getItem("score");

function getScore(){
    document.getElementById("updateScore").innerHTML=score;

}

function backButton(){
    window.location="activity_1.html";
}