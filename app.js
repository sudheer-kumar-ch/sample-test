let headingEl = document.getElementById("heading1");
let buttonEl = document.getElementById("button");
let normalEl = document.getElementById("normal");

buttonEl.onclick = function(){
    headingEl.textContent = "JavaScript";
}

normalEl.onclick = function(){
    headingEl.textContent = "HTML"
}

