window.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  const todoTasks = document.querySelectorAll('.todo-list-item'),
    nameTasks = document.querySelectorAll('.todo-list-item__name'),
    totalTasks = document.querySelector('.footer-todo-list__total'),
    checkboxTasks = document.querySelectorAll('.todo-list-item__checkbox');
=======
  const todoTasks = document.querySelectorAll('.todo-list_item'),
    nameTasks = document.querySelectorAll('.todo-list_name'),
    totalTasks = document.querySelector('.todo-list_total'),
    checkboxTasks = document.querySelectorAll('.todo-list_checkbox');
>>>>>>> 7df762d8dad9ea2647057763e41fd2cf69075fc4

  let countTasks = todoTasks.length;

  todoTasks.forEach((el, i) => {
    el.addEventListener('click', () => {
      countTasks--;
      if (countTasks === -1) {
        countTasks = 0;
      }
      totalTasks.textContent = `${countTasks} tasks`;
      checkboxTasks[i].setAttribute('checked', 'checked');
<<<<<<< HEAD
      nameTasks[i].classList.add('todo-list-item__name--completed');
=======
      nameTasks[i].classList.add('todo-list_name--checked');
>>>>>>> 7df762d8dad9ea2647057763e41fd2cf69075fc4
    });
  });
});