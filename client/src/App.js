// import logo from './logo.svg';
import './public/css/App.css';
import { BotonRedondo, BotonResaltado } from './components/boton.jsx'
import BotonGradiente from './components/boton.jsx';
import InputText from './components/inputs.jsx';
import LoginPage from './components/login.jsx';



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
    <>  
      
        {/* <BotonGradiente />
        <BotonRedondo />
     
     
        <BotonResaltado />
        <InputText /> */}
     <LoginPage />
    </>
    );
    
}

export default App;

