import {MongoClient, ObjectId} from 'mongodb'
import dontenv from 'dotenv'









// import faker from 'faker'


// this is how zak will write his code 
// this is how he stablishes his connection

dontenv.config()
// this function returns a promise of a database
// every time we have to create a client
// so i wont have to write it next time
let _client; // 
// in js the underscore means is private, this is a normal paradigm
/* const createClient = async () => { // we create the cluster
    const client = new MongoClient(); //defining a client , the client understand alot about mongo 
    await client.connect() // we hover over tab hover and shows me the definition / i can not use await if is not a async function
    const db = client.db('darielsFirstDatabase'); // we want to use this database if it does not exist returns a database
    const dbDm = db.collection('users')
    return client;

    // i want to be able to switch the collections
}
 */

// WE NEED TO CACHED OUT CLIENT CONNECTIONG
const createClient = async () => { // we create the cluster
    if(!_client){ // this is how i cache the client connection.. if i runnit the first time already the next times .. the idea is to just create one client...only ever create 1 client, if it already exits jsut return it
     _client = new MongoClient(process.env.MONGO_URL) //defining a client , the client understand alot about mongo 
    await _client.connect() // we hover over tab hover and shows me the definition / i can not use await if is not a async function
    }
    return _client

    // i want to be able to switch the collections
    // we dont export line 5 only the function for other developers to use
};


// this is boiler plate to create cluster, db, collection
// the idea is to get to my collection and then i get all my methods (tools ) to work with everything else is just boiler plate
const getUserCollection = async () => {
    const client = await createClient()
    const db = client.db ('db2')
    return db.collection('user')

};



// mongo will figure out datafields i dont have to specify
const createUser = async ({userName, dob, email}) => {
    const userCollection = await getUserCollection()
    await userCollection.insertOne({userName, dob, email});
    return {userName, dob, email}
    // you can only call insert in a collection

};



// there coulb be 1000000 users ... do not return everybody the computer will crash.....
// toArray() -> will fiveme everythign in ghe collection , i dot not want to do that
// 



//before lunch
const getUser = async () => {
    const client = await createClient();
    const ret = await userCollection.find({
        userName: 'Dariel'
    })
    return console.log(ret.toArray())

}




/*  i'm creating my query inside the find method ...we pass in an object...i can later search for the properties to query
 arrays are important too,    
this is what we are going to be doing 
once we have our collections
$exists: true , // boolean if it is define return it..this is like filtering....querying
//$gt: // this is the greater then operator//
$lt: // less then operator
$in: // takes in an array ex $in['green', 'red']
collection.find(field: {$function})
$all: // takes in an array .....ex: give me all the document that has this values
 */







//after lunch

const run = async () => {
const client = await createClient()
await createUser({
    name: 'Dariel',
    dob: new Date('08/24/1994'),
    email: "daridariel@yahoo.com",
    }).then()
    await client.close()
    };
    
run().then()



// .find() is the most used method it returns everything
// takes in an object at its first argument
// mongo has a date type - give the date object and will give me tools to do fancy things



// when i need to do things at the top lever i just need to use the .then

