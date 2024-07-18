const containerEl = document.querySelector('#photo-container');
const key = 'UnsplashCollections';
const bdJson = `[{
        "id": 1,
        "src": " ",
        "name": " ",
        "likeCount": "0"
    }
]`;
const clientID = 

if (!localStorage.getItem(key)) {
    localStorage.setItem(key, bdJson)
};
const localArray = JSON.parse(localStorage.getItem(key));


document.addEventListener('DOMContentLoaded', main);

let counter;

async function fetchPhotoList() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random`, {
            headers: {
                'Authorization': clientID
            },
        });
        if (!response.ok) {
            throw new Error(`СерВер отВетил ${response.status} `)
        };

        const date = await response.json();

        return date;
    } finally {
        isFetching = false;
    }

}

async function main() {
    const data = await fetchPhotoList();
    console.log(data);

    const getPhoto = {
        id: data.id,
        src: data.urls.regular,
        name: data.user.name,
        likeCount: data.likes
    };
    let imgHtml = "";
    localArray.forEach(element => {
        if (element.id === getPhoto.id) {
            imgHtml += createHtml(element)
            if (element.likes === getPhoto.likeCount) {
                button.classList.add('active')
            }
        }
        imgHtml = createHtml(data)
    });
    containerEl.insertAdjacentHTML('beforeend', imgHtml)
    localArray.push(getPhoto)
    localStorage.setItem(key, JSON.stringify(localArray));
    // containerEl.innerHTML = imgHtml;
}

function createHtml(img) {
    return `<div class="photo" id="${img.id}">
            <img class="img" src="${img.urls.regular}" alt="">
            <h2 class="photo__author">Author - ${img.user.name} </h2>

        <div class="photo__like-count">${img.likes}</div>
        </div>`;
}

const button = document.querySelector('.btn');
const buttonLike = document.querySelector('.photos__like-icon');
button.addEventListener('click', function() {
    const likeCounter = document.querySelector('.photo__like-count');
    counter = +likeCounter.textContent;
    if (!button.classList.contains('active')) {
        counter++;
        likeCounter.innerHTML = counter;
        button.classList.add('active')
        const photoEl = localArray.find(
            (photoId) => photoId.id === document.querySelector('.photo').getAttribute("id")
        );
        photoEl.likeCount++;
        localStorage.setItem(key, JSON.stringify(localArray));

    } else {
        counter--;
        likeCounter.innerHTML = counter;
        button.classList.remove('active')
        const photoEl = localArray.find(
            (photoId) => photoId.id === document.querySelector('.photo').getAttribute("id")
        );
        photoEl.likeCount--;
        localStorage.setItem(key, JSON.stringify(localArray));
    }
})