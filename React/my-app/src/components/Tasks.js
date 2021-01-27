import React, { Component } from 'react';
import propTypes from 'prop-types';

import Task from './Task'

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => 
        <Task
            task = { task } 
            deleteTask = { this.props.deleteTask } 
            checkDone= { this.props.checkDone }
            key= { task.id }
        />);
    }
}

Tasks.propTypes = {
    tasks: propTypes.array.isRequired
}

export default Tasks;
