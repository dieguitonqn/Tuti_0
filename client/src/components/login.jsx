import React, { useState } from 'react';
import axios from 'axios';
import '../public/css/login.css'; // Importa el archivo CSS

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/login', { username, password });
      console.log(response.data); // Manejar la respuesta según sea necesario
    } catch (error) {
      setError('Usuario o contraseña incorrectos'); // O cualquier otro mensaje de error
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login"> {/* Aplica la clase 'login' */}
      <div className="login-container"> {/* Agrega un contenedor con la clase 'login-container' */}
        <h2 className="login-header">Iniciar sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          
          <div>
            <label htmlFor="username">Usuario</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
