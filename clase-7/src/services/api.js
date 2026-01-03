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
const updateProduct = async () => {
  try {
    const res = await fetch()
  } catch (error) {

  }
}

// DELETE -> DELETE
const deleteProduct = async () => {
  try {
    const res = await fetch()
  } catch (error) {

  }
}

export { getAllProducts, addNewProduct, updateProduct, deleteProduct }