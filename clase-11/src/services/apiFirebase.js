// SDK -> software development kit de firebase
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase.js"

// skd firebase

// users, products, providers, clients, purchases
const productsCollection = collection(db, "products")



const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

const addNewProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product)
  return {
    id: docRef.id,
    ...product
  }
}

const updateProduct = async (id, updates) => {
  const product = doc(db, "products", id)
  await updateDoc(product, updates)
  return {
    id,
    ...updates
  }
}

const deleteProduct = async (id) => {
  const product = doc(db, "products", id)
  await deleteDoc(product)
  return id
}

export { getAllProducts, addNewProduct, updateProduct, deleteProduct }