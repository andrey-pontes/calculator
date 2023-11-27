import { calculate, copyBtn } from "./result.js"
import { themeSwitcher } from "./theme.js"
import { keyboardOutput, clearBtn, inputView } from "./keyboardActions.js"

document.querySelectorAll('.charKey').forEach( inputView )

document.getElementById('clear').addEventListener('click', clearBtn)

input.addEventListener('keydown', keyboardOutput)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

document.getElementById('copyToClipboard').addEventListener('click', copyBtn)