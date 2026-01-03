import { SpyneTrait } from 'spyne';
import { TodoItemView } from 'components/todo-item-view.js';

export class TodoTraits extends SpyneTrait {
  constructor(context) {
    let traitPrefix = 'todos$';
    super(context, traitPrefix);
  }

  static todos$OnAddTodo() {
    // Grab the input text
    const inputEl = this.props.el$('.new-todo').el;
    const text = inputEl.value.trim();
    if (!text) return;

    // Create a new item object
    const newItem = {
      todoId: `todo-${this.props.nextTodoId++}`,
      text,
      completed: false,
    };

    // Append a new TodoItemView
    this.appendView(new TodoItemView({ data: newItem }), '.items');

    // Clear the input
    inputEl.value = '';
  }

  static todos$onItemEvent(e) {
    const { action } = e.payload;
    const actionsFnLookup = {
      edit: this.todos$StartEditMode,
      remove: this.todos$RemoveItem,
      endEdit: this.todos$EndEditMode,
    };
    const fn = actionsFnLookup[action];
    if (fn) fn.call(this);
  }

  static todos$StartEditMode() {
    // Toggle .is-editing class on the root .todo-item element
    this.props.el$.toggle('is-editing', true);

    // Initialize the edit input text
    this.props.el$('.edit-input').el.value = this.props.data.text;
  }

  static todos$EndEditMode() {
    this.props.el$.toggle('is-editing', false);

    // If we have new text, update the data
    const newVal = this.props.el$('.edit-input').el.value.trim();
    if (newVal) {
      this.props.data.text = newVal;
      this.props.el$('.todo-text').el.innerText = newVal;
    }
  }

  static todos$RemoveItem() {
    this.disposeViewStream();
  }
}
