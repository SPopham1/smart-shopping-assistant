import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMZIfxHy9zWGU1cfuwrW0yFxhyC850t-g",
  authDomain: "smart-shopping-assistant-351fc.firebaseapp.com",
  projectId: "smart-shopping-assistant-351fc",
  storageBucket: "smart-shopping-assistant-351fc.firebasestorage.app",
  messagingSenderId: "881522039850",
  appId: "1:881522039850:web:526de53029ed2124abf753",
  measurementId: "G-FVY1KX6WXM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signup(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

// Shopping list functions
export async function saveShoppingList(userId, listName, items) {
  const listRef = await addDoc(collection(db, "shoppingLists"), {
    userId,
    listName,
    items,
    createdAt: serverTimestamp(),
    sharedCode: generateShareCode(),
  });
  return listRef.id;
}

export async function getUserLists(userId) {
  const q = query(
    collection(db, "shoppingLists"),
    where("userId", "==", userId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteShoppingList(listId) {
  await deleteDoc(doc(db, "shoppingLists", listId));
}

export async function getListByShareCode(shareCode) {
  const q = query(
    collection(db, "shoppingLists"),
    where("sharedCode", "==", shareCode)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;
  const docSnap = querySnapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}

function generateShareCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}
