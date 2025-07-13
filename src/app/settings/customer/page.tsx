"use client";
import { Button, ButtonGroup, CloseButton, Dialog, Field, Flex, Heading, IconButton, Input, Pagination, Portal, SimpleGrid, Table, Text, Textarea } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import CustomerDialog from "./customerdialog";
import { useEffect, useState } from "react";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import { Customer, getAllCustomer } from "@/lib/settings/customer";
import Loading from "@/components/loading";

export default function CustomerSettings(){
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);
    const [listCustomerData, setListCustomerData] = useState<Customer[]>([]);

    useEffect(() => {
        const init = async () => {
            setLoading(true)
    
            const valid = await checkAuthOrRedirect(); 
            if (!valid) return; 
        
            const info = getAuthInfo(); // ✅ ambil token decoded
            setAuth(info);
    
            try {
                const data = await getAllCustomer();
                setListCustomerData(data);
            } catch (err) {
                setListCustomerData([]);
            } finally {
                setLoading(false);
            }
        };
        
            init();
    }, []);

    const customers = [
        { id: 1, name: "PT. Customer A", address : "Jl. Customer A", phone: "0811"},
        { id: 2, name: "PT. Customer B", address : "Jl. Customer B", phone: "0811"},
        { id: 3, name: "PT. Customer C", address : "Jl. Customer C", phone: "0811"},
        { id: 4, name: "PT. Customer D", address : "Jl. Customer D", phone: "0811"},
        { id: 5, name: "PT. Customer E", address : "Jl. Customer E", phone: "0811"}
    ]

    if(loading) return <Loading/>;

    return(
        <SidebarWithHeader username={auth?.username ?? "-"}>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Customer ERP Settings</Heading>
                <CustomerDialog triggerIcon={<Button>Create New Customer</Button>} title="Pendataan Konsumen Baru" customer_id={""}/>
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
                    {listCustomerData.map((customer) => (
                    <Table.Row key={customer.customer_id}>
                        <Table.Cell textAlign={"center"}>{customer.customer_name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{customer.customer_address}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{customer.customer_phone}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <CustomerDialog triggerIcon={<FiEye />} title="Informasi Konsumen" customer_id={customer.customer_id}/>
                                <CustomerDialog triggerIcon={<FiEdit />} title="Pengkinian Informasi Konsumen" customer_id={customer.customer_id}/>

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