"use client";
import { Button, ButtonGroup, CloseButton, Combobox, Dialog, Field, Flex, Heading, IconButton, Input, Pagination, Portal, SimpleGrid, Table, Text, useFilter, useListCollection } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { useState } from "react";

export default function UserSettings(){
    
    const users = [
        { id: 1, name: "Admin1", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 2, name: "Admin2", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 3, name: "FinanceVenken", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 4, name: "ITSupport", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 5, name: "Purchasing", company: "PT. Venken International Kimia", permission: "Sales only" },
    ]

    const { contains } = useFilter({ sensitivity: "base" })

    const { collection, filter } = useListCollection({
        initialItems: access,
        filter: contains
    });

    const [company, setCompany] = useState("PT. Segen Solutions");

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Users ERP Settings</Heading>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Button>Create New Users</Button>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop/>
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Create New Users</Dialog.Title>
                                </Dialog.Header>

                                <Dialog.Body>
                                    <Text>Next verification code request in 60 seconds</Text>
                                </Dialog.Body>

                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </Dialog.ActionTrigger>
                                    <Button>Get Code</Button>
                                </Dialog.Footer>

                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
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
                                {/* View User Detail */}
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <FiEye />
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop/>
                                        <Dialog.Positioner zIndex={3000} position="absolute">
                                            <Dialog.Content>
                                                <Dialog.Header>
                                                    <Dialog.Title>Detail Users</Dialog.Title>
                                                </Dialog.Header>

                                                <Dialog.Body>
                                                    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="20px" background={"transparent"}>
                                                        
                                                        <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                                            <Field.Label>Nama</Field.Label>
                                                            <Input placeholder="Masukkan nama anda disini" readOnly/>
                                                        </Field.Root>

                                                        <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                                            <Field.Label>Username</Field.Label>
                                                            <Input placeholder="Masukkan username anda disini" readOnly/>
                                                        </Field.Root>

                                                        <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                                            <Field.Label>Perusahaan</Field.Label>
                                                            <Input placeholder="Masukkan nama perusahan anda" value={company} onChange={(e) => setCompany(e.target.value)} readOnly/>
                                                        </Field.Root>

                                                        <Field.Root w={{base: "100%", md: "100%", lg: "100%"}}>
                                                            <Combobox.Root
                                                            collection={collection}
                                                            onInputValueChange={(e) => filter(e.inputValue)}
                                                            >
                                                                <Combobox.Label>Pilih akses</Combobox.Label>
                                                                <Combobox.Control>
                                                                    <Combobox.Input placeholder="Type to search" />
                                                                    <Combobox.IndicatorGroup>
                                                                    <Combobox.ClearTrigger />
                                                                    <Combobox.Trigger />
                                                                    </Combobox.IndicatorGroup>
                                                                </Combobox.Control>
                                                                <Portal>
                                                                    <Combobox.Positioner>
                                                                    <Combobox.Content>
                                                                        <Combobox.Empty>No items found</Combobox.Empty>
                                                                        {collection.items.map((item) => (
                                                                        <Combobox.Item item={item} key={item.id}>
                                                                            {item.access}
                                                                            <Combobox.ItemIndicator />
                                                                        </Combobox.Item>
                                                                        ))}
                                                                    </Combobox.Content>
                                                                    </Combobox.Positioner>
                                                                </Portal>
                                                            </Combobox.Root>
                                                        </Field.Root>

                                                    </SimpleGrid>
                                                </Dialog.Body>

                                                <Dialog.Footer>
                                                    <Dialog.ActionTrigger asChild>
                                                        <Button variant="outline">Cancel</Button>
                                                    </Dialog.ActionTrigger>
                                                    <Button>Reset Account</Button>
                                                </Dialog.Footer>

                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Content>
                                        </Dialog.Positioner>
                                    </Portal>
                                </Dialog.Root>
                                <FiEdit />

                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <FiTrash />
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop/>
                                        <Dialog.Positioner>
                                            <Dialog.Content>
                                                <Dialog.Header>
                                                    <Dialog.Title>Hapus Akun</Dialog.Title>
                                                </Dialog.Header>

                                                <Dialog.Body>
                                                    <Text>Apakah anda yakin ingin menghapus akun ini ?</Text>
                                                </Dialog.Body>

                                                <Dialog.Footer>
                                                    <Dialog.ActionTrigger asChild>
                                                        <Button variant="outline">Batal</Button>
                                                    </Dialog.ActionTrigger>
                                                    <Button>Hapus Akun</Button>
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

const access = [
    { id: 1, package: "Premium", access: "Full Access" },
    { id: 2, package: "Premium", access: "Sales Module" },
    { id: 3, package: "Premium", access: "Purchase Module" },
    { id: 4, package: "Premium", access: "Warehouse Module" },
    { id: 5, package: "Premium", access: "Finance Module" },
    { id: 6, package: "Demo", access: "Demo Access" }
]