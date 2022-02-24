import { formatSecAndNanoSec } from "@/utils/format";
import {
  Box,
  Button,
  Link as ChakraLink,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function SiteTable({ blogs }) {
  return (
    <Box overflowX="auto">
      <Table variant="simple" w="full" size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Blog Link</Th>
            <Th>View comments for Blog Posts</Th>
            <Th>Date and Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogs &&
            blogs.map((blog) => {
              return (
                <Box as="tr" key={blog.id}>
                  <Td>{blog.blogNameInput}</Td>
                  <Td>{blog.blogUrlInput}</Td>
                  <Td>
                    <Link href="/p/[blogId]" as={`/p/${blog.id}`} passHref>
                      <ChakraLink>View Blog Posts</ChakraLink>
                    </Link>
                  </Td>
                  {/* <Td>
                    {blog.createdAt &&
                      new Date(
                        blog.createdAt.seconds * 1000 +
                          blog.createdAt.nanoseconds / 1000000
                      ).toString()}
                  </Td> */}
                  <Td>
                    {blog.createdAt && formatSecAndNanoSec(blog.createdAt)}
                  </Td>
                </Box>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
}
