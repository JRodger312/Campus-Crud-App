import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

const getCampuses = (campuses) => ({
    type:GET_CAMPUSES,
    campuses
})

const getSingleCampus = (selectedCampus) => ({
    type:GET_SINGLE_CAMPUS,
    selectedCampus
})

const addCampus = (campus) => ({
    type:ADD_CAMPUS,
    campus
})

const removeCampus = (id) => ({
    type:REMOVE_CAMPUS,
    id
})

const getCampusesThunk = () => {
    return async (dispatch) => {
        await axios.get('/api/campuses')
        .then(response => response.data)
        .then(campuses => dispatch(getCampuses(campuses)))
        .catch(console.err)
    }
}

const singleCampusThunk = (campusId) => {
    return async (dispatch) => {
        await axios.get(`/api/campuses/${campusId}`)
        .then(response => response.data)
        .then(selectedCampus => dispatch(getSingleCampus(selectedCampus)))
        .catch(console.err)
    }
}

const addCampusThunk = (campus) => {
    return async (dispatch) => {
      return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => dispatch(addCampus(newCampus)))
        .catch(console.err)
    }
}

const removeCampusThunk = (id) => {
    return (dispatch) => {
        return axios.delete(`/api/campuses/${id}`)
        .then(dispatch(removeCampus(id)))
        .catch(console.err)
    }
}
  

const initialState = {
    campuses: [],
    selectedCampus: []
}


const campusReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CAMPUSES:
        return {...state, campuses:action.campuses}
        case GET_SINGLE_CAMPUS:
        return {...state, selectedCampus:action.selectedCampus}
        case ADD_CAMPUS:
        return {...state, campuses:[...state.campuses, action.campus]}
        case REMOVE_CAMPUS:
        return {...state, campuses:state.campuses.filter(campus=> campus.id !== action.id)}
    default:    
    return state
    }
}

module.exports = {campusReducer, getCampuses, addCampus, removeCampus, getCampusesThunk, singleCampusThunk, addCampusThunk, removeCampusThunk}