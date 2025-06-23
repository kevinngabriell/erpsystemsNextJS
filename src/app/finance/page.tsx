"use client";
import { Card, Flex, Heading, SimpleGrid, Stat} from "@chakra-ui/react";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { useRouter } from "next/navigation";

export default function Finance(){

    return(
        <SidebarWithHeader>
            <Heading mb={6}>Finance Module</Heading>

            <Card.Root>
                <Card.Body>
                    <Flex gap={10}>
                        <Card.Root width={"100%"}>
                            <Card.Body>
                                <Stat.Root>
                                    <Stat.Label>
                                        Supplier Outstanding
                                    </Stat.Label>
                                    <Stat.ValueText>192.1k</Stat.ValueText>
                                </Stat.Root>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root width={"100%"}>
                            <Card.Body>
                                <Stat.Root>
                                    <Stat.Label>
                                        Customer Outstanding
                                    </Stat.Label>
                                    <Stat.ValueText>192.1k</Stat.ValueText>
                                </Stat.Root>
                            </Card.Body>
                        </Card.Root>
                    </Flex>
                </Card.Body>
            </Card.Root>           

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={"10"}>
                <FinanceCard title="Penerimaan" description="Use this menu to do the penerimaan in finance department" link="/finance/penerimaan"/>
                <FinanceCard title="Pembayaran" description="Use this menu to do the pembayaran in finance department" link="/finance/pembayaran"/>
                <FinanceCard title="Penerimaan Pembelian" description="Use this menu to do the penerimaan pembelian in finance department" link="/finance/penerimaanpembelian"/>
                <FinanceCard title="Penerimaan penjualan" description="Use this menu to do the penerimaan penjualan in finance department" link="/finance/penerimaanpenjualan"/>
                <FinanceCard title="Buku Kas" description="Use this menu to find buku kas in finance department" link="/finance/bukukas"/>
            </SimpleGrid>
        </SidebarWithHeader>
        // settings

    );
}

function FinanceCard({title, description, link} : {title: string, description: string, link: string}){
    const router = useRouter();

    return(
        <Card.Root onClick={() => router.push(link)}>
            <Card.Body>
                <Card.Title mb={2}>{title}</Card.Title>
                <Card.Description mb={0}>{description}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}