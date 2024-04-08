import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import InputLabel from './components/InputLabel';
import ServiceItem from './components/ServiceItem';


function App() {
  const [viewData, setViewData] = useState(false);
  // Services é a variável que contém o estado atual da lista e setServives é a função que utilizarei para atualizar este estado
  const [services, setServices] = useState([]);

  const handleViewData = () => setViewData((data) => !data);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
    console.log(newService);
  };
  console.log(InputLabel);
  useEffect(() => {
    console.log(services);
  }, [services]);

  const handleRemove = (id) => {
    console.log(id);
    setServices(services.filter((service) => service.id !== id));
    console.log(services);
  };

  return (
    <>
      <header>
        <Title />
      </header>
      <div>
        {viewData && <Form
          handleViewData={ handleViewData }
          handleAddService={ handleAddService }
        />}
        {!viewData && <button onClick={ handleViewData }>Cadastrar nova senha</button>}
        <div>
          {services.length === 0 ? 'Nenhuma senha cadastrada'
            : services.map((service) => (
              <ServiceItem key={ service.id } 
              service={ service } handleRemove={ handleRemove }/>))}
        </div>
      </div>
    </>
  );
}

export default App;
