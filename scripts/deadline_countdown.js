// Get stored todos and parse them into JavaScript object
const storedTodos = localStorage.getItem("todos");
const parsedTodos = JSON.parse(storedTodos);

const deadlineDates = [];

parsedTodos.forEach(deadline => {
    deadlineDates.push(deadline['deadline'].split('-'));
});

// Function that calculates the difference between dates and displays it as a countdown
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

const todoCollection = document.getElementsByClassName('todo');

// Function that calculates the time remaining until a deadline for a collection of todos
function getTimeLeftToDeadline(collection) {
    for (let i = 0; i < collection.length; i++) {
        const deadlineTime = getTimeRemaining(new Date(collection[i][0], collection[i][1] - 1, collection[i][2]));

        const days = document.createElement('p');
        days.setAttribute('class', 'deadline-time-left');
        const hours = document.createElement('p');
        hours.setAttribute('class', 'deadline-time-left');

        days.innerText = `Days left: ${deadlineTime['days']}`;
        hours.innerText = `Hours left: ${deadlineTime['hours']}`;

        if (deadlineTime['days'] > 5) {
            days.style.color = '#20F315';
            hours.style.color = '#20F315';
        } else if (deadlineTime['days'] < 5 && deadlineTime['days'] > 1) {
            days.style.color = '#FBFB21';
            hours.style.color = '#FBFB21 ';
        } else {
            days.style.color = '#FD0105';
            hours.style.color = '#FD0105';
        }

        todoCollection[i].children[2].after(days);
        todoCollection[i].children[3].after(hours);
    }
}

getTimeLeftToDeadline(deadlineDates);
