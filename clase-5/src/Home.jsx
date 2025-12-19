import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  // usestate retorna un array de dos elementos
  // 1 - estado al que le tengo que dar un nombre
  // 2 - una función para actualizar el estado
  const [name, setName] = useState("Juan");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // traer los datos
    // utilizar una api
    const traerLosDatos = async () => {
      const respuestaDeLaApi = await fetch("https://fakestoreapi.com/products");
      const data = await respuestaDeLaApi.json();
      setProducts(data);
    };

    traerLosDatos();
  }, []);

  const imagenJuan =
    "https://www.argentina.gob.ar/sites/default/files/foto_01662024.jpg";

  const imagenGabriel = "https://github.com/GabrielAlberini.png";

  const stylesGabriel = { background: "red" };
  const stylesJuan = { background: "blue" };

  const handleClick = () => {
    setName((valorPrevio) => (valorPrevio === "Gabriel" ? "Juan" : "Gabriel"));
  };

  // Si el nombre es gabriel, mostrar la imagen de él, sino de juan
  return (
    <>
      <header style={name === "Gabriel" ? stylesGabriel : stylesJuan}>
        <div>
          <img src={name === "Gabriel" ? imagenGabriel : imagenJuan} />
          <h2>Mi nombre es {name}</h2>
        </div>
        <button onClick={handleClick}>Cambiar usuario</button>
      </header>
      <main>
        <section className="bio">
          <h2>Nuestra misión</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse
            labore amet architecto. Similique excepturi sint rem praesentium
            veritatis optio suscipit eligendi non harum fugiat nihil autem,
            reprehenderit maiores fuga enim ducimus? Reiciendis eos laboriosam
            ut totam tempora qui asperiores delectus in. Laudantium distinctio
            nihil ratione fugiat nesciunt facilis libero, cumque saepe dicta,
            eaque quae voluptas numquam corporis culpa veritatis iste ab atque
            dolores laborum, eum minus accusamus sapiente ullam. Harum expedita
            doloribus ut eligendi provident itaque corporis est non assumenda a,
            saepe nisi dignissimos architecto nihil vel voluptatum. Temporibus
            commodi exercitationem libero minus quas in perferendis incidunt
            corrupti maiores!
          </p>
        </section>
        <section className="products">
          <h2>Nuestros productos</h2>
          <div className="products-list">
            {products.map((product) => (
              <div>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <div className="buy">
                  <p>{product.price} usd</p>
                  <button>Comprar</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>Sitio desarrollado por UTN</p>
      </footer>
    </>
  );
};

export { Home };
