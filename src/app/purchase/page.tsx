"use client";
import { Button, Card, Flex, Heading, Text } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function Purchase(){

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Purchase Module</Heading>
                <Button>Create New Purchase</Button>
            </Flex>        
            
            <Card.Root mt={"10"}>
                <Card.Body>
                    <Flex gap={2} display={"flex"} mb={"8"} mt={"2"} alignItems={"center"}>
                        <Heading width={"100%"}>Purchase Order Local</Heading>
                        <Text width={"100%"} textAlign={"end"} fontSize={"1m"}>See All</Text>
                    </Flex>

                    <Flex gap={2}>
                        <Flex width={"100%"} display={"flex"} direction={"column"} gap={2}>
                            <Heading>Customer Name | Order Number</Heading>
                            <Text>Date</Text>
                        </Flex>
                        <Button>
                            Details
                        </Button>
                    </Flex>

                </Card.Body>
            </Card.Root>        

            <Card.Root mt={"10"}>
                <Card.Body>
                    <Flex gap={2} display={"flex"} mb={"8"} mt={"2"} alignItems={"center"}>
                        <Heading width={"100%"}>Purchase Order Import</Heading>
                        <Text width={"100%"} textAlign={"end"} fontSize={"1m"}>See All</Text>
                    </Flex>

                    <Flex gap={2}>
                        <Flex width={"100%"} display={"flex"} direction={"column"} gap={2}>
                            <Heading>Customer Name | Order Number</Heading>
                            <Text>Date</Text>
                        </Flex>
                        <Button>
                            Details
                        </Button>
                    </Flex>
                    
                </Card.Body>
            </Card.Root>        

            <Card.Root mt={"10"}>
                <Card.Body>
                    <Flex gap={2} display={"flex"} mb={"8"} mt={"2"} alignItems={"center"}>
                        <Heading width={"100%"}>Receiving Items</Heading>
                        <Text width={"100%"} textAlign={"end"} fontSize={"1m"}>See All</Text>
                    </Flex>

                    <Flex gap={2}>
                        <Flex width={"100%"} display={"flex"} direction={"column"} gap={2}>
                            <Heading>Customer Name | Order Number</Heading>
                            <Text>Date</Text>
                        </Flex>
                        <Button>
                            Details
                        </Button>
                    </Flex>
                    
                </Card.Body>
            </Card.Root>        

            <Card.Root mt={"10"}>
                <Card.Body>
                    <Flex gap={2} display={"flex"} mb={"8"} mt={"2"} alignItems={"center"}>
                        <Heading width={"100%"}>Purchase Invoice</Heading>
                        <Text width={"100%"} textAlign={"end"} fontSize={"1m"}>See All</Text>
                    </Flex>

                    <Flex gap={2}>
                        <Flex width={"100%"} display={"flex"} direction={"column"} gap={2}>
                            <Heading>Customer Name | Order Number</Heading>
                            <Text>Date</Text>
                        </Flex>
                        <Button>
                            Details
                        </Button>
                    </Flex>
                    
                </Card.Body>
            </Card.Root>        


        </SidebarWithHeader>
        // settings

    );
}