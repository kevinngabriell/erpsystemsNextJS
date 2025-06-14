"use client";
import { Button, ButtonGroup, Flex, Heading, IconButton, Pagination, Table } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function TaxSettings(){
    const taxs = [
        { id: 1, name: 'No Tax', tax: "0"},
        { id: 2, name: 'PPH 11%', tax: "11%"},
        { id: 3, name: 'PPH 12%', tax: "12%"}
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Tax ERP Settings</Heading>
                <Button>Create New Users</Button>
            </Flex>

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Tax</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Tax Count</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {taxs.map((tax) => (
                    <Table.Row key={tax.id}>
                        <Table.Cell textAlign={"center"}>{tax.name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{tax.tax}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <FiEye />
                                <FiEdit />
                                <FiTrash />
                            </Flex>
                        </Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            
            <Flex display={"flex"} justify="flex-end" alignItems={"end"} width={"100%"} mt={"3"}>
                <Pagination.Root count={taxs.length} pageSize={5} page={1} alignContent={"end"}>
                    <ButtonGroup variant="ghost" size="sm" wrap="wrap">
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                        <LuChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items
                        render={(page) => (
                        <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                            {page.value}
                        </IconButton>
                        )}
                    />

                    <Pagination.NextTrigger asChild>
                        <IconButton>
                        <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                    </ButtonGroup>
                </Pagination.Root>

            </Flex>
            
        </SidebarWithHeader>
        // settings

    );
}