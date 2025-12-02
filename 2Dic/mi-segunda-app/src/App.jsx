import "./App.css";
import CabeceraTiendaComponent from "./components/CabeceraTiendaComponent";

// const myFn = () => (10);
// const myFn2 = () => { return 10 };

function App() {
  const data = [
    {
      id: 1,
      title: "Libro 1",
      description: "Descripcion del libro 1",
      price: 10,
      IVA: 2,
      premium: true,
    },
    {
      id: 2,
      title: "Libro 2",
      description: "Descripcion del libro 2",
      price: 15,
      IVA: 2,
      premium: false,
    },
    {
      id: 3,
      title: "Libro 3",
      description: "Descripcion del libro 3",
      price: 20,
      IVA: 2,
      premium: true,
    },
    {
      id: 4,
      title: "Libro 4",
      description: "Descripcion del libro 4",
      price: 20,
      IVA: 4,
      premium: false,
    },
  ];
  return (
    <>
      <CabeceraTiendaComponent/>
      <hr />
      <hr />
      <div>
        {data.map((elem, idx) => (
          <div key={idx}>
            <p>Title: {elem.title}</p>
            <p>Description: {elem.description}</p>
            <p>Price: {elem.price}</p>
            <p>Precio total (con IVA): {elem.price + elem.IVA}</p>
            <p>Premium: {elem.premium? 'Si' : 'No'}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
