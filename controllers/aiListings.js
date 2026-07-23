const Listing = require("../models/listing");

module.exports.searchListings = async (req, res) => {

    const listings = await Listing.find({});

    res.json(listings);

};