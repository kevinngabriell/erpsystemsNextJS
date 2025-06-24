"use client";

import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Flex, Heading, Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function Pembayaran(){
    const router = useRouter();

    const pemabayarans = [
        { id: 1, tanggal: "Laptop", deskripsi: "Electronics", jumlah: 999.99 },
        { id: 2, tanggal: "Coffee Maker", deskripsi: "Home Appliances", jumlah: 49.99 },
        { id: 3, tanggal: "Desk Chair", deskripsi: "Furniture", jumlah: 150.0 },
        { id: 4, tanggal: "Smartphone", deskripsi: "Electronics", jumlah: 799.99 },
        { id: 5, tanggal: "Headphones", deskripsi: "Accessories", jumlah: 199.99 },
    ]

    function NewPembayaran(){
        router.push("/finance/pembayaran/detail");
    }    
    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Pembayaran</Heading>
                <Button onClick={NewPembayaran}>Create New Pembayaran</Button>
            </Flex>     

<Table.Root>
                <Table.Header>
                    <Table.Row>
                    <Table.ColumnHeader>Tanggal</Table.ColumnHeader>
                    <Table.ColumnHeader>Deskripsi</Table.ColumnHeader>
                    <Table.ColumnHeader>Jumlah</Table.ColumnHeader>
                    <Table.ColumnHeader>Aksi</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                
                <Table.Body>
                    {pemabayarans.map((pembayaran) => (
                    <Table.Row key={pembayaran.id}>
                        <Table.Cell>{pembayaran.tanggal}</Table.Cell>
                        <Table.Cell>{pembayaran.deskripsi}</Table.Cell>
                        <Table.Cell>{pembayaran.jumlah}</Table.Cell>
                        <Table.Cell>
                            <Flex gap={2}>
                                <button><FiEye /></button>
                                <button><FiEdit /></button>
                                <button><FiTrash /></button>
                            </Flex>
                        </Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>            
        </SidebarWithHeader>
    );
}