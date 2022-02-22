import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import AddBlogModal from "./AddBlogModal";

export default function EmptyState() {
  return (
    <Flex direction="column">
      <Heading>You haven't added any sites</Heading>
      <AddBlogModal>Add your first site</AddBlogModal>
    </Flex>
  );
}
