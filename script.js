const submitBtn = document.getElementById('submitBtn');
const ratingState = document.querySelector('.card__rating-state');
const thankYouState = document.querySelector('.card__thank-you-state');
const ratingBtn = document.querySelectorAll('.card__rating-btn');
const ratingScoreEl = document.getElementById('ratingScore');
let ratingScore = 0;
let cacheActiveBtn = null;

submitBtn.addEventListener('click', ()=>{
    ratingState.classList.add('hide');
    thankYouState.classList.remove('hide');
    ratingScoreEl.textContent = ratingScore;
});

ratingBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(cacheActiveBtn != null)
        cacheActiveBtn.classList.remove('active');

        ratingScore = btn.textContent;
        btn.classList.add('active')

        cacheActiveBtn = btn;
    })
})