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
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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
    if (width <= 1024) {
        menu.hidden = true
        menuMobile.hidden = false
    } else {
        menuMobile.hidden = true
        menu.hidden = false
    }
}



let parallax = document.querySelector('.parallax')
let aside1 = document.querySelector('.aside-1')
let aside2 = document.querySelector('.aside-2')
let image1 = document.getElementById('i1')
let image2 = document.getElementById('i2')
let image3 = document.getElementById('i3')

const scroll = () => {
    let scrollTop = document.documentElement.scrollTop
    parallax.style.filter = `blur(${scrollTop * 0.02}px)`
    parallax.style.transform = `translateY(${scrollTop * 0.05}%)`
    aside1.style.transform = `translateY(${scrollTop * -0.03 + 80}%)`
    aside2.style.transform = `translateY(${scrollTop * 0.03 - 50}%)`
    image1.style.transform = `translateY(${scrollTop * -0.1 + 155}%)`
    image2.style.transform = `translateY(${scrollTop * -0.1 + 200}%)`
    image3.style.transform = `translateY(${scrollTop * -0.1 + 285}%)`
}

window.addEventListener('scroll', scroll)