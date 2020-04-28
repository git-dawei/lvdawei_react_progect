import React, { Component } from 'react'
import {Button} from 'antd'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import {Switch,Route, Router} from 'react-router-dom'

export default class App extends Component{
  render(){
    return (
      <Switch>
        <Route path = '/login' component = {Login}/>
        <Route path = '/admin' component = {Admin}/>
      </Switch>
    )
  }
}

