import React, { Component } from 'react'
import './Form.css'

class FormDis extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div>
        <div className='div2'>
        {
            this.props.value.map((item,index)=>{
                return(
                    <h1 key = {index} className='h1'> Name : {item.name} | Department : {item.department} | Rating : {item.rating}</h1>
                )
            })
        }
        </div>
        <button onClick={this.props.toggl} className = 'submit'> Go Back</button>
        </div>
    )
  }
}

export default FormDis