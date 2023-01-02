/** Date */
const getDate = new Date().toLocaleDateString('en-ko', {
	weekday: 'short',
	month: 'short',
	day: '2-digit',
});
const today = document.querySelector('.today');
today.textContent = getDate;

/** Task App */
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.add-input');
const todoForm = document.querySelector('.add-area');

function addTodo(e) {
  e.preventDefault();

  const todoValue = todoInput.value;
  if (todoValue == '') {
		alert('할일을 입력해주세요.');
		todoInput.focus();
		return;
	}
  const item = paintTodo(todoValue);
  todoList.appendChild(item);
  todoInput.value = '';
	todoInput.focus();
};

function paintTodo(todoValue) {
	const listItem = document.createElement('li');

	const check = document.createElement('a');
	check.setAttribute('class', 'check-btn');
	check.innerHTML = '<i class="fas fa-check"></i>';
  check.addEventListener('click', () => {
    listItem.classList.toggle('checked');
    content.classList.toggle('checked');
  });

	const content = document.createElement('span');
	content.setAttribute('class', 'content');
	content.innerHTML = todoValue;

	const remove = document.createElement('a');
	remove.setAttribute('class', 'delete-btn');
	remove.innerHTML = '<i class="fas fa-trash-alt"></i>';
  remove.addEventListener('click', () => todoList.removeChild(listItem));

	listItem.appendChild(check);
	listItem.appendChild(content);
	listItem.appendChild(remove);

  return listItem;
};

todoForm.addEventListener('submit', addTodo);