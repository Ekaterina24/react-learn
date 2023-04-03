import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: 'Kate',
      role: 'Developer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWuvJHLqnpwQKedQusejSFEL-9Y3grrH4vQ&usqp=CAU',
    },
    {
      name: 'Sal',
      role: 'Manager',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcLJjW4q3WawvgG5l1h-DWsZI0SuMEUgeRg&usqp=CAU',
    },
    {
      name: 'John',
      role: 'Director of Eng.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6op9AzR6QN6mt7rKLy32XMUnKaj3NDd6gYw&usqp=CAU',
    },
    {
      name: 'Melanie',
      role: 'Software Engineer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_78fdpwlBA-MJAF3zvSdHx9T49LxxEym4g&usqp=CAU',
    },
    {
      name: 'Corey',
      role: 'The Devops Guy',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU',
    },
    {
      name: 'Jake',
      role: 'Senior',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpkOpiJktHDac2fsiOAZm4kQmeIpTQJqQtQ&usqp=CAU',
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
