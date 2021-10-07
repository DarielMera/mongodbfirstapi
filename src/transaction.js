import {createClient} from './client.js'
import faker from 'faker' // this library provides me with fake populated data


  
export const getTransactionCollection = async () => {
  const client = await createClient()
  const db = client.db('mdSportsWearDatabase')
  return db.collection('transactions')
}

let date = new Date()

export const createTransactions = async ({customerId, inventoryId, date}) => {
  const customerCollection = await getTransactionCollection()
  await customerCollection.insertOne({customerId, inventoryId, date})
  return {customerId, inventoryId, date}
}





