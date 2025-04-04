let slot1_div = document.getElementById("slot1");
let slot2_div = document.getElementById("slot2");
let slot3_div = document.getElementById("slot3");
let slot4_div = document.getElementById("slot4");
let slot_title1 = document.getElementById("s-title1");
let slot_title2 = document.getElementById("s-title1");
let slot_title3 = document.getElementById("s-title1");
let slot_title4 = document.getElementById("s-title1");
let username_prompt;
function SaveSlot(){
    let click_sound = document.getElementById("click-sound");
    click_sound.play();
    username_prompt = prompt("please write your name?");
    let username_localstorage = localStorage.setItem("username", username_prompt);
    
            if(username_prompt != ""){
                
                window.location.href = "./choose-character.html";
            }else{
                let username_prompt = prompt("please write your name?");
                        }
}
slot1_div.onclick = function(){
   SaveSlot();
   slot_title1.innerHTML = localStorage.getItem("username");
    }
    slot2_div.onclick = function(){
        SaveSlot();
         }
         slot3_div.onclick = function(){
            SaveSlot();
             }
             slot4_div.onclick = function(){
                SaveSlot();
                 }