import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

const addGoal = (goal) => {
    return {
        type: ADD_GOAL,
        goal
    };
}

const removeGoal = (id) => {
    return {
        type: REMOVE_GOAL,
        id
    };
}

export const handleAddGoal = (name, callback) => {
    return (dispatch) => {
        API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal, callback()))
            })
            .catch((error) => {
                console.error(error)
                alert(`An error occurred in the API adding the goal: ${name}`)
            })
    }
}

export const handleDeleteGoal = (goal) => {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))
        API.deleteGoal(goal.id).catch(() => {
            dispatch(addGoal(goal))
            alert(`An error occurred in the API deleting the todo: ${goal.name}`)
        })
    }
}