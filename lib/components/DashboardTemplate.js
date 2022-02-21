import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../auth";

export default function DashboardTemplate({ children }) {
  const auth = useAuth();

  return (
    <Box>
      <Flex direction="column">
        <Flex
          align="center"
          justify="space-between"
          px={8}
          py={4}
          w="full"
          h="60px"
          mx="auto"
          maxW="1250px"
        >
          <Box alignItems="center">
            <Text fontSize="xl" fontWeight="medium">
              Quick Comments
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="100px">
            <Box>Account</Box>
            <Avatar size="sm" src={auth.user?.photoUrl} />
          </Flex>
        </Flex>
        <Flex my={8} mx="auto" px={4} direction="column" maxW="1250px">
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}
