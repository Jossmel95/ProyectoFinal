// Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Validación de campos
    if (!validateEmail(email)) {
      setError('Correo electrónico no válido');
      return;
    }

    if (!validatePassword(password)) {
      setError('Contraseña no válida');
      return;
    }

    // Simulación de autenticación exitosa (puedes llamar a tu API aquí)
    const userData = { name: 'Usuario Ejemplo', role: 'usuario' };
    const authToken = 'tokenGenerado'; // Puedes utilizar una biblioteca como jwt para generar tokens

    login(userData, authToken);
    setError('');
  };

  const validateEmail = (email) => {
    // Implementa tu lógica de validación de correo electrónico aquí
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // Implementa tu lógica de validación de contraseña aquí
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Iniciar sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
