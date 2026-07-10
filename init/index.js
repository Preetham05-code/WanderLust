const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js")

let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
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
    initData.data = initData.data.map((obj)=>({...obj, owner: "6a4e380b3a6199a097aa51eb"})) // Adding owner to all the listings
    await Listing.insertMany(initData.data);
    console.log("Data was added");
};

initDB();
console.log(initData.data.length);