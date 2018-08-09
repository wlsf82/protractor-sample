import * as helper from 'protractor-helper';
import { browser, element, ElementFinder, by } from 'protractor';

describe('protractor with typescript typings', () => {
  const todoList: ElementFinder = element(by.className('todo-list'));
  const someText: string = 'Foo';

  beforeEach(() =>  {
    const newTodoField: ElementFinder = element(by.className('new-todo'));

    browser.get('/examples/react');
    helper.fillFieldWithTextWhenVisibleAndPressEnter(newTodoField, someText);
    helper.waitForTextToBePresentInElement(todoList, someText);
  });

  it('should show an item in the todo list', () => {
    todoList.getText().then(text => expect(text).toEqual(someText));
  });

  it('show not show the todo list after clicking toggle all and clearing completed items', () => {
    const toggleAllButton: ElementFinder = element(by.className('toggle-all'));
    const clearCompletedButton: ElementFinder = element(by.className('clear-completed'));

    helper.clickWhenClickable(toggleAllButton);
    helper.clickWhenClickable(clearCompletedButton);

    helper.waitForElementNotToBePresent(todoList);
  });
});
