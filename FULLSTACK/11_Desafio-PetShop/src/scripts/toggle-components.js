import { form, main, btnOpenForm, btnSendForm, closeBtn, inputOwnerName, inputPetName, inputPhone, inputDescription, inputDate, inputHour } from './DOMs.js'

btnOpenForm.addEventListener('click', (e) => {
    e.preventDefault();
    
    form.classList.toggle('hide-component')
    main.classList.toggle('hide-component')
    btnOpenForm.classList.toggle('hide-component')
})


btnSendForm.addEventListener('click', (e) => {
    e.preventDefault();

    form.classList.toggle('hide-component')
    main.classList.toggle('hide-component')  
    btnOpenForm.classList.toggle('hide-component')
})


closeBtn.addEventListener('click', (e) => {
    form.classList.toggle('hide-component')
    main.classList.toggle('hide-component')  
    btnOpenForm.classList.toggle('hide-component')

    inputOwnerName.value = ''
    inputPetName.value = ''
    inputPhone.value = ''
    inputDescription.value = ''
    inputDate.value = ''
    inputHour.value = ''
})

