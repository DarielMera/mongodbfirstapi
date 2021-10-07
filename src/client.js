import {MongoClient, ObjectId} from "mongodb"
import dotenv from 'dotenv'


dotenv.config()

let _client = new MongoClient(process.env.MONGO_URL)
let isConnected = false

// only create always one client if it exist just return it

export const createClient = async () => {
    if(!isConnected) {
      _client = new MongoClient(process.env.MONGO_URL)
      await _client.connect()
    }
    return _client
  }