import React, { Component } from 'react'
// import moment from "react-moment";


class TaskForm extends Component {
    constructor(){
        super();
        // var today = new Date();
        // created_at = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        
    }
    state = {
        'task_id' : '',
        'task_name' : '',
        'task_description' : '',
        'created_at' : '',
        // 'updated_at' : today.getDate()+"-"+today.getMonth()+1+"-"+"-"+today.getYear(),
    }

    componentWillMount() {
        this.initialState = this.state
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log( "After Change : " + this.state.task_name);
    }
    

    submitHandler = e => {
        e.preventDefault();
        this.props.onAddOrEdit(this.state)
        this.setState(
            this.initialState
        )
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Create A New Task</h2>
                <form onSubmit={this.submitHandler} autoComplete="off">
                    <input name='task_name' placeholder="Enter Task Name" value={this.state.task_name} onChange={this.changeHandler}/> <br/>
                    <input name='task_description' placeholder="Enter Task Description" value={this.state.task_description} onChange={this.changeHandler}/> <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default TaskForm;