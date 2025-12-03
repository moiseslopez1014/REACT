import React from 'react'

const TarjetaResenyaComponent = (props) => {
    const {resenya, numero} = props;
  return (
    <div>
        <h3>Reseña: {numero}</h3>
        <h3>Author: {resenya.name}</h3>
        <p>Review: {resenya.review}</p>
    </div>
  )
}

export default TarjetaResenyaComponent