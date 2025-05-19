// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Your Firebase configuration
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
const messagesRef = ref(database, 'live-comments'); // Reference to the 'live-comments' node

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        push(messagesRef, {
            text: message,
            timestamp: new Date().toISOString()
        });
        messageInput.value = ''; // Clear the input field
    }
});
      
