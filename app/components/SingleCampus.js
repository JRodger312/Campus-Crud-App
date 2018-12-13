import React, { Component } from 'react'
import { connect } from 'react-redux'
import {singleCampusThunk} from '../reducers/campusReducer'
import {getSingleCampus} from '../reducers/campusReducer'


class SingleCampus extends Component{
    componentDidMount(){
        this.props.fetchCampus()
    }
    render(){
        const campusId = this.props.campuses.selectedCampus.id
        const studentList = this.props.students.students
        const filteredStudents = studentList.filter(student=> student.campusId == campusId)
        const campus = this.props.campuses.selectedCampus
        console.log(filteredStudents)
        return (
            <div>
            <div>
                <h2>{campus.name}</h2>
                <img src = {campus.imageUrl} />
            </div>
            <div>
                <h2>Students</h2>
                <ul>
                    {filteredStudents.map(student => 
                        <div>
                        <li><a href={`http://localhost:1337/#/students/${student.id}`}>{student.firstName} {student.lastName}</a></li>
                        <li>{student.email}</li>
                        <li>{student.gpa}</li>
                        <img src ={student.imageUrl}/>
                        </div>
                    )}
                </ul>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campuses : state.campuses,
        students : state.students,
        selectedCampus : state.selectedCampus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    fetchCampus : ()=> dispatch(singleCampusThunk(ownProps.match.params.id))
    }
}
    

  
export default connect(mapStateToProps,mapDispatchToProps)(SingleCampus);