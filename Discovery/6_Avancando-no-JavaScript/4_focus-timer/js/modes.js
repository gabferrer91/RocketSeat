const btnToggle = document.getElementById('toggle-mode')

btnToggle.addEventListener('click', (e) =>{
    document.documentElement.classList.toggle('light')        /* documentElement é o próprio doc */
})

