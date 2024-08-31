import './App.css'

function App() {

  type StudentType = {
    name: string,
    age: number
  }

  type employeeType = {
    employeeId: number,
    department: string
  }




  // JavaScript Example
const person:StudentType = {
  name: "John",
  age: 30
};

const employee:employeeType = {
  employeeId: 1234,
  department: "HR"
};

const personEmployee = {
  ...person,
  ...employee
};

console.log(personEmployee);
  

  return (
    <>
     <div>
      try
     </div>
    </>
  )
}

export default App
