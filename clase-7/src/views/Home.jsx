import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import "../styles/Home.css";
import { Footer } from "../components/Footer";
import { addNewProduct, getAllProducts } from "../services/api.js";

const Home = () => {
  // usestate retorna un array de dos elementos
  // 1 - estado al que le tengo que dar un nombre
  // 2 - una función para actualizar el estado
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // spread operator
    setFormData({ ...formData, [name]: value })
  }

  const fetchingData = async () => {
    const products = await getAllProducts()
    setProducts(products)
  }

  useEffect(() => {
    fetchingData()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addedProduct = await addNewProduct(formData)
    setProducts([addedProduct, ...products])
  }

  // Si el nombre es gabriel, mostrar la imagen de él, sino de juan
  return (
    <>
      <Header />
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
        <section>
          <h2>Agregar producto</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Titulo"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="price"
              type="number"
              placeholder="Precio"
              required
              value={formData.price}
              onChange={handleChange}
            />

            <input
              name="category"
              type="text"
              placeholder="Categoria"
              required
              value={formData.category}
              onChange={handleChange}
            />

            <input
              name="image"
              type="text"
              placeholder="URL image"
              required
              value={formData.image}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Descripción"
              required
              value={formData.description}
              onChange={handleChange}
            >
            </textarea>
            <button>Agregar</button>
          </form>
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
      <Footer />
    </>
  );
};

export { Home };
