const { connect } = require("mongoose");

const MONGO_DB_URL = "mongodb+srv://busygurmukh:Veer%402004@cluster0.q2girxr.mongodb.net";
const DB_NAME = "cs-library-app";
const connectDb = async () => {
    try {
        await connect (`${MONGO_DB_URL}/${DB_NAME}`);
        console.log("MongoDb connection is successful.");
    } catch (err) {
        console.error(err);
    }
};

connectDb();

module.exports = {};