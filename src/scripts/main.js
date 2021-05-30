'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    if (data !== undefined) {
      const ul = document.createElement('ul');
      const li = document.createElement('li');

      li.textContent = key;
      ul.append(li);
      element.append(ul);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
