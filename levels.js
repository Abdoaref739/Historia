let level1_div = document.getElementById("level1-div");
let localStorage_player_name = window.localStorage.getItem("username");
let player_name = document.getElementById("player-name");
level1_div.addEventListener("click", function(){
    window.location.href = "./first-scene.html";
})
level1_div.addEventListener("mouseover", function(){
    document.body.style.backgroundImage = "url('./images/cd5b56422a69588a705ce33d190aee8c52cc0b0a3bfc97c68068bda227b948b2.png')";
})
level1_div.addEventListener("mouseout", function(){
    document.body.style.backgroundImage = "url('./images/04db4c74-a2c1-42f7-847d-a732f9d4a311.png')";
})
player_name.innerHTML = localStorage_player_name;