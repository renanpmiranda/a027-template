let novoValorDeP = ""
let valorInput = ""

const leValorInput = () => {
    valorInput = document.getElementById("texto")
    console.log(valorInput.value)
}

const substituiP = () => {
    novoValorDeP = document.getElementById("paragrafo")
    valorInput = document.getElementById("texto")
    novoValorDeP.innerHTML += valorInput.value
    valorInput.value = ""
}