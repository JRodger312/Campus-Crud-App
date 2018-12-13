import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addCampusThunk} from '../reducers/campusReducer'


class AddCampus extends Component{
    constructor(){
        super()
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    async handleSubmit(event){
        event.preventDefault();
        const campusName = event.target.name.value;
        const campusAddress = event.target.address.value;
        const newCampus = {
            name:campusName,
            address:campusAddress
        }
        console.log(newCampus);
        this.props.writeCampus(newCampus)
        this.props.history.push('/campuses')
        
    }

    render(){
        return (
            <div>
            <h1>ADD CAMPUS</h1>
            <form action="POST" onSubmit = {this.handleSubmit}>
                <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"></input>
                </div>
                <div>
                <label htmlFor="address">Address</label>
                <input type="text" name="address"></input>
                </div>
                <input type="submit" name="submit" value="add campus"></input>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    writeCampus : async (campus)=> dispatch(addCampusThunk(campus)),
    }
}

  
export default connect(null,mapDispatchToProps)(AddCampus);
