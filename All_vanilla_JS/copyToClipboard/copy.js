const input = document.querySelector("#input");
const button = document.querySelector("button.btn");

btn.onclick = function(){
    input.select();
    document.execCommand('copy');

    alert("copy")
}