import React, { Component } from 'react'
import Project from '../components/Project'
import Navbar from '../components/Navbar'

export default class Projects extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Project/>
            </div>
        )
    }
}
