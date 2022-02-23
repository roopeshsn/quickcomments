import React from "react";
import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../auth";

export default function DashboardTemplate({ children }) {
  const auth = useAuth();

  return (
    <Box h="100vh">
      <Container maxW="1250px" centerContent>
        <Flex w="full" direction="column">
          <Flex
            align="center"
            justify="space-between"
            px={8}
            py={4}
            w="full"
            h="60px"
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

          <Flex mt={8} direction="column" maxW="1250px">
            {children}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
