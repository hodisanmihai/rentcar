document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.burger').addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });

    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let currentDate = new Date();
    let today = new Date();
    let selectedDate = null;

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${months[month]} ${year}`;
        daysContainer.innerHTML = '';

        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDay; i > 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i + 1;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        for (let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('day');
            const thisDate = new Date(year, month, i);

            if (thisDate.toDateString() === today.toDateString()) {
                dayDiv.classList.add('today');
            }

            if (selectedDate && thisDate.toDateString() === selectedDate.toDateString()) {
                dayDiv.classList.add('selected');
            }

            dayDiv.addEventListener('click', function() {

                document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));

                dayDiv.classList.add('selected');

                selectedDate = thisDate;
            });

            daysContainer.appendChild(dayDiv);
        }

        const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
        for (let i = 1; i <= nextMonthStartDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);

    const rentButton = document.querySelector('.btn-content');
    rentButton.addEventListener('click', function (event) {
        event.preventDefault();

        const phoneInput = document.getElementById('phone');
        const checkbox = document.getElementById('_checkbox');

        if (!phoneInput.value.match(/^[0-9]{10}$/) || !checkbox.checked || !selectedDate) {
    alert('Please enter a valid 10-digit phone number, accept the terms and conditions, and select a date.');
    return;
}


        const buttonContainer = this.closest('.btn-conteiner');
        buttonContainer.classList.add('loading-start');

        setTimeout(function () {
            buttonContainer.classList.add('loading-progress');
        }, 250);

        setTimeout(function () {   
            buttonContainer.classList.add('loading-end');

            document.getElementById('popup').classList.remove('hidden');
        }, 500);
    });

    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popup').classList.add('hidden');
    });
});
