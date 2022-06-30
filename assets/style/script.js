let totalsliders = document.querySelectorAll('.slider--item').length
let currentSlide = 0

document.querySelector('.sliders').style.width = `calc(100vw * ${totalsliders})`
document.querySelector('.slider-controls').style.height = `${document.querySelector('.banner').clientHeight}px`


function goBack() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = totalsliders - 1
    }
    updateMargin()
}
function goNext() {
    currentSlide++
    if (currentSlide > (totalsliders - 1)) {
        currentSlide = 0
    }
    updateMargin()
}
function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth)
    document.querySelector('.sliders').style.marginLeft = `-${newMargin}px`
}
 setInterval(goNext, 6000)