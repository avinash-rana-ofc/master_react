import React from 'react'

const Employee = ({employee}) => {
  return employee.isActive && (
    <div className='card'>
      <img src={employee.image} alt={employee.name} height={120} width={120} />
      <span>{employee.code}</span>
      <span>{employee.name}</span>
      <span>{employee.salary}</span>
    </div>
  )

}

export default Employee