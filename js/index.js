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