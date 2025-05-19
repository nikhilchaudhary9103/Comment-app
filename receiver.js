// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Your Firebase configuration (same as sender)
const firebaseConfig = {
  apiKey: "AIzaSyDaTurSbn-e8roa7o9DeAzEDAb_ZETBu3I",
  authDomain: "comment-app-eae1d.firebaseapp.com",
  databaseURL: "https://comment-app-eae1d-default-rtdb.firebaseio.com",
  projectId: "comment-app-eae1d",
  storageBucket: "comment-app-eae1d.firebasestorage.app",
  messagingSenderId: "1085942013485",
  appId: "1:1085942013485:web:8b73425849e72db191e2a4",
  measurementId: "G-WF0852Z57K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messagesRef = ref(database, 'live-comments'); // Same reference as sender
const commentsContainer = document.getElementById('comments-container');

// Listen for changes in the 'live-comments' node
onValue(messagesRef, (snapshot) => {
    const messagesData = snapshot.val();
    commentsContainer.innerHTML = ''; // Clear previous comments

    if (messagesData) {
        Object.values(messagesData).forEach(message => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = message.text;
            commentsContainer.appendChild(commentDiv);
        });
    } else {
        commentsContainer.textContent = 'No live comments yet.';
    }
});
              
