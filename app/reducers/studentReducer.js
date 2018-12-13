import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS';
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

const getStudents = (students) => ({
    type:GET_STUDENTS,
    students
})


const getSingleStudent = (selectedStudent) => ({
    type:GET_SINGLE_STUDENT,
    selectedStudent
})

const addStudent = (student) => ({
    type:ADD_STUDENT,
    student
})

const removeStudent = (id) => ({
    type:REMOVE_STUDENT,
    id
})

const getStudentsThunk = () => {
    return (dispatch) => {
        axios.get('/api/students')
        .then(response => response.data)
        .then(students => dispatch(getStudents(students)))
        .catch(console.err)
    }
}

const singleStudentThunk = (studentId) => {
    console.log('singleStudent')
    return async (dispatch) => {
        await axios.get(`/api/students/${studentId}`)
        .then(response=>response.data)
        .then(selectedStudent => dispatch(getSingleStudent(selectedStudent)))
        .catch(console.err)
    }
}

const addStudentThunk = (student) => {
    return async(dispatch) => {
        axios.post('/api/students',student)
        .then(res => res.data)
        .then(newStudent => {
            dispatch(addStudent(newStudent))
        })
    }
}

const removeStudentThunk = (id) => {
    return (dispatch) => {
        return axios.delete(`/api/students/${id}`)
        .then(dispatch(removeStudent(id)))
        .catch(console.err)
    }
}


const initialState = {
    students : [],
    selectedStudent : []
}
const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_STUDENTS:
        return {...state, students:action.students}
        case GET_SINGLE_STUDENT:
        return {...state, selectedStudent:action.selectedStudent}
        case ADD_STUDENT:
        return {...state, students:[...state.students, action.student]}
        case REMOVE_STUDENT:
        return {...state, students:state.students.filter(student => student.id !== action.id)}
    default:
    return state
    }
}

module.exports = {studentReducer, getStudents, getSingleStudent, addStudentThunk, singleStudentThunk, getStudentsThunk, removeStudentThunk}