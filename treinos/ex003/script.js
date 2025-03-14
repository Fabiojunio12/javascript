let listaTarefa = JSON.parse(localStorage.getItem("tarefas")) || [];

function atualizarLista() {
    let lista = document.querySelector('ul#lista');
    lista.innerHTML = "";

    listaTarefa.forEach((tarefa, index) => {
        let item = document.createElement('li');
        item.innerHTML = `${tarefa}`;

        let status = document.createElement('input');
        status.type = 'checkbox';
        status.id = 'status';

        let apagar = document.createElement('input');
        apagar.type = 'button';
        apagar.value = 'Apagar';
        apagar.id = 'apagar';
        apagar.onclick = () => removerTarefa(index);

        item.appendChild(status);
        item.appendChild(apagar);

        lista.appendChild(item);
    });

    localStorage.setItem("tarefas", JSON.stringify(listaTarefa));
}

function adicionarTarefa() {
    let tarefa = document.querySelector('input#tarefa');
    if (tarefa.value.trim() !== '') {
        listaTarefa.push(tarefa.value);
        atualizarLista();
    } else {
        alert(`[ERROR!] Tarefa vazia.`);
    }
    tarefa.value = '';
    tarefa.focus();
}

function removerTarefa(index) {
    listaTarefa.splice(index, 1);
    atualizarLista();
}

// Atualiza a lista ao carregar a página
window.onload = atualizarLista;
