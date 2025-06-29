"use client";
import { Button, ButtonGroup, CloseButton, Dialog, Flex, Heading, IconButton, Pagination, Portal, Table, Text } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import SupplierDialog from "./supplierdialog";

export default function SupplierSettings(){
    const suppliers = [
        { id: 1, name: 'Supplier 1', phone: '0811111111', origin: 'Zimbabwe', pic: 'PIC 1', contact: '0811111111', currency: 'USD' },
        { id: 2, name: 'Supplier 2', phone: '0822222222', origin: 'Indonesia', pic: 'PIC 2', contact: '0822222222', currency: 'USD' },
        { id: 3, name: 'Supplier 3', phone: '0833333333', origin: 'Zimbabwe', pic: 'PIC 1', contact: '0833333333', currency: 'USD' },
        { id: 4, name: 'Supplier 4', phone: '0844444444', origin: 'Zimbabwe', pic: 'PIC 1', contact: '0844444444', currency: 'USD' },
        { id: 5, name: 'Supplier 5', phone: '0855555555', origin: 'Zimbabwe', pic: 'PIC 1', contact: '0855555555', currency: 'USD' },
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Supplier ERP Settings</Heading>
                <SupplierDialog triggerIcon={<Button>Create New Supplier</Button>} title="Pendataan Supplier Baru"/>
            </Flex>

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Name</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Origin</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Currency</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>  
                
                <Table.Body>
                    {suppliers.map((supplier) => (
                    <Table.Row key={supplier.id}>
                        <Table.Cell textAlign={"center"}>{supplier.name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{supplier.origin}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{supplier.currency}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <SupplierDialog triggerIcon={<FiEye />} title="Informasi Supplier"/>
                                <SupplierDialog triggerIcon={<FiEdit />} title="Pengkinian Informasi Supplier"/>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <FiTrash />
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop/>
                                        <Dialog.Positioner>
                                            <Dialog.Content>
                                                <Dialog.Header>
                                                    <Dialog.Title>Hapus Supplier</Dialog.Title>
                                                </Dialog.Header>

                                                 <Dialog.Body>
                                                    <Text>Apakah anda yakin ingin menghapus supplier ini ?</Text>
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
                <Pagination.Root count={suppliers.length} pageSize={5} page={1} alignContent={"end"}>
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