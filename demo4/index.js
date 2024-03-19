// How to accept user input
// 1. EASY WAY - window prompt
// 2. PROFESSIONAL WAY - HTML textbox


let username;

username = window.prompt("Tell me your name.")

console.log(username);


// This is the second option which is change the H1.


let usernames;

document.getElementById("mysubmit").onclick = function(){
    usernames = document.getElementById("mytext").value;
    document.getElementById("myH1").textContent = `hello ${usernames};`
}