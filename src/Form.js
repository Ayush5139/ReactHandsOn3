import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    state = {
        name: "",
        department: "",
        rating: []
    }

    Change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Submit = () => {
        const NewObject = {
            name: this.state.name,
            department: this.state.dept,
            rating: this.state.rate
        }
        const array1 = this.state.rating
        array1.push(NewObject)
        this.setState({ [this.state.data]: array1 })
        console.log(this.state.rate)
    }
    render() {
        return (
            <div> <p className='title'>Employee Feedback Form</p>
                <>
                    <label className='label'>Name:</label>
                    <input className='input' type={'text'} placeholder='Name' name='name' onChange={this.Change} /> <br></br>
                    <label className='label'>Department:</label>
                    <input className='input' type={'text'} placeholder='Department' name='dept' onChange={this.Change} /> <br></br>
                    <label className='label'>Rating:</label>
                    <input className='input' type={'number'} placeholder='rating' name='rate' onChange={this.Change} /> <br></br>
                    <button onClick={this.Submit} className='submit'>Submit</button>
                </>
                <div className='div2'>
                    {this.state.rating.map((item, index) => {
                        return (
                            <h1 key={index} className='h1'>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</h1>
                        )
                    })}
                </div>
            </div>
        )
    }
}
