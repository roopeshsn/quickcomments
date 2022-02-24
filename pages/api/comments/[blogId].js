import { getAllComments } from "@/lib/db-admin";

export default async (req, res) => {
  const blogId = req.query.blogId;
  const { comments, error } = await getAllComments(blogId);
  if (error) {
    res.status(500).json({ error });
  }
  res.status(200).json({ comments });
};
