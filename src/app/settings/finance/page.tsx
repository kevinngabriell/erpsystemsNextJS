"use client";
import { Button, ButtonGroup, Flex, Heading, IconButton, Pagination, Table, Tabs } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function FinanceSettings(){
    const bankaccount = [
        { id: 1, number: "001", bank: "Bank BCA", branch: "Grand Indonesia" },
        { id: 2, number: "002", bank: "Bank BCA (USD)", branch: "Gading Serpong" },
        { id: 3, number: "003", bank: "Bank Mandiri", branch: "Gading Serpong" },
        { id: 4, number: "004", bank: "Bank Mandiri (USD)", branch: "Gading Serpong" },
        { id: 5, number: "005", bank: "HSBC", branch: "Gading Serpong" },
    ]

    const accountname = [
        { id: 1, code: "1100-00-010", name: "Kas Ditangan", alias: "Cash on Hand"},
        { id: 2, code: "1100-00-020", name: "Kas Ditangan (USD)", alias: "Cash on Hand"},
        { id: 3, code: "1100-00-030", name: "Bank Mandiri", alias: "Cash on Hand"},
        { id: 4, code: "1100-00-040", name: "Bank Mandiri (USD)", alias: "Cash on Hand"},
        { id: 5, code: "1100-00-050", name: "Bank BCA", alias: "Cash on Hand"}
    ]

    const category = [
        { id: 1, name: "Penerimaan" },
        { id: 2, name: "Pembayaran" },
        { id: 3, name: "Pembayaran Pembelian" },
        { id: 4, name: "Penerimaan Penjualan" }
    ]

    return(
        <SidebarWithHeader>
            <Heading mb={6}>Finance ERP Settings</Heading>

            <Tabs.Root defaultValue="bank-account">
                <Tabs.List>
                    <Tabs.Trigger value="bank-account">
                        Bank Account
                    </Tabs.Trigger>

                    <Tabs.Trigger value="account-code">
                        Account Code
                    </Tabs.Trigger>

                    <Tabs.Trigger value="finance-category">
                        Finance Category
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="bank-account">

                    <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                        <Heading mb={6} width={"100%"}>Bank Account List</Heading>
                        <Button>Create New Bank Account</Button>
                    </Flex>           

                    <Table.Root showColumnBorder variant="outline" background={"white"}>
                        <Table.Header>
                            <Table.Row bg="bg.subtle">
                                <Table.ColumnHeader textAlign={"center"}>Bank Number</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Bank Name</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Bank Branch</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {bankaccount.map((bank) => (
                            <Table.Row key={bank.id}>
                                <Table.Cell textAlign={"center"}>{bank.number}</Table.Cell>
                                <Table.Cell textAlign={"center"}>{bank.bank}</Table.Cell>
                                <Table.Cell textAlign={"center"}>{bank.branch}</Table.Cell>
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
                        <Pagination.Root count={bankaccount.length} pageSize={5} page={1} alignContent={"end"}>
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

                </Tabs.Content>
                <Tabs.Content value="account-code">
                    
                    <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                        <Heading mb={6} width={"100%"}>Account Code List</Heading>
                        <Button>Create New Account Code</Button>
                    </Flex>    

                    <Table.Root showColumnBorder variant="outline" background={"white"}>
                        <Table.Header>
                            <Table.Row bg="bg.subtle">
                                <Table.ColumnHeader textAlign={"center"}>Code</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Account Name</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Account Name Alias</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>   
                        <Table.Body>
                            {accountname.map((account) => (
                            <Table.Row key={account.id}>
                                <Table.Cell textAlign={"center"}>{account.code}</Table.Cell>
                                <Table.Cell textAlign={"center"}>{account.name}</Table.Cell>
                                <Table.Cell textAlign={"center"}>{account.alias}</Table.Cell>
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
                        <Pagination.Root count={accountname.length} pageSize={5} page={1} alignContent={"end"}>
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

                </Tabs.Content>
                <Tabs.Content value="finance-category">

                    <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                        <Heading mb={6} width={"100%"}>Finance Category List</Heading>
                        <Button>Create New Category List</Button>
                    </Flex>    

                    <Table.Root showColumnBorder variant="outline" background={"white"}>
                        <Table.Header>
                            <Table.Row bg="bg.subtle">  
                                <Table.ColumnHeader textAlign={"center"}>Category Name</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>     
                        <Table.Body>
                            {category.map((category) => (
                            <Table.Row key={category.id}>
                                <Table.Cell textAlign={"center"}>{category.name}</Table.Cell>
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
                        <Pagination.Root count={category.length} pageSize={5} page={1} alignContent={"end"}>
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

                </Tabs.Content>
            </Tabs.Root>
        </SidebarWithHeader>
        // settings

    );
}