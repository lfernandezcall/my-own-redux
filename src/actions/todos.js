import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    };
}

const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    };
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export const handleAdd = (name, callback) => {
    return (dispatch) => {
        API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo, callback()))
            })
            .catch((error) => {
                console.error(error)
                alert(`An error ocurred in the API adding the todo: ${name}`)
            })

    }
}

export const handleToggle = (id) => {
    return (dispatch) => {
        dispatch(toggleTodo(id))
        API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id))
                alert('An error occurred when trying to toggle todo')
            })
    }
}

export const handleDelete = (todo) => {
    return (dispatch) => {
        dispatch(removeTodo(todo.id))
        API.deleteTodo(todo.id).catch(() => {
            dispatch(addTodo(todo))
            alert(`An error occurred in the API deleting the todo: ${todo.name}`)
        })
    }
}
