// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7yqfCKzG9aVho1Y_ATXBfsCtLeiMU_U4",
  authDomain: "lesson-1276d.firebaseapp.com",
  databaseURL: "https://lesson-1276d-default-rtdb.firebaseio.com/",
  projectId: "lesson-1276d",
  storageBucket: "lesson-1276d.firebasestorage.app",
  messagingSenderId: "616109953467",
  appId: "1:616109953467:web:0bd94203726d5d9d0f749e",
  measurementId: "G-GJGZRHNMNL"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const SCROLL_PATH = '/scrollPosition';
