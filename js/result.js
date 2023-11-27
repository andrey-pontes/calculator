const resultInput = document.getElementById('result')

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

const copyBtn = ev => {
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}

export { calculate, copyBtn }