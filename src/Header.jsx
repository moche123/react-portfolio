import React from 'react'


const Header = ({name,age,profession='doctor',experience,counter,message}) => {

    let styleRed = {
        backgroundColor: 'red',
        padding: '20px',
        color: 'white',
        fontWeight: 'bold'
    }

    let styleBlue = {
        backgroundColor: 'blue',
        padding: '20px',
        color: 'white',
        fontWeight: 'bold'
    }


  return (
     <div style={counter%2 === 0 ? styleRed:styleBlue}>
     {/* <div className={counter%2 == 0 ? 'red':'blue'}> */}
        <h1>Hola, soy {name} - I'm {age} years old and I'm a {profession} with {experience} years' experience</h1>
        <br />
        <p>El counter en el header es: {counter}</p>
        <br />
        {message ? 'Esta encendido':'Esta apagado'}
    </div>
  )
}

export default Header