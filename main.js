let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/applelogo.jpg') {
            myImage.setAttribute ('src','images/applelogo2.jpg');
        } else {
            myImage.setAttribute ('src','images.applelogo.jpg');
        }
    }

    document.querySelector('html').onclick = function() {
        alert('Ouch! Stop poking me!');
    }

    let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUsername() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my page, ' + myName;
}
if(!localStorage.getItem('name')){
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my page, ' + storedName;
}
myButton.onclick = function() {
    setUsername();
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to my page,' + myName;
    }
}