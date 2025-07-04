function start() {
    const input = prompt("Digite o número de termos da sequência de Fibonacci:");
    
    if (input === null) {
        return;
    }
    
    const n = parseInt(input);
    
    if (isNaN(n) || n < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }
    
    const resultado = fibonacci(n);
    const termosFormatados = resultado.join(', ');
    alert(`Os ${n} primeiros termos da sequência de Fibonacci são:\n${termosFormatados}`);
}

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const seqAnterior = fibonacci(n - 1);
    const novoTermo = seqAnterior[seqAnterior.length - 1] + seqAnterior[seqAnterior.length - 2];
    return [...seqAnterior, novoTermo];
}

start();