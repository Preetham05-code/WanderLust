const express = require("express");
const router = express.Router();

const { getAuth } = require("firebase-admin/auth");
const firebaseApp = require("../config/firebase-admin");
const User = require("../models/user");

router.post("/verify", async (req, res, next) => {
    try {
        const { idToken } = req.body;

        const decodedToken = await getAuth(firebaseApp).verifyIdToken(idToken);

        console.log("Firebase user verified:", decodedToken.email);

        let user = await User.findOne({
            firebaseUID: decodedToken.uid
        });

        if (!user) {
            user = await User.findOne({
                email: decodedToken.email
            });

            if (user) {
                user.firebaseUID = decodedToken.uid;
                await user.save();
            } else {
                user = new User({
                    username: decodedToken.email,
                    email: decodedToken.email,
                    firebaseUID: decodedToken.uid
                });

                await user.save();
            }
        }

        req.login(user, (err) => {
            if (err) {
                return next(err);
            }

            console.log("WanderLust session created:", user.username);

            res.json({
                success: true,
                message: "Google login successful"
            });
        });

    } catch (error) {
        console.error("Firebase verification failed:", error);

        res.status(401).json({
            success: false,
            message: "Invalid Firebase token"
        });
    }
});

module.exports = router;