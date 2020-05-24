

var menubutton = document.getElementById("mob-menu-butt");

var mobMenu = document.getElementById("mob-menu");
window.onload = exec;

var nnav  = document.getElementById('n-nav1');


function togMenu(){
    if(mobMenu.style.display != 'block')
    {
        mobMenu.style.display = 'block';
      
    }else{
        mobMenu.style.display = '';
 
    }

}

function togMenu1(){
        mobMenu.style.display = '';

}

function exec(){
    menubutton.onclick = togMenu;  
    nnav.onclick = togMenu1;
}