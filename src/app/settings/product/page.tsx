"use client";
import { Button, ButtonGroup, Flex, Heading, IconButton, Pagination, Table } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function ProductSettings(){

    const products = [
        { id: 1, code: "C-020", name: "SN 020/S 66", description: "Sales only" },
        { id: 2, code: "C-021", name: "SN 021/S 66", description: "Sales only" },
        { id: 3, code: "C-022", name: "SN 022/S 66", description: "Sales only" },
        { id: 4, code: "C-023", name: "SN 023/S 66", description: "Sales only" },
        { id: 5, code: "C-024", name: "SN 024/S 66", description: "Sales only" },
    ]

    return(
        <SidebarWithHeader>
            
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Product ERP Settings</Heading>
                <Button>Create New Product</Button>
            </Flex>           

            <Table.Root>
                <Table.Header>
                    <Table.Row bg="bg.panel">
                        <Table.ColumnHeader textAlign={"center"}>Code</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Product Name</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Product Description</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                    </Table.Row>                    
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (
                    <Table.Row key={product.id}>
                        <Table.Cell textAlign={"center"}>{product.code}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{product.name}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{product.description}</Table.Cell>
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
                <Pagination.Root count={products.length} pageSize={5} page={1} alignContent={"end"}>
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