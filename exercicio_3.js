function verificarIdades(anosNascimento, anoAtual) {
    const resultados = [];
    
    for (let i = 0; i < anosNascimento.length; i++) {
        const idade = anoAtual - anosNascimento[i];
        const status = idade >= 18 ? 'maior' : 'menor';
        resultados.push(status);
    }
    
    return resultados;
}

function start() {
    const arrayNascimentos = [2000, 2010, 1995];

    const anoAtual = parseInt(prompt('Insira o ano atual: '))

    if (isNaN(anoAtual)) {
        alert('Insira apenas números inteiros para o ano')
        return
    }

    alert(`Array de idade: ${verificarIdades(arrayNascimentos, anoAtual)}`)
}

start()
