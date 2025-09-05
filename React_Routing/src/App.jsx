
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// import User from "./components/User";
// import Names from "./components/Names";

// import './App.css'

// function App() {
//   return (

//     // <BrowserRouter>
//     //   <nav>
//     //     <Link to="/Home">Home</Link>
//     //     <Link to="/about">About</Link>
//     //   </nav>

//     //   <Routes>
//     //     <Route path="/Home" element={<Home/>}/>
//     //     <Route path="/about" element={<About/>}/>
//     //   </Routes>
      
//     // </BrowserRouter>

//     // <BrowserRouter>

//     //   {/* <nav>
//     //     <Link to="/user/1">User 1</Link>
//     //     <Link to="/user/2">User 2</Link>
//     //   </nav> */}

//     //   <nav>
//     //     <Link to="/user/rupesh">Name1</Link>
//     //     <Link to="/user/rahul">Name2</Link>
//     //   </nav>

//     //   <Routes>
//     //     {/* <Route path="/user/:id" element={<User/>}/> */}
//     //     <Route path="/user/:name" element={<Names/>}/>
//     //   </Routes>

//     // </BrowserRouter>



//   );
// }

// export default App;


import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import About from "./components/About";
// import Team from "./components/Team";
// import Company from "./components/Company";

function App(){
  return(
    <BrowserRouter>

      <nav>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About/>}>
          <Route path="team" element={<team/>}/>
          <Route path="company" element={<company/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

// function About(){
//   return(
//     <div>
//       <h1>About Page</h1>
//       <nav>
//         <Link to="team">Team</Link>
//         <Link to="company">Company</Link>
//       </nav>
//       <Outlet /> {/* This is where nested routes will show */}
//     </div>
//   )
// }

// function Team() {
//   return <h2>Our Team</h2>;
// }

// function Company() {
//   return <h2>Our Company</h2>;
// }

export default App;





