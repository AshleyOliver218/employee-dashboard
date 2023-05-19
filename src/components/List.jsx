import React from 'react'
import ListItem from './ListItem'

export default function List({employees, setEmployee}) {
  return (
    <div className='List'>
        {employees.map((employee, i) => {
            return(
                <ListItem key={i} setEmployee={setEmployee} employee={employee}  />
            )
        })}
        
        
        </div>
    
  )
}
