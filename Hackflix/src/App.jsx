import "./App.css";
import pelis from "../data.json";

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        {pelis.map((peli) => (
          <div className="col-3" key={peli.id}>
            <div className="card h-100">
              <img
                src={peli.poster_path}
                className="card-img-top"
                alt={peli.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
