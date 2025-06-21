"use client";
import { Button, ButtonGroup, CloseButton, Dialog, Field, Flex, Heading, IconButton, Input, Pagination, Portal, SimpleGrid, Table, Text, Textarea } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import CustomerDialog from "./customerdialog";

export default function CustomerSettings(){

    const customers = [
        { id: 1, name: "PT. Customer A", address : "Jl. Customer A", phone: "0811"},
        { id: 2, name: "PT. Customer B", address : "Jl. Customer B", phone: "0811"},
        { id: 3, name: "PT. Customer C", address : "Jl. Customer C", phone: "0811"},
        { id: 4, name: "PT. Customer D", address : "Jl. Customer D", phone: "0811"},
        { id: 5, name: "PT. Customer E", address : "Jl. Customer E", phone: "0811"}
    ]

    return(
        <SidebarWithHeader>

            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Customer ERP Settings</Heading>
                <CustomerDialog triggerIcon={<Button>Create New Customer</Button>} title="Pendataan Konsumen Baru"/>
            </Flex>        

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Company Name</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Company Address</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Company Phone</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {customers.map((customer) => (
                    <Table.Row key={customer.id}>
                        <Table.Cell textAlign={"center"}>{customer.name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{customer.address}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{customer.phone}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <CustomerDialog triggerIcon={<FiEye />} title="Informasi Konsumen"/>
                                <CustomerDialog triggerIcon={<FiEdit />} title="Pengkinian Informasi Konsumen"/>

                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <FiTrash />
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop/>
                                        <Dialog.Positioner>
                                            <Dialog.Content>
                                                <Dialog.Header>
                                                    <Dialog.Title>Hapus Konsumen</Dialog.Title>
                                                </Dialog.Header>

                                                 <Dialog.Body>
                                                    <Text>Apakah anda yakin ingin menghapus konsumen ini ?</Text>
                                                </Dialog.Body>

                                                <Dialog.Footer>
                                                    <Dialog.ActionTrigger asChild>
                                                        <Button variant="outline">Batal</Button>
                                                    </Dialog.ActionTrigger>
                                                    <Button>Hapus</Button>
                                                </Dialog.Footer>
                                                
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>

                                            </Dialog.Content>
                                        </Dialog.Positioner>
                                    </Portal>

                                </Dialog.Root>   

                            </Flex>
                        </Table.Cell>                        
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>    

            <Flex display={"flex"} justify="flex-end" alignItems={"end"} width={"100%"} mt={"3"}>
                <Pagination.Root count={customers.length} pageSize={5} page={1} alignContent={"end"}>
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