/* =====================================================================
   firebase-config.js — FREE Firebase backend for the contact form.
   Nothing here is live yet: FIREBASE_CONFIG is null until Sneha
   creates her free Firebase project and pastes her web-app config.

   HOW TO FILL THIS IN (free, ~10 min, no card needed):
   1. Go to https://console.firebase.google.com → Add project
      (name it e.g. "sneha-portfolio-inbox", Google Analytics OFF).
   2. Build → Firestore Database → Create database → Start in
      production mode → pick a location (e.g. asia-south1) → Enable.
      Then Rules tab → paste the contents of firestore.rules → Publish.
   3. Build → Authentication → Get started → Sign-in method →
      Email/Password → Enable → Save. Then Users → Add user →
      your Gmail + a strong password you choose. That is your inbox login.
   4. Project settings (gear) → Your apps → Web app (</>) →
      nickname "portfolio" → Register app → copy the firebaseConfig
      object → paste it below, replacing null, and set
      FIREBASE_CONFIGURED to true.

   NOTE: the apiKey in that config is a PUBLIC client key — it is
   meant to be in this file. It is NOT a password. Who can READ
   messages is controlled by firestore.rules + the inbox login.
   Never put your inbox password in any file.
   ===================================================================== */

/* Live config — project "sneha-portfolio-inbox", created 23 Nov 2026.
   Plan: Spark (free, $0/month). No billing, no card, Analytics OFF.
   Firestore: production mode, asia-south1. Rules published from firestore.rules. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBq70HeOjawbndA4sTbh_AEaJe1MthlInU",
  authDomain: "sneha-portfolio-inbox.firebaseapp.com",
  projectId: "sneha-portfolio-inbox",
  storageBucket: "sneha-portfolio-inbox.firebasestorage.app",
  messagingSenderId: "514945808459",
  appId: "1:514945808459:web:fab5ad4c2de8abfe6ff5ce"
};

window.FIREBASE_CONFIGURED =
  !!window.FIREBASE_CONFIG && !!window.FIREBASE_CONFIG.projectId;
