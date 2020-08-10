var toggleButton = document.querySelector(".toggle-button");
var line1        = document.querySelector("#line-1");
var line2        = document.querySelector("#line-2");
var line3        = document.querySelector("#line-3");
var line4        = document.querySelector("#line-4");

toggleButton.addEventListener("click", function(){
    toggleButton.classList.toggle("toggle-button-active");
    line1.classList.toggle("line-1-active");
    line2.classList.toggle("line-2-active");
    line3.classList.toggle("line-3-active");
    line4.classList.toggle("line-4-active");
});