"use client";
import { Button, ButtonGroup, CloseButton, Dialog, Field, Flex, Heading, IconButton, Input, Pagination, Portal, SimpleGrid, Spinner, Table, Tabs, Text, Toast } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import AccountCodeDialog from "./accountcodedialog";
import BankAccountDialog from "./bankaccountdialog";
import FinanceCategoryDialog from "./financecategorydialog";
import { useEffect, useState } from "react";
import { AccountCode, getAllAccountCode } from "@/lib/settings/accountcode";
import { checkAuthOrRedirect, DecodedAuthToken, getAuthInfo } from "@/lib/auth/auth";
import Loading from "@/components/loading";
import UpgradeRequiredDialog from "@/components/dialog/UpgradeRequiredDialog";

export default function FinanceSettings(){
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [accountCodeData, setAccountCodeData] = useState<AccountCode[]>([]);
    const [auth, setAuth] = useState<DecodedAuthToken | null>(null);
    const [isAccountDialogOpen, setIsAccountDialogOpen] = useState(false);
    const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true)

            const valid = await checkAuthOrRedirect(); // tunggu auth check selesai
            if (!valid) return; // langsung return kalau token invalid (udah redirect juga)

            const info = getAuthInfo(); // ✅ ambil token decoded
            setAuth(info);

            try {
                const data = await getAllAccountCode();
                setAccountCodeData(data);
            } catch (err) {
                // setError(err);
                setAccountCodeData([]);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, []);

    const bankaccount = [
        { id: 1, number: "001", bank: "Bank BCA", branch: "Grand Indonesia" },
        { id: 2, number: "002", bank: "Bank BCA (USD)", branch: "Gading Serpong" },
        { id: 3, number: "003", bank: "Bank Mandiri", branch: "Gading Serpong" },
        { id: 4, number: "004", bank: "Bank Mandiri (USD)", branch: "Gading Serpong" },
        { id: 5, number: "005", bank: "HSBC", branch: "Gading Serpong" },
    ]

    const category = [
        { id: 1, name: "Penerimaan" },
        { id: 2, name: "Pembayaran" },
        { id: 3, name: "Pembayaran Pembelian" },
        { id: 4, name: "Penerimaan Penjualan" }
    ]

    const handleOpenDialog = () => {
        if (auth?.package === "sysadmin") {
            setIsAccountDialogOpen(true);
        } else {
            setShowUpgradeDialog(true);
        }
    };

    if (loading) return <Loading/>;

    return(
        <SidebarWithHeader username={auth?.username ?? "-"}>
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
                        <BankAccountDialog triggerIcon={<Button>Create New Bank Account</Button>} title="Pendataan Akun Bank"/>
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
                                        <BankAccountDialog triggerIcon={ <FiEye />} title="Informasi Akun Bank"/>

                                        <BankAccountDialog triggerIcon={ <FiEdit />} title="Pengkinian Akun Bank"/>

                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <FiTrash />
                                            </Dialog.Trigger>
                                            <Portal>
                                                <Dialog.Backdrop/>
                                                <Dialog.Positioner>
                                                    <Dialog.Content>
                                                        <Dialog.Header>
                                                            <Dialog.Title>Hapus Informasi bank</Dialog.Title>
                                                        </Dialog.Header>

                                                        <Dialog.Body>
                                                            <Text>Apakah anda yakin ingin menghapus informasi bank ini ?</Text>
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
                        <Button onClick={handleOpenDialog}>Create New Account Code</Button>
                    </Flex>

                    <AccountCodeDialog
                        isOpen={isAccountDialogOpen}
                        setIsOpen={setIsAccountDialogOpen}
                        title="Kode Akun"
                    />

                    <UpgradeRequiredDialog
                        isOpen={showUpgradeDialog}
                        onClose={() => setShowUpgradeDialog(false)}
                        currentPackage={auth?.package ?? ""}
                        allowedPackages={["Advanced", "Enterprise"]}
                    />

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
                            {accountCodeData.map((account) => (
                            <Table.Row key={account.id}>
                                <Table.Cell textAlign={"center"}>{account.code}</Table.Cell>
                                <Table.Cell textAlign={"center"}>{account.account_name}</Table.Cell>
                                <Table.Cell textAlign={"center"}>{account.account_name_alias}</Table.Cell>
                                <Table.Cell textAlign="center">
                                    <Flex justify="center" gap={4} fontSize={"2xl"}>

                                        {/* <AccountCodeDialog 
                                                triggerIcon={<FiEye />}
                                                title="Lihat Kode Akun" isOpen={false} setIsOpen={function (open: boolean): void {
                                                    throw new Error("Function not implemented.");
                                                } }                                        />
                                        
                                        <AccountCodeDialog 
                                                triggerIcon={<FiEdit />}
                                                title="Edit Kode Akun"
                                                placeholders={{
                                                    kodeAkun: "Edit kode akun...",
                                                    namaAkun: "Edit nama kode akun...",
                                                    aliasAkun: "Edit alias akun...",
                                                }} isOpen={false} setIsOpen={function (open: boolean): void {
                                                    throw new Error("Function not implemented.");
                                                } }                                        />                             */}

                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <FiTrash />
                                            </Dialog.Trigger>
                                            <Portal>
                                                <Dialog.Backdrop/>
                                                <Dialog.Positioner>
                                                    <Dialog.Content>
                                                        <Dialog.Header>
                                                            <Dialog.Title>Hapus Kode Akun</Dialog.Title>
                                                        </Dialog.Header>

                                                        <Dialog.Body>
                                                            <Text>Apakah anda yakin ingin menghapus kode akun ini ?</Text>
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
                        <Pagination.Root count={accountCodeData.length} pageSize={5} page={1} alignContent={"end"}>
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
                        <FinanceCategoryDialog triggerIcon={<Button>Create New Category List</Button>} title="Finance Category"/>
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
                                        <FinanceCategoryDialog triggerIcon={<FiEye />} title="Lihat Kategori Finance"/>
                                        <FinanceCategoryDialog triggerIcon={<FiEdit />} title="Edit Kategori Finance"/>

                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <FiTrash />
                                            </Dialog.Trigger>
                                            <Portal>
                                                <Dialog.Backdrop/>
                                                <Dialog.Positioner>
                                                    <Dialog.Content>
                                                        <Dialog.Header>
                                                            <Dialog.Title>Hapus kategori finansial</Dialog.Title>
                                                        </Dialog.Header>

                                                        <Dialog.Body>
                                                            <Text>Apakah anda yakin ingin menghapus kategori finansial ini ?</Text>
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

