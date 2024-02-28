const Panorama = ({item}) => {
    console.log(item)
    const {ciudad, actividad} = item
  return (
      <div>
          <h3>Ciudad: {ciudad}</h3>
          <h4>Actividad: {actividad}</h4>
          <button>Únete</button>
      </div>


  )
}