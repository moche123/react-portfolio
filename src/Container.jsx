import React from 'react'
import './Container.css'


const Container = (props) => {
  return (
    <div className='marker'>
        <p>Antes del contenido hijo</p>
        <hr />
        
        <div>{props.children}</div>
        <hr />
    
        <p>Despues del contenido hijo</p>
    </div>
  )
}

export default Container