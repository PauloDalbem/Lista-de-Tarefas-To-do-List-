function adicionarTarefa() {
  const inputTarefa = document.getElementById('myInput');
  const novaTarefaTexto = inputTarefa.value.trim();
  
  if (novaTarefaTexto !== '') {
    const listaTarefas = document.getElementById('myUL');
    const novaTarefa = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const label = document.createElement('label');
    label.textContent = novaTarefaTexto;
    
    const closeBtn = document.createElement('span');
    closeBtn.textContent = 'X';
    closeBtn.className = 'close';
    closeBtn.onclick = function() {
      this.parentElement.remove();
    };
    
    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(label);
    novaTarefa.appendChild(closeBtn);
    listaTarefas.appendChild(novaTarefa);
    
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });
    
    inputTarefa.value = '';
  }
}

function excluirTarefa(elemento) {
  elemento.parentElement.remove();
}

// Adicionando listener para itens existentes
document.querySelectorAll('#myUL li input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const label = this.nextElementSibling;
    if (this.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });
});