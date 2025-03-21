let glowing_codeverse_logo = document.getElementById("glowing-codeverse-logo");
const keyframes = [
    { opacity: '10%' },
    { opacity: '35%' },
    { opacity: '50%' },
    { opacity: '65%' },
    { opacity: '80%' }, 
    { opacity: '100%' },
    { opacity: '80%' },
    { opacity: '65%' },
    { opacity: '50%' },
    { opacity: '35%' },
    { opacity: '20%' }, 
    { opacity: '0%' }
];

const options = {
    duration: 12000,
};

window.onload = function(){
    alert("please click on any part to start");
    window.onclick = function(){

        console.log("clicked")
    glowing_codeverse_logo.style.display = "block";
    let animation = glowing_codeverse_logo.animate(keyframes, options);
    animation.addEventListener("finish", function(){
        glowing_codeverse_logo.style.display = "none";
        window.location.href = "./main.html";
    })
    
    const intro_soundeffect = document.getElementById("intro-soundeffect");
        intro_soundeffect.play()
        window.onclick = false;
        
}, { once: true }
}