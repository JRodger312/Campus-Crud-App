import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addStudent,addStudentThunk, getStudentsThunk} from '../reducers/studentReducer'


class AddStudent extends Component{
    constructor(){
        super()
        this.state = {
            selectedCampus:0
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        const studentCampus = event.target.value;
        this.setState({
            selectedCampus:studentCampus
        })
    }

    async handleSubmit(event){
        event.preventDefault();
        const studentFirstName = event.target.firstName.value;
        const studentLastName = event.target.lastName.value;
        const studentEmail = event.target.email.value;
        const studentGPA = event.target.gpa.value;
        const newStudent = {
            firstName:studentFirstName,
            lastName:studentLastName,
            email:studentEmail,
            gpa:studentGPA,
            campusId:this.state.selectedCampus
        }
        console.log(newStudent);
        this.props.writeStudent(newStudent)
        this.props.history.push('/students')
        
    }

    render(){
        const campusList = this.props.campuses.campuses;
        console.log(campusList);
        return (
            <div>
            <h1>ADD STUDENT</h1>
            <form action="POST" onSubmit = {this.handleSubmit}>
                <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName"></input>
                </div>
                <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName"></input>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email"></input>
                </div>
                <div>
                <label htmlFor="gpa">GPA</label>
                <input type="text" name="gpa"></input>
                </div>
                <div>
                <p>Campus</p>
                <select onClick = {this.handleChange}>
                    {campusList.map(campus =>               
                    <option name="campusId" value={campus.id}>{campus.name}</option>
                )}
                </select>
                </div>
                <input type="submit" name="submit" value="add student"></input>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campuses : state.campuses
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    writeStudent : async (student)=> dispatch(addStudentThunk(student))
    }
}

  
export default connect(mapStateToProps,mapDispatchToProps)(AddStudent);
