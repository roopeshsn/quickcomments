import {
  addDoc,
  collection,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore();

export async function createUser(uid, data) {
  const userRef = doc(collection(db, "users"), uid);
  await setDoc(userRef, data);
}

export async function createBlog(data) {
  await addDoc(collection(db, "blogs"), data);
}
