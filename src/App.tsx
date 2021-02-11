import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        
      <nav>
17           <ul>
18             <li>
19               <Link to="/">Home</Link>
20             </li>
21             <li>
22               <Link to="/products/1">First Product</Link>
23             </li>
24             <li>
25               <Link to="/products/2">Second Product</Link>
26             </li>
27           </ul>
28         </nav>
      
      </header>
    </div>
  );
}

export default App;
