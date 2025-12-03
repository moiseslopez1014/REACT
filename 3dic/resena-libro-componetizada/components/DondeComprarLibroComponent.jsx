import React from 'react'

const DondeComprarLibroComponent = () => {
    const listaTiendas = [
    {
      id: 0,
      name: "Deckow - Runolfsson",
      address: "111 Asa Radial",
    },
    {
      id: 1,
      name: "Bernier - Swift",
      address: "0421 Feeney Station",
    },
  ];
    return (
    <div>
        <h2>Donde comprar este libro?</h2>
        {
            listaTiendas.map((tienda, idx) => (
                <div key={idx} >
                    <h3>Nombre: {tienda.name}</h3>
                    <p>Direccion: {tienda.address}</p>
                </div>
            ))
        }
      </div>
  )
}

export default DondeComprarLibroComponent