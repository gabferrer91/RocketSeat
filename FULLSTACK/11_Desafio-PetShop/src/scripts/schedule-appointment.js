import dayjs from 'dayjs';
import { btnSendForm, inputOwnerName, inputPetName, inputPhone, inputDescription, inputDate, inputHour, form, main, btnOpenForm } from './DOMs.js'
import { registerAppointmentAtAPI, getAppointmentsAtAPI } from './api-methods.js'


btnSendForm.addEventListener('click', async (e) => {
    e.preventDefault();

    const OwnerName = inputOwnerName.value
    const PetName = inputPetName.value
    const Phone = inputPhone.value
    const Description = inputDescription.value
    const Date = inputDate.value
    const Hour = inputHour.value

    if(!OwnerName || !PetName || !Phone || !Description || !Date || !Hour) {
        form.classList.remove('hide-component')
        main.classList.add('hide-component')
        btnOpenForm.classList.add('hide-component')
        return alert('Preencha todos os campos')
    }

    const hourNumber = Number(Hour.split(':')[0])
    
    if(hourNumber < 9 || hourNumber > 21) {
        form.classList.remove('hide-component')
        main.classList.add('hide-component')
        btnOpenForm.classList.add('hide-component')
        return alert('Horário fora do expediente.')
    }

    
    const isDatePast = dayjs(inputDate.value).isBefore(dayjs(), 'day')
    const isToday = dayjs(inputDate.value).isSame(dayjs(), 'day')
    const isHourPast = hourNumber <= Number(dayjs().hour())

    if(isDatePast || (isToday && isHourPast)) {
        form.classList.remove('hide-component')
        main.classList.add('hide-component')
        btnOpenForm.classList.add('hide-component')
        return alert('Horário expirado.')
    }
    
    await registerAppointmentAtAPI(OwnerName, PetName, Phone, Description, Date, Hour)
    
    const daySelected = document.querySelector('.header .input-wrapper input').value
    
    await getAppointmentsAtAPI(daySelected)
    location.reload();  // recarrega a página pro evento de load carregar os agendamentos
})


