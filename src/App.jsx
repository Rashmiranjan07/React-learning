// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>code step by step</h1>
//       <h1>hello React 19</h1>
//     </>
//   )
// }

// export default App


//import Login, { Profile, Setting, UserKey } from "./userComponent";
//import ToDo from "./ToDo";

// function App() {
//   const name = "rashmiranjan"
//   const userArray = ['sam', 'peter', 'bruce']
//   const userObj = {
//     name: "rashmiranjan",
//     email: "rasjmi@gmail.com",
//     age: 29
//   }
//   let x = 10;
//   let y = 20;
//   let path = "data:image/jpeg;base64,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"
//   function fruit() {
//     return "Apple"
//   }

//   function operation(a, b, op) {
//     if (op == "+") {
//       return a + b;
//     } else if (op == "-") {
//       return a - b;
//     } else {
//       return a * b;
//     }

//   }

//   return (
//     <div>

//       <h1>JSX with Curly Braces</h1>
//       <h1>{name}</h1>
//       <h1>{x + y}</h1>
//       <h1>{fruit()}</h1>
//       <h1>{operation(20, 10, "+")}</h1>

//       <h1>{userObj.email}</h1>
//       <h1>{userArray[0]}</h1>

//       <img
//         src={path}
//       />

//     </div>
//   );
// }

// Component must be start with Capital latter 
// function Fruit() {
//   return (
//     <h1>Apple</h1>
//   );
// }

// function Colours() {
//   return (
//     <h1>Red</h1>
//   );
// }

// function sum() {
//   return 1 * 10;
// }


// Event & Function call 

// function App(){
//   function callFun(){
//     alert("function called")
//   }

// const fruit=(name)=>{
//   alert(name)
// }

//   return (
//     <div>
//       <h1>Event & Function call </h1>
//       <button onClick={()=>fruit("apple")}>Apple</button>
//       <button onClick={()=>fruit("banana")}>Banana</button>
//     </div>
//   );
// }


// import { useState } from "react";
// import Counter from "./Counter";

// function App() {
//   const [fruit, setFruit] = useState("Apple");
//   const handleFruit = () => {
//     setFruit("Banana")
//   }

//   return (
//     <div>
//       <h1>State in React JS</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//       <Counter />
//     </div>
//   );
// }


// import { useState } from "react";

// function App() {


//   const [display, setDisplay] = useState(true)
//   return (
//     <div>
//       <h1>Toggle in React js </h1>
//       <button onClick={() => setDisplay(!display)}>Toggle</button>

//       {/* {
//         display ? <h1>Rashmiranjan shaw</h1> : null
//       } */}


//       display ? <User:null /> : null


//     </div>
//   )
// }

function App(){
  const [dis]
  return(
    <div>
      <h1>Multiple Condition in React toggle </h1>
    </div>
  )
}
export default App;

