const express = require("express");
const router = express.Router();

const controller = require("../controllers/aiListings");

router.get("/listings", controller.searchListings);

module.exports = router;