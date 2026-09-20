import { auth, googleProvider, signInWithPopup } from "./firebase.js";

const googleButton = document.getElementById("google-login");

if (googleButton) {
    googleButton.addEventListener("click", async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            
            const idToken = await result.user.getIdToken();
            const response = await fetch("/auth/firebase/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ idToken })
            });

            const data = await response.json();
            if (data.success) {
                window.location.href = "/listings";
            }

            console.log("Backend response:", data);
            console.log("Google user:", result.user);

        } catch (error) {
            console.error("Google login failed:", error);
        }
    });
}