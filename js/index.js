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
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        header.classList.add('shrink')
        logo.classList.add('small')
        logo.classList.remove('normal')
    } else {
        header.classList.remove('shrink')
        logo.classList.remove('small')
        logo.classList.add('normal')
    }
}

window.onscroll = () => shrinkNavbar()