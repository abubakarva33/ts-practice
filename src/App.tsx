
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

const increment = ( orpFn:(x: number, y:number)=>number, x:number, y:number)=> {return orpFn(x,y)}
console.log(increment((x,y)=>x+y,10,20));


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
