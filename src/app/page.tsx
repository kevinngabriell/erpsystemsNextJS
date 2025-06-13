"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Button, Field, Flex, Heading, Input, InputGroup, Text,} from "@chakra-ui/react";
import { LuLock, LuUser } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function loginOnClick() {
    console.log("Login clicked");
    router.push("/home"); // navigate ke /home secara client-side
  }

  return (
    <Flex h="100vh" w="100vw" flexDir={["column", "row"]}>
      {/* Kiri */}
      <Flex w="100%" h="100vh" justify="center" align="center" bg="gray.100" display={{ base: "none", md: "flex" }}>
        <Text fontSize="2xl">Yesyesye</Text>
      </Flex>


      {/* Kanan */}
      <Flex w={["100%", "100%"]} h="full" flexDir="column" justify="center" align="center" px={8}>
        <Heading mb={2}>Login</Heading>
        <Text color="gray.600">Login to access ERP Systems</Text>

        {/* Username */}
        <Field.Root marginTop={10} w={500}>
          <Field.Label>Username</Field.Label>
          <InputGroup startElement={<LuUser/>}>
            <Input placeholder="Enter your username" />
          </InputGroup>
        </Field.Root>

        {/* Password */}
        <Field.Root marginTop={5} w={500}>
          <Field.Label>Password</Field.Label>
          <InputGroup startElement={<LuLock/>} >
            <PasswordInput placeholder="Enter your username" />
          </InputGroup>
        </Field.Root>

        <Button marginTop={20} onClick={loginOnClick} >Login</Button>

      </Flex>
    </Flex>
  );
}
