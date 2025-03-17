//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista("listaAmigos", amigos);
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    
    let sorteados = [...amigos];
    let resultado = amigos.map(amigo => {
        let disponiveis = sorteados.filter(n => n !== amigo);
        if (!disponiveis.length) return sortearAmigo();
        let sorteado = disponiveis.splice(Math.floor(Math.random() * disponiveis.length), 1)[0];
        return `${amigo} → ${sorteado}`;
    });
    
    atualizarLista("resultado", resultado);
}

function atualizarLista(id, itens) {
    let lista = document.getElementById(id);
    lista.innerHTML = itens.map(item => `<li>${item}</li>`).join("");
}
