import { MongoClient, ServerApiVersion } from "mongodb";

const URI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}.iygo1.mongodb.net/replies?retryWrites=true&w=majority`;
const DATABASE = process.env.MONGO_DB_DATABASE;
const Collections = {
  Codes: "codes",
  ToastReplies: "replies",
};

let _instance: null | MongoClient = null;

const _setInstance = (instance: MongoClient) => (_instance = instance);

export const getDbInstance = () => {
  if (_instance) {
    return _instance;
  }
  const client = new MongoClient(URI, {
    serverApi: ServerApiVersion.v1,
  });
  _setInstance(client);
  return client;
};

export const checkAuthCode = async (authcode: string) => {
  const client = await getDbInstance().connect();
  const collection = client.db(DATABASE).collection(Collections.Codes);
  const result = await collection.findOne({ code: authcode });
  await client.close();
  return result;
};

interface ValidSpeechData {
  firstName: string;
  lastName: string;
  relation: string;
  email: string;
  phone: string;
}
export const registerSpeech = async (speechData: ValidSpeechData) => {
  const client = await getDbInstance().connect();
  const collection = client.db(DATABASE).collection(Collections.ToastReplies);
  const result = await collection.insertOne(speechData);
  await client.close();
  return result;
};
