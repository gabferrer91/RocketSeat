import dayjs from 'dayjs'
import { daySchedules } from './DOMs.js'
import { getAppointmentsAtAPI } from './api-methods.js'

// setando a data de hoje
daySchedules.value = dayjs().format('YYYY-MM-DD')


document.addEventListener('DOMContentLoaded', async (e) => {
    getAppointmentsAtAPI(dayjs().format('YYYY-MM-DD'))
})



daySchedules.addEventListener('input', async (e) => {
    daySchedules.value = e.target.value
    getAppointmentsAtAPI(e.target.value)
})


