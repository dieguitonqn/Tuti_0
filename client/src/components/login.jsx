import React, { useState } from 'react';
import '../public/css/inputs.css'
import '../public/css/botones.css'
import { InputEmail } from './inputs';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario
    // por ejemplo, podrías enviar una solicitud a un servidor backend
    // y verificar las credenciales del usuario
    // Simplemente para este ejemplo, cambiaré loggedIn a true cuando se presione el botón de inicio de sesión
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Bienvenido de vuelta!</h2>
          {/* Aquí iría el contenido para usuarios autenticados */}
        </div>
      ) : (
        <div>
          <h2>Iniciar sesión</h2>
          <InputEmail
            // className='input-email'
            // type="email"
            // placeholder="Correo electrónico"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input-password'
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='boton_resaltado' onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
