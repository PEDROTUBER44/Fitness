// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-button">Excluir</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        // Adiciona o evento de clique para o botão de excluir
        li.querySelector('.delete-button').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    });
});
