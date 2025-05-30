const tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === ' ') {
        alert('Tugas tidak boleh kosong');
        return;
    }

    tasks.push({text:taskText, done: false});
    input.value = ' ';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ' ';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.done) span.classList.add('done');

        const selesaiBtn = document.createElement('button');
        selesaiBtn.textContent = 'Selesai';
        selesaiBtn.onclick = () => {
            tasks[index].done = !tasks[index].done;
            renderTasks();
        };

        const hapusBtn = document.createElement('button');
        hapusBtn.textContent = 'hapus';
        hapusBtn.onclick = () => {
            tasks.splice(index, 1);
            renderTasks();
        };

        li.appendChild(span);
        li.appendChild(document.createTextNode(''));
        li.appendChild(selesaiBtn);
        li.appendChild(document.createTextNode(''));
        li.appendChild(hapusBtn);

        taskList.appendChild(li);
    });
}