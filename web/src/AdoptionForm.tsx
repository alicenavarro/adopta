import React from 'react';
import './AdoptionForm.css';

interface AdoptionFormProps {
  onSubmit: (data: { name: string, email: string, phone: string, address: string, petType: string }) => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ onSubmit }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [petType, setPetType] = React.useState('cat');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, email, phone, address, petType });
  };

  return (
    
<div className="form-container">
  <div className="left-sider"></div>
  <div className="right-sider"></div>
  <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Correo electrónico:</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="phone">Teléfono:</label>
      <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label htmlFor="address">Dirección:</label>
      <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label htmlFor="petType">Tipo de mascota:</label>
      <select id="petType" value={petType} onChange={(e) => setPetType(e.target.value)}>
        <option value="cat">Gato</option>
        <option value="dog">Perro</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
    <div className="right-image" />
    </div>
  );
};

export default AdoptionForm;
