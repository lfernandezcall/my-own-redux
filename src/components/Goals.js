import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
    handleAdd,
    handleDelete
} from '../actions/goals';

class Goals extends React.Component {
    addGoal = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAdd(this.input.value, () => this.input.value = ''))
    }

    removeGoal = (goal) => {
        this.props.dispatch(handleDelete(goal));
    }

    render() {
        return (
            <div>
                <h1>Goal List</h1>
                <input
                    type="text"
                    placeholder="Add Goal"
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addGoal}>Add Goal</button>
                <List items={this.props.goals} remove={this.removeGoal} />
            </div>
        )
    }
}

export default connect((state) => ({ goals: state.goals }))(Goals)