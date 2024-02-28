import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Panorama from './Components/Panorama'
import Form from './Components/Form'


function App() {
  let panoramas = [
    {id: 1, ciudad: 'Santiago', actividad: 'Conoce el Cerro Santa Lucía'},
    {id: 2, ciudad: 'Viña del mar', actividad: 'Visita el reloj de flores'},
    {id: 3, ciudad: 'La Serena', actividad: 'Visita Bahia Blanca'},
    {id: 4, ciudad: 'Puerto Montt', actividad: 'Rafting en Río Petrohue'},
  ] 

  return (
    <>
        <Panorama/>
    </>
  )
}

export default App
