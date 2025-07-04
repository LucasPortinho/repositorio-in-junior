function resolverQuadratica(a, b, c) {
    if (a === 0) {
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a);
        const x2 = (-b - raizDelta) / (2 * a);

        alert(`Duas raízes reais e distintas: x1 = ${x1} e x2 = ${x2}`);

    } else if (delta === 0) {
        const x = -b / (2 * a);
        alert(`Uma raiz real (raiz dupla): x = ${x}`);    
    } else {
        alert("A equação não possui raízes reais.");
    }
}

function start() {
    // Para rodar em node, é so trocar prompt por readline
    const a = parseFloat(prompt("Digite o valor de a:"));
    const b = parseFloat(prompt("Digite o valor de b:"));
    const c = parseFloat(prompt("Digite o valor de c:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, insira apenas números válidos.");
        return;
    }

    resolverQuadratica(a, b, c);
}

start()
