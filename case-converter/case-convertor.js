let textArea = document.querySelector("textarea");
function toUpperCase() {
    let words = textArea.value.toUpperCase().split(' ');
    textArea.value = words.join(' ');
}
function toLowerCase() {
    let words = textArea.value.toLowerCase().split(' ');
    textArea.value = words.join(' ');
}
function toProperCase() {
    let words = textArea.value.split(' ');
    for (let index in words){
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1).toLowerCase();
    }
    textArea.value = words.join(' ');
}
function toSentenceCase() {
    let words = textArea.value.split('. ');
    for (let index in words){
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1).toLowerCase();
    }
    textArea.value = words.join('. ');
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");

upperCaseButton.addEventListener("click", toUpperCase);
lowerCaseButton.addEventListener("click", toLowerCase);
properCaseButton.addEventListener("click", toProperCase);
sentenceCaseButton.addEventListener("click", toSentenceCase);
saveTextFileButton.addEventListener("click", () => {
    let text = textArea.value;
    let filename = "text.txt";
    download(filename, text);
});
