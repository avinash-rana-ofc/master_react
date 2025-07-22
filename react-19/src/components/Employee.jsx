import React from 'react'

const Employee = ({employee}) => {
  return (
    <div className='card'>
        <img src={employee.img} alt={employee.name} />
        <span>{employee.code}</span>
        <span>{employee.name}</span>
        <span>Rs: {employee.salary}</span>
    </div>
  )
}

export default Employee