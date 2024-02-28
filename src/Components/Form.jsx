import {useState} from 'react'

const Form = () => {
  return (
    <form>
        <label >Tu nombre y apellido</label>
        <input type="text"/>
        <label >¿Cuál es tu idea de unas vacaciones soñadas?</label>
        <input type="text"/>
        <button>Enviar</button>


    </form>
  )
}

export default Form