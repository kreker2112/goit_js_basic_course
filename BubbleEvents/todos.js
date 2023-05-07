"use strict";

{/* <li class="todo-list__item">
  <div class="todo">
    <p class="todo__text">
      Morbi ac felis. Praesent egestas tristique nibh. Aenean ut eros et nisl
      sagittis vestibulum. Etiam imperdiet orci.
    </p>
    <div class="todo__actions">
      <button class="button" type="button">
        Удалить
      </button>
    </div>
  </div>
</li>; */}


const todos = {
  items: [],
  add(text){
    const todo = {
      id:Date.now(),
      text
    }
    this.items.push(todo);
  },
  delete(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
};

const refs = {
editor: document.querySelector('.js-editor'),
todoList: document.querySelector('.js-todo-list')
};

refs.editor.addEventListener('submit', )

function handleEditorSubmit(e) {

}
