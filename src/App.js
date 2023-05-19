import './App.css';
import { useState } from 'react';
import React from 'react';
import Employeepage from './pages/Employeepage';
import Homepage from './pages/Homepage';
import employees from './data'

function App() {
  const [employee, setEmployee] = useState(employees[0])
  return (
    <div className="App">
      <div className='display'>
        <Homepage employees={employees} setEmployee={setEmployee} />

        <Employeepage employee={employee} />
      </div>
    </div>
  );
}

export default App;
