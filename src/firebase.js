import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {

  apiKey: "AIzaSyAU8C54W1DJ2uZvdPpYS91Jjx1t-PbtnpY",

  authDomain: "my-project-b4cc7.firebaseapp.com",

  projectId: "my-project-b4cc7",

  storageBucket: "my-project-b4cc7.appspot.com",

  messagingSenderId: "143686264023",

  appId: "1:143686264023:web:59b94f1f82a59ed8a43c92",

  measurementId: "G-JTMB3Q0LGN"

}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const customersCollection = db.collection('customers')
const productsCollection = db.collection('products')

export const createCustomer = customer => {
  return customersCollection.add(customer)
}

export const createProduct = product => {
  return productsCollection.add(product)
}

export const getCustomer = async id => {
  const customer = await customersCollection.doc(id).get()
  return customer.exists ? customer.data() : null
}

export const getProduct = async id => {
  const product = await productsCollection.doc(id).get()
  return product.exists ? product.data() : null
}

export const updateCustomer = (id, customer) => {
  return customersCollection.doc(id).update(customer)
}

export const updateProduct = (id, product) => {
  return productsCollection.doc(id).update(product)
}

export const deleteCustomer = id => {
  return customersCollection.doc(id).delete()
}

export const deleteProduct = id => {
  return productsCollection.doc(id).delete()
}

export const useLoadCustomers = () => {
  const customers = ref([])
  const close = customersCollection.onSnapshot(snapshot => {
    customers.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return customers
}

export const useLoadProducts = () => {
  const products = ref([])
  const close = productsCollection.onSnapshot(snapshot => {
    products.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return products
}
