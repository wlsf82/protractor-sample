import * as helper from 'protractor-helper';
import { browser } from 'protractor';

import TodoMvcPage from '../page-objects/todomvc';

describe('protractor with typescript typings', () => {
  const todoMvcPage = new TodoMvcPage();
  const someText: string = 'Foo';

  beforeEach(() =>  {
    browser.get(todoMvcPage.relativeUrl);
    helper.fillFieldWithTextWhenVisibleAndPressEnter(todoMvcPage.newTodoField, someText);
    helper.waitForTextToBePresentInElement(todoMvcPage.todoList, someText);
  });

  it('should show an item in the todo list', () => {
    todoMvcPage.todoList.getText().then(text => expect(text).toEqual(someText));
  });

  it('show not show the todo list after clicking toggle all and clearing completed items', () => {
    helper.clickWhenClickable(todoMvcPage.toggleAllButton);
    helper.clickWhenClickable(todoMvcPage.clearCompletedButton);

    helper.waitForElementNotToBePresent(todoMvcPage.todoList);
  });
});
