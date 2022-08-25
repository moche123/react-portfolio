import { useState, React } from 'react';
import './App.css';
import Header from './partials/header';
import UseRef from './partials/useRef';
import UseReducer from './partials/useReducer';
import UseCallback from './partials/useCallback';


function App() {


  const [name, setName] = useState('Carlos');

  return (
    <div className='container'>

      <Header name={name} />

      <hr />

      <UseRef />

      <hr />

      <UseReducer />

      <hr />

      <UseCallback />

    <hr />


    </div>
  );
}




export default App;
