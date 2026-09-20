const { initializeApp, cert, applicationDefault } = require("firebase-admin/app");

let app;

if (process.env.FIREBASE_PRIVATE_KEY) {
    app = initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        })
    });
} else {
    app = initializeApp({
        credential: applicationDefault()
    });
}

module.exports = app;