import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqbTf80OBedCD1h8uya-DvdDsJZZfEbu0",
  authDomain: "as3gteem.firebaseapp.com",
  projectId: "as3gteem",
  storageBucket: "as3gteem.appspot.com",
  messagingSenderId: "50952556474",
  appId: "1:50952556474:web:6625c76d2e7f8240bc1783",
  measurementId: "G-KY4M56JB7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const postsDisplay = document.getElementById('postsDisplay');

// Add post
postButton.addEventListener('click', async () => {
    const postContent = postInput.value.trim();
    if (postContent) {
        try {
            await addDoc(collection(db, "posts"), {
                content: postContent,
                timestamp: new Date()
            });
            postInput.value = ''; // Clear input
            loadPosts(); // Refresh posts
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    } else {
        alert('Please write something.');
    }
});

// Load posts
async function loadPosts() {
    postsDisplay.innerHTML = ''; // Clear existing posts
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            const postElement = document.createElement('div');
            postElement.textContent = `${doc.data().content}`;
            postsDisplay.appendChild(postElement);
        });
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}

// Initial load
loadPosts();
