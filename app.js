const WORDS = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`;
const SPECIAL = `@%+\\/'!#$^?:.(){}[]~`;

let lengthEl = document.getElementById("length");

function generate() {
    let length = lengthEl.value;

    for (let i = 0; i < 4; i++) {
        let textField = document.getElementById("textbox" + i);
        let password = "";
        for (let j = 0; j < length; j++) {
            let index = Math.floor(Math.random() * (WORDS + SPECIAL).length);
            password += (WORDS + SPECIAL)[index];
        }
        textField.value = password;
    }
}
function copy(index) {
    let text = document.getElementById("textbox" + index).value;
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}
