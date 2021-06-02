const hamburgerButton = document.getElementById('hamburger')
const navlist = document.getElementById('nav-list')


function toogleButton(){
    navlist.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)