import { RECEIVE_DATA } from '../actions/shared';

const loading = (state = true, action) => {
    return action.type === RECEIVE_DATA ? false : state
}

export default loading