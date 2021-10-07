import { ObjectId } from 'bson';
import dotenv from 'dotenv'
import express  from "express";
import { createCustomer, findCustomers, findCustomerById} from './src/customers.js';
// import { createInventory, findInventory} from './src/inventory.js';
// import { createTransactions , findTransactions} from './src/transaction.js';



dotenv.config()


const app = express()
app.use(express.json())

/* @@@@@@@@@@@@@@@@@@@@@@@--CUSTOMERS--@@@@@@@@@@@@@@@@ */

app.get('/customers/:id', async (req, res) => {

try { 
    const id = new ObjectId(req.params.id)
    let customer = await findCustomerById(req.body)
    res.status(200).send(customer)
} catch(err) {
    res.status(500).send(err)
    console.log(err)
}
})

app.get('/customers', async (req, res) => {

    try { 
        let customer = await findCustomers(req.body)
        res.status(200).send(customer)
    } catch(err) {
        res.status(500).send(err)
        console.log(err)
    }
    })
    


app.post('/customers', async (req, res) => {

    try { 
        let customer = await createCustomer(req.body)
        res.status(200).send(customer)
    } catch(err) {
        res.status(500).send(err)
    }

})


    






/* @@@@@@@@@@@@@@@@@@@@@@@--INVENTORY--@@@@@@@@@@@@@@@@ */


/* app.get('/inventory/:id', findInventory)
app.post('/inventory', createInventory)
 */

/* @@@@@@@@@@@@@@@@@@@@@@@--TRANSACTIONS--@@@@@@@@@@@@@@@@ */


/* app.post('/transactions:id', createTransactions)
app.post('/transactions', createTransactions)
 */


app.listen(3000, () => console.log('listening on port 3000'))
// exports.app = functions.https.onRequest(app)



