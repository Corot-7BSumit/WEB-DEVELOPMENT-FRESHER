const addTodBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
const todoListUl = document.getElementById("todoList")
const remaining = document.getElementById("remaining-count")
const clearCompletedBtn = document.getElementById("clearCompletedBtn")
const filterBtn = document.querySelector(".filter-btn")
const filterBtnActive = document.querySelector(".filter-btn.active")
const filterBtnCompleted = document.querySelector(".filter-btn.completed")

let todoText; // This should be populated when the user clicks on 'Add' Button.
let todos = []
let todosString = localStorage.getItem("todos")
// If we have todos in the local storage, we gonna read it.

if (todosString) {
    todos = JSON.parse(todosString)
    remaining.innerHTML = todos.filter((item) => {
        return (item.isCompleted != true)
    }).length + " items left"
}


const populateTodos = () => {
    let string = "";
    for (const todo of todos) {

        string += `<li id="${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
                    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                </li>`
    }
    todoListUl.innerHTML = string


    const todoCheckboxes = document.querySelectorAll(".todo-checkbox");

    todoCheckboxes.forEach((element) => {
        element.addEventListener('click', (e) => {
            if (e.target.checked) {
                element.parentNode.classList.add("completed")
                todos = todos.map(todo => {
                    if (todo.id == element.parentNode.id) {
                        return { ...todo, isCompleted: true }
                    }
                    else {
                        return todo
                    }
                })
                remaining.innerHTML = todos.filter((item) => {
                    return (item.isCompleted != true)
                }).length + " items left"
                localStorage.setItem("todos", JSON.stringify(todos))
            }
            else {
                element.parentNode.classList.remove("completed")
                todos = todos.map(todo => {
                    if (todo.id == element.parentNode.id) {
                        return { ...todo, isCompleted: false }
                    }
                    else {
                        return todo
                    }
                })
                remaining.innerHTML = todos.filter((item) => {
                    return (item.isCompleted != true)
                }).length + " items left"
                localStorage.setItem("todos", JSON.stringify(todos))

            }
        })
    })

    clearCompletedBtn.addEventListener("click", () => {
        todos = todos.filter((todo) => todo.isCompleted == false)
        populateTodos()
        localStorage.setItem("todos", JSON.stringify(todos))
    })

    let delBtns = document.querySelectorAll(".delete-btn")

    //Handle the delete buttons
    delBtns.forEach((element) => {
        element.addEventListener('click', (e) => {
            const confirmation = confirm("Do you want to proceed with deletion?")
            if (confirmation) {
                todos = todos.filter((todo) => {
                    return (todo.id) != (e.target.parentNode.id)
                })
                remaining.innerHTML = todos.filter((item) => {
                    return (item.isCompleted != true)
                }).length + " items left"
                localStorage.setItem("todos", JSON.stringify(todos))
                populateTodos()
            }
        })
    })

}


addTodBtn.addEventListener('click', () => {

    todoText = inputTag.value
    if (todoText === "") {
        alert("Task cannot be empty!");
        return;
    }
    inputTag.value = ""
    let todo = {
        id: Date.now(),
        title: todoText,
        isCompleted: false
    }
    todos.push(todo)
    remaining.innerHTML = todos.filter((item) => {
        return (item.isCompleted != true)
    }).length + " items left"
    localStorage.setItem("todos", JSON.stringify(todos))
    populateTodos()
})

populateTodos()





filterBtn.addEventListener('click', () => {
  
    let todosString = localStorage.getItem("todos");
    if (todosString) {
        todos = JSON.parse(todosString);
    }

    populateTodos();
});

filterBtnActive.addEventListener('click', () => {
    let todosString = localStorage.getItem("todos");
    let freshTodos = todosString ? JSON.parse(todosString) : [];

    todos = freshTodos.filter(todo => todo.isCompleted !== true);

    populateTodos();
});

filterBtnCompleted.addEventListener('click', () => {
    let todosString = localStorage.getItem("todos");
    let freshTodos = todosString ? JSON.parse(todosString) : [];

    todos = freshTodos.filter(todo => todo.isCompleted === true);

    populateTodos();
});



