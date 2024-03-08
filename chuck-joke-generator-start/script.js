const btn = document.getElementById('joke-btn')
const jokeEl = document.getElementById('joke')

const getJoke = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', "https://api.chucknorris.io/jokes/random")

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (this.status === 200) {
                jokeEl.innerHTML = JSON.parse(this.responseText).value
            } else {
                jokeEl.innerHTML = 'Something went wrong (not funny)'
            }
        }
    }
    xhr.send()
}

btn.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke)