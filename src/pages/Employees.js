import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from '../components/EditEmployee';

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Kate',
      role: 'Developer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWuvJHLqnpwQKedQusejSFEL-9Y3grrH4vQ&usqp=CAU',
    },
    {
      id: 2,
      name: 'Sal',
      role: 'Manager',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcLJjW4q3WawvgG5l1h-DWsZI0SuMEUgeRg&usqp=CAU',
    },
    {
      id: 3,
      name: 'John',
      role: 'Director of Eng.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6op9AzR6QN6mt7rKLy32XMUnKaj3NDd6gYw&usqp=CAU',
    },
    {
      id: 4,
      name: 'Melanie',
      role: 'Software Engineer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_78fdpwlBA-MJAF3zvSdHx9T49LxxEym4g&usqp=CAU',
    },
    {
      id: 5,
      name: 'Corey',
      role: 'The Devops Guy',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU',
    },
    {
      id: 6,
      name: 'Jake',
      role: 'Senior',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpkOpiJktHDac2fsiOAZm4kQmeIpTQJqQtQ&usqp=CAU',
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>

          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
