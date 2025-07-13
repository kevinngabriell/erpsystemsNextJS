"use client";
import { Button, ButtonGroup, CloseButton, Dialog, Flex, Heading, IconButton, Pagination, Portal, Table, Text } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import CurrencyDialog from "./currencydialog";
import { useEffect, useState } from "react";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import { Currency, getAllCurrency } from "@/lib/settings/currency";
import Loading from "@/components/loading";

export default function CurrencySettings(){
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);
    const [listCurrency, setListCurrency] = useState<Currency[]>([]);
    
    useEffect(() => {
        const init = async () => {
            setLoading(true)

            const valid = await checkAuthOrRedirect(); 
            if (!valid) return; 
    
            const info = getAuthInfo(); // ✅ ambil token decoded
            setAuth(info);

            try {
                const data = await getAllCurrency();
                setListCurrency(data);
            } catch (err) {
                setListCurrency([]);
            } finally {
                setLoading(false);
            }
        };
    
        init();
    }, []);

    if(loading) return <Loading/>;

    return(
        <SidebarWithHeader username={auth?.username ?? "-"}>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Currency ERP Settings</Heading>
                <CurrencyDialog triggerIcon={<Button>Create New Currency</Button>} title="Pendataan Mata Uang"/>
            </Flex>

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Currency</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {listCurrency.map((currency) => (
                    <Table.Row key={currency.currency_id}>
                        <Table.Cell textAlign={"center"}>{currency.currency_name}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <CurrencyDialog triggerIcon={<FiEye />} title="Informasi Mata Uang"/>
                                <CurrencyDialog triggerIcon={<FiEdit />} title="Pendataan Mata Uang"/>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <FiTrash />
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop/>
                                        <Dialog.Positioner>
                                            <Dialog.Content>
                                                <Dialog.Header>
                                                    <Dialog.Title>Hapus Mata Uang</Dialog.Title>
                                                </Dialog.Header>

                                                 <Dialog.Body>
                                                    <Text>Apakah anda yakin ingin menghapus mata uang ini ?</Text>
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
                <Pagination.Root count={listCurrency.length} pageSize={5} page={1} alignContent={"end"}>
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