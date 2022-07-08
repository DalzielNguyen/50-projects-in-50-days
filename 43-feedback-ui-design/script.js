const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.ratings-container');

const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;

    }
});


sendBtn.addEventListener('click', (e)=> {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'lll use your feedback to improve our customer support</p>
        `
    }
)

function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'));
}
