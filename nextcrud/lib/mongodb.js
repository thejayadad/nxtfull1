import { MONGO_CLIENT_EVENTS, MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI

const MONGODB_DB = process.env.DB_NAME


if(!MONGODB_URI){
    throw new Error("Invalid Mongodb URI")
}

if(!MONGODB_DB){
    throw new Error("Invalid database")
}

let cachedClent = null
let cacheDb = null

export async function connectTodatabase(){
    if(cachedClent && cacheDb){
        return {
            client:cachedClent,
            db: cacheDb
        }
    }
    const opts = {
        useNewUrlParser:true,
        undefinedTopology:true
    }
    let client = new MongoClient(MONGODB_URI,opts)
    await client.connect()

    let db = client.db(MONGODB_DB)

    cachedClent = client

    cacheDb = db

    return {
        client: cachedClent,
        db: cacheDb
    }
}

