import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import AddBlogModal from "./AddBlogModal";

export default function SiteHeader() {
  return (
    <Box w="full" maxW="1250px" my={8} mx="auto" px={8}>
      <Flex>
        <Heading flexGrow={1}>My Blogs</Heading>
        <AddBlogModal>Add Blog</AddBlogModal>
      </Flex>
    </Box>
  );
}
