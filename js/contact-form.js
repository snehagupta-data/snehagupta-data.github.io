/* =====================================================================
   contact-form.js — sends the 3-field contact form (Name, Subject,
   Message — no email, no phone) to Firestore, free Firebase backend.
   No message ever goes to email. Sneha reads them in inbox.html.

   Loads the Firebase compat SDKs only when a real config is present.
   Until then the form shows a "setup pending" note instead of failing.
   ===================================================================== */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;
  var statusEl = document.getElementById("cf-status");
  var submitBtn = form.querySelector('button[type="submit"]');

  function setStatus(msg, kind) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = "cf-status" + (kind ? " cf-" + kind : "");
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error("Could not load " + src)); };
      document.head.appendChild(s);
    });
  }

  var firebaseReady = null;
  function ensureFirebase() {
    if (firebaseReady) return firebaseReady;
    firebaseReady = (async function () {
      if (!window.FIREBASE_CONFIGURED || !window.firebase) {
        await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js");
      }
      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(window.FIREBASE_CONFIG);
      }
      return window.firebase.firestore();
    })();
    return firebaseReady;
  }

  // If the inbox is not set up yet, say so upfront — don't pretend to send.
  if (!window.FIREBASE_CONFIGURED) {
    setStatus("Message inbox is being set up — for now, please reach me on LinkedIn or Email above.");
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    var name = form.name.value.trim();
    var subject = form.subject.value.trim();
    var message = form.message.value.trim();
    var honeypot = form.website ? form.website.value.trim() : "";

    if (honeypot) return; // bot — silently ignore
    if (!name || !subject || !message) {
      setStatus("Please fill in your name, subject and message.", "error");
      return;
    }
    if (name.length > 80 || subject.length > 120 || message.length > 2000) {
      setStatus("That message is too long — please shorten it and try again.", "error");
      return;
    }
    if (!window.FIREBASE_CONFIGURED) {
      setStatus("Message inbox is being set up — for now, please reach me on LinkedIn or Email above.", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    setStatus("");

    try {
      var db = await ensureFirebase();
      await db.collection("messages").add({
        name: name,
        subject: subject,
        message: message,
        read: false,
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
      });
      form.reset();
      setStatus("Thanks — your message has been sent. I’ll read it in my inbox.", "success");
    } catch (err) {
      setStatus("Sorry, that didn’t send. Please try again, or reach me on LinkedIn / Email above.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
})();
