let theme_toggler = document.getElementById('toggler')
theme_toggler.addEventListener('change', () => {
    if(theme_toggler.value == 1){
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }
})