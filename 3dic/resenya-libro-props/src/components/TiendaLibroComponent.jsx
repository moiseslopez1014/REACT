import React from 'react'

const TiendaLibroComponent = (props) => {
    const {tienda} = props;
  return (
    <>
        <p><b>{tienda.name}</b> | {tienda.address}</p>
    </>
  )
}

export default TiendaLibroComponent