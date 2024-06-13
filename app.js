let theme_toggler = document.getElementById('toggler')
let currentTheme = document.getElementById('currentTheme')
document.addEventListener('DOMContentLoaded', () => {
    theme_toggler.value = localStorage.getItem('themeMode')
    changeTheme()
})
theme_toggler.addEventListener('change', changeTheme)
function changeTheme(){
    if(theme_toggler.value == 1){
        document.body.classList.add('dark')
        localStorage.setItem('themeMode', 1)
        currentTheme.innerHTML = 'Dark Mode'
    }
    else{
        document.body.classList.remove('dark')
        localStorage.setItem('themeMode', 0)
        currentTheme.innerHTML = 'Light Mode'

    }
}