import { morningPeriod, afternoonPeriod, nightPeriod } from './DOMs.js'

async function registerAppointmentAtAPI(owner, pet, phone, description, date, time) {

    await fetch('http://localhost:3333/schedules', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar agendamentos. Tente novamente.");
        }
        return response.json()
    })
    .then(data => {
        // console.log(data)
        const schedules = data
        const isScheduled = schedules.find((schedule) => {
            return schedule.date === date && schedule.time === time
        })
        console.log('isScheduled: ', isScheduled)
        if (isScheduled) {
            return alert('Horário indisponível. Tente outro horário.')
        } else {
            fetch(`http://localhost:3333/schedules`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: new Date().getTime().toString(),
                    ownerName: owner,
                    petName: pet,
                    phone: phone,
                    description: description,
                    date: date,
                    time: time
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao agendar. Tente novamente.");
                }
                response.json()
            })
            .then(data => {
                // console.log(data)
                alert('Agendamento realizado com sucesso!')
            })
            .catch(error => {
                console.error('Schedule error:\n', error)
                alert('Erro ao agendar. Tente novamente.')
            })
        }
    })    
}



async function getAppointmentsAtAPI(selectedDate) {
    await fetch(`http://localhost:3333/schedules?date=${selectedDate}`)
    .then((response) => {
        // console.log(response)
        if(!response.ok) {
            throw new TypeError(`Erro ao buscar agendamentos. Requisição falhou (${response.status}).`)
        }
        return response.json()
    })
    .then((data) => {
        morningPeriod.innerHTML = ``
        afternoonPeriod.innerHTML = ``
        nightPeriod.innerHTML = ``
        
        data.forEach(element => {
            const component = `
            <div class="person" data-id="${element.id}">
                <div class="schedule-wrapper">
                    <span id="scheduled-hour">${element.time}</span> &nbsp;&nbsp;
                    <span id="pet-name">${element.petName}</span>
                    <span id="bar"> / </span>
                    <span id="owner-name">${element.ownerName}</span>
                </div>
                <div class="service-wrapper">
                    <span id="service">${element.description}</span>
                </div>
                <div class="btn-wrapper">
                    <button class="btn-rm-schedule">Remover agendamento</button>
                </div>
            </div>
            `
            
            const hourNumber = Number(element.time.split(':')[0])

            if(hourNumber >= 9 && hourNumber <= 12) {
                return morningPeriod.innerHTML += component
            }

            if(hourNumber >= 13 && hourNumber <= 18) {
                return afternoonPeriod.innerHTML += component
            }
            
            if(hourNumber >= 19 && hourNumber <= 21) {
                return nightPeriod.innerHTML += component
            }
            
        })
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })

    rmvAppointmentEvent()
}


function rmvAppointmentEvent() {

    const rmvSchedule = document.querySelectorAll('.btn-rm-schedule');

    rmvSchedule.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            const item = e.target.closest('.person');
            const { id } = item.dataset;
            
            /* json-server não pode ser com query (schedules?id=${id}), deve ser na URL */
            fetch(`http://localhost:3333/schedules/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao tentar deletar o agendamento.');
                }
                return response.json()
            })
            .then(() => {
                alert('Agendamento desmarcado com sucesso!');
                item.remove()
            })
            .catch((error) => {
                console.error(error);
                alert('Erro ao desmarcar agendamento. Tente novamente.');
            });
        })
    })
}

export { registerAppointmentAtAPI, getAppointmentsAtAPI, rmvAppointmentEvent }

