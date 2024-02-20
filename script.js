function imc() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    const imc = (peso / (altura * altura)).toFixed(2)

    if(imc < 16.9){
        document.getElementById('resultado').innerText = 'Conceito: Muito abaixo do peso: ' + imc
    }else if(imc > 17 && imc < 18.4){
        document.getElementById('resultado').innerText = 'Conceito: Abaixo do peso: ' + imc
    }else if(imc > 18.5 && imc < 24.9){
        document.getElementById('resultado').innerText = 'Conceito: Peso normal: ' + imc
    }else if(imc > 25 && imc < 29.9){
        document.getElementById('resultado').innerText = 'Conceito: Acima do peso: ' + imc
    }else if(imc > 30 && imc < 34.9){
    document.getElementById('resultado').innerText = 'Conceito: Obesidade grau I: ' + imc
    }else if(imc > 35 && imc < 40){
    document.getElementById('resultado').innerText = 'Conceito: Obesidade grau II: ' + imc
    }else{
    document.getElementById('resultado').innerText = 'Conceito: Obesidade grau III: ' + imc
    }
    return

}