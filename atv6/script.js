// Selecionar elementos do DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    // Verificar se o input não está vazio
    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Criar novo elemento <li>
    const li = document.createElement('li');

    // Criar checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Criar span para o texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;

    // Adicionar checkbox e span ao <li>
    li.appendChild(checkbox);
    li.appendChild(span);

    // Adicionar o <li> à lista
    taskList.appendChild(li);

    // Limpar o campo de input
    taskInput.value = '';

    // Focar no input para facilitar adicionar nova tarefa
    taskInput.focus();
}

// Event listener para o botão adicionar
addButton.addEventListener('click', addTask);

// Event listener para pressionar Enter no input
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Delegação de eventos para marcar como concluída
taskList.addEventListener('change', function(e) {
    // Se o checkbox foi alterado
    if (e.target.type === 'checkbox') {
        const li = e.target.parentElement;
        li.classList.toggle('completed');
    }
});

// Delegação de eventos para remover tarefas
taskList.addEventListener('click', function(e) {
    // Se clicou no span (texto da tarefa) - remove a tarefa
    if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement;
        li.remove();
    }
    // Se clicou no próprio <li> (mas não no checkbox ou span) - remove a tarefa
    else if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
