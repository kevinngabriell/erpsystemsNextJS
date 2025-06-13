"use client";
import { Heading, Table, Tabs } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";

export default function FinanceSettings(){
    const bankaccount = [
        { id: 1, name: "Admin1", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 2, name: "Admin2", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 3, name: "FinanceVenken", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 4, name: "ITSupport", company: "PT. Venken International Kimia", permission: "Sales only" },
        { id: 5, name: "Purchasing", company: "PT. Venken International Kimia", permission: "Sales only" },
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
                    <Table.Root showColumnBorder variant="outline">
                        <Table.Header>
                            <Table.Row bg="bg.subtle">
                                <Table.ColumnHeader textAlign={"center"}>Bank Number</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Bank Name</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Bank Branch</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        </Table.Body>                        
                    </Table.Root>
                </Tabs.Content>
                <Tabs.Content value="account-code">
                    <Table.Root showColumnBorder variant="outline">
                        <Table.Header>
                            <Table.Row bg="bg.subtle">
                                <Table.ColumnHeader textAlign={"center"}>Code</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Account Name</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Account Name Alias</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>                        
                    </Table.Root>
                </Tabs.Content>
                <Tabs.Content value="finance-category">
                    <Table.Root showColumnBorder variant="outline">
                        <Table.Header>
                            <Table.Row bg="bg.subtle">
                                <Table.ColumnHeader textAlign={"center"}>Category Name</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>                        
                    </Table.Root>
                </Tabs.Content>
            </Tabs.Root>
        </SidebarWithHeader>
        // settings

    );
}