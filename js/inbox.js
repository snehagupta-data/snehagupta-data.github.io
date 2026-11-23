/* =====================================================================
   inbox.js — private inbox for snehagupta-data.github.io/inbox.html
   Login = the Firebase Auth email + password Sneha created in the
   Firebase console. No one else can read messages: Firestore Rules
   only allow reads/writes to a signed-in user, and only writes
   (creates) to visitors — see firestore.rules.
   ===================================================================== */
(function () {
  "use strict";

  var loginCard = document.getElementById("inbox-login");
  var inboxCard = document.getElementById("inbox-main");
  var loginForm = document.getElementById("login-form");
  var loginStatus = document.getElementById("login-status");
  var listEl = document.getElementById("inbox-list");
  var countEl = document.getElementById("inbox-count");
  var emptyEl = document.getElementById("inbox-empty");
  var refreshBtn = document.getElementById("inbox-refresh");
  var logoutBtn = document.getElementById("inbox-logout");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtDate(ts) {
    if (!ts) return "";
    var d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  }

  if (!window.FIREBASE_CONFIGURED) {
    loginStatus.textContent =
      "Inbox is not set up yet — paste your Firebase web-app config into js/firebase-config.js, then come back here.";
    loginForm.querySelector("button").disabled = true;
    return;
  }

  firebase.initializeApp(window.FIREBASE_CONFIG);
  var auth = firebase.auth();
  var db = firebase.firestore();

  function showInbox(user) {
    loginCard.hidden = true;
    inboxCard.hidden = false;
    document.getElementById("inbox-user").textContent = user.email || "";
    loadMessages();
  }
  function showLogin() {
    inboxCard.hidden = true;
    loginCard.hidden = false;
    listEl.innerHTML = "";
  }

  auth.onAuthStateChanged(function (user) {
    if (user) showInbox(user);
    else showLogin();
  });

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    loginStatus.textContent = "Signing in…";
    try {
      await auth.signInWithEmailAndPassword(
        loginForm.email.value.trim(),
        loginForm.password.value
      );
      loginStatus.textContent = "";
    } catch (err) {
      loginStatus.textContent = "Wrong email or password — please try again.";
    }
  });

  logoutBtn.addEventListener("click", function () { auth.signOut(); });
  refreshBtn.addEventListener("click", loadMessages);

  async function loadMessages() {
    listEl.innerHTML = "<p class=\"inbox-loading\">Loading messages…</p>";
    try {
      var snap = await db.collection("messages").orderBy("createdAt", "desc").limit(100).get();
      var unread = 0;
      listEl.innerHTML = "";
      if (snap.empty) {
        emptyEl.hidden = false;
        countEl.textContent = "0 messages";
        return;
      }
      emptyEl.hidden = true;
      countEl.textContent = snap.size + (snap.size === 1 ? " message" : " messages");
      snap.forEach(function (doc) {
        var m = doc.data();
        if (!m.read) unread++;
        var card = document.createElement("article");
        card.className = "msg-card" + (m.read ? " is-read" : " is-unread");
        card.innerHTML =
          '<div class="msg-head"><div><h3>' + esc(m.subject || "(No subject)") + "</h3>" +
          '<p class="msg-meta">' + esc(m.name || "Anonymous") + " · " + esc(fmtDate(m.createdAt)) + "</p></div>" +
          (m.read ? "" : '<span class="msg-new">New</span>') + "</div>" +
          '<p class="msg-body">' + esc(m.message || "") + "</p>" +
          '<div class="msg-actions">' +
          '<button type="button" data-act="read">' + (m.read ? "Mark unread" : "Mark read") + "</button>" +
          '<button type="button" data-act="delete" class="msg-delete">Delete</button>' +
          "</div>";
        card.querySelector('[data-act="read"]').addEventListener("click", async function () {
          await db.collection("messages").doc(doc.id).update({ read: !m.read });
          loadMessages();
        });
        card.querySelector('[data-act="delete"]').addEventListener("click", async function () {
          if (!confirm("Delete this message? This cannot be undone.")) return;
          await db.collection("messages").doc(doc.id).delete();
          loadMessages();
        });
        listEl.appendChild(card);
      });
      countEl.textContent = snap.size + (snap.size === 1 ? " message" : " messages") +
        (unread ? " · " + unread + " unread" : "");
    } catch (err) {
      listEl.innerHTML = "<p class=\"inbox-loading\">Could not load messages. Check your Firestore rules, then refresh.</p>";
    }
  }
})();
