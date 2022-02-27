import {
  addDoc,
  collection,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";
import defaultApp from "./firebase";

const db = getFirestore(defaultApp);

export async function createUser(uid, data) {
  const userRef = doc(collection(db, "users"), uid);
  await setDoc(userRef, data);
}

export async function createBlog(data) {
  await addDoc(collection(db, "blogs"), data);
}

export async function createComment(data) {
  await addDoc(collection(db, "comments"), data);
}
