import React, {Component} from 'react'
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, NavLink, Router } from 'react-router-dom';
import {getCampusesThunk,getCampuses} from '../reducers/campusReducer'
import {getStudentsThunk,getStudents}from '../reducers/studentReducer'
import campuses from './Campuses'
import students from './Students'
import singleCampus from './SingleCampus'
import singleStudent from './SingleStudent'
import addCampus from './AddCampus';
import addStudent from './AddStudent'

class Root extends Component{
  async componentDidMount(){
    const {init} = this.props
    init()
  }

 render (){
   return(
    <div>
      <div>
      <nav>
        Welcome!{'           '}
        <div>
            <NavLink to='/' className ='navLink' style = 'color:orange'>{'     '}Home</NavLink>{'  '}
            <NavLink to='/campuses' className ='navLink'>All Campuses</NavLink>{'  '}
            <NavLink to='/students' className ='navLink'>All Students</NavLink>{'  '}
            <NavLink to='/addcampus' className ='navLink'>Add Campus</NavLink>{'  '}
            <NavLink to='/addstudent' className ='navLink'>Add Student</NavLink>{'  '}
            
          </div>
      </nav>
      </div>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <HashRouter>
          <Switch>
            <Route exact path = '/campuses' component = {campuses}/>
            <Route exact path = '/students' component = {students}/>
            <Route exact path = '/campuses/:id' component = {singleCampus}/>
            <Route exact path = '/students/:id' component = {singleStudent}/>
            <Route exact path = '/addcampus' component = {addCampus}/>
            <Route exact path = '/addstudent' component = {addStudent} />
          </Switch>
        </HashRouter>
      </main>
    </div>
   )}
}

const mapStateToProps = ({ campuses, students }) => ({ campuses, students });

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(getCampusesThunk());
    dispatch(getStudentsThunk());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);




