import logo from "./logo.svg";
import "./App.css";
import Navebar from "./componet/Navbar/Navebar";
import Common from "./componet/Common";
import Home from "./home_page/Home";
// E:\dharti\src\

function App() {
  return (
    <div className="App">
      {/* <Navebar /> */}
      {/* <Common /> */}
      <Home />
    </div>
  );
}

export default App;
  

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from './HomePage'; // Ensure correct path to your components
// import LoginPage from './LoginPage'; // Import your LoginPage component

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route exact path="/" component={HomePage} />
//         <Route path="/login" component={LoginPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;
