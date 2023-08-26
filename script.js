
function Length_text(){
    let text = document.getElementById("text").value;
    document.getElementById("length").innerHTML = text.length;
}

document.getElementById('btn').addEventListener("click", function Speak() {
    const speech = new SpeechSynthesisUtterance();
    let lang = document.getElementById("langue").value;
    let text = document.getElementById("text").value;
    // alert('text')
    speech.text = text;
    speech.rate = 1;
    speech.volume = 1;

    speech.pitch = 1;
    if (lang === "fr") {
        speech.lang = "fr-FR"; // Code de langue pour le français
    } else if (lang === "en") {
        speech.lang = "en-US"; // Code de langue pour l'anglais
    }
    speechSynthesis.speak(speech);
})



const langueSelect = document.getElementById("langue");
    const elementsFr = document.querySelectorAll(".fr");
    const elementsEn = document.querySelectorAll(".en");
    langueSelect.addEventListener("change", function() {
      const selectedValue = langueSelect.value;
      
      if (selectedValue === "fr") {
        elementsFr.forEach(element => {
          element.style.display = "block";
        });
        elementsEn.forEach(element => {
          element.style.display = "none";
        });
      } else if (selectedValue === "en") {
        elementsFr.forEach(element => {
          element.style.display = "none";
        });
        elementsEn.forEach(element => {
          element.style.display = "block";
        });
      }
    });