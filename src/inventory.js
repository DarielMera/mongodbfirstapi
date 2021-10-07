import {createClient} from './client.js'
import faker from 'faker' // this library provides me with fake populated data





export const createInventory = async ({prodName, prodType, prodPrice, prodColor}) => {
  const invetoryCollection = await getInventoryCollection()
  return await invetoryCollection.insertOne({prodName, prodType, prodPrice, prodColor})
}

export const getInventoryCollection = async () => {
  const client = await createClient() // same client
  const db = client.db('mdSportsWearDatabase') // same database
  return db.collection('inventory') // new collection 
}






  