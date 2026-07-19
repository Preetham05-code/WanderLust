const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js")

let MONGO_URL = "mongodb://preethamgowdam18_db_user:VIWozZgpiUzfrggM@ac-zv8kzde-shard-00-00.znv1czx.mongodb.net:27017,ac-zv8kzde-shard-00-01.znv1czx.mongodb.net:27017,ac-zv8kzde-shard-00-02.znv1czx.mongodb.net:27017/?ssl=true&replicaSet=atlas-wsqoy1-shard-0&authSource=admin&appName=Cluster0";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(()=>{
        console.log("Connected Successfully.")
    })
    .catch((err)=>{
        console.log(err);
    });

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: "6a50d5c01217cbf1e2652fe1"})) // Adding owner to all the listings
    await Listing.insertMany(initData.data);
    console.log("Data was added");
};

initDB();
console.log(initData.data.length);