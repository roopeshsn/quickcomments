import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore();

export default async function getBlogs(req, res) {
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
  res.status(200).json({ blogs });
}
