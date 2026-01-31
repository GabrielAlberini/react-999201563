import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import "../styles/views/Home.css";
import { Footer } from "../components/Footer";
import { addNewProduct, getAllProducts, deleteProduct, updateProduct } from "../services/api.js";
import { getAllProducts as getAllProductsFirebase, addNewProduct as addNewProductFirebase, updateProduct as updateProductFirebase, deleteProduct as deleteProductFirebase } from "../services/apiFirebase.js";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const fetchingData = async () => {
    const products = await getAllProductsFirebase()
    setProducts(products)
  }

  useEffect(() => {
    fetchingData()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingProduct) {
      const res = await updateProductFirebase(editingProduct, formData)
      const updatedProducts = products.map(p =>
        p.id === editingProduct ? res : p
      )
      setProducts(updatedProducts)
      setEditingProduct(null)
    } else {
      const addedProduct = await addNewProductFirebase({
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image,
        description: formData.description
      })
      setProducts([addedProduct, ...products])
    }

    setFormData({
      name: "",
      price: "",
      category: "",
      image: "",
      description: ""
    })
  }

  const handleUpdateProduct = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description
    })
    setEditingProduct(product.id)
  }

  const handleDeleteProduct = async (id) => {
    try {
      if (!confirm("¿Estás seguro que deseas borrar el producto?")) {
        return
      }

      const idDeletedProduct = await deleteProductFirebase(id)
      alert(`Producto id: ${idDeletedProduct} borrado con éxito`)
      const filteredProducts = products.filter(p => p.id !== id)
      setProducts(filteredProducts)
    } catch (error) {
      console.log(error)
    }
  }

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
            <button>{editingProduct ? "Actualizar" : "Agregar"}</button>
          </form>
        </section>
        <section className="products">
          <h2>Nuestros productos</h2>
          <div className="products-list">
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="buy">
                  <p>{product.price} usd</p>
                  <button>Comprar</button>
                </div>
                <div>
                  <button onClick={() => handleUpdateProduct(product)}>Actualizar</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Borrar</button>
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
