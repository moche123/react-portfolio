import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

  const [inputValue, setInputValue] = useState("");

  const previousInputValue = useRef("")

  //! Reeemplazaba los ciclos de vida
  //! RE-RENDERIZADO --> DETECTO CAMBIOS, EVITAMOS EL MEMORY LEAK (PERDIDA DE MEMORIA)

  useEffect(() => {
    //! VOY A HACER
    previousInputValue.current = inputValue
    //! CAMBIO COLOR
    

  }, [inputValue]);//! MOTIVABA A HACER


  return (
    <>
        <input 
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)  }
         />

        <h3>Current value: {inputValue}</h3>
        <h3>Previous value: {previousInputValue.current}</h3>

    </>

  )
}

export default UseRef