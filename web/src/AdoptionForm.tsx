import React from 'react';
import './AdoptionForm.css';

interface AdoptionFormProps {
  onSubmit: (data: { nombre: string,dni:string, nacimiento:string, mail: string, telefono: string, direccion: string, tipoanimal: string, raza: string, edad: string, tamano: string, tenido:string }) => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = React.useState('');
  const [dni, setDni] = React.useState('');
  const [nacimiento, setNacimiento] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [tipoanimal, setTipoanimal] = React.useState('cat');
  const [raza, setRaza] = React.useState('');
  const [edad, setEdad] = React.useState('');
  const [tamano, setTamano] = React.useState('');
  const [tenido, setTenido] = React.useState('');


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ nombre, mail,dni, nacimiento, telefono, direccion, tipoanimal, raza, edad, tamano,tenido });
  };

  return (
    
    <div className="form-container">
      <div className="left-sider"></div>
      <div className="right-sider"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre Completo:</label>
        <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor="dni">Nombre Completo:</label>
        <input id="dni" type="text" value={dni} onChange={(e) => setDni(e.target.value)} />

    
        <label htmlFor="nacimiento">nacimiento:</label>
        <input id="nacimiento" type="text" value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} />

        <label htmlFor="mail">Correo electrónico:</label>
        <input id="mail" type="email" value={mail} onChange={(e) => setMail(e.target.value)} />

        <label htmlFor="telefono">Teléfono:</label>
        <input id="telefono" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

        <label htmlFor="direccion">Dirección:</label>
        <input id="direccion" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />

        <label htmlFor="tipoanimal">Tipo de mascota:</label>
        <select id="tipoanimal" value={tipoanimal} onChange={(e) => setTipoanimal(e.target.value)}>
          <option value="cat">Gato</option>
          <option value="dog">Perro</option>
        </select>

        {tipoanimal === 'cat' && (
          <>
            <label htmlFor="tenido">Ha tenido gato anteriormente?</label>
            <input id="tenido" type="tenido" value={tenido} onChange={(e) => setTenido(e.target.value)} />

            {/* <label htmlFor="edad">Edad:</label>
            <input id="edad" type="text" value={edad} onChange={(e) => setEdad(e.target.value)} /> */}
          </>
        )}

        {tipoanimal === 'dog' && (
          <>
            <label htmlFor="raza">Raza:</label>
            <input id="raza" type="text" value={raza} onChange={(e) => setRaza(e.target.value)} />

            <label htmlFor="edad">Edad:</label>
            <input id="edad" type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />

            <label htmlFor="tamano">Tamaño:</label>
            <select id="tamano" value={tamano} onChange={(e) => setTamano(e.target.value)}>
              <option value="pequenio">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
          </>
        )}

        <button type="submit">Enviar</button>
      </form>
      <div className="right-image" />
    </div>
  );
};

export default AdoptionForm