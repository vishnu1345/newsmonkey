
import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
// import Spinner from './Spinner'

export default class Home extends Component {
  render() {

    return (
    //   <div>hello first class based component </div>
    <>
    <Navbar/>
   
    <News pagesize="6" category="general"/>
    </>
    )
    // Home.defaultProps={
    //   cat : "general"
    // }
  }
}
