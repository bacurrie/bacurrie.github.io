import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['javascript','react framework','three.js','python scripting','selenium automation']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h2 className="subtopic">My Skills</h2>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    