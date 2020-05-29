const lightSwitch = document.querySelector('#switch').addEventListener('click', colorToggle);


function colorToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");

    var clickSwitch = document.getElementById("switch");
    clickSwitch.classList.toggle("reverse");
}