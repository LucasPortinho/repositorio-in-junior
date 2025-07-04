const time = [];

function adicionarJogador() {
    const nome = prompt("Digite o nome do jogador:");
    const idade = parseInt(prompt("Digite a idade do jogador:"));
    const posicao = prompt("Digite a posição do jogador:");
    const pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));
    
    if (!nome || isNaN(idade) || !posicao || isNaN(pontuacao)) {
        alert("Dados inválidos! Preencha todos os campos corretamente.");
        return;
    }
    
    const jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };
    
    time.push(jogador);
    alert(`${nome} foi adicionado ao time com sucesso!`);
}

function buscarPorPosicao() {
    const posicaoBusca = prompt("Digite a posição para buscar:");
    const jogadoresEncontrados = time.filter(jogador => 
        jogador.posicao.toLowerCase() === posicaoBusca.toLowerCase()
    );
    
    if (jogadoresEncontrados.length === 0) {
        alert(`Nenhum jogador encontrado na posição ${posicaoBusca}.`);
        return;
    }
    
    console.log(`Jogadores na posição ${posicaoBusca}:`);
    jogadoresEncontrados.forEach(jogador => {
        console.log(`${jogador.nome}, ${jogador.idade} anos, Pontuação: ${jogador.pontuacao}`);
    });
    
    const nomes = jogadoresEncontrados.map(j => j.nome).join(", ");
    alert(`Jogadores encontrados (${jogadoresEncontrados.length}): ${nomes}\nVer detalhes no console.`);
}

function listarTime() {
    if (time.length === 0) {
        alert("Nenhum jogador cadastrado no time.");
        return;
    }
    
    console.log("=== LISTA COMPLETA DO TIME ===");
    time.forEach((jogador, index) => {
        console.log(`${index + 1}. ${jogador.nome} | ${jogador.idade} anos | ${jogador.posicao} | Pontuação: ${jogador.pontuacao}`);
    });
    alert("Lista completa do time exibida no console!");
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        alert("Não há jogadores no time para calcular a média.");
        return;
    }
    
    const total = time.reduce((acumulador, jogador) => acumulador + jogador.pontuacao, 0);
    const media = total / time.length;
    alert(`Pontuação média do time: ${media.toFixed(2)}`);
}

function exibirMenu() {
    return "=== GERENCIADOR DE TIME ===\n\n" +
            "Jogadores cadastrados: " + time.length + "\n\n" +
            "Opções:\n" +
            "1 - Adicionar jogador\n" +
            "2 - Buscar por posição\n" +
            "3 - Listar team\n" +
            "4 - Calcular pontuação média\n" +
            "5 - Sair\n\n" +
            "Digite o número da opção desejada:";
}

// Loop principal
let opcao;
do {
    opcao = prompt(exibirMenu());
    
    switch(opcao) {
        case "1":
            adicionarJogador();
            break;
        case "2":
            buscarPorPosicao();
            break;
        case "3":
            listarTime();
            break;
        case "4":
            calcularPontuacaoMedia();
            break;
        case "5":
            alert("Programa encerrado. Até mais!");
            break;
        default:
            alert("Opção inválida! Por favor, escolha uma opção de 1 a 5.");
    }
} while (opcao !== "5");