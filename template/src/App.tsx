import { Center, Stack, Heading, Code, Text } from "@chakra-ui/react"

const App = () => {
  return (
    <main>
      <Center h="100vh" w="100vw">
        <Stack>
          <Heading size="4xl" as="h1" textAlign="center">
            Welcome to React!
          </Heading>

          <Text textAlign="center" style={{ fontSize: 30 }}>
            Get started by editing{" "}
            <Code colorScheme="red" style={{ fontSize: 30 }}>
              src/App.tsx
            </Code>
          </Text>
        </Stack>
      </Center>
    </main>
  )
}

export default App
