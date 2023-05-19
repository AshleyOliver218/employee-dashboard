import React from 'react'

export default function ListItem({employee, setEmployee}) {
  return (
    <div className='List-Item' onClick={(ele)=>{setEmployee(employee)}}>
        <img src={employee.img} width='75px' height='75px'/>
            <div className='name-title'>
                <h4>{employee.name}</h4>
                <small>{employee.title}</small>
            </div>    
    </div>
  )
}
