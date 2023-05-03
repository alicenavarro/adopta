import React from 'react';
import AdoptionForm from './AdoptionForm';
import './App.css';
import Layout from './Layout';

const App: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const handleAdoptionSubmit = (data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    petType: string;
  }) => {
    console.log(data);
    setShowForm(false);
  };

  return (
    <Layout>
      <div className="App">
        <header>
        <h1>Bienvenido, estas apunto de adoptar a tu nuevo mejor amigo!</h1></header>
        {showForm ? (
          <AdoptionForm onSubmit={handleAdoptionSubmit} />
        ) : (
          
          <button className="Adopta" onClick={() => setShowForm(true)}>
            Adoptar una mascota
          </button>
        )}
      </div>
    </Layout>
  );
};

export default App;


