import React from 'react'
import { connect } from 'react-redux';
import Todos from './Todos';
import Goals from './Goals';
import { handleInitialData } from '../actions/shared';
import './App.css'
class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(handleInitialData())

    }

    render() {
        const { loading } = this.props

        return loading === true ? <h3>Loading</h3> :
            <div>
                <Todos />
                <Goals />
            </div>
    }
}

export default connect((state) => ({ loading: state.loading }))(App)
