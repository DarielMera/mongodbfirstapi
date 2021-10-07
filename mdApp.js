import { MongoClient, ObjectId } from "mongodb";
import {client} from client;





// command and click will open internal documentation
import dotenv from 'dotenv'
// here is all the secretes..the database..the hosts
// in mongo we have less configuration just one URL
// npm i dotenv to insall it 

import faker from 'faker' // this library provides me with fake populated data

dotenv.config(); // .config activates (executes) the .env file that protects my credentials

let _client; // by using the underscore _ i'm telling other developers not to mess with this variable
//conole.log(ObjectId.custName
/* 
order
1. create client...CLUSTER
2. create database .....we always calling a level up and waiting
3. create collection
4. add to collection

*/





//the function below checks for already created client. if client exist then return the same one
// here I create my cluster






// here we are setting up the collection to fill it 
//
const createCustomer = async ({custName, phoneNumber, email, address, repeat}) => {
  const customerCollection = await getCustomerCollection() // i need the collectio first before passing the object keys
  const ret = await customerCollection.insertOne({custName, phoneNumber, email, address, repeat}) // this will return the customer object, so i can use it later to enter the data
  return ret; 
}
// ret.Array() to return multiple documents         
// how can we add multiple customers at a time?


// here i call the cluster and Initialize the database and Initializing collection
// we put the codes in a functin no to dry
const getCustomerCollection = async () => {
  const client = await createClient()
  const db = client.db('mdSportsWearDatabase') //we creating the database and if database does not exist it creates it
  return db.collection('customers') // we are creatig the collection ...if does not exist then create it
} // this function help us no to repeat ouselves



const createInventory = async ({prodName, prodType, prodPrice, prodColor}) => {
  const invetoryCollection = await getInventoryCollection()
  return await invetoryCollection.insertOne({prodName, prodType, prodPrice, prodColor})
}

const getInventoryCollection = async () => {
  const client = await createClient() // same client
  const db = client.db('mdSportsWearDatabase') // same database
  return db.collection('inventory') // new collection 
}


const getTransactionCollection = async () => {
  const client = await createClient()
  const db = client.db('mdSportsWearDatabase')
  return db.collection('transactions')
}

let date = new Date()

const createTransactions = async ({customerId, inventoryId, date}) => {
  const customerCollection = await getTransactionCollection()
  await customerCollection.insertOne({customerId, inventoryId, date})
  return {customerId, inventoryId, date}
}



/* const runNTimes = (n) => {

} */





const run = async () => {
  const client = await createClient()
  
  const customer = await createCustomer({
    custName: faker.name.firstName(), 
    phoneNumber: faker.phone.phoneNumber(), 
    email: faker.internet.email(), 
    address: faker.address.city(), 
    repeat: true,
  })


//   console.log(customer.insertedId);


    const transaction = await createTransactions({
      customerId: customer.insertedId, 
      inventoryId: inventory.insertedId, 
      date: faker.date.past()
    })

  console.log(customer.insertedId);
  console.log(inventory.insertedId);
  console.log(transaction.insertedId);
  
  await client.close()
}

run().then()

