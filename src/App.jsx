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

function App() {
  const name="rashmiranjan"
  let x=10;
  let y=20;

  function fruit(){
    return "Apple"
  }
  return (
    <div>
  
<h1>JSX with Curly Braces</h1>
<h1>{name}</h1>
<h1>{x+y}</h1>
<h1>{fruit()}</h1>
    </div>
  );
}

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
export default App;


