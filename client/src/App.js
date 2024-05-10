// import logo from './logo.svg';
import './public/css/App.css';
// import LoginForm from './components/login.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from './pages/login';



function App() {
   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< LoginForm />} />
            <Route path="/landing" element={<h1> BienvenidEs!</h1>} />
        </Routes>
    </BrowserRouter> 
    // <>  
    //     <LoginForm />
    // </>
    );
    
}

export default App;

