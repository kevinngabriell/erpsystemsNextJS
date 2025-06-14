"use client";
import { Button, Card, Flex, Heading, Stat, Text } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function Sales(){

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Sales Module</Heading>
                <Button>Create New Sales</Button>
            </Flex>

            <Card.Root>
                <Card.Body>
                    <Flex gap={10}>
                        <Card.Root width={"100%"}>
                            <Card.Body>
                                <Stat.Root>
                                    <Stat.Label>
                                        Target
                                    </Stat.Label>
                                    <Stat.ValueText>192.1k</Stat.ValueText>
                                </Stat.Root>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root width={"100%"}>
                            <Card.Body>
                                <Stat.Root>
                                    <Stat.Label>
                                        Target
                                    </Stat.Label>
                                    <Stat.ValueText>192.1k</Stat.ValueText>
                                </Stat.Root>
                            </Card.Body>
                        </Card.Root>
                    </Flex>
                </Card.Body>
            </Card.Root>

            <Card.Root mt={"10"}>
                <Card.Body>
                    <Flex gap={2} display={"flex"} mb={"8"} mt={"2"} alignItems={"center"}>
                        <Heading width={"100%"}>Sales Order</Heading>
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
                        <Heading width={"100%"}>SPPB</Heading>
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
                        <Heading width={"100%"}>Profit</Heading>
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
                        <Heading width={"100%"}>Delivery Order</Heading>
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
                        <Heading width={"100%"}>Sales Invoice</Heading>
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

