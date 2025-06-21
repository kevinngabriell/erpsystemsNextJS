"use client";
import { Button, ButtonGroup, CloseButton, Dialog, Flex, Heading, IconButton, Pagination, Portal, Table, Text } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import OriginDialog from "./originDialog";

export default function OriginSettings(){
    const origins = [
        { id: 1, name: 'Indonesia', isFreeTrade: 'true', region: 'East Asia & Pasific'},
        { id: 2, name: 'Indonesia', isFreeTrade: 'true', region: 'East Asia & Pasific'},
        { id: 3, name: 'Indonesia', isFreeTrade: 'true', region: 'East Asia & Pasific'},
        { id: 4, name: 'Indonesia', isFreeTrade: 'true', region: 'East Asia & Pasific'},
        { id: 5, name: 'Indonesia', isFreeTrade: 'true', region: 'East Asia & Pasific'}
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Origin ERP Settings</Heading>
                <OriginDialog triggerIcon={<Button>Create New Origin</Button>} title="Pendataan Asal Negara"/>
            </Flex>      

            <Table.Root showColumnBorder variant="outline" background={"white"} >
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Country</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Free Trade Area</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Region</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {origins.map((origin) => (
                    <Table.Row key={origin.id}>
                        <Table.Cell textAlign={"center"}>{origin.name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{origin.isFreeTrade}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{origin.region}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Flex justify="center" gap={4} fontSize={"2xl"}>
                                <OriginDialog triggerIcon={<FiEye />} title="Informasi Asal Negara"/>
                                <OriginDialog triggerIcon={<FiEdit />} title="Pengkinian Informasi Asal Negara"/>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <FiTrash />
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop/>
                                        <Dialog.Positioner>
                                            <Dialog.Content>
                                                <Dialog.Header>
                                                    <Dialog.Title>Hapus Negara</Dialog.Title>
                                                </Dialog.Header>

                                                 <Dialog.Body>
                                                    <Text>Apakah anda yakin ingin menghapus negara ini ?</Text>
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
                <Pagination.Root count={origins.length} pageSize={5} page={1} alignContent={"end"}>
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