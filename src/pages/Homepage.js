import React from 'react'
import List from '../components/List'


export default function Homepage({employees, setEmployee}) {
    
  return (
    <div className='home-page'>
        <header> 
            <h2>Employee Directory</h2>
        </header>
        <input type='text' placeholder='Search Employees'></input>
        <List employees={employees} setEmployee={setEmployee}/>
    </div>
  )
}
