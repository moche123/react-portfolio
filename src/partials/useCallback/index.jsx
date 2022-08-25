import React, {useState,useCallBack} from 'react'
import List from './List';

const UseCallback = () => {

  const [number, setNumber] = useState(1); //! CAJITA DE NUMERO


  const getItems = useCallBack( ()=>{

    return [number, number+1, number+2]

  },[number] )

  return (
    <div>
      <input type="number"
              value={number}
              onChange={
                e => {
                  if(e.target.value){
                    setNumber(parseInt(e.target.value))
                  }else{
                    setNumber(0)
                  }
                }
              }
      />

     <List getItems={getItems}/>
      

    </div>



    
  )
}

export default UseCallback