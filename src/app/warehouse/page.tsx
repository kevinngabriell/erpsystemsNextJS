"use client";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { cn } from "@/lib/utils";
import { Button, Card, CloseButton, Dialog, Field, Flex, Heading, Portal, SimpleGrid, Stat } from "@chakra-ui/react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Warehouse(){
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ]

    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Warehouse Module</Heading>
                <Dialog.Root size="lg">
                    <Dialog.Trigger asChild>
                        <Button>Atur Barang</Button>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Atur Barang Gudang</Dialog.Title>
                                </Dialog.Header>

                                <Dialog.Body>
                                    <SimpleGrid columns={{base:1, md:1, lg: 3}} gap="30px">
                                        <Card.Root>
                                            <Card.Title pl={3} pt={2}>Barang Masuk</Card.Title>
                                            <Card.Body pl={3} pt={2} pb={2}>
                                                aaaaaa
                                            </Card.Body>
                                        </Card.Root>
                                        <Card.Root>
                                            <Card.Title pl={3} pt={2}>Barang Keluar</Card.Title>
                                            <Card.Body pl={3} pt={2} pb={2}>
                                                aaaaaa
                                            </Card.Body>
                                        </Card.Root>
                                        <Card.Root>
                                            <Card.Title pl={3} pt={2}>Barang Sample</Card.Title>
                                            <Card.Body pl={3} pt={2} pb={2}>
                                                aaaaaa
                                            </Card.Body>
                                        </Card.Root>
                                    </SimpleGrid>
                                </Dialog.Body>

                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </Flex>          

            <Card.Root>
                <Card.Body>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap="20px">
                        <Card.Root p={3}>
                            <Stat.Root>
                                <Stat.Label>Total Barang</Stat.Label>
                                <Stat.ValueText>1350</Stat.ValueText>
                            </Stat.Root>
                        </Card.Root>
                        <Card.Root p={3}>
                            <Stat.Root>
                                <Stat.Label>Barang Akan Expired</Stat.Label>
                                <Stat.ValueText>1350</Stat.ValueText>
                            </Stat.Root>
                        </Card.Root>
                        <Card.Root p={3}>
                            <Stat.Root>
                                <Stat.Label>Sisa Stock</Stat.Label>
                                <Stat.ValueText>1350</Stat.ValueText>
                            </Stat.Root>
                        </Card.Root>
                        <Card.Root p={3}>
                            <Stat.Root>
                                <Stat.Label>Barang Masuk</Stat.Label>
                                <Stat.ValueText>1350</Stat.ValueText>
                            </Stat.Root>
                        </Card.Root>
                        <Card.Root p={3}>
                            <Stat.Root>
                                <Stat.Label>Barang Keluar</Stat.Label>
                                <Stat.ValueText>1350</Stat.ValueText>
                            </Stat.Root>
                        </Card.Root>
                    </SimpleGrid>
                </Card.Body>
            </Card.Root>  

            <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap="20px" mt="10">
                {/* Card 1 - tanpa dialog */}
                <Card.Root>
                    <Card.Title pl={6} pt={5}>Laporan Stock Mingguan</Card.Title>
                    <Card.Body fontSize="13px">
                        Klik disini untuk membuat laporan stock mingguan dan hasil akan berbentuk file Excel
                    </Card.Body>
                </Card.Root>

                {/* Card 2 - dengan dialog */}
                <Dialog.Root modal={false}>
                    <Dialog.Trigger asChild>
                        <Card.Root _hover={{ cursor: "pointer"}}>
                            <Card.Title pl={6} pt={5}>Buat Catatan Stock</Card.Title>
                            <Card.Body fontSize="13px">
                                Klik disini untuk membuat catatan stock dan hasil akan berbentuk file Excel
                            </Card.Body>
                        </Card.Root>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Pencarian Laporan Stock Produk</Dialog.Title>
                                </Dialog.Header>

                                <Dialog.Body>
                                    <Field.Root>
                                        <Field.Label>Kode Produk</Field.Label>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button 
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open}
                                                    className="w-[200px] justify-between"
                                                    onClick={() => setOpen(!open)}
                                                >
                                                {value
                                                ? frameworks.find((framework) => framework.value === value)?.label
                                                : "Select framework..."}
                                                    <ChevronsUpDown className="opacity-50"/>
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0 border border-gray-200 shadow-lg bg-white z-[9999]">
                                                <Command>
                                                <CommandInput placeholder="Search framework..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>No framework found.</CommandEmpty>
                                                    <CommandGroup>
                                                    {frameworks.map((framework) => (
                                                        <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(true)
                                                        }}
                                                        >
                                                        {framework.label}
                                                        <Check
                                                            className={cn(
                                                            "ml-auto",
                                                            value === framework.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        </CommandItem>
                                                    ))}
                                                    </CommandGroup>
                                                </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </Field.Root>
                                </Dialog.Body>

                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline">Tutup</Button>
                                    </Dialog.ActionTrigger>
                                    <Button>Export ke Excel</Button>
                                </Dialog.Footer>

                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>              
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>

                {/* Card 3 - tanpa dialog */}
                <Card.Root>
                    <Card.Title pl={6} pt={5}>Cari Catatan Stock</Card.Title>
                    <Card.Body fontSize="13px">
                        Klik disini untuk membuat catatan stock dan hasil akan berbentuk file Excel
                    </Card.Body>
                </Card.Root>
            </SimpleGrid>
        </SidebarWithHeader>
    );
}

// function WarehouseCard({title, description, link} : {title: string, description: string, link: string}){
//     const router = useRouter();

//     return(
//         <Card.Root onClick={() => router.push(link)}>
//             <Card.Body>
//                 <Card.Title mb={2} textAlign="center" alignItems="center">{title}</Card.Title>
//                 <Card.Description textAlign="center" alignItems="center">{description}</Card.Description>
//             </Card.Body>
//         </Card.Root>
//     );
// }