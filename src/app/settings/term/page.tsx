"use client";
import { Button, Flex, Heading, Table } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function TermSettings(){
    const terms = [
        { id: 1, name: "FOB"},
        { id: 2, name: "CIF Jakarta by Air / Sea"},
        { id: 3, name: "ExWork"},
        { id: 4, name: "FCA"},
        { id: 5, name: "No Term"}
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Term ERP Settings</Heading>
                <Button>Create New Term</Button>
            </Flex>            

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Term</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>        
                <Table.Body>
                    {terms.map((term) => (
                    <Table.Row key={term.id}>
                        <Table.Cell textAlign={"center"}>{term.name}</Table.Cell>
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

        </SidebarWithHeader>
        // settings

    );
}