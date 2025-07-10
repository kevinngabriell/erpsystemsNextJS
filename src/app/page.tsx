"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Alert, Button, Field, Flex, Heading, Input, InputGroup, Text,} from "@chakra-ui/react";
import { LuLock, LuUser } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth/auth";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function loginOnClick() {
    setLoading(true);

    try {
      const res = await login(username, password);
      localStorage.setItem("token", res.token);

      router.push("/home");
    } catch (err: any) {
      setError(`${err.message || 'Login failed'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Flex h="100vh" w="100vw" flexDir={["column", "row"]}>
      {/* Kiri */}
      <Flex w="100%" h="100vh" justify="center" align="center" bg="gray.100" display={{ base: "none", md: "none", lg: "flex" }}>
        <Text fontSize="2xl">Yesyesye</Text>
      </Flex>


      {/* Kanan */}
      <Flex w={["100%", "100%"]} h="full" flexDir="column" justify="center" align="center" px={8}>
        <Heading mb={2}>Login</Heading>
        <Text color="gray.600">Login to access ERP Systems</Text>

        {/* If there is any error for login */}
        { error ? 
          <Alert.Root status="error" mt={4}>
            <Alert.Indicator/>
            <Alert.Content>
              <Alert.Title>Invalid Login</Alert.Title>
              <Alert.Description>{error}</Alert.Description>
            </Alert.Content>
          </Alert.Root> : <div></div>
        }

        {/* Username */}
        <Field.Root marginTop={10} w={{base: "100%", md: "100%", lg: "90%"}}>
          <Field.Label>Username</Field.Label>
          <InputGroup startElement={<LuUser/>}>
            <Input 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </Field.Root>

        {/* Password */}
        <Field.Root marginTop={5} w={{base: "100%", md: "100%", lg: "90%"}}>
          <Field.Label>Password</Field.Label>
          <InputGroup startElement={<LuLock/>} >
            <PasswordInput 
              placeholder="Enter your username" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </Field.Root>

        <Button loading={loading} marginTop={20} onClick={loginOnClick} >Login</Button>

      </Flex>
    </Flex>
  );
}
