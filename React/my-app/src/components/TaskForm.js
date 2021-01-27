import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    };
    
    Submit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    };

    Hear = e => {
        this.setState({
            [e.target.name] : e.target.value 
        });
    };

    render() {
        return(
            <form 
                onSubmit={ this.Submit }>
                <input type='text' 
                    placeholder='Write a Task' 
                    onChange={ this.Hear } 
                    value={ this.state.title } 
                    name='title'
                 />

                <br />

                <textarea 
                    placeholder='Write a description' 
                    onChange={ this.Hear } 
                    value={ this.state.description } 
                    name='description'>
                </textarea>

                <br />

                <button type='submit'>
                    Save Task
                </button>
            </form>
        );
    };
};

export default TaskForm;