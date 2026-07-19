const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync  = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const flash = require("connect-flash");
const {isLoggedIn, isOwner, validateListing} =require("../middleware.js")

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


const listingController = require("../controllers/listings.js")


router.route("/")
    .get(wrapAsync ( listingController.index ))
    .post(isLoggedIn ,validateListing, upload.single("listing[image][url]") ,wrapAsync (listingController.createListing))
    

//New Route
router.get("/new", isLoggedIn , listingController.renderNewForm);

// routes/listing.js

// IMPORTANT: this must come before router.route("/:id") below,
// otherwise Express treats "random" as an :id param.
router.get("/random", wrapAsync(listingController.randomListing));

// ... your existing /:id route(s) stay exactly where they are, unchanged
router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  // .put / .delete as you already have them

router.route("/:id")
    .get(wrapAsync ( listingController.showListing))
    .put(isLoggedIn, isOwner ,upload.single("listing[image][url]") ,validateListing, wrapAsync (listingController.updateListing))
    .delete(isLoggedIn , isOwner ,wrapAsync (listingController.destroyListing));

    
//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner ,wrapAsync (listingController.editListing));


module.exports = router;