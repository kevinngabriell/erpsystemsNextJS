"use client";
import { Button, ButtonGroup, CloseButton, Combobox, Dialog, Field, Flex, Heading, IconButton, Input, Pagination, Portal, SimpleGrid, Table, Text, useFilter, useListCollection } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { useEffect, useState } from "react";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import { getAllUsers, Users } from "@/lib/settings/users";
import Loading from "@/components/loading";
import UserDialog from "./userdetaildialog";

export default function UserSettings(){
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);
    const [listUsersData, setListUsersData] = useState<Users[]>([]);

    useEffect(() => {
        const init = async () => {
            setLoading(true)

            const valid = await checkAuthOrRedirect(); 
            if (!valid) return; 
    
            const info = getAuthInfo(); // ✅ ambil token decoded
            setAuth(info);

            try {
                const data = await getAllUsers();
                setListUsersData(data);
            } catch (err) {
                setListUsersData([]);
            } finally {
                setLoading(false);
            }
        };
    
        init();
    }, []);

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

    if(loading) return <Loading/>;

    return(
        <SidebarWithHeader username={auth?.username ?? "-"}>
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
                    {listUsersData.map((user) => (
                    <Table.Row key={user.username}>
                        <Table.Cell textAlign={"center"}>{user.username}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{user.company_name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{user.permission_access}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <UserDialog triggerIcon={<FiEye />} title={"Lihat Data Users"} username={user.username} action={"view"} />
                                <UserDialog triggerIcon={<FiEdit />} title={"Update Data Users"} username={user.username} action={"update"} />

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