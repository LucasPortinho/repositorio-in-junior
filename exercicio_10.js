const fila = [];
let continuar = true;

function mostrarMenu() {
    let menu = "=== FILA DE ATENDIMENTO ===\n\n";
    
    if (fila.length === 0) {
        menu += "Fila vazia\n";
    } else {
        menu += "Clientes na fila:\n";
        fila.forEach((cliente, index) => {
            menu += `${index + 1}º ${cliente}\n`;
        });
    }

    menu += "\nOpções:\n";
    menu += "1 - Novo Cliente\n";
    menu += "2 - Atender Cliente\n";
    menu += "3 - Sair\n\n";
    menu += "Digite a opção desejada:";
    
    return menu;
}

while (continuar) {
    const opcao = prompt(mostrarMenu());
    
    switch (opcao) {
        case "1":
            const nome = prompt("Digite o nome do novo cliente:");
            if (nome) {
                fila.push(nome);
                alert(`${nome} foi adicionado ao final da fila!`);
            } else {
                alert("Nome inválido!");
            }
            break;
            
        case "2":
            if (fila.length > 0) {
                const atendido = fila.shift();
                alert(`Atendendo: ${atendido}`);
            } else {
                alert("Não há clientes na fila!");
            }
            break;
            
        case "3":
            continuar = false;
            alert("Encerrando o programa...");
            break;
            
        default:
            alert("Opção inválida!");
    }
}