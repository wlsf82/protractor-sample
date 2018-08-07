import { element, ElementFinder, by } from 'protractor';

export default class TodoMvc {
  relativeUrl: string = '/examples/react';

  clearCompletedButton: ElementFinder = element(by.className('clear-completed'));
  newTodoField: ElementFinder = element(by.className('new-todo'));
  todoList: ElementFinder = element(by.className('todo-list'));
  toggleAllButton: ElementFinder = element(by.className('toggle-all'));
}
