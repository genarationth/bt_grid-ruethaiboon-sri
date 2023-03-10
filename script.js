function ChangeName(){
    const prompt = window.prompt("What's your name?"); // input ที่ใส่มา = prompt
    const name = document.querySelector(".myName"); //
    name.textContent = prompt;
}