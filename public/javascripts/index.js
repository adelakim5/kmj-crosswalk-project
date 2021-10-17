const unitTime = 10
const term = 2000


for(let number=1; number<=5; number++) {
    const currTimer = document.querySelector(`.timer-${number}`)
    setTimeout(() => {
        showTimer(currTimer)
    }, 1000 * unitTime * (number-1) + term)
}


function showTimer(currTimer) {
    for(let i=0; i<unitTime; i++) {
        setTimeout(() => {
            currTimer.textContent = unitTime-i
        }, 1000 * i )
    }
}
