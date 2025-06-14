"use client";
import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Document(){
    return(
        <SidebarWithHeader>
            <Heading mb={6}>Document Module</Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={"10"}>
                <DocumentCard title="Generate PO PDF" description="Klik disini untuk membuat PDF purchase order dan hasil akan berbentuk file PDF" link=""/>
                <DocumentCard title="Generate Surat SO" description="Klik disini untuk membuat PDF sales order dan hasil akan berbentuk file PDF" link=""/>
                <DocumentCard title="Generate Surat SPPB" description="Klik disini untuk membuat PDF sales order dan hasil akan berbentuk file PDF" link=""/>
                <DocumentCard title="Generate Surat Profit" description="Klik disini untuk membuat PDF surat profit dan hasil akan berbentuk file PDF" link=""/>
                <DocumentCard title="Generate Buku Kas Report" description="Klik disini untuk membuat PDF buku kas dan hasil akan berbentuk file PDF" link=""/>
                <DocumentCard title="Generate Warehouse Weekly Report" description="Klik disini untuk membuat Excel laporan mingguan gudang" link=""/>
                <DocumentCard title="Generate Product Warehouse" description="Klik disini untuk membuat Excel laporan stock produk berdasarkan kode barang" link=""/>
                <DocumentCard title="Generate Sales Invoice" description="Klik disini untuk membuat Excel sales invoice berdasarkan nomor SO" link=""/>
                <DocumentCard title="Generate Surat Jalan" description="Klik disini untuk membuat Excel surat jalan berdasarkan nomor DO" link=""/>
                <DocumentCard title="Generate AR" description="Klik disini untuk membuat Excel AR berdasarkan nomor DO" link=""/>
            </SimpleGrid>
        </SidebarWithHeader>
    );
}

function DocumentCard({title, description, link} : {title: string, description: string, link: string}){
    const router = useRouter();

    return(
        <Card.Root onClick={() => router.push(link)}>
            <Card.Body>
                <Card.Title mb={2} textAlign="center" alignItems="center">{title}</Card.Title>
                <Card.Description textAlign="center" alignItems="center">{description}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}