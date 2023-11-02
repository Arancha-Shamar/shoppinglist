let todos = [];

document.querySelector('header a.btn')
.addEventListener ('click', () => {
    addTodo()
    
})

function addTodo(){
    let el = document.querySelector('header input');
    let text = el.value;

    let todo = {
        id: todos.length,
        text: text,
        done: false
  
    }

    todos.push(todo)

    renderGUI()
    value = ''
}

function renderGUI(){

    document.querySelector('main').innerHTML = '';

    for(let todo of todos) {

        let art = document.createElement('article');
        if (todo.done === true){
            art.classList.add('done')
        }
        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        if (todo.done === true){
            check.setAttribute('checked', true);
        }

        let p = document.createElement('p');
        p.innerText = todo.text

        art.appendChild(check)
        art.appendChild(p)
        
        art.addEventListener('click', () => {
            removeTodo(todo.id)

        })

        document.querySelector('main').appendChild(art)
    }

}

function removeTodo(id){
    todos[id].done = !todos[id].done
    renderGUI()

}