import { getAllBlogs } from "@/lib/db-admin";

export default async (req, res) => {
  const { blogs, error } = await getAllBlogs();
  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json({ blogs });
  }
};
