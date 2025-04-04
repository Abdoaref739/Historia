let particles_div = document.getElementById("particles");
let start_button = document.getElementById("start-button");
let options_button = document.getElementById("options-button");
let options_blur = document.getElementById("options-blur");
let options_div = document.getElementById("options-div");
document.body.appendChild(particles_div);
particles_list = [];


for(i = 0; i < 50; i++){
let particles = document.createElement("div");
particles.classList.add("particles");
particles_div.appendChild(particles);
particles_list.push(particles);

window.addEventListener('resize', () => {
    window.resizeTo(800, 600);
  });

let keyframes_values = [
    { transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 10}px)` },
    { transform: `translate(${Math.random() * 300 - 150}px, ${Math.random() * 100}px)` }
    
];


particles.animate(keyframes_values, {
    duration: 50000,
    iterations: 1
  });


}
function ParticlesAppear() {

    particles_list.forEach(particles => {
        particles.style.display = "block";
    });
}
start_button.onmouseover = function(){
    setTimeout(ParticlesAppear, 200);
}

function ParticlesDisappear() {
    particles_list.forEach(particles => {
        particles.style.display = "none";
    });
}
start_button.onmouseout = function(){
    ParticlesDisappear();
}


window.onclick = function(){
    let main_track = document.getElementById("main-track");
        main_track.play();
}

window.addEventListener('resize', () => {
    window.resizeTo(800, 600);
  });


  start_button.onclick = function(){
    let click_sound = document.getElementById("click-sound");
    click_sound.play();
    window.location.href = "./game-save.html";
  }

/*if(localStorage.getItem("Intro_sound_track_loaded")){
    let main_track = document.getElementById("main-track");
        main_track.play();
}*/
options_button.addEventListener("click", function(){
    options_blur.style.display = "block";
    options_div.style.display = "block";
})