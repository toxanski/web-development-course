import {todos, addTodo, toggleCompleteTodo} from './todo-state'

describe('todo-state tests: ', () => {
  beforeEach(() => {
    todos.length = 0;
  })

  test('addTodo add element', () => {
    addTodo({ id: 5, text: 'hello world', completed: false });
    expect(todos).toBeTruthy();
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({ id: 5, text: 'hello world', completed: false });
  });

  test('toggleCompleteTodo should toggle task to complete/uncomplete', () => {
    addTodo({ id: 2, text: 'vsem privet', completed: false });
    toggleCompleteTodo(2, true);
    expect(todos).toBeDefined();
    expect(todos).not.toEqual({});
    expect(todos[0]).toEqual({ id: 2, text: 'vsem privet', completed: true });
  });

  it('test toggleCompleteTodo and addTodo for multiple executions', () => {
    addTodo({ id: 10, text: 'some notes', completed: true });
    addTodo({ id: 11, text: 'some notes 2', completed: true });
    toggleCompleteTodo(10, false);
    toggleCompleteTodo(10, true);
    expect(todos).toContainEqual({ id: 10, text: 'some notes', completed: true },
      { id: 11, text: 'some notes 2', completed: true });
    expect(todos).toHaveLength(2);
  });
}) 