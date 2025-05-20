import { useEffect, useState } from "react";
import axios from "axios";
import Stats from "./components/Stats";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=50").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const filtrados = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Proyecto Integrador Evidencia2 Francisco Oviedo</h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Stats products={filtrados} />

      {filtrados.length === 0 && <p>No hay productos.</p>}

      <ul>
        {filtrados.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
