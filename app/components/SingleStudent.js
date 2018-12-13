import React, { Component } from 'react'
import { connect } from 'react-redux'
import {singleStudentThunk} from '../reducers/studentReducer'
import {getSingleStudent} from '../reducers/studentReducer'


class SingleStudent extends Component{
    componentDidMount(){
        this.props.fetchStudent()
    }
    render(){
        const chosenStudent = this.props.students.selectedStudent
        const chosenCampusId = Number(chosenStudent.campusId)
        const chosenCampus = this.props.campuses.campuses.filter(campus => campus.id == chosenCampusId)
        return (
            <div>
            <h2>{chosenStudent.firstName} {chosenStudent.lastName}</h2>
            <ul>
                <li>Campus: {chosenCampus.map(elem => elem.name)}</li>
                <li>Email: {chosenStudent.email}</li>
                <li>GPA: {chosenStudent.gpa}</li>
                <img src = {chosenStudent.imageUrl}/>
            </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        campuses : state.campuses,
        students : state.students,
        selectedStudent : state.selectedStudent,
        selectedCampus : state.selectedCampus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    fetchStudent : ()=> dispatch(singleStudentThunk(ownProps.match.params.id))
    }
}
    

  
export default connect(mapStateToProps,mapDispatchToProps)(SingleStudent);