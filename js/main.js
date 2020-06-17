// Login

var log = function() {
    var login = document.getElementById('user');
    login.classList.contains('unhide');
    var logout = document.getElementById('login');
    logout.classList.contains('hide');
    var modal = document.getElementById('modal');
    modal.classList.contains('hide');
}

// Logout account
var logOut = function() {
    var logout = document.getElementById('user');
    logout.classList.add('hide');
    var login = document.getElementById('login');
    login.classList.add('unhide');
}


// slide 
var imgSlide = document.getElementsByClassName('slide-name');
var numSlide = 0;


// next
function next () {
    numSlide++;
    if (numSlide >= 5) {
        numSlide = 0;
    }
    showSlide(numSlide);
    setTimeout('next()', 5000);
}


// pre
function pre () {
    numSlide--;
    if( numSlide < 0) {
        numSlide = 4;
    }
    showSlide(numSlide);
}

// vi tri hien thi anh
function showSlide(n) {
    for (var i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.display = 'none';
    }
    imgSlide[n].style.display = 'block';
} 

