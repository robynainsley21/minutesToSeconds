const minutes = document.querySelector('[minutes]')
const output = document.querySelector('[output]')
const calcBtn = document.querySelector('[calcBtn]')


calcBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let minutesValue = minutes.value

    const result = minutesValue * 60

    output.value = result + ' seconds'
})