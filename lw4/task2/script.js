window.addEventListener('DOMContentLoaded', () => {
  const todoTasks = document.querySelectorAll('.todo-list_item'),
    nameTasks = document.querySelectorAll('.todo-list_name'),
    totalTasks = document.querySelector('.todo-list_total'),
    checkboxTasks = document.querySelectorAll('.todo-list_checkbox');

  let countTasks = todoTasks.length;

  todoTasks.forEach((el, i) => {
    el.addEventListener('click', () => {
      countTasks--;
      if (countTasks === -1) {
        countTasks = 0;
      }
      totalTasks.textContent = `${countTasks} tasks`;
      checkboxTasks[i].setAttribute('checked', 'checked');
      nameTasks[i].classList.add('todo-list_name--checked');
    });
  });
});