import { useState, React } from 'react';
import './App.css';
import Header from './partials/header';


function App() {

  const [name, setName] = useState('Moisés');

  return (
    <div className='container'>

      <Header name={name} />
    </div>
  );
}




export default App;
