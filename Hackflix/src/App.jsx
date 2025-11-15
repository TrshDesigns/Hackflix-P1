import "./App.css";
import pelis from "../movies.json";

function App() {
  const pelisTransformadas = pelis.map((peli) => (
    <div>
      <h1>{peli.title}</h1>
      <img src={peli.poster_path} alt={peli.title} width="200" />
    </div>
  ));

  return (
    <div>
      <h1>hola</h1>
      {pelisTransformadas}
    </div>
  );
}

export default App;
