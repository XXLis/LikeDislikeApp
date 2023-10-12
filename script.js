document.addEventListener('DOMContentLoaded', function () {
    var dogTitleElement = document.getElementById('dog-title');
    var dogImageElement = document.getElementById('dog-image');
    var likeButtonElement = document.getElementById('like-button');
    var dislikeButtonElement = document.getElementById('dislike-button');
    var likeCounterElement = document.getElementById('like-counter');
    var dislikeCounterElement = document.getElementById('dislike-counter');

    var likeCount = localStorage.getItem('likeCount') || 0;
    var dislikeCount = localStorage.getItem('dislikeCount') || 0;
    likeCounterElement.textContent = likeCount;
    dislikeCounterElement.textContent = dislikeCount;

    function updateCounters() {
        likeCounterElement.textContent = likeCount;
        dislikeCounterElement.textContent = dislikeCount;
        localStorage.setItem('likeCount', likeCount);
        localStorage.setItem('dislikeCount', dislikeCount);
    }

    function fetchDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dogTitleElement.textContent = 'Is deze hond leuk of niet?';
                dogImageElement.src = data.message;
            })
            .catch(function (error) {
                console.log('Er is een fout opgetreden bij het ophalen van de hond:', error);
            });
    }

    likeButtonElement.addEventListener('click', function () {
        likeCount++;
        updateCounters();
        fetchDog();
    });

    dislikeButtonElement.addEventListener('click', function () {
        dislikeCount++;
        updateCounters();
        fetchDog();
    });

    fetchDog();
});