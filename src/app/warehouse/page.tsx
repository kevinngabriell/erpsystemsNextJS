"use client";

import SidebarWithHeader from "@/components/ui/SidebarWithHeader";
import { Button, Card, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Warehouse(){
    return(
        <SidebarWithHeader>
            <Flex gap={2} display={"flex"} mb={"2"} mt={"2"}>
                <Heading mb={6} width={"100%"}>Warehouse Module</Heading>
                <Button>Atur Barang</Button>
            </Flex>          

            <Card.Root>
                <Card.Body>
                    
                </Card.Body>
            </Card.Root>  

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={"10"}>

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