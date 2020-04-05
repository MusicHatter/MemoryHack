'use strict'

let month =["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];


let modalClose = document.querySelector(".modal-close");
let modalLogin = document.querySelector(".modal-login");

let userListItem = document.querySelector(".user-link-input");
let timefff= document.querySelector("time");

let findOpen = document.querySelector(".find-open");
let findFilter = document.querySelector(".find-filter");

findOpen.addEventListener('click', function() {
    findFilter.classList.toggle('find-active');
});

modalClose.addEventListener('click', function() {
    modalLogin.classList.toggle('modal-login-active');
});

userListItem.addEventListener('click', function() {
    modalLogin.classList.toggle('modal-login-active');
});


var menuButton = document.querySelector(".menu-botton-container");
var menuButtonActive = document.querySelector(".navigation-menu-button");
var menu = document.querySelector(".main-navigation");

menuButton.addEventListener('click', function() {
    menuButtonActive.classList.toggle("navigation-menu-button-active")
    menu.classList.toggle("header-active");
  });
