import { click } from '@testing-library/user-event/dist/click'
import React, { Component } from 'react'
import './Form.css'
import FormDis from './FormDis'

export default class Form extends Component {
    state = {
        name: "",
        department: "",
        rating: [],
        array : [],
        click : true
    }

    Change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    CangeClick = () =>{
        this.setState({click : !this.state.click})
    }

    Submit = () => {
        const NewObject = {
            name: this.state.name,
            department: this.state.dept,
            rating: this.state.rate
        }
        this.state.array.push(NewObject)

        this.setState({
            array:this.state.array,
            click:false
        })
    }
    render() {
        return (
            <div> <p className='title'>Employee Feedback Form</p>
            {this.state.click ?
                <>
                    <label className='label'>Name:</label>
                    <input className='input' type={'text'} placeholder='Name' name='name' onChange={this.Change} /> <br></br>
                    <label className='label'>Department:</label>
                    <input className='input' type={'text'} placeholder='Department' name='dept' onChange={this.Change} /> <br></br>
                    <label className='label'>Rating:</label>
                    <input className='input' type={'number'} placeholder='rating' name='rate' onChange={this.Change} /> <br></br>
                    <button onClick={this.Submit} className='submit'>Submit</button>
                </>:
                <FormDis value = {this.state.array} toggl = {this.CangeClick}/>
            }
            </div>
        )
    }
}
