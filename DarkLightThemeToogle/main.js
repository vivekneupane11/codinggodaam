"use strict";

let toogleSwitch = document.querySelector('.theme-toogle input[type="checkbox"]');
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme',"dark");
        localStorage.setItem('theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme',"light");
        localStorage.setItem('theme','light');
    }
}
let currentTheme = localStorage.getItem('theme')?localStorage.getItem('theme'):null;
if(typeof currentTheme == 'undefined'){
    console.log("theme not stored in local storage");
    if(matchMedia("(prefers-color-scheme:dark)").matches){
        console.log("user prefer dark theme");
        document.documentElement.setAttribute('data-theme',"dark");
        toogleSwitch.checked = true;
    }
    else if(matchMedia("(prefers-color-scheme:light)").matches){
        console.log("user prefer light theme");
        document.documentElement.setAttribute('data-theme',"light");
        toogleSwitch.checked = false;
    }
}
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === "dark"){
        toogleSwitch.checked = true;
    }
}

toogleSwitch.addEventListener('change',switchTheme,false);
//HEADER RESPONSIVENESS
let header = document.querySelector("header");
let main = document.querySelector("main");

function space(){
    let headerHeight = header.clientHeight+ 'px';
    main.style.marginTop=headerHeight;
}
window.addEventListener('load',space);
window.addEventListener('resize',space);