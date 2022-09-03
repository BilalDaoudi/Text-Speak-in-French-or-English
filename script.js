
function Length_text(){
    let text = document.getElementById("text").value;
    document.getElementById("length").innerHTML = text.length;

}

document.getElementById('btn').addEventListener("click", function Speak() {
    const speech = new SpeechSynthesisUtterance();
    let text = document.getElementById("text").value;
    // alert('text')
    speech.text = text;
    speech.rate = 1;
    speech.volume = 1;

    speech.pitch = 1;
    // speech.lang = "fr-FR";

    // speech.lang = "en-US";
    speechSynthesis.speak(speech);
})
