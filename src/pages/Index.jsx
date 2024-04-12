import React from "react";
import { Box, Flex, Spacer, HStack, Image, Link, Button, Container } from "@chakra-ui/react";

const menuItems = [{ label: "Explore" }, { label: "Learn" }, { label: "Individuals" }, { label: "Businesses" }, { label: "Developers" }, { label: "Company" }];

const Index = () => {
  return (
    <Box fontFamily="sans-serif">
      <Box as="header" bg="white" px={4} borderBottom="1px" borderColor="gray.200">
        <Flex py={4} align="center">
          <Image src="https://images.unsplash.com/photo-1659088515547-18c277330d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2luYmFzZSUyMGxvZ298ZW58MHx8fHwxNzEyODgxMzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Coinbase" h="32px" />
          <HStack spacing={8} ml={8} as="nav">
            {menuItems.map((item) => (
              <Link key={item.label} fontWeight="medium" _hover={{ color: "blue.500" }}>
                {item.label}
              </Link>
            ))}
          </HStack>
          <Spacer />
          <HStack spacing={4}>
            <Button variant="ghost" _hover={{ bg: "gray.50" }}>
              Sign in
            </Button>
            <Button colorScheme="blue">Sign up</Button>
          </HStack>
        </Flex>
      </Box>

      <Container as="main" maxW="container.lg" py={8} textAlign="center">
        {/* Main content area */}
        <Box>Cryptocurrency prices will go here</Box>
      </Container>

      <Box as="footer" py={8} borderTop="1px" borderColor="gray.200" textAlign="center">
        Footer content here
      </Box>
    </Box>
  );
};

export default Index;
