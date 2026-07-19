const Listing = require("../models/listing.js");
const NodeGeocoder = require("node-geocoder");

const options = {
    provider: "openstreetmap"
};

const geocoder = NodeGeocoder(options);

module.exports.index =  async (req,res)=>{
    let allListings = await Listing.find();
    res.render("listings/index.ejs", {allListings});
};

// controllers/listings.js

// Feeling Lucky: fetch one random listing via MongoDB's $sample aggregation
// and redirect the user straight to its show page.
module.exports.randomListing = async (req, res) => {
  const [randomListing] = await Listing.aggregate([{ $sample: { size: 1 } }]);

  if (!randomListing) {
    // No listings in the DB — fail gracefully instead of erroring out
    req.flash("error", "No listings available right now. Check back soon!");
    return res.redirect("/listings");
  }

  res.redirect(`/listings/${randomListing._id}`);
};


module.exports.renderNewForm =  (req,res)=>{
    res.render("listings/new.ejs"); 
};


module.exports.showListing =  async (req,res)=>{
    let {id}= req.params;
    let List = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate:{
                path:"author",
            },
        })
        .populate("owner");
    if(!List){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", {List});
};

module.exports.createListing =  async (req,res,next)=>{
    let response = await geocoder.geocode(req.body.listing.location);
    
    console.log(response);
    
    let url = req.file.path;
    let filename= req.file.filename;
    let newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry = {
        type: "Point",
        coordinates: [response[0].longitude, response[0].latitude]
    };
    
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
};

module.exports.editListing =  async (req,res)=>{
    let {id}= req.params;
    let List = await Listing.findById(id);
    res.render("listings/edit.ejs", {List});
} ;

module.exports.updateListing = async (req,res)=>{
    let {id}= req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    
    if(typeof req.file !=="undefined"){
        let url = req.file.path;
        let filename= req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    };

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing =  async (req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
};