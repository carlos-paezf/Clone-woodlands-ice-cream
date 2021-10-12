let toggleStatus = false
const toggleNav = function () {
    const getMenu = document.getElementById('open-menu')

    if (toggleStatus === false) {
        getMenu.classList.add('active')
        toggleStatus = true
    } else {
        getMenu.classList.remove('active')
        toggleStatus = false
    }
}


const shrinkNavbar = () => {
    const header = document.getElementById('header')
    const logo = document.getElementById('logo')
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
}

window.onscroll = () => shrinkNavbar()



const responsive = () => {
    let width = window.innerWidth
    const menu = document.getElementById('menu')
    const menuMobile = document.getElementById('menu-mobile')
    menuMobile.hidden = true
    if (width <= 1024) 
    {
        menu.hidden = true
        menuMobile.hidden = false
    } else {
        menuMobile.hidden = true
        menu.hidden = false
    }
}

