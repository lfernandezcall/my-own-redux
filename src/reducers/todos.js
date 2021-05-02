import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';
import { RECEIVE_DATA } from '../actions/shared';

const todos = (state = [], action) => {
    const todoActions = {
        [ADD_TODO]: state.concat([action.todo]),
        [REMOVE_TODO]: state.filter((todo) => todo.id !== action.id),
        [TOGGLE_TODO]: state.map((todo) => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)),
        [RECEIVE_DATA]: action.todos
    };

    return todoActions[action.type] || state;
}

export default todos 