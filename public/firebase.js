import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJavQZvpQboYTaXdBQ9ctToredMlvRZlM",
  authDomain: "smart-shopping-assistant-351fc.firebaseapp.com",
  projectId: "smart-shopping-assistant-351fc",
  storageBucket: "smart-shopping-assistant-351fc.firebasestorage.app",
  messagingSenderId: "881522039850",
  appId: "1:881522039850:web:526de53029ed2124abf753",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
