import React from 'react';
import './AdoptionForm.css';

interface AdoptionFormProps {
  onSubmit: (data: { nombre: string,dni:string, nacimiento:string,
    mail: string, telefono: string, direccion: string, tipoanimal: string,tenido:string,
    raza: string, edad: string, tamano: string, gatocasa:string, niños:string,gatocaracter:string,
    gatocasa2:string,niños2:string, gatocaracter2:string,interes:string,interes2:string,
  
  }) => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = React.useState('');
  const [dni, setDni] = React.useState('');
  const [nacimiento, setNacimiento] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [tipoanimal, setTipoanimal] = React.useState('cat');
  const [tenido, setTenido] = React.useState('');
  



// GATOS


  const [gatocasa, setGatocasa] = React.useState('');
  const [niños, setNiños] = React.useState('');
  const [gatocaracter, setGatocaracter] = React.useState('');
  const [interes, setInteres] = React.useState('');

// PERROS

const [raza, setRaza] = React.useState('');
  const [edad, setEdad] = React.useState('');
  const [tamano, setTamano] = React.useState('');
  const [gatocasa2, setGatocasa2] = React.useState('');
  const [niños2, setNiños2] = React.useState('');
  const [gatocaracter2, setGatocaracter2] = React.useState('');
  const [interes2, setInteres2] = React.useState('');

 








  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ nombre, mail,dni, nacimiento, telefono, direccion, 
      tipoanimal, raza, edad, tamano,tenido,gatocasa,gatocasa2, niños, niños2, gatocaracter2, gatocaracter,
      interes,interes2,
    
    
    
    });
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

    
        <label htmlFor="nacimiento">Fecha de nacimiento:</label><input id="nacimiento" type="text" value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} />

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


            <label htmlFor="niños">El perro va a convivir con algun niño?</label>
            <input id="niños" type="text" value={niños} onChange={(e) => setNiños(e.target.value)} />

            <label htmlFor="gatocasa">El perro va a convivir con algun gato?</label>
            <input id="gatocasa" type="text" value={gatocasa} onChange={(e) => setGatocasa(e.target.value)} />

            <label htmlFor="gatocaracter">En caso afirmativo, indique el caracter y la edad del niño/gato/perro: </label>
            <input id="gatocaracter" type="text" value={gatocaracter} onChange={(e) => setGatocaracter(e.target.value)} />

            <label htmlFor="interes">Coméntanos qué tipo de perro tienes en mente y qué es lo que buscas en un perro (limitación en el tamaño o la edad, sexo, activo o tranquilo, alguna característica de carácter,
            relación con personas, otros animales, etc.) </label>
            <input id="interes" type="text" value={interes} onChange={(e) => setInteres(e.target.value)} />
          </>
          
        )}





        {tipoanimal === 'dog' && (
          <>
            <label htmlFor="raza">Raza:</label>
            <input id="raza" type="text" value={raza} onChange={(e) => setRaza(e.target.value)} />

            <label htmlFor="edad">Preferencia de edad:</label>
            <input id="edad" type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />

            <label htmlFor="tamano">Tamaño:</label>
            <select id="tamano" value={tamano} onChange={(e) => setTamano(e.target.value)}>
              <option value="pequenio">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>


            <label htmlFor="niños2">El perro va a convivir con algun niño?</label>
            <input id="niños2" type="text" value={niños2} onChange={(e) => setNiños2(e.target.value)} />

            <label htmlFor="gatocasa2">El perro va a convivir con algun gato? </label>
            <input id="gatocasa2" type="text" value={gatocasa2} onChange={(e) => setGatocasa2(e.target.value)} />

            <label htmlFor="gatocaracter2">En caso afirmativo, indique el caracter y la edad del niño/gato/perro:</label>
            <input id="gatocaracter2" type="text" value={gatocaracter} onChange={(e) => setGatocaracter2(e.target.value)} />

            <label htmlFor="interes2">Coméntanos qué tipo de perro tienes en mente y qué es lo que buscas en un perro (limitación en el tamaño o la edad, sexo, activo o tranquilo, 
            alguna característica de carácter, relación con personas, otros animales, etc.)  </label>
            <input id="interes2" type="text" value={interes2} onChange={(e) => setInteres2(e.target.value)} />

          </>
        )}

        <button type="submit">Enviar</button>
      </form>
      <div className="right-image" />
    </div>
  );
};

export default AdoptionForm