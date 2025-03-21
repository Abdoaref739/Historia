let particles_div = document.getElementById("particles");
let start_button = document.getElementById("start-button");
document.body.appendChild(particles_div);
particles_list = [];

for(i = 0; i < 50; i++){
let particles = document.createElement("div");
particles.classList.add("particles");
particles_div.appendChild(particles);
particles_list.push(particles);



let keyframes_values = [
    { transform: `translate(${Math.random() * 300 - 150}px, ${Math.random() * 100}px)` },
    { transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 10}px)` }
];


particles.animate(keyframes_values, {
    duration: 50000,
    iterations: Infinity
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



