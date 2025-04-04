let count_timer = document.getElementById("timer-count");
let start_text = document.getElementById("start-text");
let start_blur = document.getElementById("start-blur");
let story_text = document.getElementById("story-title-text");
let story_content_text = document.getElementById("story-content-text");
let start_the_chapter_button = document.getElementById("start-chapter");
let i = 3;
let index = 0;
let index2 = 0;

let story_text_value = "Chapter 1: In an unknown place!";
let story_text_value2 = "hello";


function text_writing_effect() {
    if (index < story_text_value.length) {
        story_text.innerHTML += story_text_value[index];
        index++;
        setTimeout(text_writing_effect, 200);

    } else {
        content_writing_effect();
    }
}

function content_writing_effect() {
    if (index2 < story_text_value2.length) {
        story_content_text.innerHTML += story_text_value2[index2];
        index2++;
        setTimeout(content_writing_effect, 200);
    }else{
        start_the_chapter_button.disabled = false;
    }
}
start_the_chapter_button.addEventListener("click", function(){
    start_text.style.display = "block";
        start_blur.style.display = "block";
        setInterval(count_down, 1000);
})
function count_down() {
    if (i > 0) {
        console.log(i);
        count_timer.innerHTML = i;
        i--;
    } else {
        i = 0;
        start_text.style.display = "none";
        start_blur.style.display = "none";
        story_text.style.display = "block";
        window.location.href = "./chapter1.html";
    }
}

text_writing_effect();