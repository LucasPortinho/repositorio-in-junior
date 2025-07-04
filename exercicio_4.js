function start() {
    const input = prompt("Digite o valor em reais:");
    
    if (input === null) {
        return;
    }
    
    const valorProcessado = processarValor(input);
    
    if (valorProcessado === null) {
        alert("Valor inválido! Por favor, digite um número válido.");
        return;
    }
    
    converterMoedas(valorProcessado);
}

function processarValor(input) {
    // Substituir vírgulas por pontos
    const comPontos = input.replace(/,/g, '.');
    
    // Remover caracteres não numéricos (exceto pontos, pq pode ser de float)
    const numerico = comPontos.replace(/[^0-9.]/g, '');
    
    // Remover pontos extras (exceto o último)
    const partes = numerico.split('.');
    
    // Sem pontos
    if (partes.length === 1) {
        return parseFloat(partes[0]);
    }
    
    // Vários pontos
    const parteInteira = partes.slice(0, -1).join('');
    const parteDecimal = partes[partes.length - 1];
    
    // Juntar parte inteira com decimal usando ponto
    const valorFinal = parseFloat(`${parteInteira}.${parteDecimal}`);
    
    return isNaN(valorFinal) ? null : valorFinal;
}

function converterMoedas(valorReais) {
    const taxaDolar = 5.70;
    const taxaEuro = 6.10;
    
    const valorDolar = valorReais / taxaDolar;
    const valorEuro = valorReais / taxaEuro;
    
    const formatoBrasileiro = {
        style: 'currency',
        currency: 'BRL'
    };
    
    alert(
    `
    Valor original: ${valorReais.toLocaleString('pt-BR', formatoBrasileiro)}
    Em dólar: US$ ${valorDolar.toFixed(2)}
    Em euro: € ${valorEuro.toFixed(2)}
    `
    )
}

start();