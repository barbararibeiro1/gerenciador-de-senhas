import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [viewData, setViewData] = useState(false);

  const handleViewData = () => setViewData((data) => !data);
  return (
    <>
      <header>
        <Title />
      </header>
      <div>
        {viewData
          ? <Form handleViewData={ handleViewData } />
          : <button onClick={ handleViewData }> Cadastrar nova senha </button>}
      </div>
    </>
  );
}
export default App;
