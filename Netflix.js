function cancelChangeMode() {
    var element = document.querySelector('body')
    var head = document.querySelector('header')
    var circle = document.querySelector('#circle')
    element.style.backgroundColor = 'white'
    element.style.color = 'black'
    head.style.backgroundColor = 'black'
    circle.style.left = '0px'
}
function changeMode() {
    var element = document.querySelector('body')
    var head = document.querySelector('header')
    var circle = document.querySelector('#circle')
    head.style.backgroundColor = 'white'
    element.style.backgroundColor = 'black'
    element.style.color = 'white'
    circle.style.left = '40px'
}
function load() {
    alert("Welcome")
}
function submit() {
    alert('Your details have been successfully submitted \n Check your inbox to verify your account')
}
function download() {
    var load = confirm('This file might be harmful to your device. \n Do you wish to proceed?')
    if (load === true) {
        const progressBar = document.querySelector('progress');
        progressBar.value = 0;
        progressBar.max = 100;
        const interval = 1000;
        progressBar.style.display = 'block';
        const timer = setInterval(function() {
            progressBar.value += 10;
            if (progressBar.value === progressBar.max) {
                clearInterval(timer);
                document.write('Your video has been successfully downloaded.');
            }
        }, interval);
    } else {
        alert('Maybe later then')
    }
};
function show() {
    document.querySelector('.nav-buttons').style.right = '0px'
    document.querySelector('#close').onclick = function () {
        document.querySelector('.nav-buttons').style.right = '-350px'
    }
}
function submitForm() {
    var name = document.getElementsByName('name').value
    var email = document.getElementsByName('email').value
    var number = document.getElementsByName('number').value
    var password = document.getElementsByName('password').value
    var confirm = document.getElementsByName('confirmPassword').value

    if (name === "" || regName.test(name)) {
        window.alert('Please enter your name properly.');
        name.focus();
        return false;
    } else {
        var nameRegex = /^[a-zA-Z]+ $/;
        if (!nameRegex.test(name)) {
            alert('Name can only contain letters and spaces');
            name.focus();
            return false;
        } else {
            if (name.length < 5 || name.length > 50) {
                alert('Name must be betweeb 5 and 50 characters long.');
                name.focus();
                return false;
            }
        }
    }
}