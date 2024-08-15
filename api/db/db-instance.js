import mongoose from "mongoose";

const db={};
db.mongoose = mongoose;
db.url = "mongodb://127.0.0.1:27017/deb";

db.mongoose.connect(db.url)
.then(()=>{
    console.log("connected to database :)");
})
.catch(err => {
    console.log("could'nt connect to databse :(");
    process.exit();
})
export default db;