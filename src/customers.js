import {createClient} from './client.js'
import faker from 'faker' // this library provides me with fake populated data



export const getCustomerCollection = async () => {
  const client = await createClient()
  const db = client.db('mdSportsWearDatabase') 
  return db.collection('customers') 
} 



export const createCustomer = async ({custName, phoneNumber, email, address, repeat}) => {
  const customerCollection = await getCustomerCollection() 
  const ret = await customerCollection.insertOne({custName, phoneNumber, email, address, repeat}) 
  return ret; 
}


export const findCustomers = async () => {
  const customerCollection = await getCustomerCollection()
  const ret = await customerCollection.find({})
  return ret.toArray()
}

export const findCustomerById = async (id) => {
  const customerCollection = await getCustomerCollection()
  const ret = await customerCollection.findOne(id)
  return ret
}

  
