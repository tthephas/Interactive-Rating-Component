const rateStar = document.querySelectorAll('.eachStar')

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
}

