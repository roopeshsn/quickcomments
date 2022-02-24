import { useAuth } from "@/lib/auth";
import Comment from "@/lib/components/comment";
import { createComment } from "@/lib/db";
import { getAllBlogs, getAllComments } from "@/lib/db-admin";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export async function getStaticProps(context) {
  const blogId = context.params.blogId;
  const { comments } = await getAllComments(blogId);
  return {
    props: {
      initialComments: JSON.parse(JSON.stringify(comments)),
    },
  };
}

export async function getStaticPaths() {
  const { blogs } = await getAllBlogs();
  const paths = blogs.map((blog) => ({
    params: {
      blogId: blog.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const blogComments = ({ initialComments }) => {
  const { user } = useAuth();
  const router = useRouter();
  const commentRef = useRef();
  const [allComments, setAllComments] = useState(initialComments);
  const onSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      author: user.name,
      authorId: user.uid,
      createdAt: serverTimestamp(),
      blogId: router.query.blogId,
      text: commentRef.current.value,
      provider: user.provider,
      status: "pending",
    };
    setAllComments([newComment, ...allComments]);
    createComment(newComment);
  };
  return (
    <Flex direction="column" w="full" maxW="700px" mx="auto" px={4}>
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="comment" size="xl">
            Comment
          </FormLabel>
          <Input ref={commentRef} id="comment" type="text" />
          <Button my={4} type="submit">
            Add comment
          </Button>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
      </Box>
      {allComments.map((comment) => {
        return (
          <>{comment && <Comment key={comment.authorId} {...comment} />}</>
        );
      })}
    </Flex>
  );
};

export default blogComments;
