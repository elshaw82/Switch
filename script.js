const lightSwitch = document.querySelector('.switch').addEventListener('click', colorToggle);


function colorToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");

    this.classList.toggle('switch-on');
    this.classList.toggle('switch-off');
    // var switchButton = document.getElementById('switch');
    // switchButton.classList.add('switch-on');
    }
    // var clickSwitch = document.getElementById("switch");
    // clickSwitch.classList.toggle("reverse");
// function classToggle() {
//     this.classList.toggle('switch-on');
//     this.classList.toggle('switch-off');
// }