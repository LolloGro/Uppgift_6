const results = document.querySelector("#toP");

const display = changeText("Tack så mycket!"); 

function changeText(newText){
return newText.toUpperCase();
}; 

results.innerText = display;