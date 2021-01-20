import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Education</h1>
            <Widecard title="BA Computer Science" where="Mount Allison University" from="Sept. 2015" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    