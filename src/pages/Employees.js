import '../App.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import EmployeeCreator from '../components/EmployeeCreator';
import {v4 as uuidv4} from 'uuid';
import MyModal from '../components/MyModal';
import Header from '../components/Header';

function Employees() {
  const [name, setName] = useState();
  const [role, setRole] = useState("No role");
  const [employees, setEmployess] = useState(
    [
      {
        id: 1,
        name: "Steven",
        role: "dev",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 2,
        name: "Steven",
        role: "dev1",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 3,
        name: "Steven",
        role: "dev6",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 4,
        name: "Steven",
        role: "",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 5,
        name: "Steven",
        role: "",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 6,
        name: "Steven",
        role: "dev",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 7,
        name: "Steven",
        role: "dev",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      
    ]
  );

    function updateEmployee(id, employeeName, employeeRole) {
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === id) {
          return {...employee, name: employeeName, role: employeeRole};
        }
        return employee;
      });
      setEmployess(updatedEmployees);
    }
    function newEmployee(name, role, img) {
      let newemployee = {
        id: uuidv4(),
        name: name,
        role: role, 
        img: img,
      }
      setEmployess([...employees, newemployee])
    }
    function removeEmployee(id) {
      const updatedEmployees = employees.filter( (employee) => {
            if (employee.id === id) {
              return id;
            }
          })
      setEmployess(updatedEmployees)
    }

  return (
 <>

 <div className=' min-h-screen  pt-1 bg-teal-500'>
    <div className='flex flex-wrap justify-center '>
    {employees.map((employees) => {
      const editEmployee = <MyModal id={employees.id} name={employees.name} role={employees.role} updateEmployee={updateEmployee}/>
      return ( <Employee key={employees.id} id={employees.id} name={employees.name} role={employees.role} img={employees.img} editEmployee={editEmployee}></Employee> )

    })}
    </div> 
    <div className='mt-6'> 
    <EmployeeCreator newEmployee={newEmployee} className=' justify-center'/>
    </div>
    </div>
    </>
  );
}

export default Employees;
