const { initializeApp, applicationDefault } = require("firebase-admin/app");

const admin = initializeApp({
    credential: applicationDefault()
});

module.exports = admin;