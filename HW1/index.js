// Необходимо создать веб - страницу с динамическими элементами с расписанием занятий.

// На странице должна быть таблица с расписанием занятий, на основе JSON - данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
//     -название занятия -
//     время проведения занятия -
//     максимальное количество участников -
//     текущее количество участников -
//     кнопка "записаться" -
//     кнопка "отменить запись"

// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться"
// неактивной.
// Кнопка "отменить запись"
// активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться"
// увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.

// Начальные данные(JSON):

//     [{
//             "id": 1,
//             "name": "Йога",
//             "time": "10:00 - 11:00",
//             "maxParticipants": 15,
//             "currentParticipants": 8
//         },
//         {
//             "id": 2,
//             "name": "Пилатес",
//             "time": "11:30 - 12:30",
//             "maxParticipants": 10,
//             "currentParticipants": 5
//         },
//         {
//             "id": 3,
//             "name": "Кроссфит",
//             "time": "13:00 - 14:00",
//             "maxParticipants": 20,
//             "currentParticipants": 15
//         },
//         {
//             "id": 4,
//             "name": "Танцы",
//             "time": "14:30 - 15:30",
//             "maxParticipants": 12,
//             "currentParticipants": 10
//         },
//         {
//             "id": 5,
//             "name": "Бокс",
//             "time": "16:00 - 17:00",
//             "maxParticipants": 8,
//             "currentParticipants": 6
//         }
//     ]
const bJson = `[{
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]`;
const key = 'Timetable of Classes';
const containerEl = document.querySelector('.container');
if (!localStorage.getItem(key)) {
    localStorage.setItem(key, bJson)
}
const classes = JSON.parse(localStorage.getItem(key));

function createArticleHTML(classes) {
    const maxParticipantsCount = classes.maxParticipants;
    const currentParticipantsEl = classes.currentParticipants;
    if (maxParticipantsCount === currentParticipantsEl) {
        return `<div class="classes" data-id="${classes.id}">
        <div class="title">Название занятия - ${classes.name}</div>
        <div class="time">Время проведения занятия - ${classes.time}</div>
        <div class="maxParticipants">Максимальное количество участников - <span class="maxParticipantsCount">${classes.maxParticipants}</span></div>
        <div class="currentParticipants">Текущее количество участников - <span class="maxCurrentCount">${classes.currentParticipants}</span></div>
        <button class="appointment full">Записаться</button>
        <button class="cancel">Отменить запись</button>
    </div>`
    } else if (currentParticipantsEl === 0) {
        return `<div class="classes" data-id="${classes.id}">
        <div class="title">Название занятия - ${classes.name}</div>
        <div class="time">Время проведения занятия - ${classes.time}</div>
        <div class="maxParticipants">Максимальное количество участников - <span class="maxParticipantsCount">${classes.maxParticipants}</span></div>
        <div class="currentParticipants">Текущее количество участников - <span class="maxCurrentCount">${classes.currentParticipants}</span></div>
        <button class="appointment">Записаться</button>
        <button class="cancel full">Отменить запись</button>
    </div>`

    }
    return `<div class="classes" data-id="${classes.id}">
        <div class="title">Название занятия - ${classes.name}</div>
        <div class="time">Время проведения занятия - ${classes.time}</div>
        <div class="maxParticipants">Максимальное количество участников - <span class="maxParticipantsCount">${classes.maxParticipants}</span></div>
        <div class="currentParticipants">Текущее количество участников - <span class="maxCurrentCount">${classes.currentParticipants}</span></div>
        <button class="appointment">Записаться</button>
        <button class="cancel">Отменить запись</button>
    </div>`

};

containerEl.innerHTML = classes.map((element) =>
    createArticleHTML(element)
).join('')

containerEl.addEventListener('click', (event) => {
    const classes = JSON.parse(localStorage.getItem(key));
    if (!event.target.classList.contains('appointment')) {
        return;
    }
    const classesEl = event.target.closest(".classes");
    const maxParticipantsCount = +classesEl.querySelector('.maxParticipantsCount').innerHTML;
    let currentParticipantsEl = +classesEl.querySelector('.maxCurrentCount').innerHTML;

    if (currentParticipantsEl === 0) {
        const buttonCancel = classesEl.querySelector('.cancel');
        buttonCancel.style.display = "inline"
    }
    if (0 < currentParticipantsEl < maxParticipantsCount) {
        currentParticipantsEl++;
        classesEl.currentParticipants = currentParticipantsEl;
        const idEl = +classesEl.getAttribute("data-id") - 1;
        classes[idEl].currentParticipants = currentParticipantsEl;
        localStorage.setItem(key, JSON.stringify(classes));
        classesEl.querySelector('.maxCurrentCount').innerHTML = currentParticipantsEl;
        if (currentParticipantsEl === maxParticipantsCount) {
            const buttonFul = classesEl.querySelector('.appointment');
            buttonFul.style.display = "none"

        }
    }
})
containerEl.addEventListener('click', (event) => {
    if (!event.target.classList.contains('cancel')) {
        return;
    }
    const classesElCancel = event.target.closest(".classes");
    const maxParticipantsCount = +classesElCancel.querySelector('.maxParticipantsCount').innerHTML;
    let currentParticipantsEl = +classesElCancel.querySelector('.maxCurrentCount').innerHTML;


    if (currentParticipantsEl === maxParticipantsCount) {
        const buttonCurrent = classesElCancel.querySelector('.appointment');
        buttonCurrent.style.display = "inline";
        currentParticipantsEl--;
        if (currentParticipantsEl === 0) {
            const buttonCancel = classesElCancel.querySelector('.cancel');
            buttonCancel.style.display = "none"
        }
        classesElCancel.currentParticipants = currentParticipantsEl;
        const idEl = +classesElCancel.getAttribute("data-id") - 1;
        classes[idEl].currentParticipants = currentParticipantsEl;
        localStorage.setItem(key, JSON.stringify(classes));
        classesElCancel.querySelector('.maxCurrentCount').innerHTML = currentParticipantsEl;


    } else if (currentParticipantsEl > 0) {
        const buttonCancel = classesElCancel.querySelector('.cancel');
        currentParticipantsEl--;
        if (currentParticipantsEl === 0) {
            const buttonCancel = classesElCancel.querySelector('.cancel');
            buttonCancel.style.display = "none"
        }
        classesElCancel.currentParticipants = currentParticipantsEl;
        const idEl = +classesElCancel.getAttribute("data-id") - 1;
        classes[idEl].currentParticipants = currentParticipantsEl;
        localStorage.setItem(key, JSON.stringify(classes));
        classesElCancel.querySelector('.maxCurrentCount').innerHTML = currentParticipantsEl;

    }
})