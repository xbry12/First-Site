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
        alert('Hey! That hurt man!');
    }

    let iceCream = 'Caramel Cone';
if(iceCream === 'Caramel Cone') {
  alert('Yay, I love Caramel Cone ice cream!');    
} else {
  alert('Awwww, but Caramel Cone is my favorite...');    
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUsername() {
    let myName = prompt('Please enter your New Identity.');
    localStorage.setItem('New Identity', myName);
    myHeading.textContent = 'Welcome to my page, ' + myName;
}
if(!localStorage.getItem('New Identity')){
    setUsername();
} else {
    let storedName = localStorage.getItem('New Identity');
    myHeading.textContent = 'Welcome to my page, ' + storedName;
}
myButton.onclick = function() {
    setUsername();
}
function setUserName() {
    let myName = prompt('Please enter your New Identity.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('New Identity', myName);
        myHeading.innerHTML = 'Welcome to my page,' + myName;
    }
}