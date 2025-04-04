let choose_character_image = document.getElementById("choose-character-image");
let character1 = document.getElementById("character1");
let character2 = document.getElementById("character2");
let character3 = document.getElementById("character3");
const keyframes = [
    {
        marginBottom: '100px',
        width: '500px', 
        height: '60px'
     },
    {marginBottom: '200px',
        width: '450px', 
        height: '55px'
     },
    { marginBottom: '300px' },
    { marginBottom: '400px' },
    { marginBottom: '500px' }, 
];

const options = {
    duration: 1500,
};

window.onload = function(){
    let animation = choose_character_image.animate(keyframes, options);
        choose_character_image.style.marginBottom = `500px`;
        choose_character_image.style.width = `450px`;
        choose_character_image.style.height = `55px`;
        animation.addEventListener("finish", function(){
            character1.style.display = "block";
            character2.style.display = "block";
            character3.style.display = "block";
        })
            
}
character1.addEventListener("click", function(){
    window.location.href = "./levels.html";
})
character2.addEventListener("click", function(){
    window.location.href = "./levels.html";
})
character3.addEventListener("click", function(){
    window.location.href = "./levels.html";
})

