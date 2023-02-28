const rateStar = document.querySelectorAll('.eachStar')
const tyContainer = document.querySelector('.thankyou-container')
const mainContainer = document.querySelector('.container')
const submitButton = document.querySelector('.submit')
const finalRating = document.querySelector('.finalRating')

finIdx = 0

rateStar.forEach((star, idx) => {
    star.addEventListener('click', () => highlightStar(idx))
})

function highlightStar(idx) {
    if(rateStar[idx].classList.contains('active') && !rateStar[idx].nextElementSibling.classList.contains('active')) {
        idx--
    }

    rateStar.forEach((star, idx2) => {
        if(idx2 <= idx) {
            star.classList.add('active')
        } else {
            star.classList.remove('active')
        }
    })
    return finIdx = idx + 1
}

submitButton.addEventListener('click', () => {
    mainContainer.classList.add('hidden')
    tyContainer.classList.remove('hidden')
    finalRating.innerText = (`You selected ${finIdx} out of 5`)
})



