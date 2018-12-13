import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCampusesThunk, removeCampusThunk} from '../reducers/campusReducer'



class Campuses extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const id = Number(event.target.value);
        this.props.deleteCampus(id)
    }

    render(){
        const deleteCampusRender = async (id) => {
            this.props.deleteCampus(id);
        }
        let campusList = this.props.campuses.campuses   
        return (
            <div>
            <div>
            <h2>There are {campusList.length} Campuses</h2>
            </div>
            <div>
        <ul>
            {campusList.map(campus => 
                <div>
                <li key = {campus.name}><a href = {`http://localhost:1337/#/campuses/${campus.id}`} >{campus.name}</a></li>
                <li><img key = {campus.address} src = {campus.imageUrl} /></li>
                <li>{campus.address}</li>
                <button type="submit" name="remove" value={campus.id} onClick={this.handleSubmit}>x</button>
                <hr/>
                </div>
            )}
        </ul>
         </div>
         </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {campuses: state.campuses,students: state.students}
}
const mapDispatchToProps = (dispatch,history) => {
    return {
        fetchCampuses:() => dispatch(getCampusesThunk()),
        deleteCampus:(id) => dispatch(removeCampusThunk(id))
    }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
  

  