import React from 'react'
import Madhapur from "../EmpData"
import { studentRecords } from '../EmpData'

console.log("check data", Madhapur)

const EmpDetails = () => {
  return (
    <div>
        {Madhapur.map((item)=>{
            return(
                <div key={item.email}>
                   <h1>{item.empName}</h1>
                   <h1>{item.empEmail}</h1>
                   <h1>{item.empContact}</h1>
                   <hr />
                </div>
            )
        })}
        <div>
            <h1>Student Records</h1>
            {studentRecords.map((item)=>{
                    return(
                        <div>
                            
                             <h1>{item.empName}</h1>
                   <h1>{item.empEmail}</h1>
                   <h1>{item.empContact}</h1>
                        </div>
                    )
            })}
        </div>
    </div>
  )
}

export default EmpDetails