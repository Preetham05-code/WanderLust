const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,

    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url: {
            type: String,
            default: "https://images.pexels.com/photos/14012585/pexels-photo-14012585.jpeg",
            set: (v)=>
                v===""
            ? "https://images.pexels.com/photos/14012585/pexels-photo-14012585.jpeg"
            :v,
        }
    },

    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner :{
        type: Schema.Types.ObjectId,
        ref:"User",
    },

    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});
    

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;