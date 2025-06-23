import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Flex, Heading, Table } from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function Penerimaan(){

    const penerimaans = [
        { id: 1, tanggal: "Laptop", deskripsi: "Electronics", jumlah: 999.99 },
        { id: 2, tanggal: "Coffee Maker", deskripsi: "Home Appliances", jumlah: 49.99 },
        { id: 3, tanggal: "Desk Chair", deskripsi: "Furniture", jumlah: 150.0 },
        { id: 4, tanggal: "Smartphone", deskripsi: "Electronics", jumlah: 799.99 },
        { id: 5, tanggal: "Headphones", deskripsi: "Accessories", jumlah: 199.99 },
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Penerimaan</Heading>
                <Button>Create New Penerimaan</Button>
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
                    {penerimaans.map((penerimaan) => (
                    <Table.Row key={penerimaan.id}>
                        <Table.Cell>{penerimaan.tanggal}</Table.Cell>
                        <Table.Cell>{penerimaan.deskripsi}</Table.Cell>
                        <Table.Cell>{penerimaan.jumlah}</Table.Cell>
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