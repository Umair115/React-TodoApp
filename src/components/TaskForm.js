import React, { Component } from 'react'
// import moment from "react-moment";


class TaskForm extends Component {
    
    state = {
        ...this.returnStateObject()
    }
    

    returnStateObject(){
        if (this.props.currentIndex == -1){
           return  {
            'task_id' : '',
            'task_name' : '',
            'task_description' : '',
            'completed' : '',
            'created_at' : '',
        }
        }
        else{
            return this.props.list[this.props.currentIndex]
        }
    }

    componentWillMount() {
        this.initialState = this.state
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps);

        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length ){ 
        this.setState({
            ...this.returnStateObject()
        })
    }
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
                    <input name='completed' placeholder="Completed OR Pending" value={this.state.completed} onChange={this.changeHandler}/> <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default TaskForm;