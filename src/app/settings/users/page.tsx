"use client";
import { Button, ButtonGroup, Flex, Heading, IconButton, Pagination, Table } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function UserSettings(){
    
    const users = [
        { id: 1, name: "Admin1", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 2, name: "Admin2", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 3, name: "FinanceVenken", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 4, name: "ITSupport", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 5, name: "Purchasing", company: "PT. Venken International Kimia", permission: "Sales only" },
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Users ERP Settings</Heading>
                <Button>Create New Users</Button>
            </Flex>

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Username</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Company Name</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Permission Access</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users.map((user) => (
                    <Table.Row key={user.id}>
                        <Table.Cell textAlign={"center"}>{user.name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{user.company}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{user.permission}</Table.Cell>
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
                <Pagination.Root count={users.length} pageSize={5} page={1} alignContent={"end"}>
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