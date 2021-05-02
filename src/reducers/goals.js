import { ADD_GOAL, REMOVE_GOAL } from '../actions/goals'
import { RECEIVE_DATA } from '../actions/shared'


const goals = (state = [], action) => {
    const goalsActions = {
        [ADD_GOAL]: state.concat([action.goal]),
        [REMOVE_GOAL]: state.filter((goal) => goal.id !== action.id),
        [RECEIVE_DATA]: action.goals
    };

    return goalsActions[action.type] || state;
}

export default goals