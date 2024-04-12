import React from "react";
import { Box, Flex, Spacer, HStack, Image, Link, Button, Container, Heading, Text, Tabs, TabList, Tab, TabPanels, TabPanel, SimpleGrid, Card, CardHeader, CardBody, Stack, StackDivider, Icon } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
        <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold">
          Discover Top Cryptocurrencies
        </Heading>
        <Text fontSize="xl" mb={8}>
          Easily buy, sell and manage hundreds of cryptocurrencies in one place.
        </Text>

        <Tabs variant="soft-rounded" colorScheme="blue" mb={8}>
          <TabList>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Tradable</Tab>
            <Tab>Top Gainers</Tab>
            <Tab>New on Coinbase</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {[
                  { name: "Bitcoin", symbol: "BTC", price: 26000, change: -1.5, logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
                  { name: "Ethereum", symbol: "ETH", price: 1800, change: -0.8, logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
                  { name: "Tether", symbol: "USDT", price: 1, change: 0, logo: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
                  { name: "Solana", symbol: "SOL", price: 22, change: 0.6, logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
                  { name: "XRP", symbol: "XRP", price: 0.5, change: -0.3, logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png" },
                  { name: "USD Coin", symbol: "USDC", price: 1, change: 0, logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png" },
                ].map((coin) => (
                  <Card key={coin.symbol} borderRadius="lg" boxShadow="md" _hover={{ boxShadow: "lg", cursor: "pointer" }}>
                    <CardHeader>
                      <Flex align="center">
                        <Image src={coin.logo} alt={coin.name} boxSize="24px" mr={4} />
                        <Box>
                          <Box fontWeight="bold">{coin.name}</Box>
                          <Box fontSize="sm" color="gray.500">
                            {coin.symbol}
                          </Box>
                        </Box>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing={4}>
                        <Box fontSize="2xl" fontWeight="bold">
                          ${coin.price.toLocaleString()}
                        </Box>
                        <Flex align="center" color={coin.change >= 0 ? "green.500" : "red.500"}>
                          <Icon as={coin.change >= 0 ? FaArrowUp : FaArrowDown} boxSize={4} mr={1} />
                          <Box fontWeight="bold">{Math.abs(coin.change)}%</Box>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Box as="footer" py={8} borderTop="1px" borderColor="gray.200" textAlign="center">
        Footer content here
      </Box>
    </Box>
  );
};

export default Index;
