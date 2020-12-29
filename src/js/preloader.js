let progress = 1
const preloader = $('#preloader')
const progressBar = $('#progress-bar')

const updateProgress = (number) => {
    progressBar.css('width', `${number}%`)
    progressBar.siblings("p").html(`${number}%`)
}
const interval = setInterval(() => {
    progress++;
   updateProgress(progress)
    if (progress > 99) {
        clearInterval(interval)
    }
}, 10)

$(function () {
    updateProgress(100)
    clearInterval(interval)
    setTimeout(() => {
        preloader.hide()
    }, 50)
})