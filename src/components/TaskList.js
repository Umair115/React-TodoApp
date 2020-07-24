import React, { Component } from 'react'
import TaskForm from './TaskForm'

class TaskList extends Component {
    state = {
        currentIndex : -1,
        list : this.returnList()
    }

    returnList(){
        if(localStorage.getItem('tasks') == null){
            localStorage.setItem('tasks',JSON.stringify([]))
        }    
        return JSON.parse(localStorage.getItem('tasks'))
        
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1){
            list.push(data)
        }
        else{
            list[this.state.currentIndex] = data
        }
        localStorage.setItem('tasks',JSON.stringify(list))
        this.setState({ list,currentIndex: -1 })
    }

    handleEdit = index => {
        // console.log(index)
        this.setState({currentIndex : index})
        
    }

    handleDelete = index => {
        var list = this.returnList()
        this.setState({currentIndex : index})
        list.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(list))
        this.setState({ list,currentIndex: -1 })
    }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => {
    //         console.log(response)
    //         this.setState({
    //             list: response.data
    //         })
    //     })
    //     .catch(error => {
    //         console.log("error " + error)
    //     })
    // }


    render() {
        return (
            <div>
                <TaskForm 
                onAddOrEdit={this.onAddOrEdit}
                currentIndex= {this.state.currentIndex}
                list={this.state.list}
                />
                <hr/>
                <h2>List Of Current Tasks</h2>
                <table width="100%">
                    <thead>
                    <tr className = "heading">
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Status</th>
                        {/* <th>Created At</th> */}
                        {/* <th>Updated At</th> */}
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item,index) => {
                                return <tr>
                                    <td>{index}</td>
                                    <td>{item.task_name}</td>
                                    <td>{item.task_description}</td>
                                    <td>{item.completed}</td>
                                    {/* <td>{Date("dd-mm-yyyy")}</td> */}
                                    <td><button className="btnupd" onClick={()=> this.handleEdit(index)}>{'Edit'}</button></td>
                                    <td><button className="btndlt" onClick={()=> this.handleDelete(index)}>{'Delete'}</button></td>
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