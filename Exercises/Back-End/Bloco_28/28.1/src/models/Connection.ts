
import { MongoClient } from 'mongodb';

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/class';

let db: any = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL)
    .then((conn) => {
    db = conn.db('class');
    return db;
    })
};

export default connection;