let story_content_paragraph = document.getElementById("story-content-paragraph");
let next_button = document.getElementById("next-button");
let index = 0;

let story_text_value = "Andrew was being here for too long. He loves the adventures, but something had gone wrong!!";


function text_writing_effect() {
    if (index < story_text_value.length) {
        story_content_paragraph.innerHTML += story_text_value[index];
        index++;
        setTimeout(text_writing_effect, 200);

    }
    
}

text_writing_effect();

next_button.addEventListener("click", function(){
    story_content_paragraph.innerHTML = "";
    story_text_value = "Now, he is lying in a dark unknown place without his adventurer clothes";
    index = 0;
    text_writing_effect();
})

