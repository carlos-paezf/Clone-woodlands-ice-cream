let toggleStatus = false
const toggleNav = function() {
    const getMenu = document.getElementById('menu-mobile')

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