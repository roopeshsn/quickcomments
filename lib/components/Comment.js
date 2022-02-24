import { formatSecAndNanoSec } from "@/utils/format";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";

export default function Comment({ author, createdAt, text }) {
  return (
    <Box
      borderRadius={4}
      maxWidth="700px"
      w="full"
      border-bottom="2px"
      border-bottom-color="gray.200"
      mb={4}
    >
      <Flex direction="column">
        <Heading as="h3" size="sm" fontWeight="medium">
          {author}
        </Heading>
        <Text fontSize="xs">{formatSecAndNanoSec(createdAt)}</Text>
      </Flex>
      <Box>
        <Text>{text}</Text>
      </Box>
      {/* <Divider mt={6} mb={6} /> */}
    </Box>
  );
}
