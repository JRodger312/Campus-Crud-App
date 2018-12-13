import React, { Component } from 'react'
import { connect } from 'react-redux'
import {removeStudentThunk} from '../reducers/studentReducer'



class Students extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        const id = Number(event.target.value);
        this.props.removeStudent(id);
    }

    render(){
        let studentList = this.props.students.students
        console.log(studentList)
        return(
            <ul>
        {studentList.map(student =>
            <div>
            <li key = {student.lastName}><a href = {`http://localhost:1337/#/students/${student.id}`}>{student.firstName} {student.lastName}</a></li>
            <button type="submit" name ='remove' value={student.id} onClick={this.handleSubmit}>x</button>
            <hr/>
            </div>
        )}
            </ul>
            
        )
    }
}
        
const mapStateToProps = (state) => {
    return {students: state.students}
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeStudent: (id) => dispatch(removeStudentThunk(id)) 
    }
}

  
export default connect(mapStateToProps,mapDispatchToProps)(Students);