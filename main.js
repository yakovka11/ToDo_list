'use strict';
var buttonEl = document.querySelector('#add-item');
var inputValue = document.getElementById('item-value');
var todoList = document.getElementById('todo-list');
var completedList = document.getElementById('completed-list');
buttonEl.onclick = function () {
    if (!inputValue.value) {
        return null;
    }
    var listItem = `<label><input type="checkbox" onclick="checkItem(event)" /></label>
                    <span>${inputValue.value}</span>
                    <button onclick="editItem(event)">Edit</button> | <button onclick="deleteItem(event)">Delete</button>`;
    var listItemEl = document.createElement('li');
    listItemEl.innerHTML = listItem;
    todoList.appendChild(listItemEl);
    inputValue.value = '';
};

function checkItem(event) {
    if (event.target.checked) {
        var listItemToRemove = event.target.parentElement.parentElement;
        var completeListItemEl = document.createElement('li');
        completeListItemEl.appendChild(listItemToRemove.children[1]);
        todoList.removeChild(listItemToRemove);
        completedList.appendChild(completeListItemEl);
    }
}

function editItem(event) {

    event.target.previousElementSibling.innerHTML = '<input type="text" id="edit" >' + '<button type="button" id="enter">Enter</button>';

    var enterButton = document.getElementById('enter');

    enterButton.onclick = function () {
        var editValue = document.getElementById('edit');
        this.parentElement.innerText = editValue.value;
    };
}

function deleteItem(event) {
    event.target.parentElement.innerHTML = null;
}


