import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import defaultApp from "./firebase";
import admin from "./firebase-admin";
// import { db } from "./firebase-admin";

const db = admin.firestore();

export async function getAllComments(blogId) {
  try {
    const q = query(collection(db, "comments"), where("blogId", "==", blogId));
    const querySnapshot = await getDocs(q);
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return { comments };
  } catch (error) {
    return { error };
  }
}

export async function getAllBlogs() {
  try {
    const q = query(
      collection(db, "blogs"),
      where("userId", "==", "w9XrkpSSyybQB4OdAVkAoRmQg4A2")
    );
    const querySnapshot = await getDocs(q);
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return { blogs };
  } catch (error) {
    return { error };
  }
}
