const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.addReview = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review created!");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview =async (req, res)=>{
    let {id, reviewId}= req.params;
    
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //mongoose special PULL, used to fetch delete matching id
    await Review.findByIdAndDelete(reviewId);  ///Deletes review in the reviews database only. but not in listings db
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
}