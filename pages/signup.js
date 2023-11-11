
import React, { useState } from 'react';

const RegistroUsuarios = () => {
  const [userData, setUserData] = useState({
    email: '',
    nit: '',
    dpi: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza las validaciones y registro de usuario aquí
    // Verifica el email, NIT, DPI y la contraseña
    // Muestra mensajes de error si es necesario
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <MensajeError mensaje={errors.email} />}
        </div>

        <div>
          <label>NIT:</label>
          <input
            type="text"
            name="nit"
            value={userData.nit}
            onChange={handleChange}
          />
          {errors.nit && <MensajeError mensaje={errors.nit} />}
        </div>

        <div>
          <label>DPI:</label>
          <input
            type="text"
            name="dpi"
            value={userData.dpi}
            onChange={handleChange}
          />
          {errors.dpi && <MensajeError mensaje={errors.dpi} />}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <MensajeError mensaje={errors.password} />}
        </div>

        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <MensajeError mensaje={errors.confirmPassword} />
          )}
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};



export default SignUp;
