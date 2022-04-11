import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}.iygo1.mongodb.net/replies?retryWrites=true&w=majority`;

let _instance: null | MongoClient = null;

const _setInstance = (instance: MongoClient) => (_instance = instance);

export const getDbInstance = () => {
  if (_instance) {
    return _instance;
  }
  const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
  });
  _setInstance(client);
  return client;
};
