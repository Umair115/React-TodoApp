import React, { Component } from 'react'
import TaskForm from './TaskForm'

class TaskList extends Component {
    state = {
        list : this.returnList()
    }

    returnList(){
        if(localStorage.getItem('tasks') == null){
            localStorage.setItem('tasks',JSON.stringify([]))
        }    
        return JSON.parse(localStorage.getItem('tasks'))
        
    }

    onAddOrEdit = (data) => {
        var list = this.returnList();
        list.push(data)
        localStorage.setItem('tasks',JSON.stringify(list))
        this.setState({ list })
    }

    render() {
        return (
            <div>
                <TaskForm onAddOrEdit={this.onAddOrEdit}/>
                <hr/>
                <h2>List Of Current Tasks</h2>
                <table width="100%">
                    <thead>
                    <tr className = "heading">
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Created At</th>
                        {/* <th>Updated At</th> */}
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item,index) => {
                                return <tr>
                                    <td>{item.task_id}</td>
                                    <td>{item.task_name}</td>
                                    <td>{item.task_description}</td>
                                    <td>{item.created_at}</td>
                                    {/* <td>{item.updated_at}</td>  */}
                                </tr>
                            })
                        }
                    </tbody>
  </table>
            </div>
        )
    }
}
export default TaskList;