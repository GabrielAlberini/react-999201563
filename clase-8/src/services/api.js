const api_base = "https://fakestoreapi.com/products"

// READ -> GET
const getAllProducts = async () => {
  try {
    const res = await fetch(api_base, {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// CREATE -> POST
const addNewProduct = async (product) => {
  try {
    const res = await fetch(api_base, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// UPDATE -> PUT
const updateProduct = async (id, updates) => {
  try {
    const res = await fetch(`${api_base}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
      headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

// DELETE -> DELETE
const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${api_base}/${id}`, {
      method: "DELETE"
    })

    console.log(res)

    return "Producto borrado con éxito"
  } catch (error) {
    console.error(error)
  }
}

export { getAllProducts, addNewProduct, updateProduct, deleteProduct }