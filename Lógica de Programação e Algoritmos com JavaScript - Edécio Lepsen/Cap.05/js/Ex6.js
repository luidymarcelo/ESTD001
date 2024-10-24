const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    let numDivisores = 0
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            numDivisores = 1
            break
        }
    }
        if (num > 1 && !numDivisores) {
        resp.innerText = `${num} É primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }
})