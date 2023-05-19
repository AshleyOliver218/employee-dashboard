import React from 'react'

export default function Employeepage({ employee }) {

  return (
    <div className='employee-page'>
      <header>
        <h2>Employee</h2>
      </header>
      <aside>
        <div className='img-titl-name'>
          <img src={employee.img} width='150px' height='150px' />
          <div className='name-titl'>
            <h1>{employee.name}</h1>
            <small>{employee.title}</small>
          </div>
        </div>
        <div>
        <p><h4>Call Office</h4>{employee.oNumb}</p>
        <p><h4>Call Mobile</h4>{employee.moNumb}</p>
        <p><h4>SMS</h4>{employee.sms}</p>
        <p className='email'><h4>Email</h4>{employee.email}</p>
       </div>
      </aside>


    </div>
  )
}
